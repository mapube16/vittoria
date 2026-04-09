import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapReveal — wires a staggered scroll-triggered entrance to any container's
 * direct children matching the given selector. Honors prefers-reduced-motion.
 *
 * @param {string} selector - CSS selector scoped to the returned ref
 * @param {object} opts
 * @param {number} [opts.stagger=0.1]
 * @param {number} [opts.y=60]
 * @param {number} [opts.rotateX=8]
 * @param {number} [opts.duration=1.0]
 * @param {string} [opts.start="top 80%"]
 */
export function useGsapReveal(selector, opts = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(selector);
    if (!targets.length) return;

    const {
      stagger = 0.1,
      y = 60,
      rotateX = 8,
      duration = 1.0,
      start = "top 80%",
    } = opts;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        rotateX,
        opacity: 0,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none reverse",
        },
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return containerRef;
}
