import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        rotateX: 10,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(glowRef.current, {
        scale: 1.15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={rootRef}
      className="relative w-full py-[140px] px-6 bg-black overflow-hidden"
    >
      {/* Pulsing radial red */}
      <div
        ref={glowRef}
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-brand-red opacity-20 blur-[160px] rounded-full pointer-events-none will-float"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-[56px] md:text-[96px] text-white font-extrabold uppercase tracking-tightest leading-[0.9] mb-10"
        >
          READY TO <span className="text-brand-red">GROW</span>?
        </h2>

        <p className="font-body text-[16px] md:text-[18px] text-white/70 max-w-[560px] mx-auto leading-relaxed mb-12">
          One message. One strategy call. Zero pressure. Let&apos;s see what
          kinetic growth can do for your brand.
        </p>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-block bg-brand-red text-white font-headline font-extrabold uppercase text-[16px] md:text-[18px] tracking-label px-10 py-[18px] transition-all duration-300 ease-out hover:bg-brand-red-bright hover:shadow-glow-red"
        >
          MESSAGE US ON WHATSAPP
        </a>
      </div>
    </section>
  );
}
