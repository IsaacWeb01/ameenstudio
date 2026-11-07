'use client';

import { useEffect, useRef, useCallback, useState } from 'react';

// ─── Types ─────────────────────────────────────────────────────────────────────

type CursorVariant = 'default' | 'view' | 'project' | 'hidden';

interface CursorState {
  x: number;
  y: number;
  variant: CursorVariant;
}

// ─── Label Map ─────────────────────────────────────────────────────────────────

const CURSOR_LABELS: Record<CursorVariant, string> = {
  default: '',
  view: 'View',
  project: 'View project',
  hidden: '',
};

// ─── Component ─────────────────────────────────────────────────────────────────

/**
 * Desktop-only custom cursor with contextual states.
 *
 * - Default: small 16px orange dot with mix-blend-mode: difference
 * - Hover `data-cursor="view"`: expands to 80px with "View" label
 * - Hover `data-cursor="project"`: expands to 80px with "View project" label
 * - Hidden on touch devices and when prefers-reduced-motion is active
 * - Uses rAF for smooth position interpolation (lerp)
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // State stored in refs for rAF performance (avoid re-renders)
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const currentVariant = useRef<CursorVariant>('default');
  const rafId = useRef<number>(0);

  // ─── Touch detection ───────────────────────────────────────────────────────

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsTouch(true); // Reuse touch flag to hide cursor
      return;
    }

    const checkTouch = () => {
      const isTouchDevice =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;

      setIsTouch(isTouchDevice);
    };

    checkTouch();

    // Re-check when input mode changes (e.g., attaching a mouse to a tablet)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const handler = () => checkTouch();
    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  // ─── Apply visual variant to DOM directly (no re-render) ───────────────────

  const applyVariant = useCallback((variant: CursorVariant) => {
    const el = cursorRef.current;
    const label = labelRef.current;
    if (!el || !label) return;

    currentVariant.current = variant;

    if (variant === 'hidden') {
      el.style.opacity = '0';
      return;
    }

    el.style.opacity = '1';

    const isExpanded = variant === 'view' || variant === 'project';

    if (isExpanded) {
      el.style.width = '80px';
      el.style.height = '80px';
      el.style.backgroundColor = 'rgba(240, 100, 50, 0.15)';
      el.style.border = '1px solid rgba(240, 100, 50, 0.5)';
      el.style.mixBlendMode = 'normal';
      label.style.opacity = '1';
      label.textContent = CURSOR_LABELS[variant];
    } else {
      el.style.width = '16px';
      el.style.height = '16px';
      el.style.backgroundColor = '#F06432';
      el.style.border = 'none';
      el.style.mixBlendMode = 'difference';
      label.style.opacity = '0';
      label.textContent = '';
    }
  }, []);

  // ─── rAF animation loop ────────────────────────────────────────────────────

  const animate = useCallback(() => {
    const el = cursorRef.current;
    if (!el) return;

    // Lerp toward mouse position for smooth trailing
    const lerp = 0.15;
    cursorPos.current.x +=
      (mousePos.current.x - cursorPos.current.x) * lerp;
    cursorPos.current.y +=
      (mousePos.current.y - cursorPos.current.y) * lerp;

    el.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;

    rafId.current = requestAnimationFrame(animate);
  }, []);

  // ─── Event listeners ──────────────────────────────────────────────────────

  useEffect(() => {
    if (isTouch) return;

    // Start rAF loop
    rafId.current = requestAnimationFrame(animate);

    // Mouse move – update target position
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        // Jump to initial position immediately (no lerp lag)
        cursorPos.current.x = e.clientX;
        cursorPos.current.y = e.clientY;
      }
    };

    // Mouse enters / leaves the viewport
    const onMouseEnter = () => {
      setIsVisible(true);
      applyVariant('default');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      applyVariant('hidden');
    };

    // Delegation: detect data-cursor attributes on hover targets
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-cursor]'
      );

      if (target) {
        const value = target.dataset.cursor as CursorVariant;
        if (value === 'view' || value === 'project') {
          applyVariant(value);
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        '[data-cursor]'
      );
      const relatedTarget = (
        e.relatedTarget as HTMLElement | null
      )?.closest<HTMLElement>('[data-cursor]');

      // Only revert if we're actually leaving the data-cursor element
      // (not moving to a child or another data-cursor element)
      if (target && target !== relatedTarget) {
        applyVariant('default');
      }
    };

    // Hide default cursor site-wide
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';

    // Apply cursor: none to all interactive elements
    const styleTag = document.createElement('style');
    styleTag.id = 'custom-cursor-hide';
    styleTag.textContent = `
      a, button, [role="button"], input, textarea, select, label, [data-cursor] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleTag);

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);

      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';

      const tag = document.getElementById('custom-cursor-hide');
      if (tag) tag.remove();
    };
  }, [isTouch, isVisible, animate, applyVariant]);

  // Don't render on touch devices
  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        width: '16px',
        height: '16px',
        backgroundColor: '#F06432',
        mixBlendMode: 'difference',
        opacity: isVisible ? 1 : 0,
        transition: 'width 0.25s ease-out, height 0.25s ease-out, background-color 0.25s ease-out, border 0.25s ease-out, opacity 0.15s ease-out',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <span
        ref={labelRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-semibold tracking-wide whitespace-nowrap"
        style={{
          color: '#F06432',
          opacity: 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
    </div>
  );
}
