/**
 * GavArogya - Connected Care, From Village to Treatment
 * Role-Based Access Control (RBAC) & Ecosystem State Management
 * "गावोगाव, आरोग्याचा विश्वास"
 */

// =============================================================================
// 1. Bilingual Dictionary (English & Marathi)
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
    patientRoleDesc: "Access care, track your journey, and stay informed",
    ashaRole: "ASHA Worker",
    ashaRoleDesc: "Manage patients, record assessments, and follow-ups",
    facilityRole: "Healthcare Facility",
    facilityRoleDesc: "Receive referrals, update treatment, and manage capacity",
    ministryRole: "Government / Ministry",
    ministryRoleDesc: "Monitor system performance and improve health outcomes",
    patientSecurityMsg: "Secure access to your personal healthcare journey.",
    ashaAccessLabel: "Authorized ASHA Worker Access",
    facilityAccessLabel: "Authorized Facility Access",
    ministryAccessLabel: "Government Analytics Access",
    askForHelp: "Ask for Help",
    consultDoctor: "Consult Doctor",
    contactAsha: "Contact ASHA",
    emergencyHelp: "Emergency 108",
    myReferrals: "My Referrals",
    carePassport: "Care Passport",
    followUps: "Follow-ups",
    healthTips: "Health Tips",
    currentCaseStatus: "Current Case Status",
    viewTimeline: "View Timeline →",
    activeCases: "Active Cases",
    referralCompletion: "Referral Completion",
    avgReferralTime: "Avg. Referral Time",
    followUpCompletion: "Follow-up Completion",
    delayedReferrals: "Delayed Referrals",
    districtHeatmap: "Maharashtra District Referral Speed Heatmap",
    facilityGaps: "Facility Capability Gaps",
    medicineRisk: "Medicine Stockout Risk (e-Aushadhi)",
    specialistTrends: "Specialist Availability Trends"
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
    patientRoleDesc: "वैयक्तिक उपचार माहिती, प्रगती ट्रॅकिंग आणि डॉक्टरांचा सल्ला",
    ashaRole: "आशा सेविका (ASHA Worker)",
    ashaRoleDesc: "रुग्ण तपासणी, लक्षणे व निकड नोंदणी आणि पाठपुरावा",
    facilityRole: "आरोग्य केंद्र / रुग्णालय (Facility)",
    facilityRoleDesc: "रेफरल स्वीकारणे, उपचार नोंदणी आणि खाटांची उपलब्धता",
    ministryRole: "आरोग्य मंत्रालय / शासन (Ministry)",
    ministryRoleDesc: "जिल्हास्तरीय विश्लेषण, संसाधन नियोजन आणि धोरण नियंत्रण",
    patientSecurityMsg: "आपल्या वैयक्तिक आरोग्य प्रवासासाठी सुरक्षित डिजिटल प्रवेश.",
    ashaAccessLabel: "अधिकृत आशा सेविका प्रवेश (Authorized ASHA)",
    facilityAccessLabel: "अधिकृत रुग्णालय प्रवेश (Authorized Facility)",
    ministryAccessLabel: "शासकीय विश्लेषण प्रवेश (Govt Analytics)",
    askForHelp: "मदत मागा",
    consultDoctor: "डॉक्टर सल्ला",
    contactAsha: "आशा सेविकेशी संपर्क",
    emergencyHelp: "तातडीची मदत १०८",
    myReferrals: "माझे रेफरल्स",
    carePassport: "केअर पासपोर्ट",
    followUps: "पाठपुरावा",
    healthTips: "आरोग्य टिप्स",
    currentCaseStatus: "सद्यस्थिती",
    viewTimeline: "प्रवास पहा →",
    activeCases: "सक्रिय रुग्ण",
    referralCompletion: "रेफरल पूर्णता दर",
    avgReferralTime: "सरासरी रेफरल वेळ",
    followUpCompletion: "पाठपुरावा पूर्णता",
    delayedReferrals: "विलंबित रेफरल्स",
    districtHeatmap: "महाराष्ट्र जिल्हा रेफरल गती नकाशा",
    facilityGaps: "रुग्णालय क्षमता तूट",
    medicineRisk: "औषध साठा जोखीम (ई-औषधी)",
    specialistTrends: "विशेषज्ञ डॉक्टर उपलब्धता"
  }
};

// =============================================================================
// 2. State Store (GavArogyaState)
// =============================================================================
const GavArogyaState = {
  currentLang: 'en',
  activeRole: 'patient', // 'patient' | 'asha' | 'facility' | 'ministry'
  isLoggedIn: true,
  isMobileFrameExpanded: false,

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
    currentStageIndex: 5, // Currently at Smart Referral / Care Passport
    statusLabel: "Referral in Progress",
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
    followUpDueDate: "19 Sep 2026 (7-day post discharge)"
  },

  // ASHA Worker State
  asha: {
    workerId: "ASHA-SAT-104",
    workerName: "Sunita Tai",
    villageCoverage: "Kharpudi & Wadhe, Satara",
    isOffline: false,
    syncStatus: "ONLINE", // "ONLINE" | "OFFLINE" | "SYNCING"
    pendingSyncCount: 0,
    activeTab: "today", // "today" | "pending" | "completed"
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

  // Ministry / Government State (Aggregated & Anonymized Only!)
  ministry: {
    activeCases: 1284,
    referralCompletionRate: 87.6,
    avgReferralHours: 4,
    avgReferralMins: 18,
    followUpRate: 92.1,
    delayedCount: 24,
    selectedFilter: "30d",
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
// 3. UI Helpers & Translation Renderers
// =============================================================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

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
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function logAudit(role, user, action, level = "Role Compliant") {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const entry = { time: timeStr, role, user, action, level };
  GavArogyaState.auditLogs.unshift(entry);
  if (GavArogyaState.auditLogs.length > 25) GavArogyaState.auditLogs.pop();
  renderAuditLogs();
}

function setLanguage(lang) {
  GavArogyaState.currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Re-render UI labels
  applyTranslations();
  renderActivePortal();
  showToast(lang === 'mr' ? "भाषा मराठीवर बदलली आहे." : "Language switched to English.", 'info');
}

function applyTranslations() {
  const t = I18N[GavArogyaState.currentLang];
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (t[key]) {
      elem.textContent = t[key];
    }
  });
}

// =============================================================================
// 4. Role Navigation & Access Controllers
// =============================================================================

function selectRole(role) {
  GavArogyaState.activeRole = role;
  
  // Update role buttons in hero
  document.querySelectorAll('.role-entry-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });

  // Update simulator dock buttons
  document.querySelectorAll('.role-dock-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.role === role);
  });

  // Log RBAC access event
  const userMap = {
    patient: `Patient (${GavArogyaState.patient.name})`,
    asha: `ASHA Worker (${GavArogyaState.asha.workerName})`,
    facility: `Facility Staff (${GavArogyaState.facility.staffName})`,
    ministry: "Ministry Analytics User"
  };
  logAudit(role, userMap[role], `Switched view to ${role.toUpperCase()} Portal`, "Authorized Scope");

  renderActivePortal();
  
  // Scroll to portal view smoothly
  const portalSection = document.getElementById('portalViewport');
  if (portalSection) {
    portalSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// =============================================================================
// 5. Cross-Portal Simulation Workflow Engine
// =============================================================================

function runSimulationStep(step) {
  const p = GavArogyaState.patient;
  const a = GavArogyaState.asha;
  const f = GavArogyaState.facility;
  const m = GavArogyaState.ministry;

  // Highlight step button
  document.querySelectorAll('.sim-step-btn').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.step) === step);
  });

  if (step === 1) {
    // Step 1: Patient Requests Assistance
    p.currentStageIndex = 1;
    p.statusLabel = "Assistance Requested";
    p.statusBadgeClass = "requested";
    p.symptoms = "Severe breathlessness, chest discomfort while walking";
    
    logAudit('patient', `Patient (${p.name})`, "Submitted urgent symptom alert: Severe breathlessness", "Patient Consent Recorded");
    showToast("Step 1: Ramesh Patil created assistance request. ASHA Worker alerted in Kharpudi!", "alert");
    selectRole('patient');
  } 
  else if (step === 2) {
    // Step 2: ASHA Worker Assesses & Prioritizes RED
    p.currentStageIndex = 3; // Risk Prioritized
    p.statusLabel = "Risk Prioritized (RED)";
    p.statusBadgeClass = "referred";
    p.vitals = { bp: "148/96 mmHg", spo2: "89%", pulse: "108 bpm", temp: "99.4°F", respRate: "28 /min" };
    p.triageRisk = "HIGH_RED";
    
    logAudit('asha', `ASHA (${a.workerName})`, "Recorded vitals (SpO2: 89%, BP: 148/96). AI rule flagged RED risk.", "Clinical Support Triggered");
    showToast("Step 2: Sunita Tai recorded vitals. AI flagged RED Risk (Hypoxia). Doctor referral started!", "alert");
    selectRole('asha');
  } 
  else if (step === 3) {
    // Step 3: Satara DH Accepts Referral & Prepares Bed
    p.currentStageIndex = 6; // Care Passport verified, Facility Ready
    p.statusLabel = "Facility Ready (Bed Reserved)";
    p.statusBadgeClass = "ready";
    f.referralAccepted = true;
    f.icuBedsFree = 1; // 1 bed reserved for Ramesh
    f.bedOccupancyPercent = 86;
    
    logAudit('facility', `Facility (${f.staffName})`, "Verified Care Passport token & accepted emergency referral.", "Authorized Facility Access");
    showToast("Step 3: District Hospital Satara accepted referral. Bed reserved for Ramesh Patil.", "success");
    selectRole('facility');
  } 
  else if (step === 4) {
    // Step 4: Treatment Completed & 7-Day Follow-up Pushed
    p.currentStageIndex = 8; // Follow-up
    p.statusLabel = "Treatment Completed (Follow-up Due)";
    p.statusBadgeClass = "treated";
    f.treatmentDone = true;
    a.followUpCompleted = false;
    
    logAudit('facility', `Facility (${f.staffName})`, "Administered oxygen therapy & nebulization. Discharged with 7-day follow-up task.", "Treatment Cycle Complete");
    showToast("Step 4: Hospital finished emergency stabilization. ASHA received 7-day follow-up task!", "info");
    selectRole('facility');
  } 
  else if (step === 5) {
    // Step 5: ASHA Completes Follow-Up & Ministry Metrics Update
    p.currentStageIndex = 9; // Case Closed
    p.statusLabel = "Case Closed (Recovered)";
    p.statusBadgeClass = "closed";
    a.followUpCompleted = true;
    m.activeCases = 1283;
    m.referralCompletionRate = 88.2;
    m.followUpRate = 93.0;
    
    logAudit('asha', `ASHA (${a.workerName})`, "Completed 7-day checkup at Kharpudi. SpO2 97%, vitals normal. Case closed.", "Closed-Loop Verified");
    logAudit('ministry', "State Health Metrics Engine", "Closed case reflected in district aggregates. Referral completion: 88.2%", "Aggregated KPI Updated");
    showToast("Step 5: Follow-up complete! Case closed. Ministry analytics updated in real-time.", "success");
    selectRole('ministry');
  }
}

