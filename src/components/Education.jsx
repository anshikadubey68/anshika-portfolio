import React from 'react';
import { educationData } from '../data/portfolio';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            05 // ACADEMIC FOUNDATION
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight">
            EDUCATION &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#818cf8]">
              PEDAGOGY
            </span>
          </h2>
        </div>

        {/* Academic Card Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 p-8 sm:p-12 hover:border-[#00f0ff]/40 transition-all duration-300 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Institution & Grade */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20 font-mono text-xs text-[#00f0ff] font-bold">
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
                <p className="font-title text-base sm:text-xl text-[#94a3b8] mt-2 font-medium">
                  {edu.degree}
                </p>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                {edu.description}
              </p>

              {/* Core Coursework Badges */}
              <div>
                <div className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>REPRESENTATIVE COURSEWORK</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] font-mono text-xs text-[#94a3b8]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: CGPA Callout Display */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center justify-center max-w-xs w-full shadow-2xl relative group">
                <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="font-display text-5xl sm:text-6xl font-black text-white group-hover:text-[#00f0ff] transition-colors">
                  8.93
                </div>
                <div className="font-mono text-xs text-[#00f0ff] font-bold tracking-widest mt-1">
                  CUMULATIVE GPA
                </div>
                <div className="font-mono text-[11px] text-[#64748b] mt-2">
                  SCALE: 10.0 // LPU CSE
                </div>

                <div className="mt-4 pt-4 border-t border-white/[0.08] w-full flex items-center justify-center gap-2 font-mono text-[11px] text-[#10b981]">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>CONSISTENT FIRST CLASS WITH DISTINCTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

