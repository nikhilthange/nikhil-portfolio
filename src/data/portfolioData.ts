export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Full Stack & AI' | 'Cloud & Distributed Systems' | 'AI & LLMs';
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  badge?: string;
  collaborators?: string;
  architecture: {
    title: string;
    flow: { step: string; title: string; desc: string; icon: string }[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  technologies: string[];
  achievements: string[];
  metrics: { label: string; value: string; detail: string }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  description: string;
  badge: string;
  icon: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  university?: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  coursework?: string[];
  highlights?: string[];
}

export const PERSONAL_INFO = {
  name: "Nikhil Ankush Thange",
  role: "Full Stack Software Engineer",
  taglines: [
    "Full Stack Software Engineer",
    "Distributed Backend & Microservices Engineer",
    "Computer Vision & AI Systems Developer",
    "React 19 & TypeScript Specialist"
  ],
  bio: "Full Stack Software Engineer specializing in high-concurrency microservices, reactive React 19/TypeScript architectures, and computer vision AI pipelines. Engineered distributed backends sustaining 500+ concurrent requests (sub-50ms P95) with Redis/MongoDB and deployed production applications on AWS. Dedicated to writing clean, test-driven code (Jest/Vitest) and automating CI/CD release cycles.",
  location: "Mumbai, MH, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  email: "nikhilthange75@gmail.com",
  phone: "+91 9820078156",
  availability: "Available Immediately for SDE Intern & Full-Time Software Roles (2026–2027)",
  socials: {
    linkedin: "https://www.linkedin.com/in/nikhil-thange-001bb52b5",
    github: "https://github.com/nikhilthange",
    smartCivic: "https://smart-civic-pi.vercel.app",
    swasthyaSetu: "https://swastyasetu-three.vercel.app",
    hireMate: "https://hiremate-portal.vercel.app",
    cricnova: "https://cricnova-ai.vercel.app",
    speaklingo: "https://github.com/nikhilthange/speaklingo",
    waExtractor: "https://github.com/nikhilthange/whatsapp-group-extractor",
    whatsapp: "https://wa.me/919820078156?text=Hi%20Nikhil%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20engineering%20opportunity.",
    email: "mailto:nikhilthange75@gmail.com",
    resume: "/resume.pdf",
  },
  resumeUrl: "/resume.pdf",
  resumeFileName: "Nikhil_Thange_Resume.pdf"
};

export const TELEMETRY_STATS = [
  { label: "Concurrent Backend Ops", value: "500+", unit: "req/s", subtext: "Sustained sub-50ms P95 latency with Redis TTL & PM2" },
  { label: "AI Vision Precision", value: "91.4%", unit: "mAP50", subtext: "Fine-tuned YOLOv8 model across 6 civic defect classes" },
  { label: "Core Web Vitals FCP", value: "<800", unit: "ms", subtext: "40% faster load with DOM virtualization & async feeds" },
  { label: "LLM Streaming Latency", value: "<300", unit: "ms", subtext: "Real-time token streaming via Socket.IO & NVIDIA NIM" },
  { label: "Automated Test Coverage", value: "85%+", unit: "coverage", subtext: "Jest, Supertest & Vitest integrated into CI/CD" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "cityos",
    title: "BMC Smart Civic Operating System (CityOS)",
    subtitle: "Distributed AI-Driven Civic Governance & Edge Triage Platform",
    description: "An enterprise-grade civic operating system combining custom YOLOv8 computer vision pipelines, compound 2dsphere geospatial indexing, and high-concurrency microservices to automate grievance detection, deduplication, and resolution across 24 Mumbai administrative wards.",
    category: "Full Stack & AI",
    featured: true,
    technologies: [
      "React 19", "TypeScript", "Node.js", "Express.js", "YOLOv8", "PyTorch", 
      "Redis", "MongoDB (2dsphere)", "Docker", "Nginx", "Leaflet GIS", "Turf.js"
    ],
    liveUrl: "https://smart-civic-pi.vercel.app",
    githubUrl: "https://github.com/nikhilthange/smart-civic",
    metrics: [
      { label: "Vision mAP50", value: "91.4%" },
      { label: "P95 Latency", value: "sub-50ms" },
      { label: "Spatial Deduplication", value: "35m radius" },
      { label: "Payload Reduction", value: "95%" }
    ],
    highlights: [
      "Custom AI Vision Pipeline: Fine-tuned a YOLOv8 Vision Model (PyTorch, CUDA) on 6 civic defect classes (potholes, garbage, broken streetlights, waterlogging, debris, pavement cracks) attaining 91.4% mAP50.",
      "Edge Triage Pipeline: Client-side Laplacian blur rejection and active feedback re-training for high data quality.",
      "High-Concurrency Microservices: Scaled Node.js PM2 cluster instances with Redis TTL caching and Mongoose pooling (20–100), sustaining 500+ concurrent operations at sub-50ms P95 latency.",
      "Geospatial Engine & Deduplication: Compound MongoDB 2dsphere indexing and Turf.js Point-in-Polygon (PIP) algorithms across 24 Mumbai administrative wards, automating 35m spatial grievance deduplication.",
      "PWA & Production DevOps: React 19 PWA with Service Worker offline sync, client-side Canvas compressor (95% byte reduction), multi-stage Docker containerization, and Nginx reverse proxy."
    ],
    architecture: {
      title: "CityOS Edge-to-Cloud Distributed Architecture",
      flow: [
        { step: "01", title: "Client Edge Capture", desc: "Citizen uploads image; Canvas API applies 95% lossy compression & Laplacian blur test in browser.", icon: "Camera" },
        { step: "02", title: "YOLOv8 Inference", desc: "PyTorch/CUDA containerized vision pipeline classifies defect category with 91.4% mAP50 precision.", icon: "Cpu" },
        { step: "03", title: "Geospatial Deduplication", desc: "MongoDB 2dsphere compound index & Turf.js PIP verify ward boundaries and flag duplicate incidents within 35m.", icon: "MapPin" },
        { step: "04", title: "High-Concurrency Dispatch", desc: "PM2 clustered Node microservices cached with Redis TTL route tickets to field engineers in real-time.", icon: "Zap" }
      ]
    }
  },
  {
    id: "interview-ai",
    title: "AI-Powered Interview & Recruitment Intelligence Platform (HireMate)",
    subtitle: "Real-time LLM Streaming, Structured ATS Matching & Multi-Tenant RBAC",
    description: "An intelligent technical hiring engine featuring sub-300ms real-time AI interview evaluations with NVIDIA NIM LLMs, automated ATS semantic resume parsing, and multi-tenant enterprise RBAC security.",
    category: "AI & LLMs",
    featured: true,
    badge: "AI STREAMING ARCHITECTURE",
    technologies: [
      "React 19", "Node.js", "Express.js", "NVIDIA NIM LLMs", "Socket.IO", 
      "PostgreSQL", "MongoDB", "JWT", "Tailwind CSS", "WebSockets"
    ],
    liveUrl: "https://hiremate-portal.vercel.app",
    githubUrl: "https://github.com/nikhilthange/ai-powered-interview-hiring-platform",
    metrics: [
      { label: "Streaming Latency", value: "<300ms" },
      { label: "ATS Semantic Match", value: "88%" },
      { label: "Security Architecture", value: "Multi-tenant RBAC" },
      { label: "Communication", value: "Socket.IO WebSockets" }
    ],
    highlights: [
      "Low-Latency LLM Streaming: Architected real-time AI mock interview evaluations by streaming NVIDIA NIM LLM token responses over WebSockets (Socket.IO), reducing perceived evaluation latency to <300ms.",
      "ATS Parser & Scoring Engine: Engineered an automated resume parsing and candidate matching engine with structured prompt validation, improving candidate-job semantic alignment accuracy to 88%.",
      "Enterprise Security & RBAC: Built multi-tenant role-based access control (Candidate, Recruiter, Admin) with stateless JWT authentication, cryptographic password hashing, and granular route middleware.",
      "Interactive Candidate Analytics: Responsive React 19 analytics dashboard visualizing speech pace, keyword density, technical accuracy, and code complexity scores."
    ],
    architecture: {
      title: "Real-Time AI Streaming & Evaluation Pipeline",
      flow: [
        { step: "01", title: "ATS Ingestion & Parsing", desc: "PDF/DOCX resumes parsed into structured JSON schema and matched against job requirements with 88% accuracy.", icon: "FileText" },
        { step: "02", title: "Real-Time Interview Room", desc: "Socket.IO bidirectional WebSocket channel streams audio transcripts and technical questions.", icon: "Mic" },
        { step: "03", title: "NVIDIA NIM LLM Stream", desc: "Sub-300ms token streaming generates contextual follow-up questions and real-time behavioral cues.", icon: "Sparkles" },
        { step: "04", title: "Multi-Tenant RBAC Audit", desc: "PostgreSQL & MongoDB encrypted persistence with candidate/recruiter/admin role validation.", icon: "ShieldCheck" }
      ]
    }
  },
  {
    id: "swastyasetu",
    title: "SwasthyaSetu | Rural Healthcare Continuity & Referral Layer",
    subtitle: "Offline-First Distributed Sync, Hugging Face TrOCR & 2G GSM Fallback",
    description: "A mission-critical offline-first healthcare continuity platform engineered for the MUSA Codex Hackathon (Top 7 Finalist), connecting rural Primary Health Centres (PHCs) and district hospitals. Guarantees zero referral loss during broadband blackouts through Dexie.js (IndexedDB) local queueing, idempotent auto-sync to PostgreSQL/Prisma backends, Hugging Face TrOCR prescription extraction, and ≤160-char 2G SMS emergency fallback.",
    category: "Full Stack & AI",
    featured: true,
    badge: "TOP 7 FINALIST • MUSA CODEX",
    collaborators: "Team Project with Aniket Vishwakarma (MUSA Codex Hackathon)",
    technologies: [
      "React 19", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", 
      "Dexie.js (IndexedDB)", "Hugging Face TrOCR", "Tailwind CSS", "JWT RBAC", "RESTful APIs", "GSM SMS Engine"
    ],
    liveUrl: "https://swastyasetu-three.vercel.app",
    githubUrl: "https://github.com/aniketvishwakarma-11/Swastyasetu",
    metrics: [
      { label: "Offline Resilience", value: "100% Queue" },
      { label: "Data Loss Prevention", value: "0% Loss" },
      { label: "2G SMS Fallback", value: "≤160 Char" },
      { label: "Care Roles", value: "4 Multi-Tenant" }
    ],
    highlights: [
      "MUSA Codex Hackathon Top 7 Finalist: Awarded Top 7 finish among competing engineering teams for architecting a resilient offline triage and referral data pipeline that operates reliably during zero-broadband rural blackouts.",
      "Offline-First Dexie.js Persistence: Engineered client-side IndexedDB caching via Dexie.js, guaranteeing zero data loss for patient vitals, emergency STEMI referrals, and clinical notes during rural broadband outages.",
      "Server-Side Deduplication & Auto-Sync: Architected an idempotent background sync protocol (event_id hashing) reconciling local device records into PostgreSQL via Prisma ORM as soon as network connectivity is restored.",
      "Hugging Face TrOCR Vision Pipeline: Integrated TrOCR transformer model for transcribing handwritten medical prescriptions and discharge summaries with human-in-the-loop split-screen clinician review.",
      "Zero-Internet 2G SMS Compression Engine: Designed an ultra-compact GSM SMS fallback payload (≤160 characters) allowing ASHA workers and PHC staff to dispatch emergency referral handoffs over standard cellular text.",
      "Patient Identity Reconciliation & District Telemetry: Built multi-field weighted fuzzy matching preventing duplicate master patient registrations, combined with live ICU bed capacity and ambulance transfer Kanban tracking."
    ],
    architecture: {
      title: "SwasthyaSetu Offline-First Edge-to-Hospital Distributed Architecture",
      flow: [
        { step: "01", title: "Offline Capture & Dexie Queue", desc: "Frontline PHC staff enter emergency referrals and vitals; data is persisted instantly in local IndexedDB.", icon: "WifiOff" },
        { step: "02", title: "Idempotent Auto-Sync", desc: "Background sync engine detects connectivity restoration, streaming queued referrals to PostgreSQL with server deduplication.", icon: "RefreshCw" },
        { step: "03", title: "TrOCR AI Vision & OCR", desc: "Hugging Face TrOCR transcribes handwritten discharge summaries with split-screen clinician verification.", icon: "Sparkles" },
        { step: "04", title: "District Dispatch & Telemetry", desc: "District hospital dashboard orchestrates ambulance transit, bed allocation, and GSM SMS transport slips.", icon: "Zap" }
      ]
    }
  },
  {
    id: "cricnova-ai",
    title: "CricNova AI | Real-Time Cricket Analytics & ML Telemetry Platform",
    subtitle: "AI Match Predictions, Real-Time Ball-by-Ball Telemetry & Player Analytics",
    description: "A production AI-powered cricket analytics platform engineered with TypeScript, React, and REST APIs. Features predictive match outcome modeling, live ball-by-ball telemetry, player head-to-head metrics, and automated stats aggregation.",
    category: "AI & LLMs",
    featured: true,
    badge: "LIVE AI SPORTS TELEMETRY",
    technologies: [
      "TypeScript", "React 19", "Node.js", "Express.js", "Machine Learning", 
      "Tailwind CSS", "RESTful APIs", "Vite"
    ],
    liveUrl: "https://cricnova-ai.vercel.app",
    githubUrl: "https://github.com/nikhilthange/cricnova-ai",
    metrics: [
      { label: "Deployment", value: "Production" },
      { label: "Data Pipeline", value: "Real-time" },
      { label: "Frontend", value: "React 19 / TS" },
      { label: "Architecture", value: "Full Stack" }
    ],
    highlights: [
      "Real-Time Match Analytics: Engineered an interactive analytics telemetry engine providing ball-by-ball match metrics, player scorecards, and live team standings.",
      "Predictive Match Modeling: Implemented data-driven predictive algorithms evaluating match conditions, team momentum, and individual player performance indicators.",
      "Responsive Modern UI: Built a streamlined TypeScript/React interface with responsive dark mode and instant state updates."
    ],
    architecture: {
      title: "CricNova AI Telemetry & Match Prediction Architecture",
      flow: [
        { step: "01", title: "Live Ingestion & Stats Parser", desc: "Aggregates real-time match events and team records into normalized JSON entities.", icon: "Activity" },
        { step: "02", title: "Predictive Model Inference", desc: "Evaluates historical team metrics and match state to project win probability curves.", icon: "Sparkles" },
        { step: "03", title: "Client Telemetry Streaming", desc: "React 19 frontend updates match telemetry dashboards with sub-second responsive views.", icon: "Zap" },
        { step: "04", title: "Player Head-to-Head HUD", desc: "Interactive comparative visualizations highlighting batting/bowling efficiency.", icon: "Cpu" }
      ]
    }
  },
  {
    id: "speaklingo",
    title: "SpeakLingo | Real-Time WebRTC Language Studio & AI Coach",
    subtitle: "Low-Latency Peer Matchmaking, AI Speech Synthesis & Live IELTS Telemetry",
    description: "A full-stack WebRTC conversational English learning studio engineered for low-latency peer-to-peer matchmaking and 24/7 AI tutor coaching. Features 360° radar matching across CEFR levels (A1–C2), live Web Speech API subtitles, real-time grammar slip feedback, and in-browser Web Audio synthesized acoustic telemetry.",
    category: "Full Stack & AI",
    featured: true,
    badge: "REAL-TIME WEBRTC STUDIO",
    technologies: [
      "React 19", "JavaScript (ES6+)", "WebRTC (RTCPeerConnection)", "Socket.IO", 
      "Node.js", "Express.js", "Tailwind CSS", "Web Speech API", "Web Audio API", "Google STUN"
    ],
    githubUrl: "https://github.com/nikhilthange/speaklingo",
    metrics: [
      { label: "P2P Latency", value: "<120ms" },
      { label: "Video Stream", value: "720p 60fps" },
      { label: "CEFR Tiers", value: "A1 to C2" },
      { label: "AI Availability", value: "24/7 Solo" }
    ],
    highlights: [
      "WebRTC & Socket.IO Signaling Mesh: Architected peer-to-peer audio/video streaming with ICE trickling and Google STUN fallback, sustaining sub-120ms transmission latency with hardware loopback tests.",
      "CEFR-Level Matchmaking Radar: Engineered an interactive 360° radar matchmaking queue pairing global learners by interest tags (Tech, Travel, Cinema) and CEFR fluency bands with instant AI fallback.",
      "Live AI Speech Coach & IELTS HUD: Built real-time grammar slip detection and Band 8+ vocabulary upgrade recommendations, paired with timed IELTS Part 2 cue cards and Taboo fluency drills.",
      "24/7 AI English Tutor (Emma): Integrated in-browser speech synthesis for conversational solo practice with zero latency and natural voice cadence.",
      "Web Audio API & Speech Subtitles: Implemented real-time STT live subtitles via Web Speech API alongside synthesized acoustic chimes, eliminating external media asset overhead."
    ],
    architecture: {
      title: "SpeakLingo Low-Latency WebRTC & AI Coaching Architecture",
      flow: [
        { step: "01", title: "Matchmaking & STUN Signaling", desc: "Socket.IO server executes CEFR-based queueing, exchanging SDP offers and ICE candidates via Google STUN servers.", icon: "Zap" },
        { step: "02", title: "P2P WebRTC Media Pipe", desc: "Direct peer-to-peer encrypted media stream established for 720p 60fps video and adaptive audio with loopback calibration.", icon: "Activity" },
        { step: "03", title: "Web Speech & Real-Time Subtitles", desc: "In-browser Web Speech API captures audio frames, rendering live bidirectional subtitles with zero cloud latency.", icon: "Mic" },
        { step: "04", title: "AI Coaching & IELTS Telemetry", desc: "Grammar evaluation engine analyzes speech patterns, offering Band 8+ vocabulary alternatives and spaced repetition flashcards.", icon: "Sparkles" }
      ]
    }
  },
  {
    id: "whatsapp-extractor",
    title: "WhatsApp Group Contact Extractor & Automated Ledger",
    subtitle: "Headless Puppeteer Automation, Real-Time Socket.IO Streaming & Excel / vCard Pipeline",
    description: "A high-performance automation engine and web telemetry dashboard built with Node.js, Express, Socket.IO, and headless Chromium (whatsapp-web.js). Features persistent session caching via LocalAuth, low-memory footprint garbage collection (≤256MB), and batch extraction of multi-thousand member groups into formatted Excel (.xlsx), CSV, and phone-ready .vcf vCards.",
    category: "Cloud & Distributed Systems",
    featured: true,
    badge: "HEADLESS BROWSER AUTOMATION",
    technologies: [
      "Node.js", "Express.js", "whatsapp-web.js", "Puppeteer", "Socket.IO", 
      "ExcelJS / XLSX", "vCard (.vcf)", "HTML5 / Vanilla CSS", "LocalAuth Caching"
    ],
    githubUrl: "https://github.com/nikhilthange/whatsapp-group-extractor",
    metrics: [
      { label: "Memory Footprint", value: "≤256 MB" },
      { label: "Privacy / PII", value: "100% Local" },
      { label: "Group Capacity", value: "10,000+" },
      { label: "Export Formats", value: "3 Types" }
    ],
    highlights: [
      "Headless Puppeteer Automation: Integrated whatsapp-web.js with Chromium headless instances, automating session authentication, group DOM enumeration, and contact extraction.",
      "Real-Time Socket.IO Streaming: Built WebSocket bi-directional channels streaming QR code authentication terminals, real-time extraction progress meters, and dynamic group selection menus.",
      "Multi-Format Data Pipeline: Engineered high-throughput serialization pipelines outputting styled Excel (.xlsx) workbooks with custom column formatting, CSV sheets, and Apple/Android-compatible vCard (.vcf) contacts.",
      "Low-Footprint Memory Engineering: Designed garbage-collected process orchestration (--max-old-space-size=256) preventing memory leaks during large-scale thousand-member group crawls.",
      "Client-Side Audit & Search Dashboard: Responsive interactive web dashboard supporting drag-and-drop file inspection, phone number deduplication, admin status filtering, and clipboard batch copy."
    ],
    architecture: {
      title: "WhatsApp Extractor Headless Automation & Stream Pipeline",
      flow: [
        { step: "01", title: "LocalAuth & QR Handshake", desc: "Headless Chromium instance initializes whatsapp-web.js; terminal QR code streams to web client over Socket.IO.", icon: "Zap" },
        { step: "02", title: "Group & Participant Ingestion", desc: "Chromium DOM walker extracts participant JIDs, phone numbers, contact names, and admin permissions into memory buffer.", icon: "Database" },
        { step: "03", title: "Low-Footprint Deduplication", desc: "Node.js streaming transform filters out duplicate entries and formats phone numbers while keeping memory <=256MB.", icon: "Cpu" },
        { step: "04", title: "Multi-Format Export & vCard", desc: "Generates formatted Excel (.xlsx) workbooks, CSV tables, and import-ready vCard (.vcf) contacts for mobile address books.", icon: "FileText" }
      ]
    }
  },
  {
    id: "smart-expense",
    title: "Smart Expense Manager | FinTech Capital Telemetry Platform",
    subtitle: "High-Precision Personal Capital Telemetry, AI Forecasting & Tesseract OCR Pipeline",
    description: "A high-precision personal capital telemetry and FinTech platform benchmarked against modern enterprise banking architectures (CRED, Mercury, Apple Wallet). Features real-time multi-account balance synchronization (UPI, Cards, Banks), Tesseract.js receipt OCR extraction, NVIDIA NIM AI cash runway projections, Redis caching, and automated MongoDB aggregation pipelines.",
    category: "Full Stack & AI",
    featured: false,
    badge: "FINTECH CAPITAL TELEMETRY • CASE STUDY",
    technologies: [
      "React 18", "TypeScript", "Node.js", "Express.js", "MongoDB Atlas", "Redis", 
      "Tesseract.js OCR", "NVIDIA NIM AI", "Docker Compose", "Tailwind CSS", "Playwright E2E", "Jest"
    ],
    metrics: [
      { label: "Bundle Payload", value: "-70% Chunk" },
      { label: "Design Standard", value: "9.7 / 10" },
      { label: "Redis Latency", value: "sub-30ms" },
      { label: "PWA Readiness", value: "100% Offline" }
    ],
    highlights: [
      "FinTech Capital Telemetry Engine: Engineered multi-account balance synchronization (UPI, Cards, Bank Accounts) with MongoDB aggregation pipelines computing Month-over-Month category shift deltas and savings velocity.",
      "Tesseract.js Receipt OCR Extraction: Automated paper receipt and invoice digestion via client-side/server-side Tesseract.js OCR pipeline, auto-populating merchant, tax, and itemized spend categories.",
      "AI Financial Intelligence & Cash Runway: Integrated NVIDIA NIM AI advisory models generating personalized cash runway projections, risk matrix evaluations, and anomaly spend detection.",
      "Zero-Leak Security Architecture: Implemented stateless short-lived 15-minute JWT access tokens paired with rotating HttpOnly refresh cookies, multi-tenant RBAC, and encrypted MongoDB audit logs.",
      "Production DevOps & Testing: Configured multi-stage Docker Compose orchestrations, Playwright E2E testing suites, and Jest unit test coverage integrated into GitHub Actions CI/CD."
    ],
    architecture: {
      title: "Smart Expense Manager Edge-to-Cloud FinTech Architecture",
      flow: [
        { step: "01", title: "Receipt Ingestion & Tesseract OCR", desc: "Frontline receipt camera upload is processed via Tesseract.js OCR, extracting merchant, amount, and timestamp.", icon: "Camera" },
        { step: "02", title: "Stateless Auth & RBAC Guard", desc: "Express middleware validates short-lived JWTs and rotates HttpOnly refresh cookies across user and admin roles.", icon: "ShieldCheck" },
        { step: "03", title: "Aggregations & Redis Caching", desc: "MongoDB aggregation pipelines calculate category shift deltas, cached in Redis TTL keys for sub-30ms P95 queries.", icon: "Database" },
        { step: "04", title: "AI Cash Runway Telemetry", desc: "NVIDIA NIM / AI analytics engine evaluates 30-day cash runway, anomaly spending spikes, and automated budget alerts.", icon: "Sparkles" }
      ]
    }
  }
];

export const WORK_EXPERIENCE: Experience[] = [
  {
    id: "chitralai",
    role: "Software Development Engineer Intern",
    company: "Chitralai",
    period: "Jul 2026 – Present",
    location: "Remote",
    type: "Internship",
    technologies: [
      "React 19", "TypeScript", "Node.js", "Express.js", "PostgreSQL", 
      "AWS (S3, CloudFront, EC2)", "Jest", "Supertest", "TanStack Query", "Tailwind CSS", "Redis"
    ],
    achievements: [
      "High-Converting Cloud Architecture: Boosted user lead conversion rates by 25% and slashed page load time by 40% by architecting a responsive React 19 SPA with TanStack Query caching, deployed via AWS (S3, CloudFront CDN, EC2).",
      "Core Web Vitals Engineering: Reduced Cumulative Layout Shift (CLS) by 30% and cut First Contentful Paint (FCP) to <800ms by engineering the ReelIt video streaming feed with DOM virtualization and asynchronous lazy loading in Tailwind CSS.",
      "High-Throughput Microservices: Stabilized P95 REST API response latency to sub-65ms across 20+ endpoints by building Node.js/Express services with Redis caching, optimized PostgreSQL queries, and documented OpenAPI/Swagger schemas.",
      "Automated Testing & CI/CD: Decreased production defect escapes by 35% by implementing automated unit/integration test suites using Jest & Supertest (85%+ code coverage), integrated into GitHub Actions CI/CD pipelines in Agile sprints."
    ],
    metrics: [
      { label: "Conversion Boost", value: "+25%", detail: "Optimized React 19 SPA & TanStack caching" },
      { label: "Load Time Reduction", value: "-40%", detail: "AWS S3 + CloudFront Edge CDN distribution" },
      { label: "P95 API Latency", value: "<65ms", detail: "Across 20+ Node.js microservices with Redis" },
      { label: "Test Coverage", value: "85%+", detail: "Jest & Supertest automated CI/CD pipelines" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Core",
    iconName: "Code2",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "TypeScript", level: 92, tag: "Advanced" },
      { name: "JavaScript (ES6+)", level: 95, tag: "Advanced" },
      { name: "Python", level: 88, tag: "ML/CV" },
      { name: "Java", level: 82, tag: "OOP" },
      { name: "SQL", level: 90, tag: "Relational" },
      { name: "Data Structures & Algorithms", level: 88, tag: "Core" },
      { name: "OOP & System Design", level: 90, tag: "Architecture" },
      { name: "HTML5 & CSS3", level: 95, tag: "Modern Web" },
    ]
  },
  {
    category: "Frontend & Reactive Architecture",
    iconName: "Layout",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React 19", level: 95, tag: "Latest" },
      { name: "Next.js", level: 88, tag: "SSR/SSG" },
      { name: "TanStack Query", level: 92, tag: "State/Cache" },
      { name: "Redux Toolkit", level: 88, tag: "Global State" },
      { name: "Tailwind CSS", level: 95, tag: "UI System" },
      { name: "WebSockets & Socket.IO", level: 90, tag: "Real-time" },
      { name: "Canvas API & PWA", level: 85, tag: "Offline/Graphics" },
      { name: "Vitest & Jest", level: 88, tag: "TDD" },
    ]
  },
  {
    category: "Backend & Distributed Microservices",
    iconName: "Server",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 94, tag: "Runtime" },
      { name: "Express.js", level: 92, tag: "APIs" },
      { name: "RESTful APIs & OpenAPI", level: 95, tag: "Swagger" },
      { name: "PM2 Cluster Scaling", level: 88, tag: "Concurrency" },
      { name: "JWT & Stateless Auth", level: 92, tag: "Security" },
      { name: "RBAC (Role-Based Access)", level: 90, tag: "Enterprise" },
      { name: "Custom Middleware", level: 92, tag: "Microservices" },
    ]
  },
  {
    category: "AI, Vision & LLMs",
    iconName: "BrainCircuit",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "YOLOv8 & PyTorch", level: 89, tag: "Computer Vision" },
      { name: "NVIDIA NIM LLMs", level: 85, tag: "Streaming" },
      { name: "Laplacian Blur Triage", level: 88, tag: "Edge CV" },
      { name: "Turf.js & Leaflet GIS", level: 90, tag: "Geospatial" },
      { name: "CUDA Acceleration", level: 80, tag: "Inference" },
      { name: "Prompt Engineering & ATS", level: 88, tag: "NLP" },
    ]
  },
  {
    category: "Databases, Caching & DevOps",
    iconName: "Database",
    color: "from-amber-500 to-rose-500",
    skills: [
      { name: "MongoDB (2dsphere Geospatial)", level: 94, tag: "Aggregations" },
      { name: "PostgreSQL", level: 90, tag: "Relational/ACID" },
      { name: "Redis (TTL Caching)", level: 92, tag: "In-Memory" },
      { name: "Mongoose Pooling", level: 90, tag: "ORM" },
      { name: "AWS (EC2, S3, CloudFront)", level: 88, tag: "Cloud" },
      { name: "Docker & Nginx", level: 89, tag: "Containers" },
      { name: "GitHub Actions (CI/CD)", level: 90, tag: "Automation" },
      { name: "Jest & Supertest", level: 90, tag: "85%+ Coverage" },
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "musa-codex",
    title: "MUSA Codex Hackathon — Top 7 Finalist",
    issuer: "MUSA Codex Hackathon",
    description: "Secured Top 7 Finalist standing among competing teams with SwasthyaSetu — an offline-first rural healthcare triage and continuity platform featuring Dexie.js auto-sync, Hugging Face TrOCR AI transcription, and 2G GSM emergency fallback.",
    badge: "Top 7 Finalist",
    icon: "Trophy",
    date: "2026"
  },
  {
    id: "quasar",
    title: "Quasar 4.0 Hackathon Finalist",
    issuer: "Quasar Tech Innovation",
    description: "Selected among top finalist teams for designing an AI-driven Civic-Tech distributed system with real-time vision triage and high-throughput dispatch.",
    badge: "Finalist & Top Innovator",
    icon: "Trophy",
    date: "2026"
  },
  {
    id: "ibm-cert",
    title: "IBM Full Stack Software Architecture Certified",
    issuer: "IBM",
    description: "Certified in Enterprise Microservices, RESTful API Design, Cloud Deployment, and Secure Scalable Backend Engineering.",
    badge: "Professional Certification",
    icon: "Award",
    date: "Verified"
  },
  {
    id: "open-source",
    title: "Open Source Quality & Benchmarks",
    issuer: "Developer Community",
    description: "Maintained 100% test coverage and sub-100ms API benchmarks across open-source full-stack repositories.",
    badge: "100% Test Coverage",
    icon: "Sparkles",
    date: "Continuous"
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Vasantdada Patil Pratishthan's College of Engineering",
    university: "Mumbai University",
    period: "Aug 2023 – Jun 2027 (Expected)",
    location: "Mumbai, Maharashtra",
    score: "7.50 / 10.0",
    scoreLabel: "CGPA",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "System Design & Cloud Basics"
    ],
    highlights: [
      "Top 7 Finalist at MUSA Codex National Hackathon",
      "Quasar 4.0 Hackathon Finalist & Top Innovator"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Ramniranjan Jhunjhunwala College of Arts, Science & Commerce",
    period: "Jun 2021 – May 2023",
    location: "Mumbai, Maharashtra",
    score: "61.0%",
    scoreLabel: "Percentage",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Saraswati Vidya Niketan",
    period: "Jun 2020 – Mar 2021",
    location: "Mumbai, Maharashtra",
    score: "87.0%",
    scoreLabel: "Percentage",
    coursework: ["Mathematics", "Science & Technology", "English", "Social Sciences"]
  }
];

