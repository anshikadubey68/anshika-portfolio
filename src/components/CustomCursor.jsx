import React, { useEffect, useRef, useState } from 'react';

/**
 * Premium Custom Cursor with spring-damped follower
 * and contextual text badges (e.g. "VIEW PROJECT →", "EXPLORE").
 * Gracefully disables on touch devices.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports touch
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element cursor hints
      const target = e.target;
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      const cursorTextEl = target.closest('[data-cursor-text]');

      if (cursorTextEl) {
        setCursorText(cursorTextEl.getAttribute('data-cursor-text') || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }

      if (interactiveEl) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Smooth lerp for ring follower
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          opacity: cursorText ? 0 : 1,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full transition-transform duration-200 ${
            isPointer ? 'scale-0 bg-[#00f0ff]' : 'scale-100 bg-[#00f0ff]'
          } shadow-[0_0_8px_#00f0ff]`}
        />
      </div>

      {/* Spring Ring / Interactive Pill Follower */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
      >
        {cursorText ? (
          <div className="px-3.5 py-1.5 rounded-full bg-[#00f0ff] text-[#070709] font-mono text-[11px] font-semibold tracking-wider whitespace-nowrap shadow-[0_0_25px_rgba(0,240,255,0.6)] animate-pulse-glow flex items-center gap-1.5">
            <span>{cursorText}</span>
          </div>
        ) : (
          <div
            className={`rounded-full border transition-all duration-200 ${
              isPointer
                ? 'w-12 h-12 -ml-6 -mt-6 border-[#00f0ff] bg-[#00f0ff]/10 scale-110'
                : 'w-7 h-7 -ml-3.5 -mt-3.5 border-white/30 bg-transparent scale-100'
            }`}
          />
        )}
      </div>
    </>
  );
}

