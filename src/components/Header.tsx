'use client';

import { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';
import MobileNav from './MobileNav';
import { studioInfo } from '@/data/studio';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-500 py-4 lg:py-6 pointer-events-none">
        <div className="shell flex items-center justify-between">
          {/* Studio Wordmark Logo */}
          <a
            href="#top"
            className="pointer-events-auto flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
            aria-label="Ameen Studio Homepage"
          >
            <AnimatedLogo variant="light" size="md" />
          </a>

          {/* Center Floating Pill Navigation (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className={`hidden lg:flex pointer-events-auto items-center gap-1 rounded-full px-4 py-2 border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#111110]/85 border-white/15 backdrop-blur-xl shadow-2xl'
                : 'bg-white/[0.04] border-white/10 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-3.5 py-1.5 text-sm font-medium tracking-tight text-white/75 hover:text-white transition-colors duration-200 group rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Let's Talk CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Desktop Let's Talk CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full font-medium text-sm h-10 px-5 bg-brand-orange text-[#111110] transition-all duration-300 hover:bg-[#FF8758] hover:-translate-y-0.5 active:translate-y-0 shadow-[0_4px_20px_rgba(240,100,50,0.3)]"
            >
              <span>Let&apos;s Talk</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M1 13L13 1M13 1H4M13 1V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.05] text-white backdrop-blur-md transition-colors hover:border-brand-orange"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="relative w-4 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-brand-orange' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-brand-orange' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
}
