/**
 * GavArogya - Shared Ecosystem Engine & State Store
 * Synchronizes state across separate HTML pages via localStorage
 * "गावोगाव, आरोग्याचा विश्वास"
 */

const STORAGE_KEY = 'GAVAROGYA_STATE_V2';
const ACCOUNTS_STORAGE_KEY = 'GAVAROGYA_ACCOUNTS_V1';
const SESSION_STORAGE_KEY = 'GAVAROGYA_SESSION_V1';
const PATIENT_RECORDS_STORAGE_KEY = 'GAVAROGYA_PATIENT_RECORDS_V1';
const ROLE_ROUTES = {
  PATIENT: 'patient.html',
  ASHA_WORKER: 'asha.html',
  FACILITY: 'facility.html',
  MINISTRY_ADMIN: 'ministry.html'
};

function createAccountId(role) {
  return `${role.slice(0, 3)}-${Date.now().toString(36).toUpperCase()}`;
}

function loadAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
}

function loadPatientRecords() {
  try {
    return JSON.parse(localStorage.getItem(PATIENT_RECORDS_STORAGE_KEY) || '{}');
  } catch (error) {
    return {};
  }
}

function savePatientRecords(records) {
  localStorage.setItem(PATIENT_RECORDS_STORAGE_KEY, JSON.stringify(records));
}

function createPatientRecord(account) {
  return {
    patientId: account.id,
    profile: {
      name: account.name,
      age: account.age || null,
      gender: account.gender || null,
      bloodGroup: account.bloodGroup || null,
      abhaId: account.abhaId || null,
      allergies: account.allergies || [],
      emergencyContact: account.emergencyContact || null,
      conditions: account.conditions || []
    },
    conditions: [],
    medications: [],
    allergies: [],
    hospitalizations: [],
    labReports: [],
    prescriptions: [],
    referrals: [],
    consultations: [],
    followUps: [],
    assistanceRequests: [],
    emergencyRequests: [],
    updatedAt: new Date().toISOString()
  };
}

function ensurePatientRecord(account) {
  const records = loadPatientRecords();
  if (!records[account.id]) {
    records[account.id] = createPatientRecord(account);
    if (account.id === 'GA-DEMO-001') {
      const demoDate = new Date().toISOString();
      records[account.id].conditions.push({ condition: 'Acute respiratory distress', diagnosisDate: demoDate, status: 'Under treatment', doctor: 'Dr. A. Kulkarni', facility: 'District Hospital, Satara', notes: 'Oxygen support and physician review recommended.' });
      records[account.id].medications.push({ name: 'Salbutamol inhaler', dosage: '100 mcg', frequency: 'As prescribed', startDate: demoDate, endDate: null, prescribedBy: 'Dr. A. Kulkarni', status: 'Active' });
      records[account.id].hospitalizations.push({ facility: 'District Hospital, Satara', admissionDate: demoDate, dischargeDate: null, reason: 'Breathing difficulty', diagnosis: 'Hypoxia', treatmentSummary: 'Oxygenation and nebulization initiated.', dischargeStatus: 'In care' });
      records[account.id].referrals.push({ date: demoDate, doctor: 'Dr. A. Kulkarni', referredFacility: 'District Hospital, Satara', status: 'Accepted', appointmentStatus: 'Bed reserved', preArrivalStatus: 'Ambulance telemetry active' });
      records[account.id].followUps.push({ date: new Date(Date.now() + 7 * 86400000).toISOString(), provider: account.assignedAsha || 'Sunita Tai', facility: 'Kharpudi Sub-Center', purpose: '7-day post-treatment recovery check', status: 'Scheduled' });
    }
    savePatientRecords(records);
  }
  return records[account.id];
}

function getAuthenticatedPatientRecord() {
  const account = getAuthenticatedAccount();
  if (!account || account.role !== 'PATIENT') return null;
  return ensurePatientRecord(account);
}

