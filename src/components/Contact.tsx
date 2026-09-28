import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Loader2, AlertCircle, ExternalLink, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const getDirectMailtoUrl = () => {
    const subject = encodeURIComponent(`[Engineering Opportunity] Contacting from Portfolio - ${formData.name || 'Recruiter'}`);
    const body = encodeURIComponent(
      `Hello Nikhil,\n\n${formData.message || 'I reviewed your engineering portfolio and would like to discuss an opportunity.'}\n\nBest regards,\n${formData.name || 'Recruiter'}\n${formData.email || ''}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `[Portfolio Recruiter Inquiry] from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.7 }
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Dispatch failed');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network transmission blocked. Use direct email client fallback below.');
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase flex items-center justify-between">
              <span>DIRECT_CHANNELS // SPEC</span>
              <span className="text-emerald-400 font-mono text-[10px]">AVG RESPONSE: &lt;12H</span>
            </div>

            {/* Email */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-white/5 flex items-center justify-between group hover:border-[#00D9FF]/40 transition-colors gap-2">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="p-2 bg-black border border-[#00D9FF]/30 text-[#00D9FF] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">EMAIL_TRANSMISSION</div>
                  <div className="text-xs font-mono text-white font-medium truncate hover:text-[#00D9FF]">{PERSONAL_INFO.email}</div>
                </div>
              </a>
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
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                <div className="p-2 bg-black border border-[#00D9FF]/30 text-[#00D9FF] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">TELEPHONY_VOICE</div>
                  <div className="text-xs font-mono text-white font-medium truncate hover:text-[#00D9FF]">{PERSONAL_INFO.phone}</div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 bg-black border border-white/10 hover:border-[#00D9FF] text-slate-300 hover:text-white transition-colors shrink-0"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* WhatsApp Direct Chat */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-emerald-500/20 flex items-center justify-between group hover:border-emerald-400/50 transition-colors gap-2">
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1"
              >
                <div className="p-2 bg-black border border-emerald-500/40 text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">WHATSAPP_MESSAGING</div>
                  <div className="text-xs font-mono text-emerald-400 font-medium truncate hover:underline">Instant Screening Chat &rarr;</div>
                </div>
              </a>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 bg-emerald-500/10 border border-emerald-500/40 hover:bg-emerald-500/20 text-emerald-400 transition-colors shrink-0 text-[10px] font-mono px-2"
              >
                [ CHAT ]
              </a>
            </div>

            {/* Location */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 bg-black border border-[#00D9FF]/30 text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-space tracking-wider text-slate-400 uppercase">BASE_STATION</div>
                <div className="text-xs font-mono text-white font-medium">{PERSONAL_INFO.location}</div>
                <div className="text-[10px] font-mono text-slate-400">{PERSONAL_INFO.timezone}</div>
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
            <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
              <span className="text-[10px] sm:text-xs font-space tracking-widest text-[#00D9FF] uppercase font-semibold">
                SECURE_MESSAGE_DISPATCH // PROTOCOL
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                P95_RESPONSE: &lt;12H
              </span>
            </div>

            {submitStatus === 'success' ? (
              <div className="p-6 sm:p-8 bg-black border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 border border-emerald-400 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm sm:text-base font-space tracking-wider uppercase text-white font-medium">
                    TRANSMISSION_ACKNOWLEDGED // 200 OK
                  </h4>
                  <p className="text-xs text-slate-300 font-mono max-w-sm mx-auto">
                    Your dispatch has been successfully routed to Nikhil's inbox. Expect a prompt response.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-cyber-outline py-2 px-4 text-xs font-mono"
                >
                  [ Send Another Transmission ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitStatus === 'error' && (
                  <div className="p-3 bg-rose-950/40 border border-rose-500/40 text-rose-200 text-xs font-mono flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div className="space-y-2 flex-1">
                      <p>{errorMessage}</p>
                      <a
                        href={getDirectMailtoUrl()}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/50 transition-colors uppercase text-[10px] font-space tracking-wider"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>[ Launch Pre-Filled Mail Client ]</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                      RECRUITER / YOUR NAME: [ IDENTIFIER ]
                    </label>
                    <input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      className="cyber-input disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="form-email" className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                      WORK EMAIL: [ RETURN DESTINATION ]
                    </label>
                    <input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. s.jenkins@company.com"
                      className="cyber-input disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-message" className="text-[10px] sm:text-[11px] font-space tracking-wider uppercase text-slate-400">
                    MESSAGE / OPPORTUNITY DETAILS:
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the engineering role, team, stack, or interview schedule..."
                    className="cyber-input resize-none disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2 pt-1">
                  <button
                    id="send-message-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-cyber-primary py-3 shadow-[0_0_15px_rgba(0,217,255,0.25)] text-[11px] sm:text-xs flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                        <span>[ TRANSMITTING DISPATCH... ]</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>[ TRANSMIT DISPATCH ]</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <a
                      href={getDirectMailtoUrl()}
                      className="text-[10px] sm:text-[11px] font-mono text-slate-400 hover:text-[#00D9FF] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Prefer your local client?</span>
                      <span className="text-[#00D9FF] underline">[ Open Pre-Filled Mailto ]</span>
                      <ExternalLink className="w-3 h-3 text-[#00D9FF]" />
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
