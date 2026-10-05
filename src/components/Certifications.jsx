import React from 'react';
import { certificationsData } from '../data/portfolio';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            07 // CREDENTIALS & LICENSES
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-6xl font-black text-white tracking-tight">
            VERIFIED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#818cf8]">
              CERTIFICATIONS
            </span>
          </h2>
          <p className="font-sans text-[#94a3b8] text-base sm:text-xl max-w-xl mt-3 font-light">
            Industry and academic certifications validating mastery in database management, C++, and machine learning.
          </p>
        </div>

        {/* Stacked Certification Cards Layout */}
        <div className="space-y-4">
          {certificationsData.map((cert, index) => {
            return (
              <div
                key={cert.id}
                data-cursor-text="VERIFY"
                className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.08] hover:border-[#00f0ff]/40 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Cert details */}
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:border-[#00f0ff]/40 text-[#00f0ff] transition-colors shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-[#00f0ff] font-bold">
                        {cert.issuer}
                      </span>
                      <span className="text-white/20 font-mono text-xs">•</span>
                      <span className="font-mono text-xs text-[#94a3b8]">
                        ISSUED: {cert.date}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-mono text-[10px] font-bold">
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="font-title text-xl sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {cert.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-2 max-w-2xl">
                      <span className="text-white/70 font-semibold font-mono text-xs">SKILLS VALIDATED: </span>
                      {cert.topics}
                    </p>
                  </div>
                </div>

                {/* Right: Verification Tag */}
                <div className="flex items-center gap-3 shrink-0 self-start lg:self-auto font-mono text-xs text-[#64748b]">
                  <span>ID: {cert.id}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                  <span className="text-[#10b981]">ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

