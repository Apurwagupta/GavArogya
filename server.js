const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// ============================================================
// BHASHINI SERVICE
// ============================================================
const { translateText } = require('./services/bhashiniService');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const SESSION_SECRET =
    process.env.SESSION_SECRET || 'gav-arogya-secret-key';

const MONGO_URI =
    process.env.MONGO_URI ||
    'mongodb://127.0.0.1:27017/gav-arogya';


// ============================================================
// MIDDLEWARE
// ============================================================

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json({
    limit: '1mb'
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(
    express.static(
        path.join(__dirname, 'client', 'dist')
    )
);

app.use(
    express.static(__dirname)
);


// ============================================================
// SESSION
// ============================================================

app.use(
    session({
        name: 'gavArogya.sid',

        secret: SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 1000 * 60 * 60 * 8
        },

        store: MongoStore.create({
            mongoUrl: MONGO_URI,
            dbName: 'gav-arogya',
            collectionName: 'sessions'
        })
    })
);


// ============================================================
// USER SCHEMA
// ============================================================

const userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required: true,
            enum: [
                'patient',
                'asha',
                'facility',
                'ministry'
            ]
        },

        name: {
            type: String,
            required: true
        },

        identifier: {
            type: String,
            required: true,
            unique: true
        },

        passwordHash: {
            type: String,
            required: true
        },

        phone: {
            type: String
        },

        village: {
            type: String
        },

        age: {
            type: Number
        },

        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'users'
    }
);


// ============================================================
// PATIENT SCHEMA
// ============================================================

const patientSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        patientId: {
            type: String,
            unique: true
        },

        abhaId: {
            type: String
        },

        symptoms: {
            type: String
        },

        age: {
            type: Number
        },

        village: {
            type: String
        },

        currentStageIndex: {
            type: Number,
            default: 1
        },

        statusLabel: {
            type: String,
            default: 'Profile Created'
        },

        vitals: {
            bp: String,
            spo2: String,
            pulse: String,
            temp: String,
            respRate: String
        },

        triageRisk: {
            type: String,
            default: 'NOT_ASSESSED'
        },

        status: {
            type: String,
            default: 'active'
        },

        assignedAsha: {
            type: String
        },

        assignedFacility: {
            type: String
        },

        estimatedArrival: {
            type: String
        },

        followUpDueDate: {
            type: String
        },

        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'patients'
    }
);


// ============================================================
// MODELS
// ============================================================

const User = mongoose.model('User', userSchema);

const Patient = mongoose.model('Patient', patientSchema);


// ============================================================
// DEMO USERS
// ============================================================

const DEMO_USERS = [
    {
        role: 'patient',
        name: 'Ramesh Patil',
        identifier: '9822012345',
        password: 'patient123',
        phone: '+91 98220 12345',
        village: 'Kharpudi, Dist. Satara',
        age: 52
    },

    {
        role: 'asha',
        name: 'Sunita Tai',
        identifier: 'ASHA-SAT-104',
        password: 'asha123',
        phone: '+91 98765 43210',
        village: 'Kharpudi & Wadhe, Satara'
    },

    {
        role: 'facility',
        name: 'District Hospital, Satara',
        identifier: 'DH-SATARA-01',
        password: 'facility123',
        village: 'Satara'
    },

    {
        role: 'ministry',
        name: 'Government Analytics User',
        identifier: 'director.health@maharashtra.gov.in',
        password: 'ministry123',
        village: 'Mumbai'
    }
];


// ============================================================
// SEED USERS
// ============================================================

