export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/vittoria-logo.png"
            alt="Vittoria Growth"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto aspect-square opacity-80"
          />
          <span className="font-headline font-extrabold uppercase text-white text-[14px] tracking-label">
            Vittoria Growth
          </span>
        </div>
        <p className="font-body text-[12px] text-white/50 tracking-technical">
          © 2026 Vittoria Growth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
