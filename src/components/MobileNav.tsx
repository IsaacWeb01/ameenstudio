'use client';

import React, { useEffect } from 'react';
import AnimatedLogo from './AnimatedLogo';
import { studioInfo } from '@/data/studio';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export default function MobileNav({ isOpen, onClose, navItems }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-[#111110] flex flex-col justify-between p-6 sm:p-10 pt-24 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col gap-6">
        <p className="eyebrow text-brand-orange">(NAVIGATION)</p>
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline gap-4 py-3 border-b border-white/10 text-3xl font-medium tracking-tight text-white hover:text-brand-orange transition-colors"
            >
              <span className="font-mono text-xs text-white/40 group-hover:text-brand-orange">
                0{index + 1}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8">
        <a
          href="#contact"
          onClick={onClose}
          className="btn-primary w-full justify-between"
        >
          <span>Start a project</span>
          <span className="font-serif italic text-lg">↗</span>
        </a>

        <div className="flex flex-col gap-2 text-sm text-white/50">
          <p className="text-white/80 font-medium">Al-Ameen Tijani</p>
          <a
            href={studioInfo.socials.email}
            className="hover:text-brand-orange transition-colors"
          >
            alameenworkss@outlook.com
          </a>
          <p className="text-xs text-white/40">{studioInfo.location}</p>
        </div>

        <div className="flex items-center gap-6 text-xs uppercase tracking-wider font-mono text-white/40">
          <a
            href={studioInfo.socials.contra}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            Contra ↗
          </a>
          <a
            href={studioInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </div>
  );
}
