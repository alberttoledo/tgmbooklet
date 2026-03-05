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
      className="mx-auto w-full max-w-[1220px] px-4 pb-14 pt-12 md:pb-18 md:pt-14"
    >
      <div className="relative overflow-hidden rounded-[34px] border border-[var(--color-line)] bg-[linear-gradient(140deg,#fffaf0_12%,#f3e6cf_52%,#f0dec2_100%)] p-6 shadow-[0_35px_100px_-70px_rgba(20,17,15,0.95)] md:p-9">
        <div
          aria-hidden
          className="soft-drift pointer-events-none absolute -right-20 top-[-72px] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,#e9cf9d_10%,rgba(233,207,157,0.1)_60%,transparent_70%)]"
        />
        <div
          aria-hidden
          className="soft-drift pointer-events-none absolute -left-16 bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,#d7e3dc_10%,rgba(215,227,220,0.12)_60%,transparent_72%)]"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.03fr_1.2fr] lg:items-end">
          <div className="hero-reveal">
            <p className="font-label text-[0.66rem] uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
              Editorial Booklet 2026
            </p>
            <Image
              src="/logo.svg"
              alt="The Great Mystery logo"
              className="my-6 h-auto w-full max-w-[112px]"
              width={112}
              height={112}
              priority
            />
            <h1 id="cover-title" className="font-heading text-[2.2rem] leading-[0.95] text-[var(--color-ink)] md:text-[4.75rem]">
              The Great
              <br />
              Mystery
            </h1>
            <p className="hero-reveal-2 mt-6 max-w-[37ch] text-[1.02rem] leading-relaxed text-[var(--color-ink-soft)] md:text-[1.12rem]">
              A world-class brand booklet designed to express philosophy, visual language, and strategic direction through a cinematic narrative rhythm.
            </p>
            <dl className="hero-reveal-3 mt-8 grid max-w-[500px] grid-cols-3 gap-3 border-t border-[var(--color-line)] pt-5">
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]">Chapters</dt>
                <dd className="font-heading mt-2 text-2xl">{sections.length}</dd>
              </div>
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]">Positioning</dt>
                <dd className="font-heading mt-2 text-2xl">Premium</dd>
              </div>
              <div>
                <dt className="font-label text-[0.62rem] uppercase tracking-[0.15em] text-[var(--color-ink-soft)]">Mood</dt>
                <dd className="font-heading mt-2 text-2xl">Wonder</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-reveal-2 overflow-hidden rounded-[26px] border border-[var(--color-line)] bg-[#faf3e4]">
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

      <div className="mt-10">
        <Contents sections={sections} />
      </div>
    </section>
  );
}
