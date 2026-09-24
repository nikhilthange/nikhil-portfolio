import React, { useState } from 'react';
import { 
  ArrowUpRight,
  Workflow
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ArchitectureModal } from './ArchitectureModal';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack & AI', 'Cloud & Distributed Systems', 'AI & LLMs'];

  const filteredProjects = selectedCategory === 'All' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-10 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          03 // PROJECTS // DEPLOYMENTS
        </h2>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
              PRODUCTION-GRADE ARCHITECTURES & AI SYSTEMS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mt-1">
              Distributed civic tech microservices, custom YOLOv8 edge vision pipelines, and real-time LLM token streaming platforms.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-space tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00D9FF] text-black font-semibold shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                    : 'bg-black/60 text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                [ {cat} ]
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-8 sm:space-y-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-4 sm:p-6 md:p-8 lg:p-10 bg-black/80 border border-[#00D9FF]/20 corner-crosshair space-y-5 sm:space-y-6 hover:border-[#00D9FF]/60 transition-all duration-300"
          >
            {/* Header / Subtitle */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] sm:text-[11px] font-space tracking-widest uppercase text-[#00D9FF] bg-[#00D9FF]/10 px-2 py-0.5 border border-[#00D9FF]/30">
                    {project.category}
                  </span>
                  {project.badge ? (
                    <span className="text-[10px] sm:text-[11px] font-mono text-amber-300 flex items-center gap-1.5 bg-amber-400/10 px-2 py-0.5 border border-amber-400/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      {project.badge}
                    </span>
                  ) : (
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      FEATURED_ARCHITECTURE
                    </span>
                  )}
                  {project.collaborators && (
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 border border-white/10 px-2 py-0.5 bg-white/5">
                      👥 {project.collaborators}
                    </span>
                  )}
                </div>

                <h4 className="text-xl sm:text-2xl md:text-3xl font-space font-medium text-white tracking-wide uppercase mt-1.5 leading-snug">
                  {project.title}
                </h4>

                <p className="text-xs sm:text-sm font-space text-[#8BE9FD] tracking-wider uppercase">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 self-stretch sm:self-start">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="btn-cyber-outline py-1.5 px-2.5 sm:px-3 text-[10px] sm:text-[11px] flex-1 sm:flex-initial"
                  title="Inspect Architecture Dataflow"
                >
                  <Workflow className="w-3.5 h-3.5 text-[#00D9FF]" />
                  <span>[ Pipeline Flow ]</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-primary py-1.5 px-2.5 sm:px-3 text-[10px] sm:text-[11px] flex-1 sm:flex-initial"
                  >
                    <span>[ Live Demo ]</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      !project.liveUrl ? 'btn-cyber-primary' : 'btn-cyber-outline'
                    } py-1.5 px-2.5 sm:px-3 text-[10px] sm:text-[11px] flex-1 sm:flex-initial flex items-center justify-center gap-1.5 ${
                      project.liveUrl ? 'text-slate-300 hover:text-white hover:border-[#00D9FF]' : ''
                    }`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>[ GitHub Repo ]</span>
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {project.description}
            </p>

            {/* Metrics HUD Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-2.5 sm:p-3 bg-slate-950/90 border border-white/5"
                >
                  <div className="text-base sm:text-lg md:text-xl font-bold font-mono text-[#00D9FF]">
                    {m.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-space uppercase tracking-wider text-slate-400 mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2 pt-1">
              <div className="text-[10px] sm:text-xs font-space tracking-widest text-slate-400 uppercase">
                KEY_SUBSYSTEMS // HIGHLIGHTS:
              </div>

              <div className="space-y-1.5">
                {project.highlights.map((h, hIdx) => {
                  const [title, ...rest] = h.split(':');
                  return (
                    <div
                      key={hIdx}
                      className="p-3 bg-black/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-light"
                    >
                      <span className="text-[#00D9FF] font-mono mt-0.5 shrink-0">&gt;</span>
                      <div>
                        <strong className="text-white font-medium">{title}:</strong>{' '}
                        <span className="text-slate-300">{rest.join(':')}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Badges */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="cyber-tag text-[10px] sm:text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Modal */}
      {activeProjectModal && (
        <ArchitectureModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
};
