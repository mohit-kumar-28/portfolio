import React, { useState, useEffect } from 'react';

interface RoleRotatorProps {
  roles: string[];
}

export const RoleRotator: React.FC<RoleRotatorProps> = ({ roles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="inline-flex items-center min-h-[36px] sm:min-h-[44px]">
      <span
        className={`font-mono text-xl sm:text-2xl md:text-3xl font-bold text-gradient-emerald transition-all duration-300 ${
          fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {roles[currentIndex]}
      </span>
      <span className="ml-1.5 w-2.5 h-6 sm:h-8 bg-emerald-500 animate-pulse rounded-xs" />
    </div>
  );
};
