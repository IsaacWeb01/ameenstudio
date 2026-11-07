'use client';

import React, { useState } from 'react';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import ToolsMarquee from '@/components/ToolsMarquee';
import About from '@/components/About';
import ProcessTimeline from '@/components/ProcessTimeline';
import Engagement from '@/components/Engagement';
import FAQAccordion from '@/components/FAQAccordion';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { useLenis } from '@/hooks/useLenis';

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Initialize Lenis smooth scroll synced with GSAP
  useLenis();

  return (
    <>
      {/* Initial Loading Screen */}
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Top Sticky Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 02: Hero */}
        <Hero />

        {/* Section 03: Selected Work (01 SELECTED WORK) */}
        <SelectedWork />

        {/* Section 04: Testimonials (02 CLIENT WORDS) */}
        <Testimonials />

        {/* Section 05: Services (03 WHAT WE DO) */}
        <Services />

        {/* Section 06: Toolkit Marquee (04 THE TOOLKIT) */}
        <ToolsMarquee />

        {/* Section 07: About Al-Ameen (05 BEHIND THE STUDIO) */}
        <About />

        {/* Section 08: Working Process (06 HOW WE WORK) */}
        <ProcessTimeline />

        {/* Section 09: Engagement Models (07 LET'S BUILD SOMETHING) */}
        <Engagement />

        {/* Section 10: FAQ Accordion (08 GOOD TO KNOW) */}
        <FAQAccordion />

        {/* Section 11: Contact & Inquiry Form (09 START A CONVERSATION) */}
        <ContactSection />

        {/* Section 12: Final Memorable CTA */}
        <FinalCTA />
      </main>

      {/* Section 13: Footer */}
      <Footer />
    </>
  );
}

