'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP ScrollTrigger animations.
 * Automatically handles plugin registration, cleanup, and prefers-reduced-motion.
 *
 * @param callback - Function receiving the GSAP context. Create your animations here.
 * @param deps - Dependency array (like useEffect). Animations re-run when deps change.
 * @param scope - Optional ref to scope all GSAP selectors (e.g., ".title" only matches inside scope).
 */
export function useGsap(
  callback: (ctx: gsap.Context) => void,
  deps: React.DependencyList = [],
  scope?: React.RefObject<HTMLElement | null>
) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      callback(ctx!);
    }, scope?.current || undefined);

    ctxRef.current = ctx;

    return () => {
      ctx.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ctxRef;
}

export { gsap, ScrollTrigger };
