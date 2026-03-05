import type { ManifestoSection } from "@/data/sections";

type ContentsProps = {
  sections: ManifestoSection[];
};

export function Contents({ sections }: ContentsProps) {
  return (
    <nav
      id="contents"
      aria-label="Contents"
      className="booklet-grid rounded-[28px] border border-[var(--color-line)] bg-[#fff9ef]/92 p-6 md:p-8"
    >
      <h2 className="font-heading text-2xl tracking-[0.02em] md:text-3xl">Contents</h2>
      <p className="mt-2 max-w-[58ch] text-sm text-[var(--color-ink-soft)] md:text-[0.95rem]">
        Structured as a deliberate narrative arc: philosophy, system design, growth engine, and long-term worldview.
      </p>
      <ol className="mt-8 grid gap-x-12 gap-y-4 text-sm leading-relaxed md:grid-cols-2 md:text-base">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group inline-flex items-baseline gap-3 rounded-lg px-2 py-1 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:bg-[#f7ecd6] hover:decoration-[var(--color-accent)] focus-visible:bg-[#f7ecd6] focus-visible:decoration-[var(--color-accent)]"
            >
              <span className="font-label text-[0.74rem] tabular-nums text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] md:text-[0.82rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
