import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolio';
import { ArrowUp, Clock, Globe } from 'lucide-react';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in India Standard Time
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setIstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 sm:py-16 bg-[#040507] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Editorial Byline */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-black text-white">
                {personalInfo.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            </div>
            <p className="font-mono text-xs text-[#94a3b8] mt-1 uppercase tracking-wider">
              {personalInfo.shortRole} • CREATIVE TECHNOLOGY
            </p>
          </div>

          {/* Live India Time Telemetry Clock */}
          <div className="flex items-center gap-3 p-3 px-4 rounded-full bg-white/[0.03] border border-white/[0.08] self-start md:self-auto font-mono text-xs text-[#94a3b8]">
            <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>INDIA (IST):</span>
            <span className="text-white font-bold tracking-widest">{istTime || '12:00:00 PM'}</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            data-cursor-text="TOP"
            className="p-3 rounded-full bg-white/[0.04] hover:bg-[#00f0ff] hover:text-[#070709] border border-white/10 text-white transition-all self-start md:self-auto flex items-center gap-2 font-mono text-xs"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright & Social Nav */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#64748b]">
          <div>
            © 2026 {personalInfo.name}. Engineered with React, Three.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00f0ff] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00f0ff] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#00f0ff] transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

