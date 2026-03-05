import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color:var(--color-paper)]/95 backdrop-blur print:hidden">
      <div className="mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between py-2 px-4 md:px-6">
        <a href="#top" className="inline-flex items-center" aria-label="The Great Mystery home">
          <Image src="/logo.svg" alt="The Great Mystery logo" className="my-4 h-auto w-[122px]" width={148} height={36} priority />
        </a>
        <nav aria-label="Section navigation" className="flex items-center gap-4">
          <a href="#contents" className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]">
            Contents
          </a>
          <a href="#vision" className="text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]">
            Vision
          </a>
        </nav>
      </div>
    </header>
  );
}
