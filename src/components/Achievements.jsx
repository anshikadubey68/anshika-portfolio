import React from 'react';
import { achievementsData } from '../data/portfolio';
import { ScrollReveal } from './ScrollReveal';
import Tilt3D from './Tilt3D';
import { Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-36 bg-[#05060b]/70 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
              06 // COMPETITIVE HIGHLIGHTS
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Section Title */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-18">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                HONORS &{' '}
                <span className="text-gradient-aurora">
                  ACHIEVEMENTS
                </span>
              </h2>
              <p className="font-sans text-[#94a3b8] text-sm sm:text-lg max-w-xl mt-3 font-light leading-relaxed">
                Demonstrated competitive excellence in algorithmic hackathons, problem-solving, and co-curricular leadership.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 High-End Minimalist Cards with 3D Tilt & Dynamic Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {achievementsData.map((item, idx) => {
            return (
              <ScrollReveal key={item.id} direction="up" delay={idx * 100}>
                <Tilt3D maxRotation={6} scale={1.02} className="h-full">
                  <div
                    data-cursor-text="HONOR"
                    className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d101e]/85 to-[#080a14]/90 border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden shadow-xl h-full"
                  >
                    {/* Subtle background glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/8 rounded-full blur-[60px] pointer-events-none" />

                    <div>
                      {/* Top: Index number & Category */}
                      <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-white/[0.08] mb-5">
                        <span className="font-mono text-2xl font-black text-[#00f0ff]">
                          {item.number}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[11px] text-[#cbd5e1]">
                          {item.issuer}
                        </span>
                      </div>

                      {/* Title & Highlight */}
                      <h3 className="font-title text-lg sm:text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-2.5 leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-sans text-xs text-[#00f0ff] font-semibold mb-3">
                        {item.highlight}
                      </p>

                      <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Category Tag */}
                    <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#64748b]">
                      <span className="tracking-wider">{item.category}</span>
                      <Award className="w-4 h-4 text-[#00f0ff] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Tilt3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