function updateAuthenticatedPatientRecord(updater) {
  const account = getAuthenticatedAccount();
  if (!account || account.role !== 'PATIENT') return null;
  const records = loadPatientRecords();
  const record = records[account.id] || createPatientRecord(account);
  updater(record);
  record.updatedAt = new Date().toISOString();
  records[account.id] = record;
  savePatientRecords(records);
  return record;
}

function normalizeMobile(value) {
  return String(value || '').replace(/\D/g, '').slice(-10);
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase();
}

function passwordIsValid(value) {
  return typeof value === 'string' && value.length >= 8;
}

function setAuthenticatedAccount(account) {
  const stateRole = {
    PATIENT: 'patient',
    ASHA_WORKER: 'asha',
    FACILITY: 'facility',
    MINISTRY_ADMIN: 'ministry'
  }[account.role];
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
    accountId: account.id,
    role: account.role,
    authenticatedAt: new Date().toISOString()
  }));
  if (typeof GavArogyaState !== 'undefined') GavArogyaState.activeRole = stateRole;
  hydrateRoleState(account);
}

function getAuthenticatedAccount() {
  try {
    const session = JSON.parse(localStorage.getItem(SESSION_STORAGE_KEY) || 'null');
    if (!session) return null;
    return loadAccounts().find(account => account.id === session.accountId && account.role === session.role) || null;
  } catch (error) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
  window.location.href = 'index.html';
}

function requireRole(expectedRole) {
  const account = getAuthenticatedAccount();
  if (!account) {
    window.location.replace('index.html');
    return null;
  }
  if (account.role !== expectedRole) {
    window.location.replace(ROLE_ROUTES[account.role] || 'index.html');
    return null;
  }
  hydrateRoleState(account);
  return account;
}

function redirectForRole(account) {
  window.location.href = ROLE_ROUTES[account.role];
}

function findDuplicateAccount(role, details) {
  const accounts = loadAccounts();
  if (role === 'PATIENT') {
    const mobile = normalizeMobile(details.mobile);
    return accounts.find(account => account.role === role && normalizeMobile(account.mobile) === mobile);
  }
  if (role === 'ASHA_WORKER') {
    return accounts.find(account => account.role === role && account.workerId.toLowerCase() === details.workerId.toLowerCase());
  }
  if (role === 'FACILITY') {
    return accounts.find(account => account.role === role && account.hfrId.toLowerCase() === details.hfrId.toLowerCase());
  }
  const email = normalizeEmail(details.email);
  return accounts.find(account => account.role === role && (account.email === email || account.employeeCode.toLowerCase() === details.employeeCode.toLowerCase()));
}

function registerAccount(role, details) {
  const duplicate = findDuplicateAccount(role, details);
  if (duplicate) {
    return { error: role === 'PATIENT' ? 'An account already exists for this mobile number.' : 'An account already exists for this unique identifier.' };
  }
  const account = {
    id: createAccountId(role),
    role,
    createdAt: new Date().toISOString(),
    ...details
  };
  saveAccounts([...loadAccounts(), account]);
  setAuthenticatedAccount(account);
  return { account };
}

function authenticateAccount(role, identifier, secret, extra = {}) {
  const accounts = loadAccounts();
  const account = accounts.find(item => {
    if (item.role !== role) return false;
    if (role === 'PATIENT') return normalizeMobile(item.mobile) === normalizeMobile(identifier);
    if (role === 'ASHA_WORKER') return item.workerId.toLowerCase() === String(identifier).toLowerCase();
    if (role === 'FACILITY') {
      const enteredId = String(identifier).toLowerCase();
      return item.hfrId.toLowerCase() === enteredId || item.facilityId.toLowerCase() === enteredId;
    }
    return item.email === normalizeEmail(identifier);
  });
  if (!account || (role === 'PATIENT' ? String(secret).length < 4 : account.password !== secret)) {
    return { error: 'The entered credentials are not valid for this role.' };
  }
  if (role === 'PATIENT' && extra.abhaId && account.abhaId && extra.abhaId !== account.abhaId) {
    return { error: 'The ABHA ID does not match this patient account.' };
  }
  if (role === 'FACILITY' && extra.staffId && account.staffId.toLowerCase() !== extra.staffId.toLowerCase()) {
    return { error: 'The authorized staff ID does not match this facility account.' };
  }
  if (role === 'MINISTRY_ADMIN' && account.mfa !== extra.mfa) {
    return { error: 'The MFA token is not valid.' };
  }
  setAuthenticatedAccount(account);
  return { account };
}

