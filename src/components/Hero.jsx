import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        // Entrance timeline — staggered drop-in with slight rotation
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(logoRef.current, {
          y: -40,
          opacity: 0,
          rotate: -4,
          duration: 1.2,
        })
          .from(
            ".hero-line",
            {
              y: 80,
              rotateX: 12,
              opacity: 0,
              duration: 1.0,
              stagger: 0.12,
            },
            "-=0.6"
          )
          .from(
            ".hero-sub",
            { y: 30, opacity: 0, duration: 0.8 },
            "-=0.5"
          )
          .from(
            ".hero-cta",
            { y: 20, opacity: 0, duration: 0.6 },
            "-=0.4"
          );

        // Floating logo — subtle infinite y-axis float
        gsap.to(logoRef.current, {
          y: 10,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });

        // Parallax on the red glow + hero logo on scroll
        gsap.to(glowRef.current, {
          y: 120,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(logoRef.current, {
          y: -60,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-[80px] bg-black overflow-hidden"
    >
      {/* Background isometric grid — decorative, weightless depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#CC0000 1px, transparent 1px), linear-gradient(90deg, #CC0000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          transform: "perspective(800px) rotateX(55deg) translateY(20%)",
          transformOrigin: "center top",
          maskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      />

      {/* Floating hero logo — visible above title */}
      <img
        ref={logoRef}
        src="/vittoria-logo.png"
        alt=""
        aria-hidden
        className="relative z-10 h-[100px] sm:h-[120px] md:h-[160px] lg:h-[200px] xl:h-[240px] w-auto aspect-square mb-8 will-float drop-shadow-[0_0_40px_rgba(204,0,0,0.45)]"
      />

      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="hero-line text-[48px] md:text-[80px] leading-[0.9] text-white font-extrabold tracking-tightest mb-2">
          YOUR BRAND DESERVES
        </h1>
        <h1 className="hero-line text-[48px] md:text-[80px] leading-[0.9] text-white font-extrabold tracking-tightest mb-2">
          AN AUDIENCE.
        </h1>
        <h2 className="hero-line text-[48px] md:text-[80px] leading-[0.9] text-brand-red font-extrabold tracking-tightest mb-6">
          WE BUILD IT.
        </h2>

        <p className="hero-sub font-body text-[16px] md:text-[18px] text-white/80 font-normal max-w-[520px] mx-auto leading-relaxed mt-6">
          Social media growth designed to make your business impossible to
          ignore.
        </p>

        <div className="mt-10">
          <a
            href="#cta"
            className="hero-cta inline-block bg-brand-red text-white font-headline font-extrabold uppercase text-[15px] md:text-[16px] tracking-label px-8 py-[14px] transition-all duration-300 ease-out hover:bg-brand-red-bright hover:shadow-glow-red"
          >
            LET&apos;S TALK →
          </a>
        </div>
      </div>

      {/* Parallax radial red glow */}
      <div
        ref={glowRef}
        aria-hidden
        className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[460px] bg-brand-red opacity-25 blur-[140px] rounded-full pointer-events-none"
      />
    </section>
  );
}
