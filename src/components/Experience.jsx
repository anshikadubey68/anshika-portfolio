import React from 'react';
import { experienceData } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Cpu } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#08090e]/70 border-t border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            04 // PROFESSIONAL JOURNEY
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight">
            ENGINEERING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#818cf8]">
              EXPERIENCE
            </span>
          </h2>
          <p className="font-sans text-[#94a3b8] text-base sm:text-xl max-w-xl mt-3 font-light">
            Hands-on applied AI internships and engineering systems development.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-16">
          {experienceData.map((item, index) => {
            return (
              <div key={item.company} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#070709] border-2 border-[#00f0ff] flex items-center justify-center shadow-[0_0_15px_#00f0ff]">
                  <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                </div>

                {/* Card Container */}
                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-all duration-300">
                  {/* Top Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06] mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-white">
                        {item.company}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] font-mono text-xs font-semibold">
                        {item.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 font-mono text-xs text-[#94a3b8]">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                        <span>{item.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#818cf8]" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Focus & Narrative */}
                  <div className="mb-6">
                    <div className="font-mono text-xs text-[#818cf8] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>FLAGSHIP ASSIGNMENT: {item.projectFocus}</span>
                    </div>
                    <p className="font-sans text-base text-white/90 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Responsibilities list */}
                  <div className="space-y-3 pt-2 mb-8">
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00f0ff] mt-0.5 shrink-0" />
                        <span className="font-sans text-sm text-[#cbd5e1] leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack row */}
                  <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#94a3b8]"
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

