import React from 'react';
import { certificationsData } from '../data/portfolio';
import { ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            07 // CREDENTIALS & LICENSES
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        {/* Section Title */}
        <div className="mb-14 sm:mb-18">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            VERIFIED{' '}
            <span className="text-gradient-aurora">
              CERTIFICATIONS
            </span>
          </h2>
          <p className="font-sans text-[#94a3b8] text-sm sm:text-lg max-w-xl mt-3 font-light leading-relaxed">
            Industry and academic certifications validating mastery in database management, C++, and machine learning.
          </p>
        </div>

        {/* Stacked Certification Cards Layout */}
        <div className="space-y-4">
          {certificationsData.map((cert) => {
            return (
              <div
                key={cert.id}
                data-cursor-text="VERIFY"
                className="group p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0d101e]/85 to-[#080a14]/90 border border-white/10 hover:border-[#00f0ff]/50 hover:shadow-[0_15px_40px_-10px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-5 shadow-xl"
              >
                {/* Left: Cert details */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#00f0ff]/50 text-[#00f0ff] transition-colors shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs text-[#00f0ff] font-bold">
                        {cert.issuer}
                      </span>
                      <span className="text-white/20 font-mono text-xs">•</span>
                      <span className="font-mono text-xs text-[#94a3b8]">
                        ISSUED: {cert.date}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-mono text-[10px] font-bold border border-[#10b981]/30">
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="font-title text-lg sm:text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {cert.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-1.5 max-w-2xl leading-relaxed">
                      <span className="text-white/80 font-semibold font-mono text-[11px]">SKILLS VALIDATED: </span>
                      {cert.topics}
                    </p>
                  </div>
                </div>

                {/* Right: Verification Tag */}
                <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto font-mono text-xs text-[#64748b]">
                  <span>ID: {cert.id}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                  <span className="text-[#10b981] font-semibold">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
