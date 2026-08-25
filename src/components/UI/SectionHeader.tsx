import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleAccent,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {/* Eyebrow badge: Transparent without full white box & without borders */}
      <div className={`inline-flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-800 bg-transparent px-0 py-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          {badge}
        </span>
      </div>

      {/* Main Solid Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight">
        {title}{titleAccent ? ` ${titleAccent}` : ''}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