function hydrateRoleState(account) {
  if (typeof GavArogyaState === 'undefined') return;
  if (account.role === 'PATIENT') {
    Object.assign(GavArogyaState.patient, account);
  } else if (account.role === 'ASHA_WORKER') {
    Object.assign(GavArogyaState.asha, account);
  } else if (account.role === 'FACILITY') {
    Object.assign(GavArogyaState.facility, account);
  } else if (account.role === 'MINISTRY_ADMIN') {
    Object.assign(GavArogyaState.ministry, account);
  }
  saveState();
}

function markPatientSession() {
  sessionStorage.setItem('GAVAROGYA_OPEN_PATIENT_PASSPORT', 'true');
}

function registerPatientAccount(details) {
  const ageAndGender = String(details.ageAndGender || '').split(',').map(value => value.trim());
  const result = registerAccount('PATIENT', {
    ...details,
    mobile: `+91 ${normalizeMobile(details.mobile)}`,
    age: parseInt(ageAndGender[0], 10),
    gender: ageAndGender[1]
  });
  if (result.account) {
    if (result.account.id !== 'GA-DEMO-001') {
      Object.assign(GavArogyaState.patient, {
        symptoms: 'No symptoms recorded',
        vitals: { bp: 'Not recorded', spo2: 'Not recorded', pulse: 'Not recorded', temp: 'Not recorded', respRate: 'Not recorded' },
        triageRisk: 'NOT_ASSESSED',
        currentStageIndex: 1,
        statusLabel: 'Profile Created',
        statusBadgeClass: 'requested',
        assignedAsha: 'Not assigned',
        assignedFacility: 'Not assigned',
        doctorName: 'Not assigned',
        estimatedArrival: 'Not applicable'
      });
      saveState();
    }
    ensurePatientRecord(result.account);
    markPatientSession();
  }
  return result;
}

function authenticatePatientAccount(details) {
  const result = authenticateAccount('PATIENT', details.mobile, details.otp || '0000');
  if (result.account) markPatientSession();
  return result.account || null;
}

function setFormError(inputId, message) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.setAttribute('aria-invalid', 'true');
  let error = input.parentElement.querySelector('.auth-field-error');
  if (!error) {
    error = document.createElement('div');
    error.className = 'auth-field-error';
    error.style.cssText = 'color: var(--rose-700); font-size: 0.7rem; margin-top: 4px;';
    input.parentElement.appendChild(error);
  }
  error.textContent = message;
}

function clearFormErrors() {
  document.querySelectorAll('.auth-field-error').forEach(error => error.remove());
  document.querySelectorAll('[aria-invalid="true"]').forEach(input => input.removeAttribute('aria-invalid'));
}

