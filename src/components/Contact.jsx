import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import confetti from 'canvas-confetti';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const { email, github, linkedin, location } = personalInfo;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#818cf8', '#10b981'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Open user's mail client with prefilled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#06070a] overflow-hidden border-t border-white/[0.08]">
      {/* Dramatic ambient radial backdrops */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#00f0ff]/10 via-[#818cf8]/5 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            08 // GET IN TOUCH
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Huge Dramatic Typography */}
        <div className="mb-20">
          <h2 className="font-display text-4xl sm:text-7xl lg:text-9xl font-black text-white tracking-tight leading-[0.92] uppercase">
            <span className="block text-gradient-subtle">LET'S BUILD</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-[#818cf8]">
              SOMETHING
            </span>
            <span className="block text-white">GREAT.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8 pt-8 border-t border-white/[0.08]">
            <p className="font-sans text-lg sm:text-2xl text-[#94a3b8] max-w-xl font-light">
              Have an engineering opportunity, research idea, or project in mind? Let's connect.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>ACTIVE INBOX & INTERVIEW READY</span>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Left Column: Direct Email & Social Direct Access */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Interactive Email Copy Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-300 relative group">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL ACCESS</span>
                </span>
                <span className="font-mono text-[11px] text-[#64748b]">CLICK TO COPY</span>
              </div>

              <div className="my-4">
                <button
                  onClick={handleCopyEmail}
                  data-cursor-text="COPY EMAIL"
                  className="font-display text-xl sm:text-3xl font-black text-white group-hover:text-[#00f0ff] transition-colors text-left break-all flex items-center gap-3 w-full"
                >
                  <span>{email}</span>
                  <div className="p-2 rounded-xl bg-white/[0.05] group-hover:bg-[#00f0ff]/20 text-[#00f0ff] shrink-0 transition-colors">
                    {copied ? <Check className="w-5 h-5 text-[#10b981]" /> : <Copy className="w-5 h-5" />}
                  </div>
                </button>
              </div>

              {copied && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 text-[#10b981] font-mono text-xs animate-pulse">
                  <Check className="w-3.5 h-3.5" />
                  <span>Email copied to clipboard!</span>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00f0ff] text-[#070709] font-mono text-xs font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN IN DEFAULT EMAIL CLIENT</span>
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
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#818cf8]/50 transition-all duration-300 group flex items-center justify-between"
              >
                <div>
                  <div className="font-title text-lg font-bold text-white group-hover:text-[#818cf8] transition-colors">
                    LinkedIn Profile
                  </div>
                  <div className="font-mono text-xs text-[#94a3b8] mt-1">
                    Connect professionally
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#818cf8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="GITHUB"
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#00f0ff]/50 transition-all duration-300 group flex items-center justify-between"
              >
                <div>
                  <div className="font-title text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    GitHub Profile
                  </div>
                  <div className="font-mono text-xs text-[#94a3b8] mt-1">
                    Inspect code & commits
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Instant Message Dispatch Form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-[#00f0ff]" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  SEND AN INSTANT NOTE
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-2 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:outline-none font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-2 uppercase">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:outline-none font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#94a3b8] mb-2 uppercase">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, engineering role, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#64748b] focus:border-[#00f0ff] focus:outline-none font-sans text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-text="SEND"
                  className="w-full py-4 px-6 rounded-xl bg-white/[0.05] hover:bg-[#00f0ff] text-white hover:text-[#070709] border border-white/15 hover:border-transparent font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
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
