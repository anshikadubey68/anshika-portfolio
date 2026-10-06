import React from 'react';
import { personalInfo } from '../data/portfolio';
import HeroScene3D from './HeroScene3D';
import Tilt3D from './Tilt3D';
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
      className="relative min-h-[95vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* 3D Interactive WebGL Hero Core */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-auto">
        <HeroScene3D />
      </div>

      {/* Top Editorial Eyebrow & Status */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#00f0ff] tracking-[0.25em] uppercase">
              {personalInfo.hero.badge}
            </span>
            <span className="hidden sm:inline text-white/20 font-mono text-xs">•</span>
            <span className="hidden sm:inline font-mono text-xs text-[#94a3b8] uppercase tracking-wider">
              {personalInfo.shortRole}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span className="hidden sm:inline text-white/90">{availability.status}</span>
              <span className="sm:hidden text-white/90">AVAILABLE</span>
            </div>
            <div className="hidden md:block font-mono text-xs text-[#64748b] tracking-widest">
              LPU • CSE 2026
            </div>
          </div>
        </div>
      </div>

      {/* Main Massive Editorial Name & Vision Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 my-auto py-8 sm:py-12 pointer-events-none">
        <div className="max-w-5xl pointer-events-auto">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-md mb-4 sm:mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="font-mono text-xs tracking-wider text-[#e2e8f0]">
              Full Stack Engineer • Applied AI/ML
            </span>
          </div>

          {/* Prominent Big Portfolio Signature Name */}
          <div className="mb-4 sm:mb-6">
            <p className="font-mono text-xs sm:text-sm text-[#00f0ff] tracking-[0.3em] uppercase mb-1 sm:mb-2 font-semibold">
              COMPUTER SCIENCE UNDERGRADUATE
            </p>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem] font-black tracking-[-0.065em] leading-[0.82] text-white uppercase drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              ANSHIKA <span className="text-gradient-aurora">DUBEY</span>
            </h1>
          </div>

          {/* Architectural Vision Statement / Big Concept Headline */}
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white/90 uppercase leading-[1.08] mb-6 sm:mb-8 max-w-3xl">
            “BUILDING DIGITAL EXPERIENCES{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#8b5cf6]">
              THAT THINK.
            </span>”
          </h2>

          {/* Editorial Subhead */}
          <p className="font-sans text-sm sm:text-lg lg:text-xl text-[#cbd5e1] max-w-2xl font-light leading-relaxed mb-8 sm:mb-10">
            {hero.subhead}
          </p>

          {/* CTA Button Array with 3D Tilt */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Tilt3D scale={1.03}>
              <button
                onClick={() => handleScrollTo('projects')}
                data-cursor-text="VIEW WORK"
                className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#8b5cf6] text-[#050609] font-mono text-xs sm:text-sm font-extrabold tracking-wider hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 shadow-2xl"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </Tilt3D>

            <Tilt3D scale={1.03}>
              <button
                onClick={() => handleScrollTo('contact')}
                data-cursor-text="LET'S TALK"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-[#00f0ff]/50 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>{hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00f0ff]" />
              </button>
            </Tilt3D>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10">
        <div className="pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-[#64748b]">
          <div className="flex items-center gap-5 sm:gap-6">
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

          <div className="flex items-center gap-3 sm:gap-4 text-[#94a3b8]">
            <span className="hidden md:inline">CGPA: 8.93 // CSE UNDERGRADUATE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span className="text-[#00f0ff] font-semibold">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