function ensureDemoAccounts() {
  const accounts = loadAccounts();
  const demos = [
    { id: 'GA-DEMO-001', role: 'PATIENT', createdAt: '2026-01-01T00:00:00.000Z', name: 'Ramesh Patil', nameMr: 'रमेश पाटील', age: 52, gender: 'Male', village: 'Kharpudi, Dist. Satara', mobile: '+91 98220 12345', abhaId: '91-4820-1940-2218' },
    { id: 'ASHA-DEMO-001', role: 'ASHA_WORKER', createdAt: '2026-01-01T00:00:00.000Z', workerId: 'ASHA-SAT-104', workerName: 'Sunita Tai', villageCoverage: 'Kharpudi & Wadhe, Satara', subCenter: 'Kharpudi Sub-Center', phc: 'Wadhe PHC, Satara', password: 'AshaSecure@2026', pin: '415001' },
    { id: 'FAC-DEMO-001', role: 'FACILITY', createdAt: '2026-01-01T00:00:00.000Z', facilityId: 'DH-SATARA-01', hfrId: 'HFR-MH-SAT-0042', facilityName: 'District Hospital, Satara', tier: 'DH', staffId: 'DOC-KULKARNI-77', staffName: 'Dr. A. Kulkarni', password: 'SataraDH#Pass9', icuBedsFree: 2, generalBedsFree: 14 },
    { id: 'MIN-DEMO-001', role: 'MINISTRY_ADMIN', createdAt: '2026-01-01T00:00:00.000Z', email: 'director.health@maharashtra.gov.in', name: 'Dr. Nitin Patil (IAS)', employeeCode: 'MH-GOV-PH-8812', designation: 'Director of Health Services, Maha Public Health Dept', password: 'MahaGovHealth*2026', mfa: '849201' }
  ];
  const missing = demos.filter(demo => !accounts.some(account => account.id === demo.id));
  if (missing.length) saveAccounts([...accounts, ...missing]);
}

ensureDemoAccounts();

// =============================================================================
// 1. Bilingual Dictionary (English & मराठी)
// =============================================================================
const I18N = {
  en: {
    brandTagline: "Connected Care, From Village to Treatment.",
    heroTitle: "One connected healthcare journey, from village to treatment.",
    heroSubtitle: "Connecting patients, ASHA workers, healthcare facilities and government systems for seamless, closed-loop rural healthcare.",
    accessibleCare: "Accessible Care",
    connectedSystems: "Connected Systems",
    strongerCommunities: "Stronger Communities",
    marathiHeroTag: "गावोगाव, आरोग्याचा विश्वास",
    marathiHeroSub: "प्रत्येक खेड्यापर्यंत आरोग्य सेवा",
    loginToPortal: "Login to Your Portal",
    chooseRole: "Choose your role to continue",
    enterPortal: "Enter Portal →",
    secureRbac: "🔒 Secure Role-Based Access",
    consentSharing: "• Consent-Based Data Sharing",
    quoteText: "“No patient should be lost between care.”",
    quoteSub: "Stronger Villages, Healthier Maharashtra",
    patientRole: "Patient",
    patientRoleDesc: "Access care, track your journey, and consult AI",
    ashaRole: "ASHA Worker",
    ashaRoleDesc: "Manage patients, record assessments, and follow-ups",
    facilityRole: "Healthcare Facility",
    facilityRoleDesc: "Receive referrals, update treatment, and manage capacity",
    ministryRole: "Government / Ministry",
    ministryRoleDesc: "Monitor system performance and improve health outcomes",
    patientSecurityMsg: "Secure access to your personal healthcare journey.",
    ashaAccessLabel: "Authorized ASHA Worker Access",
    facilityAccessLabel: "Authorized Facility Access",
    ministryAccessLabel: "Government Analytics Access"
  },
  mr: {
    brandTagline: "गावोगाव, आरोग्याचा विश्वास - खेड्यापासून उपचारापर्यंत.",
    heroTitle: "खेड्यापासून उपचारापर्यंत, एकसंध व सुरक्षित आरोग्य प्रवास.",
    heroSubtitle: "रुग्ण, आशा सेविका, आरोग्य संस्था आणि शासन यांना जोडणारी आधुनिक, विश्वासार्ह व एकात्मिक ग्रामीण आरोग्य व्यवस्था.",
    accessibleCare: "सुलभ आरोग्यसेवा",
    connectedSystems: "एकात्मिक प्रणाली",
    strongerCommunities: "सशक्त गावे",
    marathiHeroTag: "गावोगाव, आरोग्याचा विश्वास",
    marathiHeroSub: "आरोग्यसंपन्न महाराष्ट्र घडवूया",
    loginToPortal: "आपल्या पोर्टलमध्ये लॉगिन करा",
    chooseRole: "पुढे जाण्यासाठी आपली भूमिका निवडा",
    enterPortal: "पोर्टल उघडा →",
    secureRbac: "🔒 भूमिका-आधारित सुरक्षित प्रवेश (RBAC)",
    consentSharing: "• संमती-आधारित डेटा देवाणघेवाण",
    quoteText: "“उपचाराच्या प्रवासात एकही रुग्ण वंचित राहू नये.”",
    quoteSub: "सशक्त गावे, आरोग्यसंपन्न महाराष्ट्र",
    patientRole: "रुग्ण (Patient)",
    patientRoleDesc: "वैयक्तिक उपचार माहिती, प्रगती ट्रॅकिंग आणि AI प्राथमिक सल्ला",
    ashaRole: "आशा सेविका (ASHA Worker)",
    ashaRoleDesc: "रुग्ण तपासणी, लक्षणे व निकड नोंदणी आणि पाठपुरावा",
    facilityRole: "आरोग्य केंद्र / रुग्णालय (Facility)",
    facilityRoleDesc: "रेफरल स्वीकारणे, उपचार नोंदणी आणि खाटांची उपलब्धता",
    ministryRole: "आरोग्य मंत्रालय / शासन (Ministry)",
    ministryRoleDesc: "जिल्हास्तरीय विश्लेषण, संसाधन नियोजन आणि धोरण नियंत्रण",
    patientSecurityMsg: "आपल्या वैयक्तिक आरोग्य प्रवासासाठी सुरक्षित डिजिटल प्रवेश.",
    ashaAccessLabel: "अधिकृत आशा सेविका प्रवेश (Authorized ASHA)",
    facilityAccessLabel: "अधिकृत रुग्णालय प्रवेश (Authorized Facility)",
    ministryAccessLabel: "शासकीय विश्लेषण प्रवेश (Govt Analytics)"
  }
};

