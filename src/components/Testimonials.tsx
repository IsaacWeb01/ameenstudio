'use client';

import React, { useState } from 'react';
import { testimonialsData } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="reviews" className="band border-t border-white/10 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 orange-glow pointer-events-none opacity-20" />

      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 lg:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-brand-orange" />
              <p className="eyebrow text-brand-orange">(02) CLIENT WORDS</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Good work speaks.
              <br />
              <span className="serif-accent text-white/90">Great relationships last.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Every project is an opportunity to build something meaningful together.
          </p>
        </div>

        {/* Testimonials Carousel Body */}
        <div className="pt-12 lg:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Quote Area */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[320px]">
            <div className="transition-all duration-300">
              <blockquote className="serif-accent text-[clamp(1.6rem,2.8vw,2.75rem)] text-white/95 leading-[1.3] tracking-tight">
                <span className="text-brand-orange font-serif text-3xl sm:text-4xl mr-2">“</span>
                {activeTestimonial.quote}
                <span className="text-brand-orange font-serif text-3xl sm:text-4xl ml-2">”</span>
              </blockquote>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center font-mono text-lg font-bold text-brand-orange">
                  {activeTestimonial.avatarInitial}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {activeTestimonial.attribution}
                  </h3>
                  <p className="text-sm text-white/50">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 mr-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx
                          ? 'w-6 bg-brand-orange'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="font-mono text-sm text-white/40">
                  0{currentIndex + 1} / 0{testimonialsData.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-11 h-11 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange/10 transition-all cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Accent Card */}
          <div className="lg:col-span-4 bg-[#181816] rounded-2xl border border-white/10 p-8 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <p className="eyebrow text-brand-orange mb-3 text-xs">COLLABORATION ETHOS</p>
              <h4 className="text-xl font-bold text-white">Direct designer &amp; developer partnership</h4>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">
                By maintaining an independent practice, every client receives direct communication, uncompromised creative focus, and high-fidelity Framer implementation.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span>Ameen Studio</span>
              <span className="text-brand-orange">Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
