'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Singleton Lenis instance, accessible for scroll-to functions. */
let lenisInstance: Lenis | null = null;

/**
 * Returns the current Lenis instance (if initialized).
 * Useful for programmatic scrolling: `getLenis()?.scrollTo('#section')`.
 */
export function getLenis(): Lenis | null {
  return lenisInstance;
}

/**
 * Scroll to a target (selector, element, or pixel offset) using Lenis.
 */
export function scrollTo(
  target: string | HTMLElement | number,
  options?: {
    offset?: number;
    duration?: number;
    immediate?: boolean;
    onComplete?: () => void;
  }
) {
  lenisInstance?.scrollTo(target, options);
}

/**
 * Custom hook to initialize Lenis smooth scrolling synced with GSAP ScrollTrigger.
 * Creates a single Lenis instance, ties it to rAF, and cleans up on unmount.
 * Respects prefers-reduced-motion by skipping initialization entirely.
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Sync Lenis scroll position with GSAP ScrollTrigger on every scroll event
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker (rAF-based) to drive Lenis instead of a manual rAF loop.
    // This keeps Lenis and GSAP perfectly in sync.
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000); // GSAP ticker time is in seconds, Lenis expects ms
    };

    gsap.ticker.add(tickerCallback);

    // Disable GSAP's built-in lagSmoothing so Lenis controls scroll timing
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
      lenisInstance = null;
    };
  }, []);

  return lenisRef;
}