function seedUsers() {

    return User.countDocuments().then(async (count) => {

        if (count > 0) {

            await Patient.updateOne(
                {
                    patientId: 'GA-240184'
                },

                {
                    $set: {
                        age: 52,

                        village:
                            'Kharpudi, Dist. Satara',

                        currentStageIndex: 5,

                        statusLabel:
                            'Referral in Progress',

                        vitals: {
                            bp: '148/96 mmHg',
                            spo2: '89%',
                            pulse: '108 bpm',
                            temp: '99.4°F',
                            respRate: '28 /min'
                        },

                        triageRisk: 'HIGH_RED',

                        estimatedArrival: '42 min',

                        followUpDueDate:
                            '19 Sep 2026 (7-day post discharge)'
                    }
                }
            );

            return;
        }


        const seeds = DEMO_USERS.map(async (user) => {

            const passwordHash =
                await bcrypt.hash(user.password, 10);


            const created = await User.create({

                role: user.role,

                name: user.name,

                identifier: user.identifier,

                passwordHash,

                phone: user.phone,

                village: user.village,

                age: user.age || undefined
            });


            if (user.role === 'patient') {

                await Patient.create({

                    userId: created._id,

                    patientId: 'GA-240184',

                    abhaId: '91-4820-1940-2218',

                    age: 52,

                    village:
                        'Kharpudi, Dist. Satara',

                    symptoms:
                        'Acute breathing difficulty & severe chest tightness',

                    currentStageIndex: 5,

                    statusLabel:
                        'Referral in Progress',

                    vitals: {
                        bp: '148/96 mmHg',
                        spo2: '89%',
                        pulse: '108 bpm',
                        temp: '99.4°F',
                        respRate: '28 /min'
                    },

                    triageRisk: 'HIGH_RED',

                    status: 'active',

                    assignedAsha:
                        'Sunita Tai (Kharpudi Sub-Center)',

                    assignedFacility:
                        'District Hospital, Satara',

                    estimatedArrival:
                        '42 min',

                    followUpDueDate:
                        '19 Sep 2026 (7-day post discharge)'
                });
            }
        });


        return Promise.all(seeds);
    });
}


// ============================================================
// AUTHENTICATION MIDDLEWARE
// ============================================================

function isAuthenticated(req, res, next) {

    if (req.session && req.session.user) {

        return next();
    }

    return res.status(401).json({
        message: 'Authentication required.'
    });
}


// ============================================================
// HEALTH CHECK
// ============================================================

app.get('/api/health', (req, res) => {

    res.json({

        status: 'ok',

        app: 'GavArogya',

        database:
            mongoose.connection.readyState === 1
                ? 'connected'
                : 'connecting',

        timestamp:
            new Date().toISOString()
    });
});


// ============================================================
// REGISTER
// ============================================================

app.post('/api/register', async (req, res) => {

    const {
        role,
        name,
        identifier,
        password,
        mobile,
        village,
        age
    } = req.body || {};


    if (!role || !name || !identifier || !password) {

        return res.status(400).json({
            message:
                'Role, name, identifier, and password are required.'
        });
    }


    try {

        const existingUser =
            await User.findOne({
                identifier:
                    String(identifier).trim()
            });


        if (existingUser) {

            return res.status(409).json({
                message:
                    'User already exists with that identifier.'
            });
        }


        const passwordHash =
            await bcrypt.hash(password, 10);


        const user =
            await User.create({

                role,

                name,

                identifier:
                    String(identifier).trim(),

                passwordHash,

                phone: mobile,

                village,

                age
            });


        if (role === 'patient') {

            await Patient.create({

                userId: user._id,

                patientId:
                    `GA-${Math.floor(
                        100000 +
                        Math.random() * 900000
                    )}`,

                abhaId:
                    '91-0000-0000-0000',

                age,

                village,

                symptoms:
                    'Registered via portal',

                currentStageIndex: 1,

                statusLabel:
                    'Profile Created',

                triageRisk:
                    'NOT_ASSESSED',

                assignedAsha:
                    'Sunita Tai (Kharpudi Sub-Center)',

                assignedFacility:
                    'District Hospital, Satara'
            });
        }


        return res.status(201).json({

            success: true,

            message:
                `${role} registered successfully.`
        });

    } catch (error) {

        return res.status(500).json({

            message:
                'Registration failed.',

            error:
                error.message
        });
    }
});


// ============================================================
// LOGIN
// ============================================================

