import type { Variants } from 'framer-motion';

// ─── Easing Constants ──────────────────────────────────────────────────────────

/** Smooth ease-out for most entrances */
export const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Slightly snappier ease for micro-interactions */
export const EASE_SNAPPY: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Dramatic ease for hero-level animations */
export const EASE_DRAMATIC: [number, number, number, number] = [0.76, 0, 0.24, 1];

/** Elastic ease for playful bounces */
export const EASE_ELASTIC: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

/** GSAP-compatible ease string equivalents */
export const GSAP_EASE = {
  smooth: 'power3.out',
  snappy: 'power4.out',
  dramatic: 'expo.inOut',
  elastic: 'back.out(1.7)',
  linear: 'none',
} as const;

// ─── Duration Constants ────────────────────────────────────────────────────────

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  slower: 1.2,
  slowest: 1.8,
} as const;

// ─── Framer Motion Variants ────────────────────────────────────────────────────

/**
 * Fade in while translating up from `y` offset.
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Simple fade-in without translation.
 */
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Stagger container – apply to a parent element.
 */
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Faster stagger for lists/grids.
 */
export const staggerChildrenFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

/**
 * Slide in from the left.
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Slide in from the right.
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE_SMOOTH,
    },
  },
};

/**
 * Scale up from 0.85 with fade.
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE_SMOOTH,
    },
  },
};

// ─── GSAP Animation Configs ────────────────────────────────────────────────────
// These return plain objects suitable for gsap.to() / gsap.from() calls.

/**
 * GSAP "from" config: fade up into view.
 */
export const gsapFadeUp = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  opacity: 0,
  y: 50,
  duration: 0.8,
  ease: GSAP_EASE.smooth,
  ...overrides,
});

/**
 * GSAP "from" config: simple fade in.
 */
export const gsapFadeIn = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  opacity: 0,
  duration: 0.6,
  ease: GSAP_EASE.smooth,
  ...overrides,
});

/**
 * GSAP "from" config: slide in from left.
 */
export const gsapSlideInLeft = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  opacity: 0,
  x: -80,
  duration: 0.8,
  ease: GSAP_EASE.smooth,
  ...overrides,
});

/**
 * GSAP "from" config: slide in from right.
 */
export const gsapSlideInRight = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  opacity: 0,
  x: 80,
  duration: 0.8,
  ease: GSAP_EASE.smooth,
  ...overrides,
});

/**
 * GSAP "from" config: scale in.
 */
export const gsapScaleIn = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  opacity: 0,
  scale: 0.85,
  duration: 0.7,
  ease: GSAP_EASE.smooth,
  ...overrides,
});

/**
 * GSAP text reveal: animates lines from below using clipPath.
 */
export const gsapTextReveal = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  y: '110%',
  opacity: 0,
  duration: 0.9,
  ease: GSAP_EASE.smooth,
  stagger: 0.08,
  ...overrides,
});

/**
 * GSAP image reveal: animates a clip-path from fully clipped to fully visible.
 */
export const gsapImageReveal = (
  overrides?: gsap.TweenVars
): gsap.TweenVars => ({
  clipPath: 'inset(0% 0 0 0)',
  duration: 1.2,
  ease: GSAP_EASE.dramatic,
  ...overrides,
});

// ─── ScrollTrigger Defaults ────────────────────────────────────────────────────

export const scrollTriggerConfig = (
  trigger: string | Element,
  overrides?: ScrollTrigger.Vars
): ScrollTrigger.Vars => ({
  trigger,
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none none',
  ...overrides,
});

export const scrollTriggerScrub = (
  trigger: string | Element,
  overrides?: ScrollTrigger.Vars
): ScrollTrigger.Vars => ({
  trigger,
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1,
  ...overrides,
});
