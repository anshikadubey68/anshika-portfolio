import React, { useEffect, useState } from 'react';

/**
 * Cinematic Preloader under 2 seconds.
 * Features system initialization telemetry and smooth shutter reveal.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const statusLogs = [
    'BOOTING SYSTEM ARCHITECTURE...',
    'CALIBRATING 3D WEBGL CORE...',
    'SYNCHRONIZING PORTFOLIO MODULES...',
    'ANSHIKA DUBEY // ALL SYSTEMS ONLINE',
  ];

  useEffect(() => {
    // Fast progress increment up to 100% in ~1.4s
    const startTime = Date.now();
    const duration = 1400;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct > 25 && pct <= 50) setStatusIndex(1);
      else if (pct > 50 && pct <= 85) setStatusIndex(2);
      else if (pct > 85) setStatusIndex(3);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
        }, 200);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#070709] flex flex-col justify-between p-8 sm:p-14 transition-all duration-700 pointer-events-none select-none ${
        isFading ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="text-[#94a3b8] tracking-widest uppercase">SYSTEM INITIALIZATION // 01</span>
        </div>
        <div className="tracking-widest">
          EST. 2026 // INDIA (IST)
        </div>
      </div>

      {/* Center Cinematic Display */}
      <div className="my-auto max-w-4xl mx-auto w-full text-center sm:text-left">
        <p className="font-mono text-xs sm:text-sm text-[#00f0ff] tracking-[0.3em] uppercase mb-3">
          PORTFOLIO ARCHIVE
        </p>
        <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
          ANSHIKA DUBEY
        </h1>

        {/* Dynamic Status Log */}
        <div className="h-6 font-mono text-xs sm:text-sm text-[#94a3b8] flex items-center justify-center sm:justify-start gap-3">
          <span className="text-[#00f0ff] font-bold">&gt;</span>
          <span className="tracking-wider">{statusLogs[statusIndex]}</span>
        </div>

        {/* Progress Bar & Counter */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00f0ff] via-[#818cf8] to-[#10b981] transition-all duration-75 ease-out shadow-[0_0_12px_#00f0ff]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-widest min-w-[70px] text-right">
            {progress < 10 ? `0${progress}` : progress}
            <span className="text-xs text-[#00f0ff] ml-1 font-normal">%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row */}
      <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
        <span>CSE • FULL STACK • AI/ML</span>
        <span className="hidden sm:inline">ENTERING INTERACTIVE SPACE</span>
      </div>
    </div>
  );
}

