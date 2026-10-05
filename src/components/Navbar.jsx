import React, { useState, useEffect } from 'react';
import { navigationLinks, personalInfo } from '../data/portfolio';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detector
      const sections = navigationLinks.map((item) => item.href.replace('#', ''));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#070709]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 font-display text-xl sm:text-2xl font-black tracking-tighter text-white"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff]/50 transition-colors">
              <span className="text-[#00f0ff] font-mono text-sm font-bold">AD</span>
            </div>
            <span className="hidden sm:inline font-mono text-xs tracking-widest text-[#94a3b8] uppercase group-hover:text-white transition-colors">
              ANSHIKA DUBEY
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0e1017]/70 backdrop-blur-md border border-white/[0.08] shadow-inner">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]'
                      : 'text-[#94a3b8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Status Pill & CTA */}
          <div className="flex items-center gap-3">
            {/* Availability Indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[11px] font-mono text-[#10b981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
              <span className="tracking-wider">{personalInfo.availability.status}</span>
            </div>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00f0ff] text-[#070709] font-mono text-xs font-bold tracking-wider hover:bg-[#00f0ff]/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Editorial Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#070709]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Navigation Items */}
        <div className="flex flex-col space-y-6">
          <p className="font-mono text-xs text-[#00f0ff] tracking-[0.25em] uppercase">
            NAVIGATION INDEX
          </p>
          {navigationLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group flex items-baseline justify-between py-2 border-b border-white/[0.06]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-[#64748b]">0{idx + 1}</span>
                <span className="font-display text-3xl font-extrabold text-white group-hover:text-[#00f0ff] transition-colors">
                  {link.name}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#64748b] group-hover:text-[#00f0ff] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Bottom Info */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#94a3b8]">
          <div>
            <div className="text-white font-bold">{personalInfo.name}</div>
            <div className="text-[#64748b]">{personalInfo.role}</div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#00f0ff] hover:underline"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#00f0ff] hover:underline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