// =============================================================================
// 6. Dedicated Login Controllers
// =============================================================================
// 6. Dedicated Role-Based Authentication & Registration Handlers
// =============================================================================

// Switch between Login and Sign Up on any of the 4 unit cards
function switchUnitMode(role, mode) {
  const isLogin = mode === 'login';
  
  if (role === 'patient') {
    const tabLog = document.getElementById('pTabLogin');
    const tabSign = document.getElementById('pTabSignup');
    const viewLog = document.getElementById('patientLoginView');
    const viewSign = document.getElementById('patientSignupView');
    if (tabLog && tabSign) {
      tabLog.classList.toggle('active', isLogin);
      tabSign.classList.toggle('active', !isLogin);
    }
    if (viewLog && viewSign) {
      viewLog.style.display = isLogin ? 'flex' : 'none';
      viewSign.style.display = !isLogin ? 'flex' : 'none';
    }
  } else if (role === 'asha') {
    const tabLog = document.getElementById('aTabLogin');
    const tabSign = document.getElementById('aTabSignup');
    const viewLog = document.getElementById('ashaLoginView');
    const viewSign = document.getElementById('ashaSignupView');
    if (tabLog && tabSign) {
      tabLog.classList.toggle('active', isLogin);
      tabSign.classList.toggle('active', !isLogin);
    }
    if (viewLog && viewSign) {
      viewLog.style.display = isLogin ? 'flex' : 'none';
      viewSign.style.display = !isLogin ? 'flex' : 'none';
    }
  } else if (role === 'facility') {
    const tabLog = document.getElementById('fTabLogin');
    const tabSign = document.getElementById('fTabSignup');
    const viewLog = document.getElementById('facilityLoginView');
    const viewSign = document.getElementById('facilitySignupView');
    if (tabLog && tabSign) {
      tabLog.classList.toggle('active', isLogin);
      tabSign.classList.toggle('active', !isLogin);
    }
    if (viewLog && viewSign) {
      viewLog.style.display = isLogin ? 'flex' : 'none';
      viewSign.style.display = !isLogin ? 'flex' : 'none';
    }
  } else if (role === 'ministry') {
    const tabLog = document.getElementById('mTabLogin');
    const tabSign = document.getElementById('mTabSignup');
    const viewLog = document.getElementById('ministryLoginView');
    const viewSign = document.getElementById('ministrySignupView');
    if (tabLog && tabSign) {
      tabLog.classList.toggle('active', isLogin);
      tabSign.classList.toggle('active', !isLogin);
    }
    if (viewLog && viewSign) {
      viewLog.style.display = isLogin ? 'flex' : 'none';
      viewSign.style.display = !isLogin ? 'flex' : 'none';
    }
  }
}

// Subtab toggles within unit cards
function switchPatientLoginSubtab(type) {
  const isMobile = type === 'mobile';
  const tabMob = document.getElementById('tabPatientMobile');
  const tabAbha = document.getElementById('tabPatientAbha');
  const mobGroup = document.getElementById('patientMobileFieldGroup');
  const abhaGroup = document.getElementById('patientAbhaFieldGroup');
  
  if (tabMob && tabAbha) {
    tabMob.classList.toggle('active', isMobile);
    tabAbha.classList.toggle('active', !isMobile);
  }
  if (mobGroup && abhaGroup) {
    mobGroup.style.display = isMobile ? 'block' : 'none';
    abhaGroup.style.display = !isMobile ? 'block' : 'none';
  }
}

function switchAshaLoginSubtab(type) {
  const isPass = type === 'pass';
  const tabPass = document.getElementById('tabAshaPass');
  const tabOtp = document.getElementById('tabAshaOtp');
  const passGroup = document.getElementById('ashaPassGroup');
  const otpGroup = document.getElementById('ashaOtpGroup');

  if (tabPass && tabOtp) {
    tabPass.classList.toggle('active', isPass);
    tabOtp.classList.toggle('active', !isPass);
  }
  if (passGroup && otpGroup) {
    passGroup.style.display = isPass ? 'block' : 'none';
    otpGroup.style.display = !isPass ? 'block' : 'none';
  }
}

// 1. Patient Auth Handlers
function handlePatientLogin() {
  const mobInput = document.getElementById('patientMobileInput');
  const val = mobInput ? mobInput.value.replace(/\s+/g, '') : '';
  if (val.length < 10) {
    showToast("Please enter a valid 10-digit mobile number.", "alert");
    return;
  }
  showToast("OTP verified securely! Welcome, Ramesh Patil.", "success");
  logAudit('patient', "Patient (Ramesh Patil)", "Authenticated via Mobile OTP + ABHA Token", "Patient Consent Session");
  selectRole('patient');
}

function handlePatientSignup() {
  const name = document.getElementById('pRegName').value.trim();
  const mobile = document.getElementById('pRegMobile').value.trim();
  const consent = document.getElementById('pRegConsent').checked;

  if (!consent) {
    showToast("ABDM health record consent is required to register.", "alert");
    return;
  }
  if (name) GavArogyaState.patient.name = name;
  if (mobile) GavArogyaState.patient.mobile = "+91 " + mobile;

  showToast(`Welcome ${name || 'Citizen'}! ABHA ID generated & OTP verified.`, "success");
  logAudit('patient', `Patient (${name || 'New Citizen'})`, "Registered citizen account via ABDM OTP consent", "Citizen Consent Created");
  switchUnitMode('patient', 'login');
  selectRole('patient');
}

// 2. ASHA Worker Auth Handlers
function handleAshaLogin() {
  const workerId = document.getElementById('ashaWorkerId').value.trim();
  const pin = document.getElementById('ashaPin').value.trim();

  if (!workerId || pin.length < 4) {
    showToast("Please enter valid ASHA Worker ID and Village PIN.", "alert");
    return;
  }

  showToast(`Authenticated as Sunita Tai (Authorized ASHA Worker - Kharpudi).`, "success");
  logAudit('asha', "ASHA Worker (Sunita T.)", `Authenticated with Worker ID (${workerId}) + Village PIN`, "Authorized ASHA Worker Access");
  selectRole('asha');
}

function handleAshaSignup() {
  const name = document.getElementById('aRegName').value.trim();
  const subCenter = document.getElementById('aRegSubCenter').value.trim();
  const phc = document.getElementById('aRegPhc').value.trim();

  if (name) GavArogyaState.asha.workerName = name;
  if (subCenter) GavArogyaState.asha.villageCoverage = `${subCenter}, Satara`;

  showToast(`Accreditation submitted! Welcome ${name || 'ASHA Worker'} under NHM Maharashtra.`, "success");
  logAudit('asha', `ASHA Worker (${name || 'New Worker'})`, `Registered frontline accreditation at ${subCenter}`, "Authorized ASHA Worker Access");
  switchUnitMode('asha', 'login');
  selectRole('asha');
}

// 3. Healthcare Facility Auth Handlers
function handleFacilityLogin() {
  const fId = document.getElementById('facilityId').value.trim();
  const staffId = document.getElementById('staffId').value.trim();

  if (!fId || !staffId) {
    showToast("Please enter Facility ID and Authorized Staff ID.", "alert");
    return;
  }

  showToast(`Authenticated: District Hospital, Satara (${GavArogyaState.facility.staffName} - Authorized Facility Access).`, "success");
  logAudit('facility', `Facility User (${GavArogyaState.facility.staffName})`, `Authenticated with Facility ID (${fId}) + Staff Credentials`, "Authorized Facility Access");
  selectRole('facility');
}

function handleFacilitySignup() {
  const fName = document.getElementById('fRegName').value.trim();
  const hfr = document.getElementById('fRegHfr').value.trim();
  const icu = parseInt(document.getElementById('fRegIcu').value) || 2;
  const gen = parseInt(document.getElementById('fRegGen').value) || 14;

  if (fName) GavArogyaState.facility.facilityName = fName;
  GavArogyaState.facility.icuBedsFree = icu;
  GavArogyaState.facility.generalBedsFree = gen;

  showToast(`Facility ${fName || 'Hospital'} registered in ABDM HFR Registry! Bed telemetry live.`, "success");
  logAudit('facility', `Facility Registry (${fName || 'Hospital'})`, `Enrolled in ABDM HFR (${hfr}). Telemetry active.`, "Authorized Facility Access");
  switchUnitMode('facility', 'login');
  selectRole('facility');
}

