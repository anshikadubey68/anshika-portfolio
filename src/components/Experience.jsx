import React from 'react';
import { experienceData } from '../data/portfolio';
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-36 bg-[#05060b]/70 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            04 // PROFESSIONAL JOURNEY
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* Section Title */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            ENGINEERING{' '}
            <span className="text-gradient-aurora">
              EXPERIENCE
            </span>
          </h2>
          <p className="font-sans text-[#94a3b8] text-sm sm:text-lg max-w-xl mt-3 font-light leading-relaxed">
            Hands-on applied AI internships and engineering systems development.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/15 space-y-12 sm:space-y-16">
          {experienceData.map((item) => {
            return (
              <div key={item.company} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#05060b] border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_15px_#00f0ff]">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0d101e]/85 to-[#080a14]/90 border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] transition-all duration-300 shadow-xl">
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-black text-white">
                        {item.company}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs font-semibold">
                        {item.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-[#94a3b8]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                        <span>{item.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#8b5cf6]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Focus & Narrative */}
                  <div className="mb-5">
                    <div className="font-mono text-xs text-[#8b5cf6] uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>ASSIGNMENT: {item.projectFocus}</span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-white/95 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-2.5 pt-1 mb-6">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                        <span className="font-sans text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack row */}
                  <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#94a3b8]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#projects"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#00f0ff] hover:underline"
                    >
                      <span>VIEW AGROBOT CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