export const CLI_COMMANDS: Record<string, string | { title: string; output: string[] }> = {
  "help": {
    title: "Available Commands",
    output: [
      "  whoami       - View Nikhil's executive engineer profile",
      "  skills       - List core technical competencies by stack",
      "  projects     - View featured production & hackathon projects",
      "  swastyasetu  - Deep-dive into SwasthyaSetu healthcare architecture",
      "  hiremate     - Inspect HireMate AI recruitment platform",
      "  cricnova     - Inspect CricNova AI sports analytics platform",
      "  speaklingo   - Inspect SpeakLingo WebRTC & AI language platform",
      "  expense      - Inspect Smart Expense Manager FinTech architecture",
      "  extractor    - Inspect WhatsApp contact extractor automation engine",
      "  experience   - Display professional engineering experience",
      "  metrics      - Display latency, throughput, and system benchmarks",
      "  education    - Display academic background and qualifications",
      "  resume       - View & download official PDF resume document",
      "  contact      - Display direct email, phone, and social handles",
      "  clear        - Clear the terminal console screen",
      "  hire         - Instant recruiter priority dispatch protocol",
    ]
  },
  "whoami": {
    title: "Nikhil Ankush Thange - Full Stack Software Engineer",
    output: [
      "Role: Full Stack Software Engineer",
      "Specialization: High-Concurrency Microservices | React 19/TS | AI & Computer Vision",
      "Location: Mumbai, MH, India",
      "Key Achievement: Engineered backends sustaining 500+ req/s at sub-50ms P95 latency",
      "Current: SDE Intern at Chitralai",
      "Education: B.E. in Information Technology (Mumbai University, 2023-2027)"
    ]
  },
  "skills": {
    title: "Technical Stack Matrix",
    output: [
      "• Frontend: React 19, Next.js, TypeScript, TanStack Query, Redux Toolkit, Tailwind CSS, WebSockets",
      "• Backend: Node.js, Express.js, RESTful APIs, OpenAPI/Swagger, PM2 Clusters, JWT, RBAC",
      "• AI / ML: YOLOv8, PyTorch, NVIDIA NIM LLMs, Laplacian Blur Edge Triage, Turf.js GIS, Hugging Face TrOCR, Tesseract.js",
      "• Databases & Cache: MongoDB (2dsphere & Aggregations), PostgreSQL, Prisma ORM, Redis (TTL Caching), Dexie.js (IndexedDB)",
      "• Cloud & DevOps: AWS (EC2, S3, CloudFront), Docker Compose, Nginx, GitHub Actions CI/CD, Playwright E2E, Jest, Puppeteer"
    ]
  },
  "projects": {
    title: "Featured High-Impact Projects",
    output: [
      "1. [CityOS] BMC Smart Civic Operating System",
      "   - YOLOv8 (91.4% mAP50), PM2 500+ req/s, 2dsphere GIS deduplication, React 19 PWA",
      "   - Demo: https://smart-civic-pi.vercel.app | Repo: https://github.com/nikhilthange/smart-civic",
      "2. [HireMate / Interview AI] AI-Powered Recruitment Intelligence Platform",
      "   - NVIDIA NIM LLMs streaming (<300ms), 88% ATS match accuracy, Multi-tenant RBAC",
      "   - Demo: https://hiremate-portal.vercel.app | Repo: https://github.com/nikhilthange/ai-powered-interview-hiring-platform",
      "3. [SwasthyaSetu] Offline-First Rural Healthcare Continuity Layer (MUSA Codex Hackathon — Top 7 Finalist)",
      "   - Dexie.js IndexedDB, 0% data loss sync, Hugging Face TrOCR, PostgreSQL & Prisma, 2G SMS Fallback",
      "   - Team: Nikhil Thange & Aniket Vishwakarma",
      "   - Demo: https://swastyasetu-three.vercel.app | Repo: https://github.com/aniketvishwakarma-11/Swastyasetu",
      "4. [CricNova AI] Real-Time Cricket Analytics & ML Telemetry Platform",
      "   - Predictive match modeling, live ball-by-ball telemetry, player head-to-head metrics",
      "   - Demo: https://cricnova-ai.vercel.app | Repo: https://github.com/nikhilthange/cricnova-ai",
      "5. [SpeakLingo] Real-Time WebRTC Language Studio & AI Coach",
      "   - WebRTC P2P (<120ms), CEFR Radar Matchmaking, Live IELTS HUD, AI Speech Synthesis",
      "   - Repo: https://github.com/nikhilthange/speaklingo",
      "6. [WhatsApp Extractor] Headless Puppeteer Automation & Contact Ledger",
      "   - whatsapp-web.js, Socket.IO live stream, Excel / CSV / vCard, <=256MB memory cap",
      "   - Repo: https://github.com/nikhilthange/whatsapp-group-extractor",
      "7. [Smart Expense] FinTech Capital Telemetry Platform (Case Study)",
      "   - Tesseract.js OCR, NVIDIA NIM cash runway, MongoDB aggregations, sub-30ms Redis"
    ]
  },
  "hiremate": {
    title: "HireMate | AI Interview & Recruitment Platform",
    output: [
      "Role: Full Stack Architect & AI Engineer",
      "Live Demo: https://hiremate-portal.vercel.app",
      "GitHub Repo: https://github.com/nikhilthange/ai-powered-interview-hiring-platform",
      "Tech: React 19, NVIDIA NIM LLMs, Socket.IO WebSockets, Node.js, Express, PostgreSQL, JWT",
      "Highlights: Sub-300ms real-time token streaming, 88% ATS semantic matching, multi-tenant RBAC"
    ]
  },
  "cricnova": {
    title: "CricNova AI | Real-Time Cricket Telemetry & ML Predictions",
    output: [
      "Role: Creator & Lead Full Stack Developer",
      "Live Demo: https://cricnova-ai.vercel.app",
      "GitHub Repo: https://github.com/nikhilthange/cricnova-ai",
      "Tech: TypeScript, React 19, Node.js, RESTful APIs, Vite, Tailwind CSS",
      "Highlights: Real-time ball-by-ball analytics, predictive win models, head-to-head stats HUD"
    ]
  },
  "extractor": {
    title: "WhatsApp Group Contact Extractor & Automated Ledger",
    output: [
      "Role: Creator & Lead Backend Systems Developer",
      "Repository: https://github.com/nikhilthange/whatsapp-group-extractor",
      "Automation Engine: whatsapp-web.js & Headless Chromium with LocalAuth session persistence",
      "Real-Time Telemetry: Socket.IO bi-directional WebSocket streaming for QR login & extraction progress",
      "Data Pipeline: Multi-format exports (.xlsx Excel workbooks, CSV, and phone-ready .vcf vCards)",
      "Performance: Constrained to <=256MB memory cap with explicit garbage collection flags"
    ]
  },
  "swastyasetu": {
    title: "SwasthyaSetu — Offline-First Rural Healthcare Continuity Layer",
    output: [
      "Hackathon: MUSA Codex Hackathon (Top 7 Finalist Standing)",
      "Role: Full Stack & Systems Architecture (Team Project with Aniket Vishwakarma)",
      "Core Innovation: 100% offline-first referral survival with Dexie.js (IndexedDB) & auto-reconnect sync",
      "AI Pipeline: Hugging Face TrOCR vision transformer transcribes cursive handwritten medical prescriptions",
      "Emergency Fallback: ≤160-character compressed GSM SMS transport payload for zero-connectivity zones",
      "Backend & DB: Node.js, Express.js, PostgreSQL with Prisma ORM connection pooling & idempotent event_id sync",
      "Live Deployment: https://swastyasetu-three.vercel.app",
      "GitHub Repository: https://github.com/aniketvishwakarma-11/Swastyasetu"
    ]
  },
  "expense": {
    title: "Smart Expense Manager — FinTech Capital Telemetry Platform",
    output: [
      "Role: Creator & Lead Full Stack FinTech Developer",
      "Benchmark: Engineered to enterprise consumer FinTech UX standards (CRED & Mercury inspired UX)",
      "Core Engines: Multi-account ledgering, Tesseract.js receipt OCR, and MongoDB aggregations",
      "AI & Projections: NVIDIA NIM AI cash runway forecasting and anomaly spend detection",
      "Performance: 70% bundle reduction with lazy Recharts chunks & sub-30ms Redis caching",
      "DevOps: Docker Compose, Playwright E2E, Jest, and Swagger API documentation"
    ]
  },
  "speaklingo": {
    title: "SpeakLingo — Real-Time WebRTC Language Studio & AI Coach",
    output: [
      "Role: Creator & Lead Full Stack Architect",
      "Repository: https://github.com/nikhilthange/speaklingo",
      "Signaling & Streaming: WebRTC (RTCPeerConnection), Socket.IO, Google STUN servers (<120ms P2P latency)",
      "Matchmaking Engine: 360° radar sweep matching global users across CEFR tiers (A1–C2) and topic tags",
      "AI & Audio: 24/7 AI tutor (Emma), Web Speech API live subtitles, and Web Audio API synthesized chimes",
      "HUD Features: Live grammar slip correction, IELTS Part 2 cue cards, and spaced repetition flashcards"
    ]
  },
  "experience": {
    title: "Work Experience",
    output: [
      "Chitralai — Software Development Engineer Intern (Jul 2026 – Present, Remote)",
      "• Boosted user lead conversion by 25% and slashed page load time by 40% with React 19 SPA + AWS CDN.",
      "• Cut FCP to <800ms and CLS by 30% with DOM virtualization.",
      "• Stabilized P95 REST latency to <65ms across 20+ endpoints with Node.js & Redis.",
      "• Maintained 85%+ Jest & Supertest test coverage in GitHub Actions CI/CD."
    ]
  },
  "metrics": {
    title: "Engineered Telemetry & Benchmarks",
    output: [
      "• 500+ req/s sustained concurrent operations (sub-50ms P95 latency)",
      "• 91.4% mAP50 precision on 6-class YOLOv8 custom vision triage",
      "• 100% offline referral queue survival via Dexie.js IndexedDB with 0% data loss",
      "• <800ms First Contentful Paint (FCP) on React 19 video feeds",
      "• <300ms perceived latency for NVIDIA NIM LLM token streaming over WebSockets",
      "• 95% image payload compression via in-browser Canvas API pipeline"
    ]
  },
  "education": {
    title: "Academic Background & Coursework",
    output: [
      "• B.E. in Information Technology — Vasantdada Patil Pratishthan's College of Engineering (Mumbai University)",
      "  CGPA: 7.50 / 10.0 | Aug 2023 – Jun 2027 (Expected)",
      "  Core Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP, System Design",
      "• HSC Science — Ramniranjan Jhunjhunwala College (61.0%) | Jun 2021 – May 2023",
      "• SSC — Saraswati Vidya Niketan (87.0%) | Jun 2020 – Mar 2021"
    ]
  },
  "resume": {
    title: "Official Resume Document (PDF)",
    output: [
      "• File: Nikhil_Thange_Resume.pdf (ATS-Optimized Engineering Resume)",
      "• Primary Canonical URL: /resume.pdf",
      "• Alternate Mirror: /thangenikhil.pdf",
      "• Direct Download: /resume.pdf",
      "• Candidate: Nikhil Ankush Thange (Full Stack & AI Systems Engineer)"
    ]
  },
  "contact": {
    title: "Direct Channels & Verified Handles",
    output: [
      "• Email: nikhilthange75@gmail.com",
      "• Phone / Voice: (+91) 9820078156",
      "• WhatsApp: https://wa.me/919820078156",
      "• LinkedIn: https://www.linkedin.com/in/nikhil-thange-001bb52b5",
      "• GitHub: https://github.com/nikhilthange",
      "• Smart Civic CityOS: https://smart-civic-pi.vercel.app",
      "• HireMate Interview AI: https://hiremate-portal.vercel.app",
      "• CricNova AI: https://cricnova-ai.vercel.app",
      "• SwasthyaSetu: https://swastyasetu-three.vercel.app",
      "• SpeakLingo: https://github.com/nikhilthange/speaklingo",
      "• WhatsApp Extractor: https://github.com/nikhilthange/whatsapp-group-extractor"
    ]
  },
  "hire": {
    title: "Priority Recruitment Protocol",
    output: [
      "Status: READY_TO_DEPLOY // ACTIVE_SCREENING",
      "Notice Period: Immediate (Internships) / Flexible",
      "Target Roles: Full Stack Engineer, Backend Engineer, Frontend Engineer (React 19), AI Systems SDE",
      "Action: Email nikhilthange75@gmail.com or WhatsApp (+91 9820078156) with subject '[Interview Request] Opportunity for Nikhil Thange'"
    ]
  }
};