// 4. Government / Ministry Auth Handlers
function handleMinistryLogin() {
  const email = document.getElementById('ministryEmail').value.trim();
  const mfa = document.getElementById('ministryMfa').value.trim();

  if (!email || mfa.length < 4) {
    showToast("Please enter official email and 6-digit GovKey MFA token.", "alert");
    return;
  }

  showToast("Authenticated: Govt. of Maharashtra Health Analytics Portal (GovKey MFA Verified).", "success");
  logAudit('ministry', "Ministry Analytics User", "Authenticated via Official Email + GovKey MFA Token", "Government Analytics Access");
  selectRole('ministry');
}

function handleMinistrySignup() {
  const name = document.getElementById('mRegName').value.trim();
  const desig = document.getElementById('mRegDesig').value.trim();
  const code = document.getElementById('mRegCode').value.trim();

  showToast(`Clearance approved for ${name || 'Officer'}! GovKey MFA provisioned.`, "success");
  logAudit('ministry', `Govt Officer (${name || 'Health Director'})`, `Cleared for Public Health Analytics Access (Code: ${code})`, "Government Analytics Access");
  switchUnitMode('ministry', 'login');
  selectRole('ministry');
}

// =============================================================================
// Prefill Helpers for Instant Demo Testing
// =============================================================================

function prefillDemoLogin(type) {
  if (type === 'patient') {
    switchUnitMode('patient', 'login');
    document.getElementById('patientMobileInput').value = "98220 12345";
    document.querySelectorAll('.otp-digit-input').forEach((inp, idx) => inp.value = ["4", "0", "9", "1"][idx]);
    showToast("Pre-filled demo credentials for Ramesh Patil (Mobile + OTP).", "info");
  } else if (type === 'asha') {
    switchUnitMode('asha', 'login');
    document.getElementById('ashaWorkerId').value = "ASHA-SAT-104";
    document.getElementById('ashaPassword').value = "AshaSecure@2026";
    document.getElementById('ashaPin').value = "415001";
    showToast("Pre-filled demo credentials for Sunita Tai (ASHA-SAT-104 + PIN).", "info");
  } else if (type === 'facility') {
    switchUnitMode('facility', 'login');
    document.getElementById('facilityId').value = "DH-SATARA-01";
    document.getElementById('staffId').value = "DOC-KULKARNI-77";
    document.getElementById('facilityPassword').value = "SataraDH#Pass9";
    showToast("Pre-filled demo credentials for District Hospital Satara (Dr. Kulkarni).", "info");
  } else if (type === 'ministry') {
    switchUnitMode('ministry', 'login');
    document.getElementById('ministryEmail').value = "director.health@maharashtra.gov.in";
    document.getElementById('ministryPassword').value = "MahaGovHealth*2026";
    document.getElementById('ministryMfa').value = "849201";
    showToast("Pre-filled demo credentials for State Health Director (MFA Token: 849201).", "info");
  }
}

function prefillDemoSignup(type) {
  if (type === 'patient') {
    switchUnitMode('patient', 'signup');
    document.getElementById('pRegName').value = "Ramesh Shankar Patil";
    document.getElementById('pRegMobile').value = "98220 12345";
    document.getElementById('pRegVillage').value = "Kharpudi, Satara";
    document.getElementById('pRegAge').value = "52, Male";
    document.getElementById('pRegAbha').value = "91-4820-1940-2218";
    document.getElementById('pRegConsent').checked = true;
    showToast("Pre-filled citizen registration details.", "info");
  } else if (type === 'asha') {
    switchUnitMode('asha', 'signup');
    document.getElementById('aRegName').value = "Sunita Suresh Jadhav";
    document.getElementById('aRegId').value = "ASHA-SAT-104";
    document.getElementById('aRegSubCenter').value = "Kharpudi Sub-Center";
    document.getElementById('aRegPhc').value = "Wadhe PHC, Satara";
    document.getElementById('aRegPin').value = "415001";
    document.getElementById('aRegPass').value = "AshaSecure@2026";
    showToast("Pre-filled ASHA worker accreditation details.", "info");
  } else if (type === 'facility') {
    switchUnitMode('facility', 'signup');
    document.getElementById('fRegName').value = "District Hospital, Satara";
    document.getElementById('fRegHfr').value = "HFR-MH-SAT-0042";
    document.getElementById('fRegTier').value = "DH";
    document.getElementById('fRegStaffId').value = "DOC-KULKARNI-77";
    document.getElementById('fRegPass').value = "SataraDH#Pass9";
    document.getElementById('fRegIcu').value = "12";
    document.getElementById('fRegGen').value = "120";
    showToast("Pre-filled ABDM HFR facility registration details.", "info");
  } else if (type === 'ministry') {
    switchUnitMode('ministry', 'signup');
    document.getElementById('mRegEmail').value = "director.health@maharashtra.gov.in";
    document.getElementById('mRegName').value = "Dr. Nitin Patil (IAS)";
    document.getElementById('mRegCode').value = "MH-GOV-PH-8812";
    document.getElementById('mRegDesig').value = "Director of Health Services, Maha Public Health Dept";
    document.getElementById('mRegPass').value = "MahaGovHealth*2026";
    showToast("Pre-filled Government Officer onboarding details.", "info");
  }
}

function setupLoginForms() {
  // Global event delegation or defaults if needed
}

// =============================================================================
// 7. Render Active Portal Component
// =============================================================================

function renderActivePortal() {
  const container = document.getElementById('portalDisplayContainer');
  if (!container) return;

  const role = GavArogyaState.activeRole;
  const isMr = GavArogyaState.currentLang === 'mr';
  const t = I18N[GavArogyaState.currentLang];
  const p = GavArogyaState.patient;
  const a = GavArogyaState.asha;
  const f = GavArogyaState.facility;
  const m = GavArogyaState.ministry;

  // Update top portal info bar
  const badgeElem = document.getElementById('portalActiveBadge');
  const titleElem = document.getElementById('portalActiveTitle');
  const subElem = document.getElementById('portalActiveSub');

  if (badgeElem && titleElem && subElem) {
    badgeElem.className = `portal-badge ${role}`;
    if (role === 'patient') {
      badgeElem.textContent = isMr ? "रुग्ण पोर्टल" : "PATIENT PORTAL";
      titleElem.textContent = isMr ? `सुप्रभात, ${p.nameMr}` : `Good morning, ${p.name}`;
      subElem.textContent = t.patientSecurityMsg;
    } else if (role === 'asha') {
      badgeElem.textContent = isMr ? "आशा सेविका पोर्टल" : "ASHA WORKER PORTAL";
      titleElem.textContent = isMr ? `नमस्कार, सुनिता ताई` : `Namaskar, Sunita Tai`;
      subElem.textContent = t.ashaAccessLabel;
    } else if (role === 'facility') {
      badgeElem.textContent = isMr ? "आरोग्य संस्था डॅशबोर्ड" : "HEALTHCARE FACILITY";
      titleElem.textContent = f.facilityName;
      subElem.textContent = t.facilityAccessLabel;
    } else if (role === 'ministry') {
      badgeElem.textContent = isMr ? "मंत्रालय / शासन डॅशबोर्ड" : "MINISTRY DASHBOARD";
      titleElem.textContent = isMr ? "सार्वजनिक आरोग्य विभाग, महाराष्ट्र शासन" : "Public Health Department, Govt. of Maharashtra";
      subElem.textContent = t.ministryAccessLabel;
    }
  }

  // Render Portal Body HTML
  if (role === 'patient') {
    container.innerHTML = getPatientPortalHTML();
  } else if (role === 'asha') {
    container.innerHTML = getAshaPortalHTML();
  } else if (role === 'facility') {
    container.innerHTML = getFacilityPortalHTML();
  } else if (role === 'ministry') {
    container.innerHTML = getMinistryPortalHTML();
  }

  attachPortalInteractiveEvents();
}

