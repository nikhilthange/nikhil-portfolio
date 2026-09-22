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
}

export const PERSONAL_INFO = {
  name: "Nikhil Ankush Thange",
  role: "Full Stack Software Engineer",
  taglines: [
    "Full Stack Software Engineer",
    "High-Concurrency Microservices Architect",
    "Computer Vision & AI Pipeline Builder",
    "React 19 & TypeScript Specialist"
  ],
  bio: "Full Stack Software Engineer specializing in high-concurrency microservices, reactive React 19/TypeScript architectures, and computer vision AI pipelines. Engineered distributed backends sustaining 500+ concurrent requests (sub-50ms P95) with Redis/MongoDB and deployed production applications on AWS. Dedicated to writing clean, test-driven code (Jest/Vitest) and automating CI/CD release cycles.",
  location: "Mumbai, MH, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  email: "nikhilthange75@gmail.com",
  phone: "+91 9820078156",
  availability: "Available for Full-time Roles & High-Impact Opportunities",
  socials: {
    linkedin: "https://linkedin.com/in/nikhil-thange",
    github: "https://github.com/nikhilthange",
    smartCivic: "https://smart-civic-pi.vercel.app",
    email: "mailto:nikhilthange75@gmail.com",
    resume: "/thangenikhil.pdf",
  },
  resumeUrl: "/thangenikhil.pdf",
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
    githubUrl: "https://github.com/nikhilthange",
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
    title: "AI-Powered Interview & Recruitment Intelligence Platform",
    subtitle: "Real-time LLM Streaming, Structured ATS Matching & Multi-Tenant RBAC",
    description: "An intelligent technical hiring engine featuring sub-300ms real-time AI interview evaluations with NVIDIA NIM LLMs, automated ATS semantic resume parsing, and multi-tenant enterprise RBAC security.",
    category: "AI & LLMs",
    featured: true,
    technologies: [
      "React 19", "Node.js", "Express.js", "NVIDIA NIM LLMs", "Socket.IO", 
      "PostgreSQL", "MongoDB", "JWT", "Tailwind CSS", "WebSockets"
    ],
    liveUrl: "https://smart-civic-pi.vercel.app",
    githubUrl: "https://github.com/nikhilthange",
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
    scoreLabel: "CGPA"
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Ramniranjan Jhunjhunwala College of Arts, Science & Commerce",
    period: "Jun 2021 – May 2023",
    location: "Mumbai, Maharashtra",
    score: "61.0%",
    scoreLabel: "Percentage"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Saraswati Vidya Niketan",
    period: "Jun 2020 – Mar 2021",
    location: "Mumbai, Maharashtra",
    score: "87.0%",
    scoreLabel: "Percentage"
  }
];

export const CLI_COMMANDS: Record<string, string | { title: string; output: string[] }> = {
  "help": {
    title: "Available Commands",
    output: [
      "  whoami       - View Nikhil's executive engineer profile",
      "  skills       - List core technical competencies by stack",
      "  projects     - View featured production & hackathon projects",
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
      "Current: SDE Intern at Chitralai"
    ]
  },
  "skills": {
    title: "Technical Stack Matrix",
    output: [
      "• Frontend: React 19, Next.js, TypeScript, TanStack Query, Redux Toolkit, Tailwind CSS, WebSockets",
      "• Backend: Node.js, Express.js, RESTful APIs, OpenAPI/Swagger, PM2 Clusters, JWT, RBAC",
      "• AI / ML: YOLOv8, PyTorch, NVIDIA NIM LLMs, Laplacian Blur Edge Triage, Turf.js GIS",
      "• Databases & Cache: MongoDB (2dsphere), PostgreSQL, Redis (TTL Caching), Mongoose Pooling",
      "• Cloud & DevOps: AWS (EC2, S3, CloudFront), Docker, Nginx, GitHub Actions CI/CD, Jest, Supertest"
    ]
  },
  "projects": {
    title: "Featured High-Impact Projects",
    output: [
      "1. [CityOS] BMC Smart Civic Operating System",
      "   - YOLOv8 (91.4% mAP50), PM2 500+ req/s, 2dsphere GIS deduplication, React 19 PWA",
      "   - Demo: https://smart-civic-pi.vercel.app",
      "2. [Interview AI] AI-Powered Recruitment Intelligence Platform",
      "   - NVIDIA NIM LLMs streaming (<300ms), 88% ATS match accuracy, Multi-tenant RBAC"
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
      "• <800ms First Contentful Paint (FCP) on React 19 video feeds",
      "• <300ms perceived latency for NVIDIA NIM LLM token streaming over WebSockets",
      "• 95% image payload compression via in-browser Canvas API pipeline"
    ]
  },
  "education": {
    title: "Academic Background",
    output: [
      "• B.E. in Information Technology — Vasantdada Patil Pratishthan's College of Engineering (Mumbai University)",
      "  CGPA: 7.50 / 10.0 | Aug 2023 – Jun 2027 (Expected)",
      "• HSC Science — Ramniranjan Jhunjhunwala College (61.0%)",
      "• SSC — Saraswati Vidya Niketan (87.0%)"
    ]
  },
  "resume": {
    title: "Official Resume Document (PDF)",
    output: [
      "• File: thangenikhil.pdf (ATS-Optimized Engineering Resume)",
      "• View in Browser: /thangenikhil.pdf",
      "• Direct Download: /thangenikhil.pdf",
      "• Candidate: Nikhil Ankush Thange (Full Stack & AI Engineer)"
    ]
  },
  "contact": {
    title: "Direct Channels",
    output: [
      "• Email: nikhilthange75@gmail.com",
      "• Phone: (+91) 9820078156",
      "• LinkedIn: https://linkedin.com/in/nikhil-thange",
      "• GitHub: https://github.com/nikhilthange",
      "• Portfolio & Civic System: https://smart-civic-pi.vercel.app"
    ]
  },
  "hire": {
    title: "Priority Recruitment Protocol",
    output: [
      "Status: READY_TO_DEPLOY",
      "Notice Period: Immediate / Flexible",
      "Target Roles: Full Stack Engineer, Backend Engineer, Frontend Engineer (React 19), AI Systems SDE",
      "Action: Email nikhilthange75@gmail.com with subject '[Interview Request] Opportunity for Nikhil Thange'"
    ]
  }
};