// =============================================================================
// 2. Default State Model
// =============================================================================
const defaultState = {
  currentLang: 'en',
  activeRole: 'patient',

  // Patient Info & Live Lifecycle
  patient: {
    id: "GA-240184",
    name: "Ramesh Patil",
    nameMr: "रमेश पाटील",
    age: 52,
    gender: "Male",
    village: "Kharpudi, Dist. Satara",
    mobile: "+91 98220 12345",
    abhaId: "91-4820-1940-2218",
    
    // 9 Stages: 1.REQUEST_CREATED, 2.ASSESSMENT, 3.RISK_PRIORITIZED, 4.DOCTOR_REVIEW,
    // 5.SMART_REFERRAL, 6.CARE_PASSPORT, 7.TREATMENT, 8.FOLLOW_UP, 9.CASE_CLOSED
    currentStageIndex: 5,
    statusLabel: "Smart Referral in Progress",
    statusBadgeClass: "referred",
    
    symptoms: "Acute breathing difficulty & severe chest tightness",
    vitals: {
      bp: "148/96 mmHg",
      spo2: "89%",
      pulse: "108 bpm",
      temp: "99.4°F",
      respRate: "28 /min"
    },
    triageRisk: "HIGH_RED",
    assignedAsha: "Sunita Tai (Kharpudi Sub-Center)",
    assignedFacility: "District Hospital, Satara",
    doctorName: "Dr. A. Kulkarni (MD Medicine)",
    estimatedArrival: "42 min",
    treatmentNote: "Oxygenation started via nasal cannula; nebulization administered. Stabilized.",
    followUpDueDate: "19 Sep 2026 (7-day post discharge)",
    
    // AI Consultation History
    aiConsultation: {
      lastSymptomQueried: "Severe chest tightness and shortness of breath while walking",
      riskLevel: "RED",
      urgencyLabel: "Critical Emergency (Triage RED)",
      recommendation: "Suspected acute hypoxia & cardiac respiratory distress. Oxygenation and urgent physician evaluation recommended. Frontline ASHA alerted.",
      suggestedActions: ["Alert ASHA Sunita Tai", "eSanjeevani Teleconsult", "Emergency 108 Dispatch"],
      timestamp: "Today, 10:35 AM"
    }
  },

  // ASHA Worker State
  asha: {
    workerId: "ASHA-SAT-104",
    workerName: "Sunita Tai",
    villageCoverage: "Kharpudi & Wadhe, Satara",
    isOffline: false,
    syncStatus: "ONLINE",
    pendingSyncCount: 0,
    activeTab: "today",
    followUpCompleted: false
  },

  // Healthcare Facility State
  facility: {
    facilityId: "DH-SATARA-01",
    facilityName: "District Hospital, Satara",
    staffId: "DOC-KULKARNI-77",
    staffName: "Dr. A. Kulkarni",
    incomingReferralsCount: 12,
    emergencyCasesCount: 3,
    patientsTodayCount: 24,
    bedOccupancyPercent: 85,
    icuBedsFree: 2,
    generalBedsFree: 14,
    specialistDuty: "Cardiologist: On-Duty • Pulmonologist: In-Transit",
    referralAccepted: true,
    treatmentDone: false
  },

  // Ministry State (Strictly Aggregated & Anonymized)
  ministry: {
    activeCases: 1284,
    referralCompletionRate: 87.6,
    avgReferralHours: 4,
    avgReferralMins: 18,
    followUpRate: 92.1,
    delayedCount: 24,
    districts: [
      { name: "Satara", code: "SAT", delay: "Moderate", activeCases: 94, avgTime: "3h 45m", colorClass: "amber" },
      { name: "Pune", code: "PUN", delay: "Normal", activeCases: 210, avgTime: "2h 30m", colorClass: "teal" },
      { name: "Nashik", code: "NAS", delay: "Normal", activeCases: 142, avgTime: "3h 10m", colorClass: "teal" },
      { name: "Gadchiroli", code: "GAD", delay: "High", activeCases: 86, avgTime: "7h 15m", colorClass: "red" },
      { name: "Nandurbar", code: "NAN", delay: "High", activeCases: 78, avgTime: "6h 40m", colorClass: "red" },
      { name: "Solapur", code: "SOL", delay: "Moderate", activeCases: 112, avgTime: "4h 50m", colorClass: "amber" },
      { name: "Ratnagiri", code: "RAT", delay: "Normal", activeCases: 64, avgTime: "3h 20m", colorClass: "teal" }
    ]
  },

  // Live Audit Log Stream
  auditLogs: [
    { time: "09:15 AM", role: "system", user: "GavArogya Auth Gateway", action: "Encrypted session tokens refreshed via ABDM Keyring", level: "Transit Encryption" },
    { time: "10:30 AM", role: "patient", user: "Patient (GA-240184)", action: "Requested emergency assistance for severe breathing difficulty", level: "Consent Granted" },
    { time: "10:42 AM", role: "asha", user: "ASHA Worker (Sunita T.)", action: "Viewed assigned patient case & recorded SpO2: 89%, BP: 148/96", level: "Assigned Area Only" },
    { time: "10:48 AM", role: "system", user: "AI Triage Engine", action: "Calculated Rule-based RED Risk: Hypoxia & Respiratory Distress", level: "Clinical Decision Support" },
    { time: "11:08 AM", role: "facility", user: "Facility Staff (Dr. Kulkarni)", action: "Accessed authorized Referral Summary & verified Care Passport token", level: "Minimal Referral Scope" },
    { time: "11:15 AM", role: "ministry", user: "Ministry Health Analyst", action: "Queried Satara District aggregated turnaround analytics", level: "Aggregated / Anonymized" }
  ]
};

