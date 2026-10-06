import React, { useEffect, useRef, useState } from 'react';

/**
 * Dynamic Scroll Reveal Component.
 * Automatically animates child elements into view as the user scrolls down the page.
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  threshold = 0.12,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Fire once
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getDirectionClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-8 scale-[0.98]';
      case 'down':
        return 'opacity-0 -translate-y-8 scale-[0.98]';
      case 'left':
        return 'opacity-0 translate-x-8 scale-[0.98]';
      case 'right':
        return 'opacity-0 -translate-x-8 scale-[0.98]';
      case 'none':
      default:
        return 'opacity-0 scale-[0.98]';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${getDirectionClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Floating Dynamic Scroll Progress HUD.
 * Tracks live scroll percentage and active section coordinate on the screen edge.
 */
export function ScrollProgressHUD() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const pct = Math.min(Math.max(Math.round((window.scrollY / totalScroll) * 100), 0), 100);
        setScrollPct(pct);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-none select-none">
      {/* Percentage Display */}
      <div className="font-mono text-[10px] text-[#00f0ff] font-bold tracking-widest px-2 py-0.5 rounded bg-[#0a0c16]/80 backdrop-blur-md border border-white/10 shadow-lg">
        {scrollPct < 10 ? `0${scrollPct}` : scrollPct}%
      </div>

      {/* Vertical Progress Bar Track */}
      <div className="w-[2px] h-32 bg-white/10 rounded-full overflow-hidden relative">
        <div
          className="w-full bg-gradient-to-b from-[#00f0ff] via-[#8b5cf6] to-[#10b981] transition-all duration-100 ease-out shadow-[0_0_10px_#00f0ff]"
          style={{ height: `${scrollPct}%` }}
        />
      </div>

      <div className="font-mono text-[9px] text-[#64748b] tracking-wider -rotate-90 origin-center translate-y-3">
        DEPTH
      </div>
    </div>
  );
}

