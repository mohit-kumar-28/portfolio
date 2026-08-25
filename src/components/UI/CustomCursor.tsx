import React, { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer || reducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .interactive')
        );
        setIsPointer(isClickable);

        const isCard = Boolean(target.closest('.interactive-card'));
        setIsHovered(isCard);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, reducedMotion]);

  if (reducedMotion || !isVisible) return null;

  return (
    <>
      {/* Outer follow circle */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out will-change-transform hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isPointer
              ? 'w-12 h-12 bg-emerald-500/15 border border-emerald-500/50 scale-125'
              : isHovered
              ? 'w-16 h-16 bg-sky-500/10 border border-sky-500/40 scale-110'
              : 'w-8 h-8 border border-emerald-600/30 bg-emerald-500/5'
          }`}
        />
      </div>

      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 will-change-transform hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full bg-emerald-600 transition-transform duration-150 ${
            isPointer ? 'w-2 h-2 scale-150 bg-emerald-700' : 'w-1.5 h-1.5'
          }`}
        />
      </div>
    </>
  );
};
