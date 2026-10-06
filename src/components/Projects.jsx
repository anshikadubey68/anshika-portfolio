import React from 'react';
import { projectsData } from '../data/portfolio';
import TrafficGraphVisualizer from './TrafficGraphVisualizer';
import PipelineStreamVisualizer from './PipelineStreamVisualizer';
import AgroBotScannerVisualizer from './AgroBotScannerVisualizer';
import { ScrollReveal } from './ScrollReveal';
import Tilt3D from './Tilt3D';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const getVisualizer = (demoType) => {
    switch (demoType) {
      case 'traffic-graph':
        return <TrafficGraphVisualizer />;
      case 'pipeline-flow':
        return <PipelineStreamVisualizer />;
      case 'ai-scanner':
        return <AgroBotScannerVisualizer />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00f0ff]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#8b5cf6]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex items-center gap-3 mb-12 sm:mb-16">
            <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
              02 // SELECTED CASE STUDIES
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/15 to-transparent" />
          </div>
        </ScrollReveal>

        {/* Section Title & Philosophy */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                SELECTED{' '}
                <span className="text-gradient-aurora">
                  WORK
                </span>
              </h2>
              <p className="font-sans text-[#94a3b8] text-sm sm:text-lg max-w-2xl mt-3 font-light leading-relaxed">
                Three focused systems, each built around a clear problem, a thoughtful technical approach, and measurable results.
              </p>
            </div>
            <div className="font-mono text-xs text-[#64748b] tracking-widest hidden sm:block">
              3 FLAGSHIP SYSTEMS
            </div>
          </div>
        </ScrollReveal>

        {/* Full-Width Case Studies Stack with 3D Tilt and Dynamic Scroll Reveal */}
        <div className="space-y-10 sm:space-y-14">
          {projectsData.map((project, idx) => {
            return (
              <ScrollReveal key={project.id} direction="up" delay={idx * 80}>
                <Tilt3D maxRotation={4} scale={1.01}>
                  <article
                    data-cursor-text="VIEW PROJECT →"
                    className="relative rounded-3xl bg-gradient-to-b from-[#0d101e]/85 to-[#080911]/95 border border-white/10 p-6 sm:p-8 hover:border-[#00f0ff]/50 hover:shadow-[0_20px_50px_-15px_rgba(0,240,255,0.18)] transition-all duration-500 group shadow-2xl overflow-hidden"
                  >
                    {/* Background Corner Number watermark */}
                    <div className="absolute top-4 right-4 font-mono text-4xl sm:text-7xl font-black text-white/[0.03] group-hover:text-white/[0.06] transition-colors pointer-events-none select-none">
                      {project.number}
                    </div>

                    {/* Top Metatag Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/[0.08] mb-6 sm:mb-8">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 font-mono text-xs text-[#00f0ff] font-semibold tracking-wider">
                          {project.featuredBadge}
                        </span>
                        <span className="text-white/20 font-mono text-xs">•</span>
                        <span className="font-mono text-xs text-[#94a3b8]">
                          {project.timeframe}
                        </span>
                      </div>

                      <div className="font-mono text-xs text-[#64748b]">
                        ROLE: <span className="text-white/80 font-medium">{project.role}</span>
                      </div>
                    </div>

                    {/* Main 2-Column Showcase */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                      {/* Left Column: Case Study Narrative & Tech */}
                      <div className="lg:col-span-6 flex flex-col space-y-5">
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors tracking-tight leading-tight">
                            {project.displayTitle || project.title}
                          </h3>
                          <p className="font-title text-xs sm:text-sm text-[#94a3b8] mt-1.5 font-medium">
                            {project.overview || project.subtitle}
                          </p>
                        </div>

                        <p className="font-sans text-sm text-[#cbd5e1] leading-relaxed">
                          {project.brief || project.summary}
                        </p>

                        {/* Key outcomes */}
                        <div className="space-y-2 pt-1">
                          <div className="font-mono text-[11px] text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>KEY OUTCOMES</span>
                          </div>
                          <ul className="space-y-1.5 font-sans text-xs text-[#94a3b8]">
                            {(project.outcomes || project.highlights).slice(0, 3).map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#00f0ff] mt-0.5 text-xs">✦</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Metric Cards Row */}
                        <div className="grid grid-cols-3 gap-2 pt-1">
                          {project.metrics.slice(0, 3).map((metric) => (
                            <div
                              key={metric.label}
                              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors"
                            >
                              <div className="font-mono text-xs font-bold text-white truncate">
                                {metric.value}
                              </div>
                              <div className="font-mono text-[10px] text-[#94a3b8] mt-0.5 truncate">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tech.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-[#cbd5e1]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-3 pt-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 sm:px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-[#00f0ff] text-white hover:text-[#050609] border border-white/15 hover:border-transparent font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2 shadow-lg"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>SOURCE CODE</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>

                        </div>
                      </div>

                      {/* Right Column: Live Interactive Simulation Engine */}
                      <div className="lg:col-span-6 w-full">
                        <div className="relative">
                          {/* Simulation Glow Aura */}
                          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00f0ff]/15 via-transparent to-[#8b5cf6]/15 blur-lg pointer-events-none" />
                          <div className="relative">
                            {getVisualizer(project.demoType)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Tilt3D>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
