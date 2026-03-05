import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 print:hidden">
      <div className="mx-auto flex h-16 w-full max-w-[1220px] items-center justify-between rounded-full border border-[var(--color-line)] bg-[#fffaf0]/80 px-4 shadow-[0_16px_40px_-30px_rgba(20,17,15,0.9)] backdrop-blur">
        <a href="#top" className="inline-flex items-center gap-3" aria-label="The Great Mystery home">
          <Image src="/logo.svg" alt="The Great Mystery logo" className="h-auto w-9 md:w-10" width={40} height={40} priority />
          <span className="leading-none">
            <span className="font-heading block text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]">The Great Mystery</span>
            <span className="font-label block pt-1 text-[0.62rem] uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
              Booklet 2026
            </span>
          </span>
        </a>
        <nav aria-label="Section navigation" className="flex items-center gap-2">
          <a href="#contents" className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.13em]">
            Contents
          </a>
          <a
            href="#vision"
            className="rounded-full bg-[var(--color-deep)] px-4 py-2 text-xs uppercase tracking-[0.13em] text-[#f8f3ea]"
          >
            Final Vision
          </a>
        </nav>
      </div>
    </header>
  );
}