// -----------------------------------------------------------------------------
// 7.1 Patient Portal HTML (Mobile-First)
// -----------------------------------------------------------------------------
function getPatientPortalHTML() {
  const p = GavArogyaState.patient;
  const isMr = GavArogyaState.currentLang === 'mr';
  const t = I18N[GavArogyaState.currentLang];
  const expandedClass = GavArogyaState.isMobileFrameExpanded ? 'expanded' : '';

  // Generate visual 9-stage timeline
  const timelineHTML = STAGES.map(stage => {
    let statusClass = "";
    if (stage.index < p.currentStageIndex) statusClass = "completed";
    else if (stage.index === p.currentStageIndex) statusClass = "active";
    
    return `
      <div class="timeline-step ${statusClass}">
        <div class="step-node"></div>
        <div class="step-info">
          <div class="step-name">${isMr ? stage.nameMr : stage.name}</div>
          <div class="step-subtext">${stage.subtext}</div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="mobile-device-wrapper ${expandedClass}" id="patientMobileFrame">
      <div class="mobile-screen-inner">
        <!-- Mobile Status Bar -->
        <div class="mobile-statusbar">
          <span>09:41</span>
          <span>GavArogya 5G • 🔒 ABDM</span>
          <span>98% 🔋</span>
        </div>

        <!-- Mobile Header -->
        <div class="mobile-header">
          <div class="mobile-header-left">
            <div class="mobile-patient-avatar">RP</div>
            <div class="mobile-header-text">
              <h4>${isMr ? p.nameMr : p.name}</h4>
              <p>ABHA: ${p.abhaId}</p>
            </div>
          </div>
          <button class="portal-view-toggle-btn" onclick="toggleMobileFrameWidth()">
            ${GavArogyaState.isMobileFrameExpanded ? '📱 Phone View' : '🖥️ Wide View'}
          </button>
        </div>

        <!-- Scrollable Body -->
        <div class="mobile-scroll-body">
          <!-- Case Status Banner -->
          <div class="case-status-card">
            <div class="case-status-header">
              <span class="case-status-label">${t.currentCaseStatus}</span>
              <span class="case-status-pill ${p.statusBadgeClass}">${p.statusLabel}</span>
            </div>
            <div class="case-status-summary">
              ${p.symptoms}
            </div>
            <div class="case-status-meta">
              📍 ${p.assignedFacility} • 🚑 Arrival in ${p.estimatedArrival}
            </div>
          </div>

          <!-- 9-Stage Visual Patient Journey Timeline -->
          <div class="timeline-section">
            <div class="timeline-title-row">
              <h5>${isMr ? 'रुग्ण प्रवास प्रगती (९ टप्पे)' : 'Patient Journey Timeline (9 Stages)'}</h5>
              <span style="font-size: 0.72rem; color: var(--teal-700); font-weight: 700;">Stage ${p.currentStageIndex} of 9</span>
            </div>
            <div class="timeline-track-wrap">
              ${timelineHTML}
            </div>
          </div>

          <!-- Primary Actions (4 Cards as requested) -->
          <div>
            <h5 style="font-size: 0.8rem; font-weight: 800; margin-bottom: 8px; color: var(--slate-700);">
              ${isMr ? 'त्वरित कृती' : 'Primary Actions'}
            </h5>
            <div class="primary-actions-grid">
              <button class="action-card-btn" onclick="openAskHelpModal()">
                <div class="action-icon-circle ask">➕</div>
                <div class="action-card-title">${t.askForHelp}</div>
              </button>
              <button class="action-card-btn" onclick="openConsultDoctorModal()">
                <div class="action-icon-circle consult">🩺</div>
                <div class="action-card-title">${t.consultDoctor}</div>
              </button>
              <button class="action-card-btn" onclick="openContactAshaModal()">
                <div class="action-icon-circle asha">👤</div>
                <div class="action-card-title">${t.contactAsha}</div>
              </button>
              <button class="action-card-btn" onclick="triggerEmergency108()">
                <div class="action-icon-circle emergency">108</div>
                <div class="action-card-title">${t.emergencyHelp}</div>
              </button>
            </div>
          </div>

          <!-- Secondary Actions -->
          <div class="secondary-actions-grid">
            <div class="sec-action-card" onclick="openCarePassportModal()">
              <div class="sec-action-icon">🎫</div>
              <div class="sec-action-title">${t.carePassport}</div>
            </div>
            <div class="sec-action-card" onclick="openReferralsModal()">
              <div class="sec-action-icon">📋</div>
              <div class="sec-action-title">${t.myReferrals}</div>
            </div>
            <div class="sec-action-card" onclick="openFollowUpsModal()">
              <div class="sec-action-icon">📅</div>
              <div class="sec-action-title">${t.followUps}</div>
            </div>
            <div class="sec-action-card" onclick="openHealthTipsModal()">
              <div class="sec-action-icon">💡</div>
              <div class="sec-action-title">${t.healthTips}</div>
            </div>
          </div>

          <!-- Upcoming Follow-up Card -->
          <div style="background: var(--amber-50); border: 1px solid var(--amber-200); border-radius: var(--radius-lg); padding: 12px; display: flex; align-items: center; gap: 10px;">
            <div style="font-size: 1.3rem;">⏰</div>
            <div style="font-size: 0.76rem; color: var(--amber-900);">
              <strong>${isMr ? 'आगामी पाठपुरावा तपासणी' : 'Upcoming Follow-up Checkup'}</strong><br>
              ${p.followUpDueDate} with ${p.assignedAsha}
            </div>
          </div>
        </div>

        <!-- Mobile Bottom Nav -->
        <div class="mobile-bottom-nav">
          <button class="nav-tab-btn active"><span class="nav-tab-icon">🏠</span><span>Home</span></button>
          <button class="nav-tab-btn" onclick="openReferralsModal()"><span class="nav-tab-icon">📋</span><span>Referrals</span></button>
          <button class="nav-tab-btn" onclick="openCarePassportModal()"><span class="nav-tab-icon">🎫</span><span>Passport</span></button>
          <button class="nav-tab-btn" onclick="openPatientProfileModal()"><span class="nav-tab-icon">👤</span><span>Profile</span></button>
        </div>
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// 7.2 ASHA Worker Portal HTML (Mobile-First, Offline Ready)
// -----------------------------------------------------------------------------
function getAshaPortalHTML() {
  const a = GavArogyaState.asha;
  const p = GavArogyaState.patient;
  const isMr = GavArogyaState.currentLang === 'mr';
  const expandedClass = GavArogyaState.isMobileFrameExpanded ? 'expanded' : '';

  let syncClass = "online";
  let syncText = isMr ? "ऑनलाइन • सिंक झाले" : "ONLINE • Synced";
  if (a.isOffline) {
    syncClass = "offline";
    syncText = isMr ? `ऑफलाइन • ${a.pendingSyncCount} नोंदी प्रलंबित` : `OFFLINE • ${a.pendingSyncCount} Records Pending Sync`;
  } else if (a.syncStatus === "SYNCING") {
    syncClass = "syncing";
    syncText = isMr ? "समक्रमण सुरू आहे..." : "Syncing records...";
  }

  return `
    <div class="mobile-device-wrapper ${expandedClass}" id="ashaMobileFrame">
      <div class="mobile-screen-inner asha-screen">
        <!-- Status Bar -->
        <div class="mobile-statusbar">
          <span>09:41</span>
          <span>ASHA Connect • Satara Rural</span>
          <span>88% 🔋</span>
        </div>

        <!-- Offline Simulation Banner -->
        <div class="asha-offline-banner ${syncClass}" onclick="toggleAshaOffline()">
          <div class="offline-status-left">
            <span>${a.isOffline ? '⚡' : '📶'}</span>
            <span>${syncText}</span>
          </div>
          <button class="offline-toggle-btn">
            ${a.isOffline ? (isMr ? 'सिंक करा' : 'Sync Now') : (isMr ? 'ऑफलाइन चाचणी' : 'Test Offline')}
          </button>
        </div>

        <!-- ASHA Header -->
        <div class="mobile-header">
          <div class="mobile-header-left">
            <div class="asha-user-avatar">ST</div>
            <div class="mobile-header-text">
              <h4>${isMr ? 'नमस्कार, सुनिता ताई' : 'Namaskar, Sunita Tai'}</h4>
              <p>${a.workerId} • ${a.villageCoverage}</p>
            </div>
          </div>
          <button class="portal-view-toggle-btn" onclick="toggleMobileFrameWidth()">
            ${GavArogyaState.isMobileFrameExpanded ? '📱 Phone View' : '🖥️ Wide View'}
          </button>
        </div>

        <!-- Scrollable Content -->
        <div class="mobile-scroll-body">
          <!-- ASHA Tabs -->
          <div class="asha-tabs-row">
            <button class="asha-tab ${a.activeTab === 'today' ? 'active' : ''}" onclick="setAshaTab('today')">
              ${isMr ? 'आजची कामे (२)' : "Today's Tasks (2)"}
            </button>
            <button class="asha-tab ${a.activeTab === 'pending' ? 'active' : ''}" onclick="setAshaTab('pending')">
              ${isMr ? 'प्रलंबित (१)' : 'Pending (1)'}
            </button>
            <button class="asha-tab ${a.activeTab === 'completed' ? 'active' : ''}" onclick="setAshaTab('completed')">
              ${isMr ? 'पूर्ण झालेले (४)' : 'Completed (4)'}
            </button>
          </div>

          <!-- Task Card 1: New Patient Request (Ramesh Patil) -->
          <div class="asha-patient-card">
            <div class="asha-card-top">
              <div class="asha-card-user">
                <div class="asha-user-avatar">RP</div>
                <div class="asha-user-meta">
                  <h5>${p.name}</h5>
                  <p>Kharpudi • Age ${p.age} • GA-240184</p>
                </div>
              </div>
              <span class="risk-pill high">HIGH RISK</span>
            </div>

            <div class="symptom-quote-box">
              <strong>${isMr ? 'लक्षणे:' : 'Reported Symptoms:'}</strong> ${p.symptoms}
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--slate-600); background: var(--slate-50); padding: 6px 10px; border-radius: var(--radius-sm);">
              <span>SpO2: <strong>${p.vitals.spo2}</strong></span>
              <span>BP: <strong>${p.vitals.bp}</strong></span>
              <span>Pulse: <strong>${p.vitals.pulse}</strong></span>
              <span>RR: <strong>${p.vitals.respRate}</strong></span>
            </div>

            <div class="asha-card-actions">
              <button class="asha-btn-sm accept" onclick="openAshaVitalsModal()">
                ${isMr ? 'तपासणी व निकड नोंदणी' : 'Record Vitals & Triage'}
              </button>
              <button class="asha-btn-sm outline" onclick="callPatientSim('${p.mobile}')">
                📞 Call Patient
              </button>
            </div>
          </div>

          <!-- Task Card 2: 7-Day Follow-Up Task -->
          <div class="asha-patient-card">
            <div class="asha-card-top">
              <div class="asha-card-user">
                <div class="asha-user-avatar" style="background: var(--blue-100); color: var(--blue-800);">SK</div>
                <div class="asha-user-meta">
                  <h5>Savitri Kale</h5>
                  <p>Wadhe Village • 7-day post discharge checkup</p>
                </div>
              </div>
              <span class="risk-pill medium">DUE TODAY</span>
            </div>

            <p style="font-size: 0.74rem; color: var(--slate-600);">
              Hospital treatment completed on Sept 05. Verify breathing, medicine compliance and BP stability.
            </p>

            <div class="asha-card-actions">
              <button class="asha-btn-sm accept" style="background: var(--teal-700);" onclick="completeFollowUpSim('Savitri Kale')">
                ✓ ${isMr ? 'तपासणी पूर्ण करा' : 'Mark Follow-up Complete'}
              </button>
              <button class="asha-btn-sm outline" onclick="showToast('Opened Savitri Kale Care History', 'info')">
                📄 View History
              </button>
            </div>
          </div>

          <!-- Task Card 3: Pending Assessment -->
          <div class="asha-patient-card">
            <div class="asha-card-top">
              <div class="asha-card-user">
                <div class="asha-user-avatar" style="background: var(--amber-100); color: var(--amber-800);">LP</div>
                <div class="asha-user-meta">
                  <h5>Laxman Pawar</h5>
                  <p>Kharpudi • Reported Fever & persistent cough</p>
                </div>
              </div>
              <span class="risk-pill medium">AMBER RISK</span>
            </div>
            <div class="asha-card-actions">
              <button class="asha-btn-sm outline" onclick="showToast('Laxman Pawar assessment opened', 'info')">
                ${isMr ? 'तपासणी सुरू करा' : 'Start Assessment'}
              </button>
            </div>
          </div>
        </div>

        <!-- ASHA Bottom Nav -->
        <div class="mobile-bottom-nav">
          <button class="nav-tab-btn active"><span class="nav-tab-icon">🏠</span><span>Tasks</span></button>
          <button class="nav-tab-btn" onclick="showToast('Assigned Patients list: 24 active in Kharpudi', 'info')"><span class="nav-tab-icon">👥</span><span>Patients</span></button>
          <button class="nav-tab-btn" onclick="openAshaVitalsModal()"><span class="nav-tab-icon">➕</span><span>New Record</span></button>
          <button class="nav-tab-btn" onclick="toggleAshaOffline()"><span class="nav-tab-icon">🔄</span><span>Sync</span></button>
        </div>
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// 7.3 Healthcare Facility Dashboard HTML (Desktop-First)
// -----------------------------------------------------------------------------
function getFacilityPortalHTML() {
  const f = GavArogyaState.facility;
  const p = GavArogyaState.patient;
  const isMr = GavArogyaState.currentLang === 'mr';

  return `
    <div class="facility-desktop-grid">
      <!-- Top Metrics Row -->
      <div class="facility-metrics-row">
        <div class="stat-card">
          <div class="stat-card-label">${isMr ? 'नवीन रेफरल्स' : 'Incoming Referrals'}</div>
          <div class="stat-card-val">${f.incomingReferralsCount}</div>
          <div class="stat-card-sub">↑ 2 from rural PHCs in last hour</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">${isMr ? 'तातडीचे रुग्ण (Emergency)' : 'Emergency Cases'}</div>
          <div class="stat-card-val emergency">${f.emergencyCasesCount}</div>
          <div class="stat-card-sub">🚨 Immediate triage required</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">${isMr ? 'आज अपेक्षित रुग्ण' : 'Patients Expected Today'}</div>
          <div class="stat-card-val">${f.patientsTodayCount}</div>
          <div class="stat-card-sub">18 OPD • 6 IPD Referrals</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-label">${isMr ? 'खाटांची व्याप्यता' : 'Bed Occupancy'}</div>
          <div class="stat-card-val occupancy">${f.bedOccupancyPercent}%</div>
          <div class="stat-card-sub">${f.icuBedsFree} ICU beds free • ${f.generalBedsFree} General</div>
        </div>
      </div>

      <!-- Main Operational Grid -->
      <div class="facility-main-layout">
        <!-- Left: Incoming Referrals List -->
        <div class="facility-panel">
          <div class="panel-header">
            <h4>${isMr ? 'सक्रिय रेफरल यादी व व्यवस्थापन' : 'Active Incoming Referrals & Triage'}</h4>
            <span style="font-size: 0.78rem; color: var(--slate-500);">Live Satara District Hub</span>
          </div>

          <!-- Referral Item: Ramesh Patil -->
          <div class="incoming-referral-item" style="border-left: 4px solid var(--rose-600);">
            <div class="referral-row-top">
              <div class="patient-id-badge">
                <h5>${p.name}</h5>
                <span>${p.id}</span>
                <span class="risk-pill high">RED RISK</span>
              </div>
              <span style="font-size: 0.78rem; font-weight: 700; color: var(--rose-600);">
                🚑 Expected Arrival: ${p.estimatedArrival}
              </span>
            </div>

            <div class="referral-reason-text">
              <strong>Referral Reason:</strong> ${p.symptoms} (Hypoxia SpO2 89%, RR 28/min). Referred by ASHA Sunita Tai (Kharpudi Sub-Center).
            </div>

            <div class="referral-actions-bar">
              <button class="btn-facility-action passport" onclick="openCarePassportModal()">
                🎫 View Care Passport (Authorized)
              </button>
              
              ${!f.referralAccepted ? `
                <button class="btn-facility-action accept" onclick="facilityAcceptReferral()">
                  ✓ Accept Referral & Reserve Bed
                </button>
                <button class="btn-facility-action redirect" onclick="facilityRedirectReferral()">
                  ↪ Redirect Referral
                </button>
              ` : `
                <button class="btn-facility-action treat" onclick="facilityMarkTreated()">
                  ${f.treatmentDone ? '✓ Treatment Completed (Discharged)' : '⚡ Mark Treatment Completed'}
                </button>
              `}
            </div>
          </div>

          <!-- Referral Item 2: Savitri Kale -->
          <div class="incoming-referral-item" style="border-left: 4px solid var(--amber-500);">
            <div class="referral-row-top">
              <div class="patient-id-badge">
                <h5>Savitri Kale</h5>
                <span>GA-240185</span>
                <span class="risk-pill medium">AMBER RISK</span>
              </div>
              <span style="font-size: 0.78rem; color: var(--slate-500);">Arrived • In OPD Room 4</span>
            </div>
            <div class="referral-reason-text">
              <strong>Referral Reason:</strong> Uncontrolled Hypertension (BP 164/102 mmHg) & Dizziness.
            </div>
            <div class="referral-actions-bar">
              <button class="btn-facility-action passport" onclick="showToast('Authorized Care Passport: Savitri Kale vitals verified.', 'security')">
                🎫 View Care Passport
              </button>
              <button class="btn-facility-action accept" onclick="showToast('Savitri Kale assigned to Dr. Deshmukh (OPD 4)', 'success')">
                Assign Doctor
              </button>
            </div>
          </div>
        </div>

        <!-- Right: Facility Capacity & Resource Management -->
        <div class="facility-panel">
          <div class="panel-header">
            <h4>${isMr ? 'संसाधन व क्षमता नियंत्रण' : 'Capacity & Specialists'}</h4>
          </div>

          <div class="capacity-item">
            <div class="capacity-info">
              <h6>ICU Beds Free</h6>
              <p>Critical care emergency reserve</p>
            </div>
            <div class="capacity-toggle-group">
              <button class="cap-counter-btn" onclick="updateBeds('icu', -1)">-</button>
              <span class="cap-val-display" id="icuBedCount">${f.icuBedsFree}</span>
              <button class="cap-counter-btn" onclick="updateBeds('icu', 1)">+</button>
            </div>
          </div>

          <div class="capacity-item">
            <div class="capacity-info">
              <h6>General Ward Beds</h6>
              <p>Male & Female ward availability</p>
            </div>
            <div class="capacity-toggle-group">
              <button class="cap-counter-btn" onclick="updateBeds('general', -1)">-</button>
              <span class="cap-val-display" id="genBedCount">${f.generalBedsFree}</span>
              <button class="cap-counter-btn" onclick="updateBeds('general', 1)">+</button>
            </div>
          </div>

          <div class="capacity-item">
            <div class="capacity-info">
              <h6>Cardiologist On-Call</h6>
              <p>Dr. V. Joshi (Available 24/7)</p>
            </div>
            <span class="risk-pill low">ACTIVE</span>
          </div>

          <div class="capacity-item">
            <div class="capacity-info">
              <h6>Pulmonologist Specialist</h6>
              <p>Dr. Sneha R. (In-Transit from Karad)</p>
            </div>
            <span class="risk-pill medium">IN-TRANSIT</span>
          </div>

          <div style="margin-top: 18px; padding: 12px; background: var(--blue-50); border: 1px solid var(--blue-200); border-radius: var(--radius-md); font-size: 0.76rem; color: var(--blue-900);">
            🔒 <strong>Strict RBAC Enforcement:</strong> Facility staff can only view patients with authorized incoming referrals to Satara DH. Statewide records and unrelated districts are masked.
          </div>
        </div>
      </div>
    </div>
  `;
}

// -----------------------------------------------------------------------------
// 7.4 Ministry Dashboard HTML (Desktop-First, Anonymized & Aggregated)
// -----------------------------------------------------------------------------
function getMinistryPortalHTML() {
  const m = GavArogyaState.ministry;
  const isMr = GavArogyaState.currentLang === 'mr';
  const t = I18N[GavArogyaState.currentLang];

  const districtListHTML = m.districts.map(d => `
    <div class="gap-item">
      <div class="gap-left">
        <h6>${d.name} (${d.code})</h6>
        <p>${d.activeCases} active cases • Avg Turnaround: ${d.avgTime}</p>
      </div>
      <span class="gap-tag ${d.colorClass === 'red' ? 'alert' : (d.colorClass === 'amber' ? 'warn' : 'good')}">
        ${d.delay} Delay
      </span>
    </div>
  `).join('');

  return `
    <div class="ministry-desktop-grid">
      <!-- 4 Core Aggregated KPIs -->
      <div class="ministry-kpis-grid">
        <div class="ministry-kpi-card">
          <div class="stat-card-label">${t.activeCases}</div>
          <div class="stat-card-val">${m.activeCases.toLocaleString()}</div>
          <div class="kpi-trend up">↑ 12% vs last month</div>
        </div>
        <div class="ministry-kpi-card">
          <div class="stat-card-label">${t.referralCompletion}</div>
          <div class="stat-card-val">${m.referralCompletionRate}%</div>
          <div class="kpi-trend up">↑ 8% closed-loop success</div>
        </div>
        <div class="ministry-kpi-card">
          <div class="stat-card-label">${t.avgReferralTime}</div>
          <div class="stat-card-val">${m.avgReferralHours}h ${m.avgReferralMins}m</div>
          <div class="kpi-trend up" style="color: var(--teal-700);">↓ 26% faster dispatch</div>
        </div>
        <div class="ministry-kpi-card">
          <div class="stat-card-label">${t.followUpCompletion}</div>
          <div class="stat-card-val">${m.followUpRate}%</div>
          <div class="kpi-trend up">↑ 10% ASHA adherence</div>
        </div>
      </div>

      <!-- Main Analytics Layout: Heatmap + Capability Gaps -->
      <div class="ministry-analytics-layout">
        <!-- Left: Interactive Maharashtra Heatmap & Districts -->
        <div class="heatmap-card">
          <div class="panel-header">
            <h4>${t.districtHeatmap}</h4>
            <span style="font-size: 0.78rem; color: var(--purple-700); font-weight: 700;">Maharashtra State View</span>
          </div>

          <!-- Visual Heatmap Representation with SVG -->
          <div class="heatmap-svg-container">
            <svg viewBox="0 0 500 320" width="100%" height="220" style="max-height: 240px;">
              <!-- Stylized Regional Polygons of Maharashtra -->
              <!-- Konkan / Mumbai / Ratnagiri -->
              <path d="M 40 120 L 70 120 L 85 190 L 75 250 L 50 250 Z" fill="#129a85" opacity="0.85" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Ratnagiri', 'Normal', 64)"/>
              <text x="50" y="180" fill="#fff" font-size="10" font-weight="700">Ratnagiri</text>
              
              <!-- Western Maharashtra / Pune / Satara / Solapur -->
              <path d="M 70 120 L 160 110 L 180 180 L 140 240 L 85 190 Z" fill="#d97706" opacity="0.85" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Satara', 'Moderate', 94)"/>
              <text x="110" y="165" fill="#fff" font-size="12" font-weight="800">Satara (DH)</text>
              <text x="110" y="135" fill="#fff" font-size="11" font-weight="700">Pune</text>

              <path d="M 160 110 L 250 120 L 240 210 L 180 180 Z" fill="#d97706" opacity="0.8" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Solapur', 'Moderate', 112)"/>
              <text x="190" y="160" fill="#fff" font-size="10" font-weight="700">Solapur</text>

              <!-- North Maharashtra / Nashik / Nandurbar -->
              <path d="M 90 40 L 190 40 L 210 110 L 140 110 L 70 70 Z" fill="#e11d48" opacity="0.85" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Nandurbar', 'High', 78)"/>
              <text x="115" y="75" fill="#fff" font-size="11" font-weight="700">Nandurbar (High Delay)</text>
              <text x="140" y="95" fill="#fff" font-size="10" font-weight="600">Nashik</text>

              <!-- Marathwada & Vidarbha / Gadchiroli -->
              <path d="M 210 60 L 360 40 L 380 130 L 250 140 L 210 110 Z" fill="#129a85" opacity="0.8" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Amravati/Nagpur', 'Normal', 140)"/>
              <text x="270" y="85" fill="#fff" font-size="11" font-weight="700">Nagpur & Amravati</text>

              <path d="M 360 40 L 480 70 L 470 210 L 370 170 L 380 130 Z" fill="#e11d48" opacity="0.9" stroke="#fff" stroke-width="2" onclick="inspectDistrict('Gadchiroli', 'High', 86)"/>
              <text x="400" y="120" fill="#fff" font-size="11" font-weight="800">Gadchiroli (High Delay)</text>
            </svg>
          </div>

          <div class="heatmap-legend">
            <div class="legend-chip">
              <span class="legend-dot red"></span>
              <span>High Referral Delay (>6 hrs)</span>
            </div>
            <div class="legend-chip">
              <span class="legend-dot amber"></span>
              <span>Moderate Delay (3-6 hrs)</span>
            </div>
            <div class="legend-chip">
              <span class="legend-dot teal"></span>
              <span>Normal (<3 hrs)</span>
            </div>
          </div>

          <div class="anonymized-notice-box">
            🛡️ <strong>Privacy Protection Enforced:</strong> All ministry analytics are 100% anonymized and aggregated at district and facility level. No individual patient identities, names, or contact details are stored or displayed.
          </div>
        </div>

        <!-- Right: Capability Gaps & Medicine Stockouts -->
        <div class="gaps-and-stocks-col">
          <!-- District Breakdown -->
          <div class="facility-panel">
            <div class="panel-header">
              <h4>${isMr ? 'जिल्हानिहाय कामगिरी' : 'District Turnaround Performance'}</h4>
            </div>
            <div>
              ${districtListHTML}
            </div>
          </div>

          <!-- Medicine Stockout Alert (e-Aushadhi) -->
          <div class="facility-panel">
            <div class="panel-header">
              <h4>${t.medicineRisk}</h4>
              <span class="risk-pill high">3 CRITICAL</span>
            </div>
            <div class="gap-item">
              <div class="gap-left">
                <h6>Salbutamol Inhaler (100mcg)</h6>
                <p>Nandurbar & Satara rural sub-centers • 12% stock</p>
              </div>
              <span class="gap-tag alert">Restock Urgently</span>
            </div>
            <div class="gap-item">
              <div class="gap-left">
                <h6>Anti-Snake Venom (Lyophilized)</h6>
                <p>Gadchiroli forest primary centers • 18% stock</p>
              </div>
              <span class="gap-tag alert">Dispatch Route</span>
            </div>
            <div class="gap-item">
              <div class="gap-left">
                <h6>Paracetamol Pediatric Drops</h6>
                <p>Statewide stock healthy (94% availability)</p>
              </div>
              <span class="gap-tag good">Normal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// =============================================================================
// 8. Interactive Modals & Workflow Actions
// =============================================================================

function attachPortalInteractiveEvents() {
  // Any dynamically mounted button event bindings if needed
}

function toggleMobileFrameWidth() {
  GavArogyaState.isMobileFrameExpanded = !GavArogyaState.isMobileFrameExpanded;
  renderActivePortal();
}

// Patient Modal Actions
function openAskHelpModal() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Ask for Healthcare Assistance";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <p style="font-size: 0.85rem; color: var(--slate-600);">
        Describe your current symptoms or emergency. Your assigned ASHA worker <strong>(Sunita Tai - Kharpudi)</strong> will receive an immediate notification.
      </p>
      <div>
        <label class="form-label">What symptoms are you experiencing?</label>
        <textarea id="patientHelpInput" rows="3" class="form-input" style="resize: vertical;">Severe chest heaviness, breathing difficulty, dizziness since 30 mins.</textarea>
      </div>
      <div style="font-size: 0.75rem; color: var(--teal-800); background: var(--teal-50); padding: 8px; border-radius: var(--radius-sm);">
        ℹ️ By submitting, you grant temporary authorization to your ASHA worker to review your basic health profile.
      </div>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Cancel</button>
    <button class="btn-facility-action accept" onclick="submitPatientHelpRequest()">Submit Urgent Request</button>
  `;
  modal.classList.add('open');
}

function submitPatientHelpRequest() {
  const text = document.getElementById('patientHelpInput')?.value || "Breathing difficulty";
  GavArogyaState.patient.symptoms = text;
  GavArogyaState.patient.currentStageIndex = 1;
  GavArogyaState.patient.statusLabel = "Assistance Requested";
  GavArogyaState.patient.statusBadgeClass = "requested";

  logAudit('patient', `Patient (${GavArogyaState.patient.name})`, `Submitted urgent request: "${text}"`, "Patient Initiated");
  closeModal();
  renderActivePortal();
  showToast("Request submitted! Sunita Tai (ASHA) notified immediately.", "success");
}

function openConsultDoctorModal() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "eSanjeevani Teleconsultation";
  body.innerHTML = `
    <div style="text-align: center; padding: 10px 0;">
      <div style="font-size: 2.5rem; margin-bottom: 10px;">🩺</div>
      <h5 style="font-weight: 800; font-size: 1.1rem; color: var(--teal-950); margin-bottom: 6px;">Connecting with Dr. A. Kulkarni</h5>
      <p style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 14px;">MD Medicine • Satara District Hospital Tele-Hub</p>
      <div style="background: var(--slate-50); border: 1px solid var(--slate-200); padding: 10px; border-radius: var(--radius-md); font-size: 0.78rem; text-align: left; margin-bottom: 12px;">
        ✓ Audio/Video link encrypted via WebRTC<br>
        ✓ Care Passport vitals pre-shared with consent token
      </div>
      <div style="color: var(--teal-700); font-weight: 700; font-size: 0.85rem;" class="pulse-dot"></div> Teleconsult Room Ready
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Close</button>
    <button class="btn-facility-action accept" onclick="startTeleCallSim()">Join Call Now</button>
  `;
  modal.classList.add('open');
}

function startTeleCallSim() {
  logAudit('patient', `Patient (${GavArogyaState.patient.name})`, "Joined encrypted eSanjeevani Teleconsultation session with Dr. Kulkarni", "Consent Logged");
  closeModal();
  showToast("eSanjeevani call connected. Tele-prescription linked to Care Passport.", "success");
}

function openContactAshaModal() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Contact Your Assigned ASHA Worker";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <div style="display: flex; align-items: center; gap: 14px;">
        <div class="asha-user-avatar" style="width: 50px; height: 50px; font-size: 1.2rem;">ST</div>
        <div>
          <h5 style="font-weight: 800; font-size: 1.05rem;">Sunita Tai</h5>
          <p style="font-size: 0.82rem; color: var(--slate-500);">ASHA ID: ASHA-SAT-104 • Kharpudi Village</p>
          <p style="font-size: 0.82rem; color: var(--teal-800); font-weight: 700;">Mobile: +91 98234 56789</p>
        </div>
      </div>
      <div style="background: var(--emerald-50); border: 1px solid var(--emerald-200); padding: 10px; border-radius: var(--radius-md); font-size: 0.78rem; color: var(--emerald-950);">
        Sunita Tai is currently in Kharpudi Ward 2 conducting door-to-door follow-up checks.
      </div>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Close</button>
    <button class="btn-facility-action accept" style="background: var(--emerald-600);" onclick="callPatientSim('+91 98234 56789')">Call Sunita Tai</button>
  `;
  modal.classList.add('open');
}

function triggerEmergency108() {
  logAudit('patient', `Patient (${GavArogyaState.patient.name})`, "Triggered MEMS 108 Emergency Ambulance Dispatch", "Emergency Beacon");
  showToast("MEMS 108 Emergency Beacon Activated! Satara Ambulance MH-11-EM-401 dispatched.", "alert");
}

// Care Passport Modal
function openCarePassportModal() {
  const p = GavArogyaState.patient;
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "GavArogya Care Passport (ABDM Compliant)";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <!-- QR & ABHA Banner -->
      <div style="display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, #0c7a67, #064e43); color: #fff; padding: 14px; border-radius: var(--radius-lg);">
        <div>
          <h5 style="font-size: 1.05rem; font-weight: 800;">${p.name}</h5>
          <p style="font-size: 0.78rem; opacity: 0.9;">ABHA ID: ${p.abhaId}</p>
          <p style="font-size: 0.72rem; opacity: 0.8;">Case Token: ${p.id} • Age ${p.age} M</p>
        </div>
        <div style="background: #fff; padding: 6px; border-radius: var(--radius-md); text-align: center;">
          <svg viewBox="0 0 100 100" width="64" height="64">
            <!-- Simulated QR Code SVG -->
            <rect width="100" height="100" fill="#fff"/>
            <rect x="10" y="10" width="30" height="30" fill="#0c7a67"/>
            <rect x="16" y="16" width="18" height="18" fill="#fff"/>
            <rect x="20" y="20" width="10" height="10" fill="#0c7a67"/>
            <rect x="60" y="10" width="30" height="30" fill="#0c7a67"/>
            <rect x="66" y="16" width="18" height="18" fill="#fff"/>
            <rect x="70" y="20" width="10" height="10" fill="#0c7a67"/>
            <rect x="10" y="60" width="30" height="30" fill="#0c7a67"/>
            <rect x="16" y="66" width="18" height="18" fill="#fff"/>
            <rect x="20" y="70" width="10" height="10" fill="#0c7a67"/>
            <rect x="45" y="45" width="12" height="12" fill="#0c7a67"/>
            <rect x="65" y="65" width="20" height="20" fill="#0c7a67"/>
          </svg>
          <span style="font-size: 0.6rem; color: #0c7a67; font-weight: 800; display: block;">VERIFIED</span>
        </div>
      </div>

      <!-- Authorized Referral Summary (Minimal Data Exposure) -->
      <div>
        <h6 style="font-size: 0.8rem; font-weight: 800; color: var(--slate-800); margin-bottom: 6px;">Authorized Referral Summary (Relevant Only)</h6>
        <div style="background: var(--slate-50); border: 1px solid var(--slate-200); border-radius: var(--radius-md); padding: 10px; font-size: 0.78rem;">
          <div><strong>Primary Condition:</strong> ${p.symptoms}</div>
          <div><strong>Risk Level:</strong> <span class="risk-pill high">RED RISK</span></div>
          <div><strong>Target Hospital:</strong> ${p.assignedFacility}</div>
        </div>
      </div>

      <!-- Sealed Vitals -->
      <div>
        <h6 style="font-size: 0.8rem; font-weight: 800; color: var(--slate-800); margin-bottom: 6px;">Sealed Frontline Vitals</h6>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; font-size: 0.76rem;">
          <div style="background: var(--rose-50); border: 1px solid var(--rose-200); padding: 6px 8px; border-radius: var(--radius-sm);">
            SpO2: <strong style="color: var(--rose-700);">${p.vitals.spo2}</strong>
          </div>
          <div style="background: var(--slate-100); padding: 6px 8px; border-radius: var(--radius-sm);">
            BP: <strong>${p.vitals.bp}</strong>
          </div>
          <div style="background: var(--slate-100); padding: 6px 8px; border-radius: var(--radius-sm);">
            Pulse: <strong>${p.vitals.pulse}</strong>
          </div>
        </div>
      </div>

      <div style="font-size: 0.72rem; color: var(--slate-500); border-top: 1px dashed var(--slate-200); padding-top: 8px;">
        🛡️ <strong>Minimal Data Exposure Rule:</strong> Only authorized healthcare providers currently caring for this referral have access to this Care Passport. Irrelevant past records are strictly hidden.
      </div>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Close</button>
    <button class="btn-facility-action accept" onclick="downloadPassportSim()">Download PDF</button>
  `;
  modal.classList.add('open');
}

