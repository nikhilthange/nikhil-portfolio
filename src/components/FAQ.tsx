import React, { useState, useId } from 'react';
import { 
  ChevronDown, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText,
  Terminal,
  HelpCircle
} from 'lucide-react';
import { FAQ_ITEMS, type FAQItem } from '../data/portfolioData';

interface FAQProps {
  onOpenTerminal?: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenTerminal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'specialization-overview': true,
    'backend-throughput-scaling': true,
  });
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const searchInputId = useId();

  const categories = [
    'All',
    'Backend & Systems',
    'AI & Vision',
    'Offline-First',
    'Availability & Roles',
  ];

  const filteredItems = FAQ_ITEMS.filter((item: FAQItem) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.question.toLowerCase().includes(q) ||
      item.shortAnswer.toLowerCase().includes(q) ||
      item.keywords.some((kw: string) => kw.toLowerCase().includes(q)) ||
      item.detailedPoints.some((pt: string) => pt.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyQuestionLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section 
      id="faq" 
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0"
      aria-label="Technical and Architectural Frequently Asked Questions"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="space-y-2 mb-6 sm:mb-8 text-left">
          <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
            06 // ARCHITECTURE &amp; TECHNICAL FAQ
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
            SYSTEM SPECIFICATIONS &amp; ARCHITECTURAL INQUIRIES
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-3xl leading-relaxed">
            Technical breakdowns on microservice throughput, custom YOLOv8 defect models, offline-first database synchronization, and engineering availability.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 bg-slate-950/90 border border-[#00D9FF]/20 corner-crosshair">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Filter FAQ Categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-150 ${
                  selectedCategory === cat
                    ? 'bg-[#00D9FF] text-black font-semibold'
                    : 'bg-black/80 text-slate-400 hover:text-white hover:bg-slate-900 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <label htmlFor={searchInputId} className="sr-only">Search technical questions or keywords</label>
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture or stack..."
              className="w-full pl-9 pr-3 py-1.5 bg-black text-white text-xs font-mono border border-white/20 focus:border-[#00D9FF] focus:outline-none placeholder:text-slate-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 hover:text-white"
              >
                [RESET]
              </button>
            )}
          </div>
        </div>

        {/* Accordion Questions Matrix */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-white/20 bg-slate-950/60 font-mono text-xs text-slate-400 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-600 mx-auto" />
              <p>NO SPECIFICATIONS FOUND MATCHING &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-[#00D9FF] underline hover:text-[#8BE9FD]"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = !!openItems[item.id];
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className={`border transition-all duration-200 ${
                    isOpen 
                      ? 'border-[#00D9FF]/40 bg-black/95' 
                      : 'border-white/10 bg-slate-950/60 hover:border-white/25'
                  }`}
                >
                  {/* Question Header Button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00D9FF]"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono">
                        <span className="text-[#00D9FF] font-semibold">
                          // SPEC_{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-400 uppercase tracking-widest text-[10px]">
                          {item.category}
                        </span>
                      </div>

                      <h4 className="text-sm sm:text-base font-space font-medium text-white tracking-wide">
                        {item.question}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 pt-1">
                      <button
                        type="button"
                        onClick={(e) => copyQuestionLink(item.id, e)}
                        title="Copy direct anchor link"
                        className="p-1.5 text-slate-500 hover:text-[#00D9FF] hover:bg-slate-900 border border-transparent hover:border-[#00D9FF]/30 transition-colors"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <div className={`p-1 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#00D9FF]' : 'text-slate-400'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 border-t border-white/5 space-y-4">
                      {/* Short Answer Lead */}
                      <p className="text-slate-200 text-xs sm:text-sm font-sans leading-relaxed pt-3 border-l-2 border-[#00D9FF] pl-3 bg-slate-900/40 py-2">
                        {item.shortAnswer}
                      </p>

                      {/* Detailed Bullet Points */}
                      {item.detailedPoints && item.detailedPoints.length > 0 && (
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                            Key Architectural Highlights:
                          </span>
                          <ul className="space-y-1 text-xs text-slate-400 font-sans">
                            {item.detailedPoints.map((point: string, pIdx: number) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="text-[#00D9FF] font-mono text-[11px] select-none shrink-0 mt-0.5">▹</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Key Metrics Strip */}
                      {item.metrics && item.metrics.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {item.metrics.map((m, mIdx) => (
                            <div 
                              key={mIdx}
                              className="px-2.5 py-1 bg-black border border-white/10 text-[11px] font-mono flex items-center gap-1.5"
                            >
                              <span className="text-slate-500 uppercase">{m.label}:</span>
                              <span className="text-[#00D9FF] font-semibold">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Links & Deep Dives */}
                      {item.actionLink && (
                        <div className="pt-2 flex items-center justify-between flex-wrap gap-2 border-t border-white/5">
                          <a
                            href={item.actionLink.href}
                            target={item.actionLink.isExternal ? '_blank' : '_self'}
                            rel={item.actionLink.isExternal ? 'noreferrer' : undefined}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00D9FF] hover:underline"
                          >
                            <span>{item.actionLink.label}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>

                          <div className="flex flex-wrap items-center gap-1">
                            {item.keywords.slice(0, 3).map((kw, kwIdx) => (
                              <span 
                                key={kwIdx}
                                className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 bg-slate-900 border border-white/5"
                              >
                                #{kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })
          )}
        </div>

        {/* Clean Engineering Status Bar (Subtle & Authentic) */}
        <div className="p-4 bg-slate-950/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white">SYSTEM_STATUS: VERIFIED</span>
            <span className="text-slate-600">//</span>
            <span>PRODUCTION_READY</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#00D9FF]" />
              <span>Resume PDF</span>
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hover:text-[#00D9FF] transition-colors flex items-center gap-1.5 text-[#00D9FF]"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI Terminal (Ctrl+K)</span>
              </button>
            )}

            <a 
              href="#contact" 
              className="hover:text-white transition-colors text-slate-400"
            >
              Contact &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
