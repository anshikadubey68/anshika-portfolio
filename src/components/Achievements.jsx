import React from 'react';
import { achievementsData } from '../data/portfolio';
import { Trophy, Star, Sparkles, Award } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36 bg-[#080a0f]/60 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            06 // COMPETITIVE HIGHLIGHTS
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight">
              HONORS &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#818cf8]">
                ACHIEVEMENTS
              </span>
            </h2>
            <p className="font-sans text-[#94a3b8] text-base sm:text-xl max-w-xl mt-3 font-light">
              Demonstrated competitive excellence in algorithmic hackathons, problem-solving, and co-curricular leadership.
            </p>
          </div>
        </div>

        {/* 3 High-End Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => {
            return (
              <div
                key={item.id}
                data-cursor-text="HONOR"
                className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-full blur-[60px] pointer-events-none" />

                <div>
                  {/* Top: Index number & Category */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.06] mb-6">
                    <span className="font-mono text-2xl font-black text-[#00f0ff]">
                      {item.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] font-mono text-[11px] text-[#94a3b8]">
                      {item.issuer}
                    </span>
                  </div>

                  {/* Title & Highlight */}
                  <h3 className="font-title text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#00f0ff] font-semibold mb-3">
                    {item.highlight}
                  </p>

                  <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Category Tag */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#64748b]">
                  <span>{item.category}</span>
                  <Award className="w-4 h-4 text-[#00f0ff] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