function downloadPassportSim() {
  logAudit('patient', `User (${GavArogyaState.patient.name})`, "Downloaded Care Passport PDF token with digital signature", "User Consent");
  showToast("Care Passport downloaded successfully with ABDM cryptographic signature.", "success");
}

function openReferralsModal() {
  const p = GavArogyaState.patient;
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "My Active Referral";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.82rem;">
      <div style="background: var(--teal-50); border: 1px solid var(--teal-200); padding: 12px; border-radius: var(--radius-md);">
        <strong>Facility:</strong> ${p.assignedFacility}<br>
        <strong>Referral ID:</strong> REF-SAT-2026-9912<br>
        <strong>Status:</strong> ${p.statusLabel}<br>
        <strong>Estimated Arrival:</strong> ${p.estimatedArrival}
      </div>
      <p style="color: var(--slate-600); font-size: 0.78rem;">
        Your Care Passport has been securely transmitted to the receiving doctor at Satara District Hospital. Please carry your Aadhaar / ABHA card.
      </p>
    </div>
  `;
  footer.innerHTML = `<button class="btn-facility-action passport" onclick="closeModal()">Close</button>`;
  modal.classList.add('open');
}

function openFollowUpsModal() {
  const p = GavArogyaState.patient;
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Post-Treatment Follow-Ups";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
      <div style="background: var(--slate-50); border: 1px solid var(--slate-200); padding: 12px; border-radius: var(--radius-md);">
        <strong>7-Day Post Discharge Checkup:</strong><br>
        Scheduled Date: <strong>${p.followUpDueDate}</strong><br>
        Assigned ASHA: <strong>${p.assignedAsha}</strong><br>
        Status: <span class="risk-pill medium">Scheduled</span>
      </div>
      <p style="font-size: 0.78rem; color: var(--slate-600);">
        Sunita Tai will visit your home in Kharpudi to re-verify your oxygen saturation, blood pressure, and review your medicine schedule.
      </p>
    </div>
  `;
  footer.innerHTML = `<button class="btn-facility-action passport" onclick="closeModal()">Close</button>`;
  modal.classList.add('open');
}

