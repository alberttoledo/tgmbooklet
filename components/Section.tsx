import { EditorialFigure } from "@/components/EditorialFigure";
import type { SectionArt } from "@/data/section-art";
import type { ManifestoSection, SectionBlock } from "@/data/sections";

type SectionProps = {
  section: ManifestoSection;
  chapter: number;
  art?: SectionArt;
};

function Block({ block, isLead }: { block: SectionBlock; isLead: boolean }) {
  if (block.type === "subheading") {
    return (
      <h3 className="font-heading pt-4 text-2xl leading-snug tracking-[0.01em] text-[var(--color-ink)] md:pt-7 md:text-[2rem]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3 text-[1.02rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.1rem]">
        {block.items.map((item) => (
          <li
            key={item}
            className="relative pl-7 before:absolute before:left-0 before:top-[0.5em] before:h-[7px] before:w-[7px] before:rounded-full before:bg-[var(--color-accent)] before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      className={`${isLead ? "dropcap text-[1.16rem] text-[var(--color-ink)] md:text-[1.3rem]" : "text-[1.03rem] text-[var(--color-ink-soft)] md:text-[1.08rem]"} leading-relaxed`}
    >
      {block.text}
    </p>
  );
}

export function Section({ section, chapter, art }: SectionProps) {
  let leadUsed = false;

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-28 px-4 py-8 md:py-10 print:break-before-page">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="grid items-start gap-6 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
          <aside className="rounded-[18px] border border-[var(--color-line)] bg-[#f8f0df]/90 p-5 lg:sticky lg:top-24">
            <p className="font-label text-[0.67rem] uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
              Chapter {String(chapter).padStart(2, "0")}
            </p>
            <h2 id={`${section.id}-title`} className="font-heading mt-3 text-2xl leading-tight md:text-[2.05rem]">
              {section.title}
            </h2>
            <p className="mt-5 text-xs uppercase tracking-[0.13em] text-[var(--color-ink-soft)]">
              <a
                href="#top"
                className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:text-[var(--color-ink)]"
              >
                Back to top
              </a>
            </p>
          </aside>

          <article className="section-content overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[#fffaf1] p-6 shadow-[0_40px_90px_-70px_rgba(20,17,15,1)] md:p-9">
            <div className="section-banner mb-9 flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
              <p className="font-label text-[0.66rem] uppercase tracking-[0.17em] text-[var(--color-ink-soft)]">Narrative Frame</p>
              <p className="font-heading text-4xl leading-none text-[var(--color-accent-deep)] md:text-5xl">
                {String(chapter).padStart(2, "0")}
              </p>
            </div>

            <div className="space-y-5">
              {section.blocks.map((block, index) => {
                const isLead = block.type === "paragraph" && !leadUsed;
                if (isLead) {
                  leadUsed = true;
                }

                return <Block key={`${section.id}-${index}`} block={block} isLead={isLead} />;
              })}
            </div>

            {art ? <EditorialFigure src={art.src} alt={art.alt} caption={art.caption} /> : null}
          </article>
        </div>
      </div>
    </section>
  );
}
