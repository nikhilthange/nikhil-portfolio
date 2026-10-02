import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  Eye, 
  Check, 
  Copy, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Mail, 
  Phone, 
  Printer, 
  ArrowUpRight, 
  Calendar,
  CheckCircle2,
  FolderGit2,
  Send,
  FileCheck
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  FEATURED_PROJECTS, 
  SKILL_CATEGORIES, 
  ACHIEVEMENTS, 
  EDUCATION_LIST 
} from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ats' | 'pdf'>('ats');
  const [copiedAts, setCopiedAts] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const resumePath = PERSONAL_INFO.resumeUrl || '/resume.pdf';
  const downloadFileName = PERSONAL_INFO.resumeFileName || 'Nikhil_Thange_Resume.pdf';

  // Plain-text representation formatted specifically for ATS & recruiter notes
  const atsPlainText = `NIKHIL ANKUSH THANGE
Full Stack Software Engineer | High-Concurrency Microservices & AI Pipelines
Mumbai, Maharashtra, India | Phone: (+91) 9820078156 | Email: nikhilthange75@gmail.com
LinkedIn: https://linkedin.com/in/nikhil-thange | GitHub: https://github.com/nikhilthange
Portfolio: https://nikhil-portfolio-liart-one.vercel.app

TECHNICAL SUMMARY
Full Stack Software Engineer specializing in high-concurrency microservices, reactive React/TypeScript architectures, and computer vision AI pipelines. Engineered distributed backends sustaining 500+ concurrent requests (sub-50ms P95) with Redis/MongoDB, built direct-to-S3 presigned multipart upload pipelines with AWS SQS transcoding, and fine-tuned YOLOv8 vision models to 91.4% mAP50. Strong foundation in Data Structures, Algorithms, System Design, and automated CI/CD testing (Jest/Supertest).

TECHNICAL SKILLS
- Languages: TypeScript, JavaScript, Python, Java, SQL, C/C++, HTML5, CSS3
- Frontend: React 19, Next.js, Redux Toolkit, TanStack Query, Tailwind CSS, WebSockets
- Backend & Cloud: Node.js, Express, REST APIs, AWS (EC2, S3, DynamoDB, SQS, CloudFront), Docker, Nginx
- Databases & Tools: PostgreSQL, MongoDB, Redis, Prisma ORM, Git/GitHub, CI/CD (GitHub Actions), Jest, Vitest
- AI & Machine Learning: PyTorch, YOLOv8, Computer Vision, LLM Integration (NVIDIA NIM)

WORK EXPERIENCE
Software Development Engineer Intern — Chitralai (Jul 2026 – Present | Remote)
Chitralai | React 18, TypeScript, Node.js, Express, AWS (EC2, S3, DynamoDB, SQS), Redis, Docker
- Frontend Architecture & Landing Page: Architected a high-converting landing page and attendee portal using React 18, TypeScript, and Tailwind CSS; built custom fullscreen media galleries, cutting load times to under 800ms and driving a 25% conversion lift.
- Distributed Backend & Media Pipelines: Built high-throughput Node.js/Express services with direct-to-S3 presigned multipart uploads; deployed AWS SQS workers for media transcoding, eliminating server memory starvation during batch ingestions.
- Cloud Database & Cache Optimization: Modeled low-latency AWS DynamoDB schemas with Global Secondary Indexes (GSI), cutting query latency by 40%; deployed multi-tier Redis caching to stabilize P95 API latency to sub-65ms.
- Production Reliability & Root-Cause Debugging: Diagnosed and resolved critical bottlenecks across S3 storage quotas, EC2 blue-green container routing, and DynamoDB full scans; enforced 85%+ test coverage in GitHub Actions CI/CD.

FLAGSHIP ENGINEERING PROJECTS
1. BMC Smart Civic Operating System (CityOS)
   - Fine-tuned custom YOLOv8 Vision Model (PyTorch, CUDA) on 6 civic defect classes attaining 91.4% mAP50.
   - Scaled Node.js PM2 cluster instances with Redis TTL caching, sustaining 500+ concurrent operations at sub-50ms P95 latency.
   - Built compound 2dsphere geospatial indexing and Turf.js Point-in-Polygon engine across 24 Mumbai wards, automating 35m spatial grievance deduplication.
   - Demo: https://smart-civic-pi.vercel.app | Repo: https://github.com/nikhilthange/smart-civic

2. HireMate | AI-Powered Recruitment Intelligence Platform
   - Architected real-time AI mock interview evaluations streaming NVIDIA NIM LLM token responses over WebSockets, achieving <300ms evaluation latency.
   - Engineered automated resume parsing and candidate matching engine with structured prompt validation (88% semantic match accuracy).
   - Implemented multi-tenant RBAC (Candidate, Recruiter, Admin) with stateless JWT authentication and encrypted audit persistence.
   - Demo: https://hiremate-portal.vercel.app | Repo: https://github.com/nikhilthange/ai-powered-interview-hiring-platform

3. SwasthyaSetu | Rural Healthcare Continuity Layer (MUSA Codex Hackathon — Top 15 Finalist)
   - Secured Top 15 Finalist standing among national engineering teams at MUSA Codex Hackathon.
   - Guaranteed 0% referral data loss during rural broadband blackouts through Dexie.js (IndexedDB) client persistence and idempotent background auto-sync to PostgreSQL/Prisma.
   - Integrated Hugging Face TrOCR transformer model for transcribing handwritten medical prescriptions with human-in-the-loop review.
   - Designed <=160-character compressed GSM SMS emergency fallback payload for zero-internet rural health centers.
   - Demo: https://swastyasetu-three.vercel.app | Repo: https://github.com/aniketvishwakarma-11/SwasthyaSetu

EDUCATION
Bachelor of Engineering in Information Technology — Mumbai University (2023 – 2027 Expected)
- CGPA: 7.50 / 10.0
- Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, System Design

HONORS & CERTIFICATIONS
- MUSA Codex National Hackathon: Top 15 Finalist (2026) – Built SwasthyaSetu offline emergency triage platform.
- IBM Full Stack Software Developer Certification: Microservices, Cloud Architecture, and RESTful APIs.
- Data Structures & Algorithms: Solved 250+ coding challenges across LeetCode and GeeksforGeeks.
- Quasar 4.0 Hackathon (2026) – Engineered a Student Placement portal to automate campus recruitment workflows.`;

  const handleCopyAtsText = () => {
    navigator.clipboard.writeText(atsPlainText);
    setCopiedAts(true);
    setTimeout(() => setCopiedAts(false), 2200);
  };

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${resumePath}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleCopyContact = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-6 sm:mb-8 text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
          <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
            05 // RESUME // OFFICIAL_DOSSIER
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
              CURRICULUM VITAE & ATS ENGINEERING DOSSIER
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mt-1">
              Verified technical resume tailored for engineering recruiters, hiring managers, and automated ATS screening. Available in interactive web document format and downloadable ATS-optimized PDF.
            </p>
          </div>

          {/* Quick Recruiter Direct Actions on Top */}
          <div className="flex flex-wrap items-center gap-2.5 self-stretch sm:self-auto no-print">
            {/* Primary Download Button */}
            <a
              id="download-resume-top-btn"
              href={resumePath}
              download={downloadFileName}
              className="btn-cyber-primary py-2 px-4 text-xs shadow-[0_0_15px_rgba(0,217,255,0.3)] flex-1 sm:flex-initial"
              title="Download official PDF resume file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download PDF ]</span>
            </a>

            {/* View Raw in new tab */}
            <a
              id="view-resume-top-btn"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline py-2 px-3.5 text-xs flex-1 sm:flex-initial"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>[ Open PDF Tab ]</span>
            </a>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="btn-cyber-outline py-2 px-3 text-xs hidden sm:inline-flex items-center gap-1.5"
              title="Print clean paper copy / Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>[ Print ]</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recruiter Telemetry & Fast-Scan Bar */}
      <div className="bg-[#050913]/90 border border-[#00D9FF]/30 p-4 sm:p-5 mb-6 text-xs font-mono space-y-3 corner-crosshair shadow-lg no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 bg-[#00D9FF]/10 border border-[#00D9FF]/40 text-[#00D9FF] text-[10px] font-space tracking-wider uppercase">
              RECRUITER_FAST_SCAN // 2026–2027
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              STATUS: READY TO DEPLOY
            </span>
            <span className="text-slate-400 text-[11px] hidden md:inline">
              Target: Full Stack Engineer / Backend SDE / AI Systems
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-300">
            <span className="text-slate-400">ATS PARSER:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 100% COMPLIANT
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-[#00D9FF]">~200 KB PDF</span>
          </div>
        </div>

        {/* Highlighted Micro-Telemetry */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 text-[11px]">
          <div className="p-2 bg-black/60 border border-white/10">
            <span className="text-slate-400 block text-[10px]">NOTICE PERIOD:</span>
            <span className="text-white font-medium">Immediate</span>
          </div>
          <div className="p-2 bg-black/60 border border-white/10">
            <span className="text-slate-400 block text-[10px]">LOCATION:</span>
            <span className="text-white font-medium">Mumbai (Remote / Relocate)</span>
          </div>
          <div className="p-2 bg-black/60 border border-white/10">
            <span className="text-slate-400 block text-[10px]">SYSTEM CONCURRENCY:</span>
            <span className="text-[#00D9FF] font-medium">500+ req/s (sub-50ms)</span>
          </div>
          <div className="p-2 bg-black/60 border border-white/10">
            <span className="text-slate-400 block text-[10px]">TEST COVERAGE:</span>
            <span className="text-emerald-400 font-medium">85%+ (Jest & CI/CD)</span>
          </div>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="bg-[#050913]/95 border border-[#00D9FF]/25 shadow-2xl overflow-hidden corner-crosshair">
        {/* Recruiter Navigation Bar & View Toggle */}
        <div className="p-3 sm:p-4 bg-[#0a101f] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 no-print">
          {/* Dual Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-black/80 border border-white/10">
            <button
              onClick={() => setActiveTab('ats')}
              className={`px-3 py-1.5 text-xs font-space tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                activeTab === 'ats'
                  ? 'bg-[#00D9FF] text-black font-semibold shadow-[0_0_10px_rgba(0,217,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>[ ATS Document View ]</span>
            </button>

            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1.5 text-xs font-space tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                activeTab === 'pdf'
                  ? 'bg-[#00D9FF] text-black font-semibold shadow-[0_0_10px_rgba(0,217,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>[ Original PDF Stream ]</span>
            </button>
          </div>

          {/* Quick Utility Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Copy Plain Text for ATS */}
            <button
              onClick={handleCopyAtsText}
              className="btn-cyber-outline py-1.5 px-3 text-xs flex items-center gap-1.5"
              title="Copy plain-text formatted resume directly for ATS, Lever, or Greenhouse"
            >
              {copiedAts ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">[ Copied ATS Text! ]</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#00D9FF]" />
                  <span>[ Copy Plain Text ]</span>
                </>
              )}
            </button>

            {/* Direct Download */}
            <a
              href={resumePath}
              download={downloadFileName}
              className="btn-cyber-primary py-1.5 px-3.5 text-xs flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,217,255,0.3)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>[ Download PDF ]</span>
            </a>

            {/* Copy File URL */}
            <button
              onClick={handleCopyLink}
              className="btn-cyber-outline py-1.5 px-2.5 text-xs hidden sm:inline-flex items-center gap-1"
              title="Copy direct link to PDF"
            >
              {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <ExternalLink className="w-3 h-3" />}
              <span>{copiedLink ? 'Link Copied' : 'Link'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ATS Formatted Engineering Resume Sheet */}
        {activeTab === 'ats' && (
          <div className="ats-resume-sheet p-6 sm:p-10 lg:p-12 space-y-8 text-slate-200">
            {/* 00 // Resume Header & Contact Information */}
            <div className="pb-6 border-b border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-space font-medium text-white tracking-wide uppercase">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-space text-[#00D9FF] font-medium tracking-wider uppercase">
                    Full Stack Software Engineer // Distributed Systems & AI Pipelines
                  </p>
                </div>

                <div className="no-print">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" /> ATS-OPTIMIZED & VERIFIED
                  </span>
                </div>
              </div>

              {/* Recruiter Contact Grid with Click-to-Copy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 text-xs font-mono">
                <button
                  onClick={() => handleCopyContact(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-2 p-2 bg-black/40 border border-white/10 hover:border-[#00D9FF]/40 text-left transition-colors group"
                  title="Click to copy email address"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00D9FF] shrink-0" />
                  <span className="truncate group-hover:text-white">{PERSONAL_INFO.email}</span>
                  {copiedItem === 'email' ? (
                    <Check className="w-3 h-3 text-emerald-400 ml-auto shrink-0" />
                  ) : (
                    <Copy className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 ml-auto shrink-0 transition-opacity" />
                  )}
                </button>

                <button
                  onClick={() => handleCopyContact(PERSONAL_INFO.phone, 'phone')}
                  className="flex items-center gap-2 p-2 bg-black/40 border border-white/10 hover:border-[#00D9FF]/40 text-left transition-colors group"
                  title="Click to copy phone number"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8BE9FD] shrink-0" />
                  <span className="truncate group-hover:text-white">{PERSONAL_INFO.phone}</span>
                  {copiedItem === 'phone' ? (
                    <Check className="w-3 h-3 text-emerald-400 ml-auto shrink-0" />
                  ) : (
                    <Copy className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 ml-auto shrink-0 transition-opacity" />
                  )}
                </button>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-black/40 border border-white/10 hover:border-[#00D9FF]/40 text-left transition-colors group"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#00D9FF] shrink-0" />
                  <span className="truncate group-hover:text-white">linkedin.com/in/nikhil-thange</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 ml-auto shrink-0" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-black/40 border border-white/10 hover:border-[#00D9FF]/40 text-left transition-colors group"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                  <span className="truncate group-hover:text-white">github.com/nikhilthange</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500 ml-auto shrink-0" />
                </a>
              </div>
            </div>

            {/* 01 // Executive Technical Summary */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <Sparkles className="w-4 h-4 text-[#00D9FF]" />
                <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                  01 // TECHNICAL SUMMARY & EXECUTIVE VALUE
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Full Stack Software Engineer specializing in <strong className="text-white font-medium">high-concurrency microservices</strong>, 
                reactive <strong className="text-[#00D9FF] font-medium">React 19 / TypeScript</strong> architectures, and 
                <strong className="text-[#8BE9FD] font-medium"> computer vision AI pipelines</strong>. Proven track record architecting distributed backends 
                sustaining <strong className="text-emerald-400 font-mono font-medium">500+ concurrent requests (sub-50ms P95)</strong> with Redis and MongoDB, 
                reducing page load times by <strong className="text-white font-medium">40%</strong> on AWS CloudFront/S3, and fine-tuning YOLOv8 vision models 
                to <strong className="text-[#00D9FF] font-mono font-medium">91.4% mAP50</strong>. Strong foundation in Data Structures, Algorithms, System Design, 
                and automated CI/CD testing (Jest/Supertest).
              </p>
            </div>

            {/* 02 // Core Technical Skills Matrix */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <Code2 className="w-4 h-4 text-[#00D9FF]" />
                <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                  02 // TECHNICAL COMPETENCIES MATRIX
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="p-3.5 bg-black/50 border border-white/10 space-y-2">
                    <span className="font-space font-medium text-white tracking-wider uppercase block text-xs flex items-center justify-between">
                      <span>{cat.category}</span>
                      <span className="text-[10px] font-mono text-[#00D9FF]">{cat.skills.length} TECHNOLOGIES</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 bg-black border border-white/15 text-[11px] font-mono text-slate-300 hover:border-[#00D9FF]/50 transition-colors"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 03 // Professional Work Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <Briefcase className="w-4 h-4 text-[#00D9FF]" />
                <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                  03 // PROFESSIONAL ENGINEERING EXPERIENCE
                </h2>
              </div>

              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="p-4 sm:p-6 bg-black/60 border border-[#00D9FF]/20 space-y-4">
                  {/* Experience Title & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div>
                      <h3 className="text-sm sm:text-base font-space font-medium text-white uppercase tracking-wide">
                        {exp.role} — <span className="text-[#00D9FF]">{exp.company}</span>
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {exp.location} • {exp.type}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2 bg-black/80 border border-white/10">
                        <span className="text-[10px] text-slate-400 block truncate">{m.label}</span>
                        <span className="text-[#00D9FF] font-semibold text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quantifiable Achievement Bullets */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light list-disc list-inside">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="leading-relaxed">
                        <span className="text-slate-300">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mr-1">TECH STACK:</span>
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 bg-black border border-white/15 text-[10px] font-mono text-[#8BE9FD]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 04 // Flagship Production Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                <FolderGit2 className="w-4 h-4 text-[#00D9FF]" />
                <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                  04 // FLAGSHIP ENGINEERING PROJECTS
                </h2>
              </div>

              <div className="space-y-4">
                {FEATURED_PROJECTS.slice(0, 3).map((proj) => (
                  <div key={proj.id} className="p-4 sm:p-5 bg-black/50 border border-white/10 space-y-3 hover:border-[#00D9FF]/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/5">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm sm:text-base font-space font-medium text-white uppercase tracking-wide">
                            {proj.title}
                          </h3>
                          {proj.badge && (
                            <span className="px-2 py-0.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] text-[9px] font-mono uppercase">
                              {proj.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                          {proj.subtitle}
                        </p>
                      </div>

                      {/* External links */}
                      <div className="flex items-center gap-2 no-print">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-black border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-all text-xs font-mono flex items-center gap-1"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 bg-black border border-white/20 text-slate-300 hover:text-white transition-colors text-xs font-mono flex items-center gap-1"
                          >
                            <GithubIcon className="w-3 h-3" />
                            <span>Repo</span>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Metrics badges */}
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {proj.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="px-2 py-1 bg-black/70 border border-white/10 text-[11px]">
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="text-emerald-400 font-semibold">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-300 font-light list-disc list-inside">
                      {proj.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.technologies.slice(0, 8).map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-black border border-white/10 text-[10px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 05 // Education & Honors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                  <GraduationCap className="w-4 h-4 text-[#00D9FF]" />
                  <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                    05 // EDUCATION
                  </h2>
                </div>

                <div className="p-4 bg-black/50 border border-white/10 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-space font-medium text-white uppercase">
                        {EDUCATION_LIST[0].degree}
                      </h3>
                      <p className="text-[11px] font-mono text-[#00D9FF]">
                        {EDUCATION_LIST[0].institution}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400">
                        {EDUCATION_LIST[0].university} • {EDUCATION_LIST[0].location}
                      </p>
                    </div>
                    <div className="px-2 py-1 bg-black border border-emerald-500/30 text-emerald-400 text-xs font-mono shrink-0">
                      CGPA: {EDUCATION_LIST[0].score}
                    </div>
                  </div>

                  <p className="text-[11px] font-mono text-slate-300 pt-1">
                    Period: {EDUCATION_LIST[0].period}
                  </p>

                  <div className="text-[11px] text-slate-400 space-y-1 pt-1 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono block text-slate-400">CORE COURSEWORK:</span>
                    <p className="text-slate-300 font-light leading-relaxed">
                      {EDUCATION_LIST[0].coursework?.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Honors & Certifications */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1 border-b border-white/10">
                  <Award className="w-4 h-4 text-[#00D9FF]" />
                  <h2 className="text-xs sm:text-sm font-space font-semibold uppercase tracking-wider text-white">
                    06 // HONORS & CERTIFICATIONS
                  </h2>
                </div>

                <div className="space-y-2.5">
                  {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="p-3 bg-black/50 border border-white/10 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-space font-medium text-white uppercase">
                          {ach.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#00D9FF] shrink-0">
                          {ach.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Recruiter Handshake Callout */}
            <div className="p-5 sm:p-6 bg-black/90 border border-[#00D9FF]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left no-print">
              <div className="space-y-1">
                <div className="text-xs font-space uppercase tracking-wider text-white font-medium flex items-center justify-center sm:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>INITIATE RECRUITER PRIORITY HANDSHAKE</span>
                </div>
                <p className="text-xs text-slate-400 font-light">
                  Direct recruiter hotline. Available for technical phone screens, coding interviews, and SDE evaluations.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=%5BInterview%20Request%5D%20Engineering%20Opportunity%20for%20Nikhil%20Thange&body=Hi%20Nikhil%2C%0A%0AWe%20reviewed%20your%20engineering%20portfolio%20and%20resume%20and%20would%20like%20to%20schedule%20an%20interview.%0A%0ACompany%3A%20%0ARole%3A%20%0A`}
                  className="btn-cyber-primary py-2 px-4 text-xs shadow-[0_0_15px_rgba(0,217,255,0.3)] flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>[ Email Nikhil ]</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline py-2 px-3.5 text-xs text-emerald-400 border-emerald-500/40 hover:bg-emerald-500 hover:text-black flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>[ WhatsApp ]</span>
                </a>

                <button
                  onClick={handleCopyAtsText}
                  className="btn-cyber-outline py-2 px-3.5 text-xs flex items-center gap-1.5"
                >
                  {copiedAts ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedAts ? '[ Copied! ]' : '[ Copy Text ]'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Original PDF Document Stream Frame */}
        {activeTab === 'pdf' && (
          <div className="space-y-2 p-4 sm:p-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 bg-[#090e1a] border border-white/10 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D9FF] animate-ping" />
                <span className="text-[#00D9FF] font-semibold">LIVE_PDF_STREAM</span>
                <span className="text-slate-400 hidden sm:inline">| {downloadFileName} (ATS-Optimized Verified Document)</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber-outline py-1 px-3 text-[11px] flex items-center gap-1 text-[#00D9FF]"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open In New Tab</span>
                </a>

                <a
                  href={resumePath}
                  download={downloadFileName}
                  className="btn-cyber-primary py-1 px-3 text-[11px] flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            <div className="w-full h-[650px] sm:h-[800px] lg:h-[900px] bg-black border border-[#00D9FF]/20 overflow-hidden relative shadow-inner">
              <iframe
                src={`${resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Nikhil Thange Official Resume Document"
                className="w-full h-full border-0"
                tabIndex={-1}
                loading="lazy"
              />

              {/* Mobile Fallback Overlay */}
              <div className="absolute bottom-3 right-3 sm:hidden bg-black/95 p-2.5 border border-white/20 text-[11px] font-mono">
                <a href={resumePath} target="_blank" rel="noreferrer" className="text-[#00D9FF] underline font-medium">
                  Tap to view full PDF &rarr;
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
