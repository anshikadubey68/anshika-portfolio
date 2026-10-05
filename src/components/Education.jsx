import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            05 // ACADEMIC FOUNDATION
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* Section Title */}
        <div className="mb-14 sm:mb-18">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            EDUCATION &{' '}
            <span className="text-gradient-aurora">
              PEDAGOGY
            </span>
          </h2>
        </div>

        {/* Academic Card Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0d101e]/85 to-[#080a14]/90 border border-white/10 p-6 sm:p-10 lg:p-12 hover:border-[#00f0ff]/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] transition-all duration-300 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Institution & Grade */}
            <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 font-mono text-xs text-[#00f0ff] font-bold">
                  {edu.badge}
                </span>
                <span className="font-mono text-xs text-[#94a3b8] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>{edu.period}</span>
                </span>
                <span className="font-mono text-xs text-[#64748b] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {edu.institution}
                </h3>
                <p className="font-title text-base sm:text-xl text-[#94a3b8] mt-1.5 font-medium">
                  {edu.degree}
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                {edu.description}
              </p>

              {/* Core Coursework Badges */}
              <div>
                <div className="font-mono text-[11px] text-[#00f0ff] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>REPRESENTATIVE COURSEWORK</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#cbd5e1]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CGPA Callout Display */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#00f0ff]/40 text-center flex flex-col items-center justify-center max-w-xs w-full shadow-2xl relative group transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-3 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="font-display text-4xl sm:text-6xl font-black text-white group-hover:text-[#00f0ff] transition-colors">
                  8.93
                </div>
                <div className="font-mono text-xs text-[#00f0ff] font-bold tracking-widest mt-1">
                  CUMULATIVE GPA
                </div>
                <div className="font-mono text-[11px] text-[#64748b] mt-1.5">
                  SCALE: 10.0 // LPU CSE
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.08] w-full flex items-center justify-center gap-2 font-mono text-[11px] text-[#10b981]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>FIRST CLASS WITH DISTINCTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
