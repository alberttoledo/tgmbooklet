import { Cover } from "@/components/Cover";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { sectionArt } from "@/data/section-art";
import { sections } from "@/data/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pb-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-12%] top-[180px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(192,122,31,0.2)_0%,rgba(192,122,31,0.06)_45%,transparent_70%)] blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-6%] top-[900px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(18,52,65,0.18)_0%,rgba(18,52,65,0.06)_42%,transparent_72%)] blur-2xl"
        />
        <Cover sections={sections} />
        {sections.map((section, index) => (
          <Section key={section.id} section={section} chapter={index + 1} art={sectionArt[section.id]} />
        ))}
      </main>
      <footer className="mx-auto w-full max-w-[1220px] px-4 pb-10 pt-10 print:pb-0">
        <p className="font-label border-t border-[var(--color-line)] pt-6 text-[0.7rem] uppercase tracking-[0.13em] text-[var(--color-ink-soft)] md:text-[0.75rem]">
          The Great Mystery · Philosophy, Brand System &amp; Strategic Roadmap
        </p>
      </footer>
    </>
  );
}
