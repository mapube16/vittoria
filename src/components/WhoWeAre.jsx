import { useGsapReveal } from "../hooks/useGsapReveal";

const PILLARS = [
  {
    title: "STRATEGY",
    body: "We design growth plans tailored to your niche and audience.",
    // Inline stroke icon — bolt
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="w-10 h-10"
      >
        <polyline points="13 2 4 14 12 14 11 22 20 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "EXECUTION",
    body: "We deliver real results fast. No fluff, no wasted time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="w-10 h-10"
      >
        <line x1="3" y1="21" x2="21" y2="21" />
        <rect x="5" y="12" width="3" height="8" />
        <rect x="11" y="7" width="3" height="13" />
        <rect x="17" y="3" width="3" height="17" />
      </svg>
    ),
  },
  {
    title: "SCALE",
    body: "From local business to dominant brand. We build the path.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="w-10 h-10"
      >
        <path d="M4 20 L12 4 L20 20 Z" />
        <line x1="8" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
];

export default function WhoWeAre() {
  const ref = useGsapReveal(".pillar-card", { stagger: 0.12, y: 80 });

  return (
    <section
      id="who"
      className="relative bg-surface-container-low py-[120px] px-6"
    >
      {/* Tonal section transition — no borders */}
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="mb-20">
          <span className="font-body text-[11px] tracking-caps text-brand-red uppercase block mb-4">
            / 01 — Who We Are
          </span>
          <h2 className="text-[44px] md:text-[64px] text-white font-extrabold uppercase tracking-tightest leading-[0.95] max-w-3xl">
            A KINETIC GROWTH STUDIO BUILT FOR MOMENTUM.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="pillar-card float-card will-float group relative bg-surface p-8 min-h-[280px] flex flex-col justify-between hover:bg-surface-container-highest"
            >
              {/* Index label */}
              <div className="flex items-start justify-between mb-6">
                <span className="text-brand-red font-body text-[11px] tracking-caps">
                  0{i + 1}
                </span>
                <span className="text-brand-red group-hover:text-brand-red-bright transition-colors duration-300">
                  {p.icon}
                </span>
              </div>
              <div>
                <h3 className="text-[28px] md:text-[32px] text-white font-extrabold uppercase tracking-tightest mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-[14px] text-white/70 leading-relaxed max-w-[260px]">
                  {p.body}
                </p>
              </div>

              {/* Bottom accent that animates on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-red transition-all duration-500 ease-out group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
