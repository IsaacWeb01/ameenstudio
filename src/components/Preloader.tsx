'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  /** Called when the entire preloader animation completes and the overlay has left the viewport. */
  onComplete?: () => void;
}

/**
 * Signature full-screen preloader for Ameen Studio.
 *
 * Reverted to original beloved animation sequence:
 * 1. Letters of "AMEEN" animate in one by one (staggered fade + slide up) in pure white (#FFFFFF).
 * 2. The "A" receives its signature orange accent line across its crossbar (scaleX: 0 -> 1).
 * 3. The orange line sweeps horizontally under the entire assembled wordmark (scaleX: 0 -> 1).
 * 4. Brief hold, then the entire preloader curtain slides smoothly up to reveal the site.
 */
export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const barRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      onComplete?.();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.();
        },
      });

      // 1. Letters animate in (staggered slide up + fade)
      tl.from(lettersRef.current.filter(Boolean), {
        y: 70,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
      // 2. "A" letter gets its orange accent crossbar
      .to(
        barRef.current,
        {
          scaleX: 1,
          duration: 0.35,
          ease: 'power2.out',
        },
        '-=0.1'
      )
      // 3. Orange underline sweeps in across the wordmark
      .to(
        lineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        '-=0.1'
      )
      // 4. Brief hold
      .to({}, { duration: 0.35 })
      // 5. Entire preloader slides up
      .to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.75,
        ease: 'power3.inOut',
      });
    });

    return () => {
      ctx.revert();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center pointer-events-auto"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        {/* Wordmark */}
        <div className="relative">
          <div className="flex items-baseline select-none font-sans font-extrabold tracking-[0.06em] text-[clamp(3.5rem,10vw,7rem)] text-white">
            <span
              ref={(el) => {
                lettersRef.current[0] = el;
              }}
              className="inline-block relative text-white"
            >
              <span className="relative inline-block">
                A
                {/* Signature Orange Crossbar */}
                <span
                  ref={barRef}
                  className="absolute left-[18%] right-[18%] h-[3px] bg-brand-orange rounded-full origin-center"
                  style={{ top: '55%', transform: 'scaleX(0)' }}
                  aria-hidden="true"
                />
              </span>
            </span>
            <span
              ref={(el) => {
                lettersRef.current[1] = el;
              }}
              className="inline-block text-white"
            >
              M
            </span>
            <span
              ref={(el) => {
                lettersRef.current[2] = el;
              }}
              className="inline-block text-white"
            >
              E
            </span>
            <span
              ref={(el) => {
                lettersRef.current[3] = el;
              }}
              className="inline-block text-white"
            >
              E
            </span>
            <span
              ref={(el) => {
                lettersRef.current[4] = el;
              }}
              className="inline-block text-white"
            >
              N
            </span>
          </div>

          {/* Underline sweeping across */}
          <div
            ref={lineRef}
            className="absolute -bottom-3 left-0 right-0 h-[2px] bg-brand-orange rounded-full origin-left"
            style={{ transform: 'scaleX(0)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
