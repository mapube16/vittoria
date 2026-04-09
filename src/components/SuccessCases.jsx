import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CASES = [
  {
    tag: "SPORTS CONTENT",
    before: 2100,
    after: 18400,
    quote: "The process was smooth and results came fast.",
  },
  {
    tag: "LIFESTYLE & CULTURE",
    before: 800,
    after: 12000,
    quote: "Vittoria helped us look like a real brand.",
  },
  {
    tag: "LOCAL COMMERCE",
    before: 340,
    after: 7500,
    quote: "We finally look like the brand we always were.",
  },
  {
    tag: "CREATOR ECONOMY",
    before: 1200,
    after: 22000,
    quote: "They turned consistency into a competitive edge.",
  },
];

function formatNumber(n) {
  return n.toLocaleString("en-US");
}

export default function SuccessCases() {
  const rootRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Stagger the card entrances
      gsap.from(".case-card", {
        y: 100,
        opacity: 0,
        rotateX: 10,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Count-up on the AFTER numbers when they scroll into view
      rootRef.current.querySelectorAll("[data-counter]").forEach((node) => {
        const target = Number(node.getAttribute("data-counter"));
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2.0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate() {
            node.textContent = formatNumber(Math.round(obj.val));
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cases"
      ref={rootRef}
      className="relative bg-surface py-[120px] px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-body text-[11px] tracking-caps text-brand-red uppercase block mb-4">
            / 02 — Success Cases
          </span>
          <h2 className="text-[44px] md:text-[64px] text-white font-extrabold uppercase tracking-tightest leading-[0.95] max-w-3xl">
            REAL ACCOUNTS. REAL NUMBERS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map((c) => {
            const delta = Math.round((c.after / c.before - 1) * 100);
            return (
              <article
                key={c.tag}
                className="case-card float-card will-float group relative glass p-8 flex flex-col gap-6 hover:shadow-card-red"
              >
                <header className="flex items-start justify-between">
                  <span className="text-brand-red font-body text-[11px] tracking-caps font-bold">
                    {c.tag}
                  </span>
                  <span className="text-brand-red font-body text-[11px] tracking-caps">
                    +{delta}%
                  </span>
                </header>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-white/40 font-body text-[10px] tracking-caps uppercase block mb-2">
                      BEFORE
                    </span>
                    <span className="text-white/40 text-[40px] md:text-[48px] font-extrabold font-headline leading-none tracking-tightest">
                      {formatNumber(c.before)}
                    </span>
                  </div>
                  <div>
                    <span className="text-brand-red font-body text-[10px] tracking-caps uppercase block mb-2">
                      AFTER
                    </span>
                    <span
                      className="text-brand-red text-[40px] md:text-[48px] font-extrabold font-headline leading-none tracking-tightest"
                      data-counter={c.after}
                    >
                      0
                    </span>
                  </div>
                </div>

                <blockquote className="font-body italic text-[14px] text-white/80 border-l-2 border-brand-red/60 pl-4">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
