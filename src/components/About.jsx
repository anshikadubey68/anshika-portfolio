import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { Award, BookOpen, Layers, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

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
            // Ease out cubic
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
    <div
      ref={elementRef}
      className="p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.09] hover:border-[#00f0ff]/50 hover:shadow-[0_10px_30px_-10px_rgba(0,240,255,0.2)] transition-all duration-300 group"
    >
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-[#00f0ff] transition-colors mb-1.5 tracking-tight flex items-baseline">
        <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>
        <span className="text-lg sm:text-2xl text-[#00f0ff] ml-1">{suffix}</span>
      </div>
      <div className="font-title text-sm sm:text-base font-semibold text-white/95 mb-0.5">
        {label}
      </div>
      <div className="font-mono text-xs text-[#94a3b8] leading-tight">{caption}</div>
    </div>
  );
}

export default function About() {
  const { about, profileImage, name } = personalInfo;

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00f0ff]/10 via-[#8b5cf6]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            01 // BIOGRAPHY & FOCUS
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* Large Editorial Statement */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl leading-[1.1]">
            “I DON'T JUST WRITE CODE.{' '}
            <span className="text-gradient-aurora">
              I BUILD EXPERIENCES.
            </span>”
          </h2>
        </div>

        {/* Two-Column Editorial Narrative & Refined Compact Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-24">
          {/* Left Column: Refined Compact Editorial Portrait (Scaled down for perfect balance) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
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

              {/* Floating Spec Capsule */}
              <div className="absolute -bottom-3.5 -right-3.5 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d0f1a]/95 backdrop-blur-xl border border-white/20 shadow-xl font-mono text-[10px] text-[#00f0ff]">
                <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                <span className="font-bold tracking-wider">FULL STACK & AI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs & Highlights */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <p className="font-sans text-base sm:text-xl text-white/95 leading-relaxed font-light">
              {about.narrative1}
            </p>

            <p className="font-sans text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              {about.narrative2}
            </p>

            {/* Core Values / Architectural Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-title text-sm sm:text-base font-bold text-white">Algorithmic Rigor</h4>
                  <p className="text-xs text-[#94a3b8] mt-1 font-sans leading-relaxed">
                    Graph algorithms, Dijkstra shortest-path, dynamic optimization & C++ systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#8b5cf6]/40 transition-colors">
                <div className="p-2.5 rounded-xl bg-[#8b5cf6]/10 text-[#8b5cf6] shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-title text-sm sm:text-base font-bold text-white">Full-Stack Resilience</h4>
                  <p className="text-xs text-[#94a3b8] mt-1 font-sans leading-relaxed">
                    Sub-50ms failover state machines, Node.js services & reactive interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Key Statistics Section */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              <span>QUANTIFIABLE METRICS</span>
            </span>
            <span className="font-mono text-xs text-[#00f0ff]">AUDITED // 2026</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {about.stats.map((stat) => (
              <StatCounter
                key={stat.label}
                targetValue={stat.numericValue}
                decimals={stat.decimals || 0}
                suffix={stat.suffix || ''}
                label={stat.label}
                caption={stat.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
