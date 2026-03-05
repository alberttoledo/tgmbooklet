import { EditorialFigure } from "@/components/EditorialFigure";
import type { SectionArt } from "@/data/section-art";
import type { ManifestoSection, SectionBlock } from "@/data/sections";

type SectionProps = {
  section: ManifestoSection;
  chapter: number;
  art?: SectionArt;
};

type BlockProps = {
  block: SectionBlock;
  isLead: boolean;
  followsSubheading: boolean;
};

function Block({ block, isLead, followsSubheading }: BlockProps) {
  if (block.type === "subheading") {
    return (
      <h3 className="font-heading pt-6 text-[2rem] leading-[1.06] tracking-[0.005em] text-[var(--color-ink)] md:pt-8 md:text-[2.2rem]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="reading-flow space-y-3 text-[1.06rem] leading-[1.68] text-[var(--color-ink-soft)] md:text-[1.14rem]">
        {block.items.map((item) => (
          <li
            key={item}
            className="relative pl-7 before:absolute before:left-0 before:top-[0.58em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[var(--color-accent)] before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (followsSubheading) {
    return <p className="reading-flow text-[1.08rem] leading-[1.72] text-[var(--color-ink-soft)] md:text-[1.16rem]">{block.text}</p>;
  }

  return (
    <p
      className={`reading-flow ${isLead ? "dropcap text-[1.15rem] leading-[1.68] text-[var(--color-ink)] md:text-[1.24rem]" : "text-[1.08rem] leading-[1.72] text-[var(--color-ink-soft)] md:text-[1.16rem]"}`}
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
            <h2 id={`${section.id}-title`} className="font-heading mt-3 text-[1.9rem] leading-[1.05] tracking-[0.004em] md:text-[2.2rem]">
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

          <article className="section-content overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[#fffaf1] p-6 shadow-[0_40px_90px_-70px_rgba(20,17,15,1)] md:p-10">
            <div className="section-banner mb-9 flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-5">
              <p className="font-label text-[0.66rem] uppercase tracking-[0.17em] text-[var(--color-ink-soft)]">Narrative Frame</p>
              <p className="font-heading text-[2.5rem] leading-none text-[var(--color-accent-deep)] md:text-[2.9rem]">
                {String(chapter).padStart(2, "0")}
              </p>
            </div>

            <div className="space-y-5 md:space-y-6">
              {section.blocks.map((block, index) => {
                const previousBlock = section.blocks[index - 1];
                const followsSubheading = previousBlock?.type === "subheading";
                const qualifiesForLead =
                  block.type === "paragraph" &&
                  !followsSubheading &&
                  block.text.length >= 120 &&
                  (section.id === "manifesto" || section.id === "philosophy");
                const isLead = qualifiesForLead && !leadUsed;
                if (isLead) {
                  leadUsed = true;
                }

                return (
                  <Block
                    key={`${section.id}-${index}`}
                    block={block}
                    isLead={isLead}
                    followsSubheading={followsSubheading}
                  />
                );
              })}
            </div>

            {art ? <EditorialFigure src={art.src} alt={art.alt} caption={art.caption} /> : null}
          </article>
        </div>
      </div>
    </section>
  );
}
