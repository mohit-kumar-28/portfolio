import React from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const BackgroundGrid: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Full-Resolution Mountain & Valley Nature Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-85 transition-opacity duration-700"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      />

      {/* 2. Soft Ambient Warm Daylight Overlay for Content Readability */}
      <div className="absolute inset-0 bg-[#faf9f6]/40 backdrop-blur-[0.5px]" />

      {/* 3. Subtle Bottom Gradient to blend smoothly */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/30 to-[#faf9f6]/80" />

      {/* 4. Subtle Distant Birds Moving Across the Sky */}
      {!reducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-28 left-0 animate-birds-flock flex items-center gap-3.5 text-slate-700/60">
            <svg viewBox="0 0 24 10" className="w-5 h-2.5 fill-current">
              <path d="M 0 8 Q 6 0 12 6 Q 18 0 24 8 Q 18 4 12 9 Q 6 4 0 8 Z" />
            </svg>
            <svg viewBox="0 0 24 10" className="w-4 h-2 fill-current -mt-2">
              <path d="M 0 8 Q 6 0 12 6 Q 18 0 24 8 Q 18 4 12 9 Q 6 4 0 8 Z" />
            </svg>
            <svg viewBox="0 0 24 10" className="w-3.5 h-1.5 fill-current mt-1.5">
              <path d="M 0 8 Q 6 0 12 6 Q 18 0 24 8 Q 18 4 12 9 Q 6 4 0 8 Z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