// 9 Stages Definition
const STAGES = [
  { index: 1, id: "REQUEST_CREATED", name: "Request Created", nameMr: "मदत मागणी नोंदवली", subtext: "Logged by Patient/Family" },
  { index: 2, id: "ASSESSMENT", name: "Assessment", nameMr: "लक्षण व निकड तपासणी", subtext: "ASHA frontline intake" },
  { index: 3, id: "RISK_PRIORITIZED", name: "Risk Prioritized", nameMr: "जोखीम वर्गीकरण (AI)", subtext: "RED / High Priority flagged" },
  { index: 4, id: "DOCTOR_REVIEW", name: "Doctor Review", nameMr: "डॉक्टर दूरध्वनी सल्ला", subtext: "eSanjeevani tele-consult" },
  { index: 5, id: "SMART_REFERRAL", name: "Smart Referral", nameMr: "स्मार्ट रेफरल पाठवले", subtext: "Dispatched to Satara DH" },
  { index: 6, id: "CARE_PASSPORT", name: "Care Passport", nameMr: "केअर पासपोर्ट जारी", subtext: "QR token & vitals sealed" },
  { index: 7, id: "TREATMENT", name: "Treatment", nameMr: "रुग्णालय उपचार सुरू", subtext: "Oxygenation & stabilization" },
  { index: 8, id: "FOLLOW_UP", name: "Follow-Up", nameMr: "आशा ७-दिवसीय पाठपुरावा", subtext: "Home visit scheduled" },
  { index: 9, id: "CASE_CLOSED", name: "Case Closed", nameMr: "प्रकरण यशस्वी समाप्त", subtext: "Recovery verified" }
];

