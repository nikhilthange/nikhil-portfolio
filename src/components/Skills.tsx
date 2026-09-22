import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, skills: matchingSkills };
  }).filter((cat) => {
    if (activeCategory !== 'All' && cat.category !== activeCategory) {
      return false;
    }
    return cat.skills.length > 0;
  });

  return (
    <section id="skills" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-10 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          04 // SKILLS // COMPETENCY_INDEX
        </h2>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
              TECHNICAL STACK & CORE SPECIALIZATIONS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mt-1">
              Production competencies covering languages, reactive frontends, distributed microservices, and computer vision pipelines.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Redis, PyTorch)..."
              className="w-full pl-9 pr-3 py-2 bg-black/80 border border-[#00D9FF]/30 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF]"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-space tracking-wider uppercase transition-all ${
              activeCategory === 'All'
                ? 'bg-[#00D9FF] text-black font-semibold shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                : 'bg-black/60 text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            [ All Categories ]
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-space tracking-wider uppercase transition-all ${
                activeCategory === cat.category
                  ? 'bg-[#00D9FF] text-black font-semibold shadow-[0_0_15px_rgba(0,217,255,0.4)]'
                  : 'bg-black/60 text-slate-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              [ {cat.category} ]
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.category}
            className="p-4 sm:p-6 bg-black/80 border border-[#00D9FF]/20 corner-crosshair space-y-3.5 hover:border-[#00D9FF]/50 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h4 className="text-xs sm:text-sm font-space font-semibold text-white tracking-wider uppercase">
                {cat.category}
              </h4>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#00D9FF]">
                [{cat.skills.length} ITEMS]
              </span>
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-2 py-1 bg-slate-950/90 border border-white/10 hover:border-[#00D9FF]/50 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-[11px] sm:text-xs font-mono text-slate-200">
                    {skill.name}
                  </span>
                  {skill.tag && (
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#00D9FF] bg-[#00D9FF]/10 px-1 rounded">
                      {skill.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
