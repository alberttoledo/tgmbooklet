import { EditorialFigure } from "@/components/EditorialFigure";
import {
  AudienceEngineBoard,
  BusinessModelBlueprintBoard,
  GrowthPlannerBoard,
  PromptSystemBoard,
  ReelFormatsCatalog,
  RevenueStackBoard,
  RoadmapTimeline,
  StudioBlueprintBoard,
  VisualLanguageShowcase
} from "@/components/RichSections";
import type { SectionArt } from "@/data/section-art";
import type { ManifestoSection, SectionBlock } from "@/data/sections";
import type { ReactNode } from "react";

type SectionProps = {
  section: ManifestoSection;
  chapter: number;
  art?: SectionArt;
};

type BlockProps = {
  block: SectionBlock;
  isLead: boolean;
};

function Block({ block, isLead }: BlockProps) {
  if (block.type === "subheading") {
    return (
      <h3 className="font-heading pt-5 text-[1.7rem] leading-[1.1] tracking-[0.003em] text-[var(--color-ink)] md:pt-7 md:text-[2rem]">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="reading-measure space-y-3 text-[1.07rem] leading-[1.72] text-[var(--color-ink-soft)] md:text-[1.13rem]">
        {block.items.map((item) => (
          <li
            key={item}
            className="relative pl-7 before:absolute before:left-0 before:top-[0.56em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[var(--color-accent)] before:content-['']"
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      className={`reading-measure ${isLead ? "lead" : "text-[1.08rem] leading-[1.72] text-[var(--color-ink-soft)] md:text-[1.15rem]"}`}
    >
      {block.text}
    </p>
  );
}

export function Section({ section, chapter, art }: SectionProps) {
  let leadUsed = false;
  let contentNode: ReactNode;
  const renderDefaultBlocks = () => (
    <div className="space-y-5 md:space-y-6">
      {section.blocks.map((block, index) => {
        const previousBlock = section.blocks[index - 1];
        const qualifiesForLead =
          block.type === "paragraph" &&
          previousBlock?.type !== "subheading" &&
          block.text.length > 105 &&
          (section.id === "manifesto" || section.id === "philosophy");
        const isLead = qualifiesForLead && !leadUsed;

        if (isLead) {
          leadUsed = true;
        }

        return <Block key={`${section.id}-${index}`} block={block} isLead={isLead} />;
      })}
    </div>
  );

  if (section.id === "visual-identity") {
    contentNode = <VisualLanguageShowcase />;
  } else if (section.id === "content-strategy") {
    contentNode = (
      <div className="space-y-8">
        <AudienceEngineBoard />
        {renderDefaultBlocks()}
      </div>
    );
  } else if (section.id === "reel-formats") {
    contentNode = <ReelFormatsCatalog />;
  } else if (section.id === "ai-visual-prompt-system") {
    contentNode = <PromptSystemBoard />;
  } else if (section.id === "posting-strategy") {
    contentNode = <GrowthPlannerBoard />;
  } else if (section.id === "brand-ecosystem") {
    contentNode = (
      <div className="space-y-8">
        <StudioBlueprintBoard />
        {renderDefaultBlocks()}
      </div>
    );
  } else if (section.id === "business-model") {
    contentNode = (
      <div className="space-y-8">
        <BusinessModelBlueprintBoard />
        {renderDefaultBlocks()}
      </div>
    );
  } else if (section.id === "revenue-forecast-example") {
    contentNode = (
      <div className="space-y-8">
        <RevenueStackBoard />
        {renderDefaultBlocks()}
      </div>
    );
  } else if (section.id === "roadmap") {
    contentNode = <RoadmapTimeline blocks={section.blocks} />;
  } else {
    contentNode = renderDefaultBlocks();
  }

  return (
    <section id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-20 px-4 py-12 md:py-16 print:break-before-page">
      <div className="mx-auto max-w-[980px] rounded-[22px] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-8 md:px-10 md:py-10">
        <header className="section-banner border-b border-[var(--color-line)] pb-6">
          <p className="font-label text-[0.66rem] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            Chapter {String(chapter).padStart(2, "0")}
          </p>
          <h2 id={`${section.id}-title`} className="font-heading mt-3 text-[2rem] leading-[1.04] md:text-[2.8rem]">
            {section.title}
          </h2>
        </header>

        <article className="section-content mt-7">
          {contentNode}

          {art ? <EditorialFigure src={art.src} alt={art.alt} caption={art.caption} /> : null}
        </article>

        <p className="mt-8 text-xs uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          <a href="#top" className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:text-[var(--color-ink)]">
            Back to top
          </a>
        </p>
      </div>
    </section>
  );
}
