'use client';

import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden bg-black text-white">
      {/* Panoramic Atmospheric Oceanic / Coastal Landscape Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/footer-ocean.jpg"
          alt="Oceanic Coastal Sky Landscape"
          className="w-full h-full object-cover object-center filter brightness-60 contrast-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/footer-landscape.jpg';
          }}
        />
        {/* Soft Gradient Overlay with subtle grain aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 backdrop-blur-[1px]" />
      </div>

      {/* Content Over Landscape */}
      <div className="shell relative z-10 w-full pt-12 pb-8 flex flex-col justify-between flex-grow">
        {/* Footer Top Navigation Bar (matching reference header) */}
        <div className="flex items-center justify-between pb-8 border-b border-white/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-sans font-black text-sm">
              A
            </div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-white">
              Al-Ameen Studio<span className="text-xs font-mono text-brand-orange ml-1">™</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-semibold tracking-wide text-white/80">
            <a href="#services" className="hover:text-white hover:underline transition-all">Services</a>
            <a href="#about" className="hover:text-white hover:underline transition-all">About Us</a>
            <a href="#work" className="hover:text-white hover:underline transition-all">Projects</a>
            <a href="#faq" className="hover:text-white hover:underline transition-all">FAQ</a>
          </nav>
        </div>

        {/* Centerpiece: Bold Contact & Massive Email (exact structure from user image) */}
        <div className="my-auto py-12 flex flex-col items-start max-w-4xl">
          <p className="text-sm sm:text-base font-body text-white/80 mb-3">
            Contact us, we're ready to work together with you
          </p>

          {/* Underlined Interactive Email */}
          <a
            href="mailto:alameenworkss@outlook.com"
            className="font-sans font-extrabold text-[clamp(1.75rem,5vw,4.5rem)] tracking-tight text-white hover:text-brand-orange transition-colors underline decoration-white/40 hover:decoration-brand-orange underline-offset-[10px] break-all leading-none"
          >
            alameenworkss@outlook.com
          </a>

          {/* Row of Round Circular Social Glass Buttons (from user image) */}
          <div className="mt-10 flex items-center gap-3">
            {/* Email Button */}
            <a
              href="mailto:alameenworkss@outlook.com"
              className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange hover:scale-110 transition-all shadow-lg"
              aria-label="Send Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>

            {/* Contra Button */}
            <a
              href="https://contra.com/ayoola_ishola_24ckw0vd?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=ayoola_ishola_24ckw0vd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange hover:scale-110 transition-all shadow-lg font-sans font-black text-sm"
              aria-label="Contra Profile"
            >
              Ct
            </a>

            {/* Instagram Button */}
            <a
              href="https://www.instagram.com/al.ameentijani/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange hover:scale-110 transition-all shadow-lg"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Star / Inquiry Button */}
            <a
              href="#contact"
              className="w-12 h-12 rounded-full bg-black/60 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-orange hover:text-black hover:border-brand-orange hover:scale-110 transition-all shadow-lg font-bold"
              aria-label="Start Project"
            >
              ✦
            </a>
          </div>
        </div>

        {/* Bottom Minimal Copyright Bar */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>© 2026 AL-AMEEN STUDIO</p>
          <p className="hidden md:block tracking-widest uppercase text-white/40 font-mono text-[11px]">MADE FOR FOUNDERS EVERYWHERE</p>
          <div className="flex items-center gap-4">
            <span>Canada · Worldwide</span>
            <button onClick={scrollToTop} className="hover:text-white underline cursor-pointer">Top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
