import React from 'react';
import { projectsData } from '../data/portfolio';
import TrafficGraphVisualizer from './TrafficGraphVisualizer';
import PipelineStreamVisualizer from './PipelineStreamVisualizer';
import AgroBotScannerVisualizer from './AgroBotScannerVisualizer';
import { ExternalLink, ArrowUpRight, CheckCircle, Terminal, Layers } from 'lucide-react';
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
    <section id="projects" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#818cf8]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            03 // SELECTED CASE STUDIES
          </span>
          <div className="flex-1 h-[1px] bg-white/[0.08]" />
        </div>

        {/* Section Title & Philosophy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
          <div>
            <h2 className="font-display text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight">
              FEATURED{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f0ff] to-[#818cf8]">
                ARCHITECTURES
              </span>
            </h2>
            <p className="font-sans text-[#94a3b8] text-base sm:text-xl max-w-2xl mt-4 font-light leading-relaxed">
              In-depth engineering case studies demonstrating algorithmic rigor, real-time industrial failovers, and edge AI vision.
            </p>
          </div>
          <div className="font-mono text-xs text-[#64748b] tracking-widest hidden sm:block">
            3 FLAGSHIP SYSTEMS
          </div>
        </div>

        {/* Full-Width Case Studies Stack */}
        <div className="space-y-24 sm:space-y-36">
          {projectsData.map((project, index) => {
            return (
              <article
                key={project.id}
                data-cursor-text="VIEW PROJECT →"
                className="relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 p-6 sm:p-10 lg:p-12 hover:border-[#00f0ff]/40 transition-all duration-500 group shadow-2xl"
              >
                {/* Subtle corner reticle decoration */}
                <div className="absolute top-4 right-4 font-mono text-4xl sm:text-6xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
                  {project.number}
                </div>

                {/* Top Metatag Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-xs text-[#00f0ff] font-semibold tracking-wider">
                      {project.featuredBadge}
                    </span>
                    <span className="text-white/20 font-mono text-xs">•</span>
                    <span className="font-mono text-xs text-[#94a3b8]">
                      {project.timeframe}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#64748b]">
                    ROLE: <span className="text-white/80">{project.role}</span>
                  </div>
                </div>

                {/* Main 2-Column Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Column: Case Study Narrative & Tech */}
                  <div className="lg:col-span-6 flex flex-col space-y-6">
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-title text-sm sm:text-base text-[#94a3b8] mt-2 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="font-sans text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                      {project.summary}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights Bullets */}
                    <div className="space-y-2.5 pt-2">
                      <div className="font-mono text-xs text-[#00f0ff] uppercase tracking-wider flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>ENGINEERING HIGHLIGHTS</span>
                      </div>
                      <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#94a3b8]">
                        {project.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#00f0ff] mt-1 text-xs">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metric Cards Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                        >
                          <div className="font-mono text-xs font-bold text-white">
                            {metric.value}
                          </div>
                          <div className="font-mono text-[10px] text-[#64748b] mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#94a3b8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-[#00f0ff]/50 font-mono text-xs font-bold text-white hover:text-[#00f0ff] transition-all flex items-center gap-2 shadow-lg"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>VIEW SOURCE CODE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-xl bg-transparent hover:bg-white/[0.04] border border-white/[0.08] font-mono text-xs text-[#94a3b8] hover:text-white transition-all flex items-center gap-2"
                      >
                        <span>DISCUSS ARCHITECTURE</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Simulation Engine */}
                  <div className="lg:col-span-6">
                    <div className="relative">
                      {/* Simulation Glow Frame */}
                      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00f0ff]/10 via-transparent to-[#818cf8]/10 blur-md pointer-events-none" />
                      <div className="relative shadow-2xl">
                        {getVisualizer(project.demoType)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