// =============================================================================
// 3. State Hydration & Synchronization
// =============================================================================
let GavArogyaState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.warn("Could not load stored state, using defaults:", e);
  }
  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(GavArogyaState));
  } catch (e) {
    console.error("Failed to save state:", e);
  }
}

// Listen for cross-page updates in other tabs
window.addEventListener('storage', (event) => {
  if (event.key === STORAGE_KEY && event.newValue) {
    GavArogyaState = JSON.parse(event.newValue);
    if (typeof onStateUpdated === 'function') {
      onStateUpdated();
    }
  }
});

// =============================================================================
// 4. UI Helpers (Toasts, Audit, Modals, Language)
// =============================================================================

function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'ℹ️';
  if (type === 'success') icon = '✅';
  if (type === 'alert') icon = '🚨';
  if (type === 'security') icon = '🔒';

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function logAudit(role, user, action, level = "Role Compliant") {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const entry = { time: timeStr, role, user, action, level };
  GavArogyaState.auditLogs.unshift(entry);
  if (GavArogyaState.auditLogs.length > 25) GavArogyaState.auditLogs.pop();
  saveState();
  if (typeof renderAuditLogs === 'function') {
    renderAuditLogs();
  }
}

function setLanguage(lang) {
  GavArogyaState.currentLang = lang;
  saveState();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
  if (typeof onStateUpdated === 'function') {
    onStateUpdated();
  }
  showToast(lang === 'mr' ? "भाषा मराठीवर बदलली आहे." : "Language switched to English.", 'info');
}

function applyTranslations() {
  const t = I18N[GavArogyaState.currentLang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (t[key]) {
      elem.textContent = t[key];
    }
  });
}

function closeModal() {
  const modal = document.getElementById('genericModal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.remove('open');
  }
}

function openModal(titleText, bodyHtml, footerHtml = '') {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');
  if (modal && title && body) {
    title.textContent = titleText;
    body.innerHTML = bodyHtml;
    if (footer) footer.innerHTML = footerHtml;
    modal.classList.add('active');
    modal.classList.add('open');
  }
}

function openAuditDrawer() {
  const logsHtml = GavArogyaState.auditLogs.map(l => `
    <div style="padding: 10px; border-bottom: 1px solid var(--slate-100); font-size: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <span style="font-weight: 700; color: var(--slate-800);">${l.user}</span>
        <div style="color: var(--slate-600); margin-top: 2px;">${l.action}</div>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 0.72rem; color: var(--slate-400);">${l.time}</span>
        <div><span style="font-size: 0.68rem; background: var(--teal-50); color: var(--teal-800); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--teal-200);">${l.level}</span></div>
      </div>
    </div>
  `).join('');

  openModal("🔒 GavArogya Real-Time Security Audit Log", `
    <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px; background: var(--slate-50); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--slate-200);">
      “Users only access the healthcare information required for their authorized role.” All access events are cryptographically sealed.
    </div>
    <div style="max-height: 380px; overflow-y: auto;">
      ${logsHtml}
    </div>
  `, `<button class="btn-primary" onclick="closeModal()" style="width: auto; padding: 8px 20px;">Close Audit Log</button>`);
}

