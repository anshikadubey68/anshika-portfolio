import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';
import Tilt3D from './Tilt3D';
import { Award, BookOpen, Layers, Sparkles, Terminal, CheckCircle2, Cpu, ShieldCheck, Zap, Compass } from 'lucide-react';

/**
 * Animated Counter component that activates when in view.
 */
function StatCounter({ targetValue, decimals = 0, suffix = '', label, caption }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const current = easeOutProgress * targetValue;

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setCount(targetValue);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, hasAnimated]);

  return (
    <Tilt3D scale={1.03} maxRotation={6}>
      <div
        ref={elementRef}
        className="p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.09] hover:border-[#00f0ff]/50 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.2)] transition-all duration-300 group h-full flex flex-col justify-between"
      >
        <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-[#00f0ff] transition-colors mb-1.5 tracking-tight flex items-baseline">
          <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>
          <span className="text-lg sm:text-2xl text-[#00f0ff] ml-1">{suffix}</span>
        </div>
        <div>
          <div className="font-title text-sm sm:text-base font-semibold text-white/95 mb-0.5">
            {label}
          </div>
          <div className="font-mono text-xs text-[#94a3b8] leading-tight">{caption}</div>
        </div>
      </div>
    </Tilt3D>
  );
}

export default function About() {
  const { about, profileImage, name } = personalInfo;

  return (
    <section id="about" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00f0ff]/10 via-[#8b5cf6]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
              01 // BIOGRAPHY & ENGINEERING PHILOSOPHY
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Large Editorial Statement */}
        <ScrollReveal direction="up" delay={100}>
          <div className="mb-14 sm:mb-20">
            <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
              “I DON'T JUST WRITE CODE.{' '}
              <span className="text-gradient-aurora">
                I BUILD EXPERIENCES.
              </span>”
            </h2>
          </div>
        </ScrollReveal>

        {/* Two-Column Editorial Narrative & Refined 3D Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20 sm:mb-28">
          {/* Left Column: Refined Compact Editorial Portrait with 3D Perspective Tilt */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start sticky top-28">
            <ScrollReveal direction="right" delay={150}>
              <Tilt3D maxRotation={10} scale={1.03}>
                <div className="relative group max-w-[240px] sm:max-w-[270px] w-full">
                  {/* Futuristic Corner Reticles */}
                  <div className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
                  <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />
                  <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
                  <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />

                  {/* Ambient Glow Aura */}
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#00f0ff]/30 via-[#8b5cf6]/20 to-[#10b981]/25 blur-md group-hover:blur-lg transition-all opacity-75 group-hover:opacity-100" />

                  {/* Image Frame Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#0d0f1a] border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                    <img
                      src={profileImage}
                      alt={name}
                      className="w-full aspect-[3.8/4.6] object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                    />

                    {/* Cyber overlay badge at bottom */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-[#06070a] via-[#06070a]/85 to-transparent flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-white font-bold block text-xs">{name}</span>
                        <span className="text-[#00f0ff] text-[10px] tracking-wider">CSE • 8.93 CGPA</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981] animate-ping" />
                    </div>
                  </div>

                  {/* Floating 3D Spec Capsule */}
                  <div className="absolute -bottom-3.5 -right-3.5 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0d0f1a]/95 backdrop-blur-xl border border-white/20 shadow-xl font-mono text-[10px] text-[#00f0ff]">
                    <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                    <span className="font-bold tracking-wider">FULL STACK & AI</span>
                  </div>
                </div>
              </Tilt3D>
            </ScrollReveal>
          </div>

          {/* Right Column: Deep Expanded Narrative */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <ScrollReveal direction="up" delay={150}>
              <p className="font-sans text-base sm:text-xl text-white font-normal leading-relaxed">
                {about.leadParagraph}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <p className="font-sans text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                {about.storyParagraph1}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                {about.storyParagraph2}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                {about.storyParagraph3}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              <div className="relative overflow-hidden rounded-2xl border border-[#00f0ff]/15 bg-[#00f0ff]/[0.035] p-5 sm:p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#00f0ff]/10 blur-2xl" />
                <p className="relative font-sans text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                  {about.storyParagraph4}
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Specialization Tags */}
            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Graph Optimization (C++)', 'Sub-50ms IIoT Failovers', 'CNN Crop Vision (15 Classes)', 'Full-Stack REST & Auth', 'Interactive 3D WebGL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs text-[#00f0ff] font-medium"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Four Architectural Pillars (Detailed Interactive 3D Cards) */}
        <div className="mb-20 sm:mb-28">
          <ScrollReveal direction="up">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider block mb-1">
                  CORE SPECIALIZATION
                </span>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  FOUR ARCHITECTURAL PILLARS
                </h3>
              </div>
              <span className="font-mono text-xs text-[#64748b]">ENGINEERED COMPETENCIES</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {about.pillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.number} direction="up" delay={idx * 80}>
                <Tilt3D scale={1.02} maxRotation={6}>
                  <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d101e]/85 to-[#080a14]/90 border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] transition-all duration-300 h-full flex flex-col justify-between group shadow-xl">
                    <div>
                      {/* Top Row: Pillar Number & Tag */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                        <span className="font-mono text-2xl font-black text-[#00f0ff]">
                          {pillar.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-[#cbd5e1]">
                          {pillar.tag}
                        </span>
                      </div>

                      <h4 className="font-title text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-3">
                        {pillar.title}
                      </h4>

                      <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-[#00f0ff]">
                      <span className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>{pillar.metrics}</span>
                      </span>
                      <CheckCircle2 className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Tilt3D>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Engineering Principles & Methodology */}
        <div className="mb-20 sm:mb-28">
          <ScrollReveal direction="up">
            <div className="mb-8">
              <span className="font-mono text-xs text-[#8b5cf6] uppercase tracking-wider block mb-1">
                SYSTEM DESIGN PHILOSOPHY
              </span>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                HOW I ENGINEER SYSTEMS
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {about.principles.map((pr, idx) => (
              <ScrollReveal key={pr.title} direction="up" delay={idx * 100}>
                <Tilt3D scale={1.02} maxRotation={6}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#8b5cf6]/50 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6] flex items-center justify-center mb-4">
                        <Compass className="w-5 h-5" />
                      </div>
                      <h4 className="font-title text-base sm:text-lg font-bold text-white mb-2">
                        {pr.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        {pr.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.05] font-mono text-[10px] text-[#64748b] uppercase">
                      PRINCIPLE 0{idx + 1}
                    </div>
                  </div>
                </Tilt3D>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Animated Key Statistics Section with 3D Tilt */}
        <div>
          <ScrollReveal direction="up">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                <span>QUANTIFIABLE METRICS</span>
              </span>
              <span className="font-mono text-xs text-[#00f0ff]">AUDITED // 2026</span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {about.stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} direction="up" delay={idx * 80}>
                <StatCounter
                  targetValue={stat.numericValue}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                  label={stat.label}
                  caption={stat.caption}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
