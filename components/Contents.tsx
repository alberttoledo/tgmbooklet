import type { ManifestoSection } from "@/data/sections";

type ContentsProps = {
  sections: ManifestoSection[];
};

export function Contents({ sections }: ContentsProps) {
  return (
    <nav
      id="contents"
      aria-label="Contents"
      className="booklet-grid rounded-[20px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-8"
    >
      <h2 className="font-heading text-[2rem] tracking-[0.01em] md:text-[2.35rem]">Contents</h2>
      <p className="reading-measure mt-3 text-[1.04rem] leading-[1.65] text-[var(--color-ink-soft)] md:text-[1.1rem]">
        Structured as a deliberate narrative arc: philosophy, system design, growth engine, and long-term worldview.
      </p>
      <ol className="mt-8 grid gap-x-10 gap-y-4 text-[1.01rem] leading-[1.52] md:grid-cols-2 md:text-[1.08rem]">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="group inline-flex items-baseline gap-3 rounded-md px-1 py-[2px] underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--color-accent)] focus-visible:decoration-[var(--color-accent)]"
            >
              <span className="font-label text-[0.72rem] tabular-nums text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)] md:text-[0.78rem]">
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
