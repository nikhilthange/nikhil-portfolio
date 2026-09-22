import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10 scroll-mt-16 lg:scroll-mt-0">
      {/* Section Header */}
      <div className="space-y-2 mb-8 sm:mb-10 text-left">
        <h2 className="text-[10px] sm:text-xs font-space tracking-[0.2em] sm:tracking-[0.25em] text-[#00D9FF] uppercase font-semibold">
          06 // CONTACT // TRANSMISSION
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-light font-space tracking-wider uppercase text-white leading-snug">
          INITIATE ENGINEERING COLLABORATION
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-light max-w-2xl leading-relaxed mt-1">
          Direct communication channels for full stack engineering opportunities, distributed microservices, or computer vision collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 sm:p-6 bg-black/80 border border-[#00D9FF]/20 corner-crosshair space-y-4 sm:space-y-5">
            <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase">
              DIRECT_CHANNELS // SPEC
            </div>

            {/* Email */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-white/5 flex items-center justify-between group hover:border-[#00D9FF]/40 transition-colors gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="p-2 bg-black border border-[#00D9FF]/30 text-[#00D9FF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">EMAIL_TRANSMISSION</div>
                  <div className="text-xs font-mono text-white font-medium truncate">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="p-1.5 bg-black border border-white/10 hover:border-[#00D9FF] text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-white/5 flex items-center justify-between group hover:border-[#00D9FF]/40 transition-colors gap-2">
              <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                <div className="p-2 bg-black border border-[#00D9FF]/30 text-[#00D9FF] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">TELEPHONY_VOICE</div>
                  <div className="text-xs font-mono text-white font-medium truncate">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 bg-black border border-white/10 hover:border-[#00D9FF] text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 bg-black border border-[#00D9FF]/30 text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">BASE_STATION</div>
                <div className="text-xs font-mono text-white font-medium">{PERSONAL_INFO.location}</div>
                <div className="text-[10px] font-mono text-slate-500">{PERSONAL_INFO.timezone}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-white/10 flex gap-2">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-cyber-outline py-2 text-[10px] sm:text-[11px]"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>[ LinkedIn ]</span>
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 btn-cyber-outline py-2 text-[10px] sm:text-[11px]"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#00D9FF]" />
                <span>[ GitHub ]</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <div className="p-4 sm:p-6 md:p-8 bg-black/80 border border-[#00D9FF]/20 corner-crosshair">
            <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase mb-4">
              SECURE_MESSAGE_DISPATCH // PROTOCOL
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 bg-black border border-emerald-500/40 text-center space-y-3">
                <div className="w-10 h-10 border border-emerald-400 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-space tracking-wider uppercase text-white font-medium">
                  TRANSMISSION_ACKNOWLEDGED // 200 OK
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono max-w-sm mx-auto">
                  Thank you for reaching out. Nikhil will process your transmission and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                      IDENTIFIER // NAME:
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiters / Engineering Lead"
                      className="cyber-input"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                      RETURN_DESTINATION // EMAIL:
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. lead@company.com"
                      className="cyber-input"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                    DISPATCH_PAYLOAD // MESSAGE:
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the opportunity, engineering role, or collaboration..."
                    className="cyber-input resize-none"
                  />
                </div>

                <button
                  id="send-message-btn"
                  type="submit"
                  className="w-full btn-cyber-primary py-3 shadow-[0_0_15px_rgba(0,217,255,0.25)] text-[11px] sm:text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>[ TRANSMIT DISPATCH ]</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
