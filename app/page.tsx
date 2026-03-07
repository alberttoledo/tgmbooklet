import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)]">
      {/* Header */}
      <header className="page-w flex items-center justify-center py-10 md:py-14">
        <div className="text-center">
          <img
            src="https://thegreatmystery.one/fullLogo.png"
            alt="The Great Mystery"
            className="mx-auto h-auto w-[200px] md:w-[260px]"
          />
          <p className="t-label mt-4">Company Documents · March 2026</p>
        </div>
      </header>

      {/* Two Document Cards */}
      <main className="page-w flex flex-1 items-start pb-20">
        <div className="wide-w w-full">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Vision */}
            <Link href="/philosophy" className="group block">
              <article className="card card-warm relative overflow-hidden transition-all duration-300 group-hover:border-[var(--gold)]">
                <div className="relative z-10">
                  <p className="t-label">Volume One</p>
                  <h2 className="t-display mt-4">Vision</h2>
                  <p className="t-lead mt-4 max-w-[38ch]">
                    What The Great Mystery is, why it exists, who it is for,
                    and how the company grows.
                  </p>
                  <ul className="mt-8 space-y-2">
                    {[
                      "What Is All This?",
                      "A Different Way of Being Here",
                      "Something Is Missing",
                      "A Company Built Around a Way of Living",
                      "Principles"
                    ].map((ch, i) => (
                      <li key={ch} className="flex items-baseline gap-3 border-b border-[var(--ink-10)] pb-2">
                        <span className="t-caption min-w-[1.5rem]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="t-body text-[1.05rem]">{ch}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--ink-60)] transition-colors group-hover:text-[var(--gold)]">
                    Open vision
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </article>
            </Link>

            {/* Execution Guide */}
            <Link href="/execution" className="group block">
              <article className="card card-warm relative overflow-hidden transition-all duration-300 group-hover:border-[var(--gold)]">
                <div className="relative z-10">
                  <p className="t-label">Volume Two</p>
                  <h2 className="t-display mt-4">Execution Guide</h2>
                  <p className="t-lead mt-4 max-w-[38ch]">
                    Instagram growth, content formats, visual identity,
                    production workflows, and the 90-day plan.
                  </p>
                  <ul className="mt-8 space-y-2">
                    {[
                      "The Roadmap — Five Phases of Growth",
                      "The Instagram System — Formats & Identity",
                      "The Production Toolkit — Prompts & Workflows"
                    ].map((ch, i) => (
                      <li key={ch} className="flex items-baseline gap-3 border-b border-[var(--ink-10)] pb-2">
                        <span className="t-caption min-w-[1.5rem]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="t-body text-[1.05rem]">{ch}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 inline-flex items-center gap-2 text-[1rem] font-medium text-[var(--ink-60)] transition-colors group-hover:text-[var(--gold)]">
                    Open guide
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </article>
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-14 text-center">
            <span className="t-caption">Everything is a mystery. Everyone is a mystic.</span>
          </p>
        </div>
      </main>
    </div>
  );
}