function openHealthTipsModal() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Rural Health & Preventive Tips";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
      <div style="border-left: 3px solid var(--teal-600); padding-left: 10px;">
        <strong>Respiratory Health in Monsoon/Winter:</strong> Avoid exposure to damp morning fog; seek early medical attention if breathlessness occurs.
      </div>
      <div style="border-left: 3px solid var(--amber-500); padding-left: 10px;">
        <strong>Hypertension Awareness:</strong> Reduce dietary salt, consume plenty of fresh water, and get your blood pressure measured monthly with your ASHA worker.
      </div>
    </div>
  `;
  footer.innerHTML = `<button class="btn-facility-action passport" onclick="closeModal()">Close</button>`;
  modal.classList.add('open');
}

function openPatientProfileModal() {
  const p = GavArogyaState.patient;
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Patient Profile & Security Controls";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem;">
      <div><strong>Full Name:</strong> ${p.name} (${p.nameMr})</div>
      <div><strong>Mobile:</strong> ${p.mobile} (Verified OTP)</div>
      <div><strong>ABHA ID:</strong> ${p.abhaId}</div>
      <div><strong>Village / Sub-Center:</strong> ${p.village}</div>
      <div style="margin-top: 8px; padding: 10px; background: var(--teal-50); border-radius: var(--radius-md); font-size: 0.76rem;">
        🔒 <strong>Consent Manager:</strong> You have authorized <em>Sunita Tai (ASHA)</em> and <em>Satara District Hospital</em> to view active referral records.
      </div>
    </div>
  `;
  footer.innerHTML = `<button class="btn-facility-action passport" onclick="closeModal()">Close</button>`;
  modal.classList.add('open');
}