app.post('/api/login', async (req, res) => {

    const {
        role,
        identifier,
        password
    } = req.body || {};


    if (!role || !identifier || !password) {

        return res.status(400).json({

            message:
                'Role, identifier, and password are required.'
        });
    }


    try {

        const user =
            await User.findOne({

                role,

                identifier:
                    String(identifier).trim()
            });


        if (!user) {

            return res.status(401).json({

                message:
                    'Invalid credentials for the selected role.'
            });
        }


        const match =
            await bcrypt.compare(
                password,
                user.passwordHash
            );


        if (!match) {

            return res.status(401).json({

                message:
                    'Invalid credentials for the selected role.'
            });
        }


        req.session.user = {

            id: user._id,

            role: user.role,

            name: user.name,

            identifier: user.identifier
        };


        return res.json({

            success: true,

            role: user.role,

            user: user.name,

            message:
                'Login successful.'
        });

    } catch (error) {

        return res.status(500).json({

            message:
                'Login failed.',

            error:
                error.message
        });
    }
});


// ============================================================
// LOGOUT
// ============================================================

app.post('/api/logout', (req, res) => {

    req.session.destroy(() => {

        res.clearCookie('gavArogya.sid');

        res.json({

            success: true,

            message:
                'Logged out successfully.'
        });
    });
});


// ============================================================
// SESSION
// ============================================================

app.get('/api/session', (req, res) => {

    if (!req.session || !req.session.user) {

        return res.json({
            authenticated: false
        });
    }


    return res.json({

        authenticated: true,

        user:
            req.session.user
    });
});


// ============================================================
// DASHBOARD
// ============================================================

app.get(
    '/api/dashboard',
    isAuthenticated,
    async (req, res) => {

        const user =
            req.session.user;


        const dbUser =
            await User
                .findOne({
                    _id: user.id
                })
                .lean();


        const patient =
            await Patient
                .findOne({
                    userId: user.id
                })
                .lean();


        res.json({

            appName:
                'GavArogya',

            user: {

                id: user.id,

                role: user.role,

                name: user.name,

                identifier:
                    user.identifier
            },

            roleData: {

                patient:
                    patient || {
                        patientId: 'GA-240184',
                        name:
                            dbUser?.name ||
                            user.name
                    },

                asha: {

                    workerId:
                        'ASHA-SAT-104',

                    workerName:
                        'Sunita Tai',

                    villageCoverage:
                        'Kharpudi & Wadhe, Satara',

                    todayTasks: 2,

                    pendingTasks: 1,

                    syncStatus:
                        'ONLINE'
                },

                facility: {

                    facilityId:
                        'DH-SATARA-01',

                    facilityName:
                        'District Hospital, Satara',

                    incomingReferrals: 12,

                    emergencyCases: 3,

                    patientsToday: 24,

                    bedOccupancyPercent: 85,

                    icuBedsFree: 2,

                    generalBedsFree: 14
                },

                ministry: {

                    activeCases: 1284,

                    referralCompletionRate:
                        87.6,

                    avgReferralTime:
                        '4h 18m',

                    followUpRate:
                        92.1,

                    delayedReferrals: 24
                }
            }
        });
    }
);


// ============================================================
// PATIENT CARE
// ============================================================

app.get(
    '/api/patient/care',
    isAuthenticated,
    async (req, res) => {

        if (
            req.session.user.role !==
            'patient'
        ) {

            return res.status(403).json({

                message:
                    'Patient portal access required.'
            });
        }


        const patient =
            await Patient
                .findOne({
                    userId:
                        req.session.user.id
                })
                .lean();


        if (!patient) {

            return res.status(404).json({

                message:
                    'Patient care record not found.'
            });
        }


        return res.json({

            patient,

            stages: [

                {
                    index: 1,
                    name: 'Request Created',
                    subtext:
                        'Logged by patient or family'
                },

                {
                    index: 2,
                    name: 'Assessment',
                    subtext:
                        'ASHA frontline intake'
                },

                {
                    index: 3,
                    name: 'Risk Prioritized',
                    subtext:
                        'High-priority triage review'
                },

                {
                    index: 4,
                    name: 'Doctor Review',
                    subtext:
                        'Tele-consultation review'
                },

                {
                    index: 5,
                    name: 'Smart Referral',
                    subtext:
                        'Dispatched to referral facility'
                },

                {
                    index: 6,
                    name: 'Care Passport',
                    subtext:
                        'Secure care token issued'
                },

                {
                    index: 7,
                    name: 'Treatment',
                    subtext:
                        'Hospital treatment underway'
                },

                {
                    index: 8,
                    name: 'Follow-Up',
                    subtext:
                        'Home recovery check scheduled'
                },

                {
                    index: 9,
                    name: 'Case Closed',
                    subtext:
                        'Recovery verified'
                }
            ]
        });
    }
);


