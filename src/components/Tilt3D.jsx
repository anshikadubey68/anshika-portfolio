import React, { useRef, useState, useEffect } from 'react';

/**
 * Interactive 3D Perspective Tilt Card with specular glare light.
 * Adds genuine 3D spatial depth across cards on the website.
 * Automatically disabled on touch screens for seamless mobile scrolling.
 */
export default function Tilt3D({
  children,
  className = '',
  maxRotation = 8,
  scale = 1.015,
  glare = true,
  ...props
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      setIsTouch(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouch || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      setGlareStyle({
        opacity: 0.15,
        x: glareX,
        y: glareY,
      });
    }
  };

  const handleMouseEnter = () => {
    if (isTouch) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (isTouch) return;
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  if (isTouch) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {/* Specular Glare Layer */}
      {glare && (
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? glareStyle.opacity : 0,
            background: `radial-gradient(circle 320px at ${glareStyle.x}% ${glareStyle.y}%, rgba(0, 240, 255, 0.28), rgba(139, 92, 246, 0.12), transparent 70%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}

