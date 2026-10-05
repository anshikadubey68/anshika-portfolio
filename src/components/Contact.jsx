import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const { email, github, linkedin } = personalInfo;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#10b981'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 bg-[#040509] overflow-hidden border-t border-white/[0.08]">
      {/* Dramatic ambient radial backdrops */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#00f0ff]/12 via-[#8b5cf6]/8 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            08 // GET IN TOUCH
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* Dramatic Headline - Responsive without text overflow */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tight leading-[1.0] sm:leading-[0.94] uppercase">
            <span className="block text-gradient-subtle">LET'S BUILD</span>
            <span className="block text-gradient-aurora">
              SOMETHING
            </span>
            <span className="block text-white">GREAT.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.08]">
            <p className="font-sans text-base sm:text-xl text-[#cbd5e1] max-w-xl font-light">
              Have an engineering opportunity, research idea, or project in mind? Let's connect.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>ACTIVE INBOX & INTERVIEW READY</span>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Email & Social Direct Access */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            {/* Interactive Email Copy Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d101e]/80 to-[#080a14]/90 border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-300 relative group shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL ACCESS</span>
                </span>
                <span className="font-mono text-[11px] text-[#94a3b8]">CLICK TO COPY</span>
              </div>

              <div className="my-3">
                <button
                  onClick={handleCopyEmail}
                  data-cursor-text="COPY EMAIL"
                  className="font-display text-base sm:text-2xl lg:text-3xl font-black text-white group-hover:text-[#00f0ff] transition-colors text-left flex items-center justify-between gap-2 w-full"
                >
                  <span className="truncate">{email}</span>
                  <div className="p-2 rounded-xl bg-white/[0.05] group-hover:bg-[#00f0ff]/20 text-[#00f0ff] shrink-0 transition-colors">
                    {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </button>
              </div>

              {copied && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] font-mono text-xs animate-pulse">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}

              <div className="mt-5 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-[#050609] font-mono text-xs font-bold hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN IN EMAIL CLIENT</span>
                </a>
              </div>
            </div>

            {/* Social Connection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="LINKEDIN"
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#8b5cf6]/50 transition-all duration-300 group flex items-center justify-between shadow-lg"
              >
                <div>
                  <div className="font-title text-base sm:text-lg font-bold text-white group-hover:text-[#8b5cf6] transition-colors">
                    LinkedIn
                  </div>
                  <div className="font-mono text-xs text-[#94a3b8] mt-0.5">
                    Connect professionally
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#8b5cf6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="GITHUB"
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#00f0ff]/50 transition-all duration-300 group flex items-center justify-between shadow-lg"
              >
                <div>
                  <div className="font-title text-base sm:text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    GitHub
                  </div>
                  <div className="font-mono text-xs text-[#94a3b8] mt-0.5">
                    Inspect code & commits
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Instant Message Dispatch Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d101e]/80 to-[#080a14]/90 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-5">
                <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  SEND AN INSTANT NOTE
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-1.5 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] focus:outline-none font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-1.5 uppercase">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] focus:outline-none font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-1.5 uppercase">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, engineering role, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] focus:outline-none font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-text="SEND"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-white/[0.08] to-white/[0.04] hover:from-[#00f0ff] hover:to-[#38bdf8] text-white hover:text-[#050609] border border-white/15 hover:border-transparent font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>DISPATCH MESSAGE</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
