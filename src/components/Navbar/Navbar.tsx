import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Specializations', href: '#specializations', id: 'specializations' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Impact', href: '#impact', id: 'impact' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Leadership', href: '#leadership', id: 'leadership' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'py-3 bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/60 shadow-2xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-slate-900 focus:outline-none rounded-xl"
          aria-label="Mohit Kumar - Home"
        >
          <img
            src="/avatar.png"
            alt="Mohit Kumar"
            className="w-9 h-9 rounded-full object-cover border-2 border-emerald-600 shadow-2xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
              MOHIT KUMAR
            </span>
            <span className="text-[10px] font-mono text-slate-500 font-medium tracking-wide">
              CSE • BIT MESRA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-2xs">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-900 font-semibold bg-emerald-500/15'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Let's Talk with colored button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-solid-primary inline-flex items-center justify-center px-4.5 py-2 text-xs cursor-pointer"
          >
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-800 hover:text-slate-900 focus:outline-none border-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-lg flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-900 bg-emerald-50 font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col sm:hidden pt-3 border-t border-slate-200">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-solid-primary w-full flex items-center justify-center px-4 py-2.5 text-sm"
            >
              <span>Contact Mohit</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