// ASHA Modal Actions
function openAshaVitalsModal() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Record Patient Symptoms & Frontline Vitals";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <div style="background: var(--slate-50); padding: 8px 12px; border-radius: var(--radius-md); font-size: 0.8rem;">
        Patient: <strong>Ramesh Patil</strong> (GA-240184) • Kharpudi
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div>
          <label class="form-label">SpO2 Level (%)</label>
          <input type="number" id="vitalsSpo2" class="form-input" value="89" min="50" max="100">
        </div>
        <div>
          <label class="form-label">Blood Pressure (mmHg)</label>
          <input type="text" id="vitalsBp" class="form-input" value="148/96">
        </div>
        <div>
          <label class="form-label">Pulse Rate (bpm)</label>
          <input type="number" id="vitalsPulse" class="form-input" value="108">
        </div>
        <div>
          <label class="form-label">Respiratory Rate (/min)</label>
          <input type="number" id="vitalsRr" class="form-input" value="28">
        </div>
      </div>
      <div>
        <label class="form-label">Clinical Observations & Symptoms</label>
        <input type="text" id="vitalsNotes" class="form-input" value="Severe respiratory distress, chest tightness, speaking in phrases">
      </div>
      <div style="background: var(--rose-50); border: 1px solid var(--rose-200); padding: 10px; border-radius: var(--radius-md); font-size: 0.76rem; color: var(--rose-900);">
        🤖 <strong>AI-Assisted Triage Rule:</strong> SpO2 < 92% and RR > 24 indicates <strong>High Risk (RED)</strong>. Immediate referral to District Hospital Satara will be recommended.
      </div>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Cancel</button>
    <button class="btn-facility-action accept" onclick="saveAshaVitals()">Save & Trigger Smart Referral</button>
  `;
  modal.classList.add('open');
}

function saveAshaVitals() {
  const spo2 = document.getElementById('vitalsSpo2')?.value || "89";
  const bp = document.getElementById('vitalsBp')?.value || "148/96";
  const pulse = document.getElementById('vitalsPulse')?.value || "108";
  const rr = document.getElementById('vitalsRr')?.value || "28";

  const p = GavArogyaState.patient;
  p.vitals = { bp: `${bp} mmHg`, spo2: `${spo2}%`, pulse: `${pulse} bpm`, temp: "99.4°F", respRate: `${rr} /min` };
  p.currentStageIndex = 5; // Smart Referral dispatched
  p.statusLabel = "Referral in Progress (RED)";
  p.statusBadgeClass = "referred";

  logAudit('asha', `ASHA (${GavArogyaState.asha.workerName})`, `Saved vitals: SpO2=${spo2}%, BP=${bp}, RR=${rr}. Initiated Smart Referral to Satara DH.`, "Frontline Assessment Complete");
  
  closeModal();
  renderActivePortal();
  showToast("Vitals saved & RED Risk referral dispatched to Satara DH!", "success");
}

function toggleAshaOffline() {
  const a = GavArogyaState.asha;
  if (!a.isOffline && a.syncStatus === "ONLINE") {
    // Switch to offline
    a.isOffline = true;
    a.pendingSyncCount = 3;
    showToast("Offline Mode Enabled. Records will be queued locally on device.", "alert");
  } else {
    // Trigger sync animation
    a.syncStatus = "SYNCING";
    renderActivePortal();
    showToast("Syncing 3 queued records to State Cloud...", "info");
    
    setTimeout(() => {
      a.isOffline = false;
      a.syncStatus = "ONLINE";
      a.pendingSyncCount = 0;
      logAudit('asha', `ASHA (${a.workerName})`, "Synchronized 3 offline records upon connectivity restoration", "TLS 1.3 Sync");
      renderActivePortal();
      showToast("Sync Complete! All 3 records synchronized securely.", "success");
    }, 1500);
    return;
  }
  renderActivePortal();
}

function setAshaTab(tab) {
  GavArogyaState.asha.activeTab = tab;
  renderActivePortal();
}

function completeFollowUpSim(patientName) {
  logAudit('asha', `ASHA (${GavArogyaState.asha.workerName})`, `Completed 7-day post discharge checkup for ${patientName}`, "Follow-Up Recorded");
  showToast(`Follow-up checkup completed for ${patientName}. Status updated in district registry.`, "success");
}

function callPatientSim(mobile) {
  showToast(`Dialing ${mobile} via GavArogya frontline telephony bridge...`, "info");
}

// Facility Actions
function facilityAcceptReferral() {
  const f = GavArogyaState.facility;
  const p = GavArogyaState.patient;

  f.referralAccepted = true;
  f.icuBedsFree = Math.max(0, f.icuBedsFree - 1);
  p.currentStageIndex = 6;
  p.statusLabel = "Facility Ready (Bed Reserved)";
  p.statusBadgeClass = "ready";

  logAudit('facility', `Facility (${f.staffName})`, `Accepted incoming referral ${p.id}. Reserved ICU emergency bed.`, "Facility Accepted");
  renderActivePortal();
  showToast("Referral Accepted! Ramesh Patil notified that District Hospital Satara is ready.", "success");
}

function facilityRedirectReferral() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Redirect Referral (Capacity Alert)";
  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px; font-size: 0.82rem;">
      <p style="color: var(--slate-600);">
        If ICU capacity or specialists are unavailable at Satara DH, redirect to the nearest affiliated tertiary center with active telemetry routing.
      </p>
      <div>
        <label class="form-label">Select Destination Facility</label>
        <select id="redirectTarget" class="form-input">
          <option value="Karad SDH">Sub-District Hospital, Karad (18 km away • 4 ICU beds free)</option>
          <option value="GMC Miraj">Government Medical College, Miraj (Tertiary Referral)</option>
        </select>
      </div>
      <div>
        <label class="form-label">Clinical Reason for Redirection</label>
        <input type="text" id="redirectReason" class="form-input" value="Advanced interventional pulmonology required">
      </div>
    </div>
  `;
  footer.innerHTML = `
    <button class="btn-facility-action passport" onclick="closeModal()">Cancel</button>
    <button class="btn-facility-action redirect" onclick="executeRedirect()">Confirm Redirection</button>
  `;
  modal.classList.add('open');
}

