import React from 'react';
import { personalInfo } from '../data/portfolio';
import HeroScene3D from './HeroScene3D';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  const { hero, availability, github, linkedin, email } = personalInfo;

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      {/* 3D Interactive WebGL Canvas as Background & Depth Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-85 pointer-events-auto">
        <HeroScene3D />
      </div>

      {/* Top Editorial Eyebrow & Status */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#00f0ff] tracking-[0.25em] uppercase">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-white/20 font-mono text-xs">•</span>
            <span className="hidden sm:inline font-mono text-xs text-[#94a3b8] uppercase tracking-wider">
              {personalInfo.shortRole}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="hidden sm:inline text-white/80">{availability.status}</span>
              <span className="sm:hidden text-white/80">AVAILABLE</span>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#64748b] tracking-widest">
              LPU • CSE 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Massive Editorial Title & Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 my-auto py-12 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="font-mono text-xs tracking-wider text-[#e2e8f0]">
              Creative Developer & Systems Engineer
            </span>
          </div>

          {/* Huge Strategic Editorial Typography */}
          <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] sm:leading-[0.92] text-white uppercase mb-8">
            <span className="block text-gradient-subtle">{hero.headlineLine1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-[#818cf8]">
              {hero.headlineLine2}
            </span>
            <span className="block text-white/95">{hero.headlineLine3}</span>
          </h1>

          {/* Editorial Subhead */}
          <p className="font-sans text-base sm:text-xl text-[#94a3b8] max-w-2xl font-normal leading-relaxed mb-10">
            {hero.subhead}
          </p>

          {/* CTA Button Array */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleScrollTo('projects')}
              data-cursor-text="VIEW WORK"
              className="group relative px-7 py-4 rounded-full bg-[#00f0ff] text-[#070709] font-mono text-xs sm:text-sm font-extrabold tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              <span>{hero.ctaPrimary}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              data-cursor-text="LET'S TALK"
              className="px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2"
            >
              <span>{hero.ctaSecondary}</span>
              <ArrowUpRight className="w-4 h-4 text-[#00f0ff]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
          <div className="flex items-center gap-6">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>GITHUB</span>
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="text-[#94a3b8] hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>EMAIL</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[#94a3b8]">
            <span className="hidden md:inline">CGPA: 8.93 // CSE UNDERGRADUATE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span className="text-[#00f0ff]">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

