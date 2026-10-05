import React, { useState } from 'react';
import { skillsData } from '../data/portfolio';
import { Code, Globe, Cpu, Database, Sparkles, CheckCircle2 } from 'lucide-react';

const categoryIcons = {
  languages: Code,
  web: Globe,
  'ai-ml': Cpu,
  tools: Database,
};

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState('all');

  const categories = skillsData.categories;

  const filteredSkills =
    activeCategoryId === 'all'
      ? categories.flatMap((cat) => cat.skills.map((s) => ({ ...s, categoryColor: cat.color, categoryName: cat.title })))
      : categories
          .find((cat) => cat.id === activeCategoryId)
          ?.skills.map((s) => {
            const cat = categories.find((c) => c.id === activeCategoryId);
            return { ...s, categoryColor: cat.color, categoryName: cat.title };
          }) || [];

  return (
    <section id="skills" className="relative py-24 sm:py-36 bg-[#060810]/70 overflow-hidden border-y border-white/[0.05]">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f0ff]/8 via-[#8b5cf6]/8 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            03 // TECHNICAL ARSENAL
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              ENGINEERING{' '}
              <span className="text-gradient-aurora">
                TOOLKIT
              </span>
            </h2>
            <p className="font-sans text-[#94a3b8] text-sm sm:text-lg max-w-xl mt-3 font-light leading-relaxed">
              Specialized across algorithmic systems, reactive full-stack web platforms, and production-grade machine learning pipelines.
            </p>
          </div>

          {/* Category Filter Pills - Responsive flex wrap */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-3 sm:px-4 py-2 rounded-xl font-mono text-[11px] sm:text-xs tracking-wider transition-all duration-300 ${
                activeCategoryId === 'all'
                  ? 'bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-[#050609] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'text-[#94a3b8] hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              ALL TECHNOLOGIES
            </button>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Sparkles;
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-mono text-[11px] sm:text-xs tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-[#050609] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Skills Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => {
            return (
              <div
                key={skill.name}
                data-cursor-text="INSPECT"
                className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0d101e]/80 to-[#080a14]/90 border border-white/[0.08] hover:border-[#00f0ff]/50 hover:shadow-[0_15px_35px_-10px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Skill Name & Category badge */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="font-title text-base sm:text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      {skill.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] font-mono text-[10px] text-[#94a3b8] shrink-0">
                      {skill.level}
                    </span>
                  </div>

                  {/* Contextual Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed mb-4">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Row: Category indicator */}
                <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                  <span className="uppercase tracking-wider">{skill.categoryName}</span>
                  <div className="flex items-center gap-1 text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.03] via-[#00f0ff]/[0.05] to-[#8b5cf6]/[0.04] border border-white/[0.09] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-title text-sm sm:text-base font-bold text-white">
                Always Expanding Knowledge & Technical Mastery
              </div>
              <div className="font-mono text-xs text-[#94a3b8] mt-0.5">
                Continuous learning across system architectures, LLM agents, and distributed networks.
              </div>
            </div>
          </div>
          <a
            href="https://github.com/anshikadubey68"
            target="_blank"
            rel="noreferrer"
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#00f0ff] text-white hover:text-[#050609] border border-white/15 hover:border-transparent font-mono text-xs font-bold transition-all shadow-md"
          >
            EXPLORE GITHUB ↗
          </a>
        </div>
      </div>
    </section>
  );
}