function executeRedirect() {
  const target = document.getElementById('redirectTarget')?.value || "Karad SDH";
  GavArogyaState.patient.assignedFacility = target;
  logAudit('facility', `Facility Staff (${GavArogyaState.facility.staffName})`, `Redirected patient GA-240184 to ${target} due to specialist requirement`, "Referral Redirected");
  closeModal();
  renderActivePortal();
  showToast(`Referral redirected to ${target}. Ambulance rerouted automatically.`, "alert");
}

function facilityMarkTreated() {
  const f = GavArogyaState.facility;
  const p = GavArogyaState.patient;

  f.treatmentDone = true;
  p.currentStageIndex = 8; // Follow-up
  p.statusLabel = "Treatment Completed (Follow-up Scheduled)";
  p.statusBadgeClass = "treated";

  logAudit('facility', `Facility (${f.staffName})`, `Marked patient treatment complete. Pushed 7-day follow-up task to ASHA Sunita Tai.`, "Discharge Protocol");
  renderActivePortal();
  showToast("Treatment marked complete! ASHA Worker received 7-day home follow-up task.", "success");
}

function updateBeds(type, delta) {
  const f = GavArogyaState.facility;
  if (type === 'icu') {
    f.icuBedsFree = Math.max(0, f.icuBedsFree + delta);
    document.getElementById('icuBedCount').textContent = f.icuBedsFree;
  } else {
    f.generalBedsFree = Math.max(0, f.generalBedsFree + delta);
    document.getElementById('genBedCount').textContent = f.generalBedsFree;
  }
  logAudit('facility', `Facility (${f.staffName})`, `Updated real-time bed capacity: ICU=${f.icuBedsFree}, General=${f.generalBedsFree}`, "Capacity Telemetry");
}

// Ministry Actions
function inspectDistrict(name, delay, count) {
  logAudit('ministry', "Ministry Analyst", `Inspected district turnaround telemetry for ${name}`, "Aggregated Query");
  showToast(`District: ${name} | Delay: ${delay} | Active Cases: ${count}`, "info");
}

// Security Audit Drawer
function openAuditDrawer() {
  const modal = document.getElementById('genericModal');
  const title = document.getElementById('modalTitle');
  const body = document.getElementById('modalBody');
  const footer = document.getElementById('modalFooter');

  title.textContent = "Live RBAC & Security Telemetry Log";
  
  const logsHTML = GavArogyaState.auditLogs.map(l => `
    <div class="audit-row ${l.role}">
      <div>
        <div style="font-weight: 700; color: #fff;">${l.user}</div>
        <div class="audit-action-text">${l.action}</div>
        <div style="font-size: 0.68rem; color: var(--teal-400); margin-top: 2px;">🔒 Scope: ${l.level}</div>
      </div>
      <span class="audit-time">${l.time}</span>
    </div>
  `).join('');

  body.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <p style="font-size: 0.8rem; color: var(--slate-600);">
        “Users only access the healthcare information required for their authorized role.” Every read, referral transfer and triage decision is immutably logged with timestamp and scope verification.
      </p>
      <div style="display: flex; flex-direction: column; gap: 6px; max-height: 360px; overflow-y: auto;">
        ${logsHTML}
      </div>
    </div>
  `;
  footer.innerHTML = `<button class="btn-facility-action passport" onclick="closeModal()">Close Log</button>`;
  modal.classList.add('open');
}

function renderAuditLogs() {
  const container = document.getElementById('inlineAuditFeed');
  if (!container) return;

  const logsHTML = GavArogyaState.auditLogs.slice(0, 5).map(l => `
    <div class="audit-row ${l.role}">
      <div>
        <div style="font-weight: 700; color: #fff;">${l.user}</div>
        <div class="audit-action-text">${l.action}</div>
        <div style="font-size: 0.68rem; color: var(--teal-400); margin-top: 2px;">🔒 ${l.level}</div>
      </div>
      <span class="audit-time">${l.time}</span>
    </div>
  `).join('');

  container.innerHTML = logsHTML;
}

function closeModal() {
  const modal = document.getElementById('genericModal');
  if (modal) modal.classList.remove('open');
}

// =============================================================================
// 9. Initialization
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupLoginForms();
  renderActivePortal();
  renderAuditLogs();
  applyTranslations();

  // Close modal on click outside
  const modal = document.getElementById('genericModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
});
