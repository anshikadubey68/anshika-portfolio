import React, { useState, useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { Award, BookOpen, Layers, Sparkles, Terminal } from 'lucide-react';

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
      className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-all duration-300 group"
    >
      <div className="font-display text-4xl sm:text-5xl font-black text-white group-hover:text-[#00f0ff] transition-colors mb-2 tracking-tight">
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        <span className="text-xl sm:text-2xl text-[#00f0ff] ml-0.5">{suffix}</span>
      </div>
      <div className="font-title text-sm sm:text-base font-semibold text-white/90 mb-1">
        {label}
      </div>
      <div className="font-mono text-xs text-[#64748b]">{caption}</div>
    </div>
  );
}

export default function About() {
  const { about, profileImage, name, education } = personalInfo;

  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#818cf8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            01 // BIOGRAPHY & FOCUS
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Large Editorial Statement */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-5xl leading-[1.05]">
            “I DON'T JUST WRITE CODE.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#818cf8] to-[#10b981]">
              I BUILD EXPERIENCES.
            </span>”
          </h2>
        </div>

        {/* Two-Column Editorial Narrative & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative group max-w-md mx-auto">
              {/* Futuristic Corner Framing Reticles */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />

              {/* Holographic Border Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#00f0ff]/20 via-transparent to-[#818cf8]/20 blur-sm group-hover:blur-md transition-all opacity-80" />

              {/* Image Frame Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0e1017] border border-white/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full aspect-[4/5] object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Cyber overlay badge */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-white font-bold block">{name}</span>
                    <span className="text-[#00f0ff] text-[10px]">CSE • LPU // 8.93 CGPA</span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
                </div>
              </div>

              {/* Floating Holographic Spec Card */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-4 rounded-xl bg-[#0e1017]/90 backdrop-blur-xl border border-white/15 shadow-xl font-mono text-xs">
                <div className="text-[#00f0ff] font-bold">SYSTEM SPEC</div>
                <div className="text-[#94a3b8] text-[11px] mt-0.5">FULL-STACK • AI ARCHITECT</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <p className="font-sans text-lg sm:text-2xl text-white/90 leading-relaxed font-light">
              {about.narrative1}
            </p>

            <p className="font-sans text-base sm:text-lg text-[#94a3b8] leading-relaxed">
              {about.narrative2}
            </p>

            {/* Core Values / Architectural Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-title text-sm font-semibold text-white">Algorithmic Rigor</h4>
                  <p className="text-xs text-[#64748b] mt-1 font-sans">
                    Graph algorithms, Dijkstra shortest-path, dynamic optimization & C++ systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="p-2 rounded-lg bg-[#818cf8]/10 text-[#818cf8]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-title text-sm font-semibold text-white">Full-Stack Resilience</h4>
                  <p className="text-xs text-[#64748b] mt-1 font-sans">
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
            <span className="font-mono text-xs text-[#64748b] uppercase tracking-wider">
              QUANTIFIABLE METRICS
            </span>
            <span className="font-mono text-xs text-[#00f0ff]">AUDITED // 2026</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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

