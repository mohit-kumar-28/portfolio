import React from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'indigo' | 'emerald' | 'amber';
  onClick?: () => void;
  interactive?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  onClick,
  interactive = true,
}) => {
  return (
    <div
      onClick={onClick}
      className={`editorial-card bg-white p-6 sm:p-8 ${
        interactive ? 'interactive-card group' : ''
      } ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
