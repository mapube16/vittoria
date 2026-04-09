import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full h-[80px] px-6 md:px-10 z-50",
        "flex justify-between items-center",
        "transition-all duration-500 ease-out",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-brand-red/20"
          : "bg-transparent",
      ].join(" ")}
    >
      <a href="#top" className="flex items-center gap-3 will-float">
        <img
          src="/vittoria-logo.png"
          alt="Vittoria Growth"
          className="h-[48px] sm:h-[54px] md:h-[64px] lg:h-[72px] xl:h-[80px] w-auto aspect-square drop-shadow-[0_0_18px_rgba(204,0,0,0.35)]"
        />
      </a>

      <a
        href="#cta"
        className={[
          "bg-brand-red text-white font-headline font-extrabold uppercase",
          "text-[13px] md:text-[14px] tracking-label px-5 py-[10px]",
          "transition-all duration-300 ease-out",
          "hover:bg-brand-red-bright hover:shadow-glow-red",
        ].join(" ")}
      >
        LET&apos;S TALK
      </a>
    </header>
  );
}