// ============================================================
// BHASHINI — TRANSLATION API
// ============================================================

app.post(
    '/api/bhashini/translate',
    isAuthenticated,
    async (req, res) => {

        try {

            const {
                text,
                sourceLanguage,
                targetLanguage
            } = req.body || {};


            // ------------------------------------------------
            // Validate input
            // ------------------------------------------------

            if (
                !text ||
                !sourceLanguage ||
                !targetLanguage
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        'Text, sourceLanguage and targetLanguage are required.'
                });
            }


            // ------------------------------------------------
            // Prevent very large requests
            // ------------------------------------------------

            if (String(text).length > 5000) {

                return res.status(400).json({

                    success: false,

                    message:
                        'Text is too long. Maximum 5000 characters allowed.'
                });
            }


            // ------------------------------------------------
            // Same language = no translation required
            // ------------------------------------------------

            if (
                sourceLanguage ===
                targetLanguage
            ) {

                return res.json({

                    success: true,

                    translatedText:
                        text,

                    sourceLanguage,

                    targetLanguage,

                    message:
                        'Source and target languages are the same.'
                });
            }


            // ------------------------------------------------
            // Call Bhashini
            // ------------------------------------------------

            const result =
                await translateText(

                    text,

                    sourceLanguage,

                    targetLanguage
                );


            // ------------------------------------------------
            // Return result
            // ------------------------------------------------

            return res.json({

                success: true,

                translatedText:
                    result.translatedText,

                sourceLanguage,

                targetLanguage
            });


        } catch (error) {

            console.error(
                'Bhashini translation error:',
                error
            );


            return res.status(500).json({

                success: false,

                message:
                    'Translation service failed.',

                error:
                    error.message
            });
        }
    }
);


// ============================================================
// ROLE API
// ============================================================

app.get(
    '/api/roles/:role',
    isAuthenticated,
    async (req, res) => {

        const {
            role
        } = req.params;


        if (
            ![
                'patient',
                'asha',
                'facility',
                'ministry'
            ].includes(role)
        ) {

            return res.status(404).json({

                message:
                    'Role not found.'
            });
        }


        const user =
            await User
                .findOne({
                    _id:
                        req.session.user.id
                })
                .lean();


        res.json({

            role,

            user,

            data: {

                role,

                name:
                    user?.name ||
                    req.session.user.name
            }
        });
    }
);


// ============================================================
// FRONTEND FALLBACK
// ============================================================

app.get('*', (req, res) => {

    if (
        req.path.startsWith('/api/')
    ) {

        return res.status(404).json({

            message:
                'API endpoint not found.'
        });
    }


    const requestedPage =
        req.path === '/'
            ? 'index.html'
            : req.path;


    const resolvedPath =
        path.join(
            __dirname,
            requestedPage
        );


    if (
        fs.existsSync(resolvedPath) &&
        fs.statSync(resolvedPath).isFile()
    ) {

        return res.sendFile(
            resolvedPath
        );
    }


    const clientEntry =
        path.join(
            __dirname,
            'client',
            'dist',
            'index.html'
        );


    return res.sendFile(

        fs.existsSync(clientEntry)
            ? clientEntry
            : path.join(
                __dirname,
                'index.html'
            )
    );
});


// ============================================================
// START SERVER
// ============================================================

async function startServer() {

    try {

        await mongoose.connect(
            MONGO_URI,
            {
                serverSelectionTimeoutMS:
                    5000
            }
        );


        await seedUsers();


        app.listen(
            PORT,
            () => {

                console.log(
                    `GavArogya backend is running at http://localhost:${PORT}`
                );

                console.log(
                    'Bhashini translation API: /api/bhashini/translate'
                );
            }
        );


    } catch (error) {

        console.error(
            'MongoDB connect failed. Starting without database connection:',
            error.message
        );


        app.listen(
            PORT,
            () => {

                console.log(
                    `GavArogya backend is running at http://localhost:${PORT}`
                );

                console.log(
                    'Bhashini translation API: /api/bhashini/translate'
                );
            }
        );
    }
}


startServer();