// =============================================================================
// 5. Cross-Portal Simulation Workflow Engine
// =============================================================================
function runSimulationStep(step) {
  const p = GavArogyaState.patient;
  const a = GavArogyaState.asha;
  const f = GavArogyaState.facility;
  const m = GavArogyaState.ministry;

  document.querySelectorAll('.sim-step-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.step) === step);
  });

  if (step === 1) {
    p.currentStageIndex = 1;
    p.statusLabel = "Assistance Requested";
    p.statusBadgeClass = "requested";
    p.symptoms = "Severe breathlessness, chest discomfort while walking";
    
    logAudit('patient', `Patient (${p.name})`, "Submitted urgent symptom alert: Severe breathlessness", "Patient Consent Recorded");
    showToast("Step 1: Ramesh Patil created assistance request. ASHA Worker alerted in Kharpudi!", "alert");
  } 
  else if (step === 2) {
    p.currentStageIndex = 3;
    p.statusLabel = "Risk Prioritized (RED)";
    p.statusBadgeClass = "referred";
    p.vitals = { bp: "148/96 mmHg", spo2: "89%", pulse: "108 bpm", temp: "99.4°F", respRate: "28 /min" };
    p.triageRisk = "HIGH_RED";
    
    logAudit('asha', `ASHA (${a.workerName})`, "Recorded vitals (SpO2: 89%, BP: 148/96). AI rule flagged RED risk.", "Clinical Support Triggered");
    showToast("Step 2: Sunita Tai recorded vitals. AI flagged RED Risk (Hypoxia). Doctor referral started!", "alert");
  } 
  else if (step === 3) {
    p.currentStageIndex = 6;
    p.statusLabel = "Facility Ready (Bed Reserved)";
    p.statusBadgeClass = "ready";
    f.referralAccepted = true;
    f.icuBedsFree = 1;
    f.bedOccupancyPercent = 86;
    
    logAudit('facility', `Facility (${f.staffName})`, "Verified Care Passport token & accepted emergency referral.", "Authorized Facility Access");
    showToast("Step 3: District Hospital Satara accepted referral. Bed reserved for Ramesh Patil.", "success");
  } 
  else if (step === 4) {
    p.currentStageIndex = 8;
    p.statusLabel = "Treatment Completed (Follow-up Due)";
    p.statusBadgeClass = "treated";
    f.treatmentDone = true;
    a.followUpCompleted = false;
    
    logAudit('facility', `Facility (${f.staffName})`, "Administered oxygen therapy & nebulization. Discharged with 7-day follow-up task.", "Treatment Cycle Complete");
    showToast("Step 4: Hospital finished emergency stabilization. ASHA received 7-day follow-up task!", "info");
  } 
  else if (step === 5) {
    p.currentStageIndex = 9;
    p.statusLabel = "Case Closed (Recovered)";
    p.statusBadgeClass = "closed";
    a.followUpCompleted = true;
    m.activeCases = 1283;
    m.referralCompletionRate = 88.2;
    m.followUpRate = 93.0;
    
    logAudit('asha', `ASHA (${a.workerName})`, "Completed 7-day checkup at Kharpudi. SpO2 97%, vitals normal. Case closed.", "Closed-Loop Verified");
    logAudit('ministry', "State Health Metrics Engine", "Closed case reflected in district aggregates. Referral completion: 88.2%", "Aggregated KPI Updated");
    showToast("Step 5: Follow-up complete! Case closed. Ministry analytics updated in real-time.", "success");
  }

  saveState();
  if (typeof onStateUpdated === 'function') {
    onStateUpdated();
  }
}
