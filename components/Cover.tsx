import type { ManifestoSection } from "@/data/sections";
import Image from "next/image";
import { Contents } from "@/components/Contents";

type CoverProps = {
  sections: ManifestoSection[];
};

export function Cover({ sections }: CoverProps) {
  return (
    <section
      id="top"
      aria-labelledby="cover-title"
      className="mx-auto w-full max-w-[1100px] px-4 pb-12 pt-10 md:pb-14 md:pt-14"
    >
      <div className="rounded-[26px] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-end">
          <div>
            <p className="font-label text-[0.66rem] uppercase tracking-[0.16em] text-[var(--color-ink-soft)]">
              Editorial Booklet 2026
            </p>
            <Image
              src="/logo.svg"
              alt="The Great Mystery logo"
              className="my-6 h-auto w-full max-w-[286px] md:max-w-[340px]"
              width={340}
              height={84}
              priority
            />
            <h1 id="cover-title" className="sr-only">
              The Great Mystery
            </h1>
            <p className="reading-measure mt-5 text-[1.08rem] leading-[1.68] text-[var(--color-ink-soft)] md:text-[1.15rem]">
              Philosophy, brand system, and strategic roadmap presented with calm editorial rhythm and readable hierarchy.
            </p>
            <dl className="mt-8 grid max-w-[500px] grid-cols-3 gap-3 border-t border-[var(--color-line)] pt-5">
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">Chapters</dt>
                <dd className="font-heading mt-2 text-[1.55rem]">{sections.length}</dd>
              </div>
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">Format</dt>
                <dd className="font-heading mt-2 text-[1.55rem]">Booklet</dd>
              </div>
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">Tone</dt>
                <dd className="font-heading mt-2 text-[1.55rem]">Calm</dd>
              </div>
            </dl>
          </div>

          <figure className="overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-[#f3ede0]">
            <Image
              src="/editorial/cover-atlas.png"
              alt="Cinematic Atlantic coastline at golden hour representing wonder and exploration"
              className="h-auto w-full"
              width={1536}
              height={1024}
              priority
            />
          </figure>
        </div>
      </div>

      <div className="mt-12">
        <Contents sections={sections} />
      </div>
    </section>
  );
}
