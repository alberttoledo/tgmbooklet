import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Execution Guide — The Great Mystery",
  description: "Instagram growth, content formats, visual identity, production workflows, and the 90-day plan."
};

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <header className="section-head">
      <span className="chapter-num">{num}</span>
      <h2 className="t-chapter mt-1">{title}</h2>
    </header>
  );
}

function PartDivider({ part, title }: { part: string; title: string }) {
  return (
    <div className="part-divider">
      <p className="part-label">{part}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function ExecutionPage() {
  return (
    <div className="bg-[var(--paper)]">
      {/* Navigation */}
      <nav className="site-nav print:hidden" aria-label="Document navigation">
        <div className="page-w flex h-14 items-center justify-between">
          <Link href="/" className="nav-link">← Back</Link>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#roadmap" className="nav-link">Roadmap</a>
            <a href="#instagram" className="nav-link">Instagram</a>
            <a href="#toolkit" className="nav-link">Toolkit</a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="hero page-w">
          <div className="wide-w px-5 sm:px-8 md:px-8 lg:px-0">
            <p className="t-label">Founder&apos;s Execution Guide</p>
            <h1 className="t-hero mt-5 max-w-[18ch]">The Great Mystery</h1>
            <p className="t-lead mt-6 max-w-[52ch]">
              Instagram growth · Content strategy · Visual identity · Production workflows
            </p>
            <div className="mt-10 max-w-[52ch]">
              <div className="card card-gold">
                <p className="t-body">
                  The philosophy booklet tells you what The Great Mystery is and why it exists.
                  This document tells you what to do tomorrow morning.
                </p>
                <p className="t-body mt-3">
                  When in doubt, return to the question the philosophy asks: <em>Does this produce
                  a quiet moment of wonder?</em> If yes, build it. If not, reconsider.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contents */}
        <section className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <div className="toc-section">
                <p className="t-label">Contents</p>
                <div className="mt-6 grid gap-10 lg:grid-cols-3">
                  <div>
                    <p className="toc-part-label">Part One · The Roadmap</p>
                    <ol className="toc-list toc-list--single">
                      <li><a href="#phases"><span className="toc-num">01</span><span className="toc-title">Five Phases of Growth</span></a></li>
                      <li><a href="#milestone"><span className="toc-num">02</span><span className="toc-title">The 90-Day Priority</span></a></li>
                    </ol>
                  </div>
                  <div>
                    <p className="toc-part-label">Part Two · Instagram</p>
                    <ol className="toc-list toc-list--single">
                      <li><a href="#identity"><span className="toc-num">03</span><span className="toc-title">Visual Identity</span></a></li>
                      <li><a href="#formats"><span className="toc-num">04</span><span className="toc-title">Five Reel Formats</span></a></li>
                      <li><a href="#schedule"><span className="toc-num">05</span><span className="toc-title">Weekly Schedule & Growth</span></a></li>
                    </ol>
                  </div>
                  <div>
                    <p className="toc-part-label">Part Three · Toolkit</p>
                    <ol className="toc-list toc-list--single">
                      <li><a href="#prompts"><span className="toc-num">06</span><span className="toc-title">AI Prompt System</span></a></li>
                      <li><a href="#voice"><span className="toc-num">07</span><span className="toc-title">Voiceover & Captions</span></a></li>
                      <li><a href="#workflow"><span className="toc-num">08</span><span className="toc-title">Production Workflow</span></a></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PART ONE — THE ROADMAP
            ════════════════════════════════════ */}
        <PartDivider part="Part One" title="The Roadmap" />

        {/* ── Phases ── */}
        <section id="phases" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="01" title="Five Phases of Growth" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The brand grows in strict sequence. Each phase must prove itself before the next
                begins. Do not rush this. The compounding only works if the foundation is real.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="roadmap-track">
                {[
                  {
                    phase: "Phase 1 — Audience",
                    target: "Now → 10,000 followers",
                    items: [
                      "Lock visual identity: palette, motion style, font, voiceover tone",
                      "Publish 2 Reels per day: one philosophical, one joy-of-life",
                      "Establish 5 recurring content formats",
                      "Build consistent posting rhythm — daily, no exceptions",
                      "Optimize profile: bio, highlights, link",
                      "Target: 10k followers + algorithm recognition of account type"
                    ]
                  },
                  {
                    phase: "Phase 2 — App Validation",
                    target: "10k → 30k followers",
                    items: [
                      "Launch one app (One Body or One Mind) to existing audience",
                      "Prove product-market fit: paying users, retention, reviews",
                      "Content begins referencing the app naturally — not as ads, as tools",
                      "Target: 500–1,000 paying app subscribers"
                    ]
                  },
                  {
                    phase: "Phase 3 — Community",
                    target: "30k → 100k followers",
                    items: [
                      "Launch membership layer: philosophy salons, discussion spaces",
                      "Weekly or bi-weekly live events with the founder",
                      "Community content: Q&As, reader questions, shared reflections",
                      "Target: 500–2,000 paying community members"
                    ]
                  },
                  {
                    phase: "Phase 4 — Products",
                    target: "100k+ followers",
                    items: [
                      "Digital: courses, journaling systems, curiosity challenges",
                      "Physical: journals, card decks, printed objects",
                      "Products emerge from what the community is already asking for",
                      "Target: $15k–$40k/month product revenue"
                    ]
                  },
                  {
                    phase: "Phase 5 — Experiences",
                    target: "Mature brand",
                    items: [
                      "Retreats, sailing trips, philosophy gatherings",
                      "High-touch, premium, limited capacity",
                      "These become the flagship expressions of the philosophy",
                      "Target: 2–4 events per year at $2k–$5k per person"
                    ]
                  }
                ].map((item) => (
                  <div key={item.phase} className="roadmap-node">
                    <h3 className="t-sub">{item.phase}</h3>
                    <p className="t-caption mt-1">{item.target}</p>
                    <ul className="ed-list mt-3 space-y-1">
                      {item.items.map((li) => (
                        <li key={li} className="t-body">{li}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-gold">
                <p className="t-body">
                  <strong>Critical rule:</strong> Do not build Phase 3 before Phase 2 is proven.
                  Do not build Phase 2 before Phase 1 is real. The sequence is the strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 90-Day Milestone ── */}
        <section id="milestone" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="02" title="The 90-Day Priority" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-lead">
                Everything in the first 90 days serves one goal: get to 10,000 followers with a
                locked visual identity and a posting system that runs without friction.
              </p>
              <p className="t-body">
                This milestone matters because it unlocks everything else. At 10k, the algorithm
                starts working for you. At 10k, an app launch has an audience. At 10k, the brand
                has proven it can grow.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Week 1–2: Lock the Foundation</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Finalize color palette and apply it to all assets</li>
                    <li className="t-body">Write and record a batch of 10 Reels before posting any</li>
                    <li className="t-body">Set up production workflow (see Part Three)</li>
                    <li className="t-body">Optimize profile bio and link</li>
                    <li className="t-body">Decide on posting time (aim for 7–9am or 6–8pm local)</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Week 3–12: Daily Execution</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">2 Reels per day, every day</li>
                    <li className="t-body">One philosophical, one joy-of-life</li>
                    <li className="t-body">Rotate through the 5 content formats</li>
                    <li className="t-body">Every 5–7 Reels: one direct follow invitation</li>
                    <li className="t-body">Weekly review: which formats are performing? Double down.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PART TWO — THE INSTAGRAM SYSTEM
            ════════════════════════════════════ */}
        <PartDivider part="Part Two" title="The Instagram System" />

        {/* ── Visual Identity ── */}
        <section id="identity" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="03" title="Visual Identity" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                Every visual decision should be testable against one question: does this look like
                it comes from The Great Mystery?
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="t-label mb-4">Primary Palette</p>
                  {[
                    { name: "Golden Sunlight", hex: "#F7B500", use: "Primary warmth, overlays, accents" },
                    { name: "Turquoise Sea", hex: "#2DBCCB", use: "Water, nature, cool contrast" },
                    { name: "Deep Blue Sky", hex: "#2C5AA0", use: "Sky, depth, authority" },
                    { name: "Warm Skin", hex: "#D69C77", use: "Human warmth, organic tones" }
                  ].map((c) => (
                    <div key={c.name} className="swatch-row">
                      <span className="swatch-dot" style={{ background: c.hex }} />
                      <span className="t-body"><strong>{c.name}</strong> · {c.use}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="t-label mb-4">Accent Palette</p>
                  {[
                    { name: "Orange Sunset", hex: "#FF8B3E", use: "Energy, highlight moments" },
                    { name: "Cosmic Purple", hex: "#6E4AC5", use: "Mystery, cosmos, night" },
                    { name: "Emerald Green", hex: "#1E9B6F", use: "Nature, life, growth" }
                  ].map((c) => (
                    <div key={c.name} className="swatch-row">
                      <span className="swatch-dot" style={{ background: c.hex }} />
                      <span className="t-body"><strong>{c.name}</strong> · {c.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-5">Mood & Motion Rules</p>
              <ul className="ed-list space-y-2">
                <li className="t-body">Slow, floating, gentle camera movement — never fast cuts</li>
                <li className="t-body">Warm natural light — golden hour preferred, avoid artificial or cold lighting</li>
                <li className="t-body">Soft film grain — 35mm look, anamorphic lens feel</li>
                <li className="t-body">Shallow depth of field — bokeh backgrounds, foreground human detail</li>
                <li className="t-body">Sound: ambient piano or soft cinematic (reference: Ludovico Einaudi)</li>
              </ul>
            </div>

            <div className="wide-w mt-14">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Visual References</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Cinema: Terrence Malick (The Tree of Life, To The Wonder)</li>
                    <li className="t-body">Documentary: Anthony Bourdain: Parts Unknown</li>
                    <li className="t-body">Photography: Sebastião Salgado, Alex Strohl</li>
                    <li className="t-body">Brands: Kinfolk magazine — editorial calm, honest light</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">What to Avoid</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Dark motivational styling (black backgrounds, neon text)</li>
                    <li className="t-body">Fast cuts, TikTok chaos energy, hyper-editing</li>
                    <li className="t-body">Corporate clean — overly polished, unreal perfection</li>
                    <li className="t-body">Guru aesthetics — standing on mountains pointing at the sky</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Five Reel Formats ── */}
        <section id="formats" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="04" title="The Five Reel Formats" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                Every Reel belongs to one of five formats. This creates recognizability — viewers
                begin to know what kind of experience they are about to have. The algorithm rewards
                format consistency. So does the audience.
              </p>
            </div>

            <div className="wide-w mt-10 space-y-8">
              {/* Format 1 */}
              <div className="card card-warm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="t-sub">Format 1 — Worldly Mystics</h3>
                  <span className="t-caption">Authority + Philosophy</span>
                </div>
                <p className="t-body mt-3">
                  Short stories about historical figures who lived as Worldly Mystics — curious
                  about existence, active in the world, alive to beauty.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-2">Structure</p>
                    <ol className="ed-list space-y-1">
                      <li className="t-body">Hook: an existential observation or surprising fact</li>
                      <li className="t-body">Reveal: who they were and what they believed</li>
                      <li className="t-body">Closing: philosophical insight that connects to the viewer</li>
                    </ol>
                  </div>
                  <div>
                    <p className="t-label mb-2">Subjects</p>
                    <ul className="ed-list space-y-1">
                      <li className="t-body">Einstein — mystery, the violin, thought experiments</li>
                      <li className="t-body">Carl Jung — the unconscious, the shadow, dreams</li>
                      <li className="t-body">Leonard Cohen — love, God, where the light gets in</li>
                      <li className="t-body">Anthony Bourdain — food as philosophy</li>
                      <li className="t-body">Leonardo da Vinci — anatomy and art as one inquiry</li>
                      <li className="t-body">Richard Feynman — joy of not knowing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Format 2 */}
              <div className="card card-warm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="t-sub">Format 2 — Joy of Being Alive</h3>
                  <span className="t-caption">Viral Positivity + Emotion</span>
                </div>
                <p className="t-body mt-3">
                  Montages of beautiful everyday moments — sailing, coffee, sunsets, animals, travel,
                  friendship — with short reflective philosophical narration. The most shareable reels.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-2">Structure</p>
                    <ol className="ed-list space-y-1">
                      <li className="t-body">Simple philosophical statement (one sentence)</li>
                      <li className="t-body">Series of 4–8 joyful micro-moments (2–4 sec each)</li>
                      <li className="t-body">Closing reflection (one sentence)</li>
                    </ol>
                  </div>
                  <div>
                    <p className="t-label mb-2">Visual Motifs</p>
                    <ul className="ed-list space-y-1">
                      <li className="t-body">Sailing at golden hour · Coffee by the sea</li>
                      <li className="t-body">Horses on a beach · Waves crashing, slow motion</li>
                      <li className="t-body">Street food markets · Animals in nature</li>
                      <li className="t-body">Rain on windows · Early morning light in a new city</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Format 3 */}
              <div className="card card-warm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="t-sub">Format 3 — Nobody Talks About This</h3>
                  <span className="t-caption">Curiosity + Relatability</span>
                </div>
                <p className="t-body mt-3">
                  Observations about the strange nature of existence and modern life. Short
                  philosophical provocations that make viewers pause and share.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-2">Structure</p>
                    <ol className="ed-list space-y-1">
                      <li className="t-body">Hook — a statement that immediately creates pause</li>
                      <li className="t-body">Observation — the strange or overlooked truth</li>
                      <li className="t-body">Reframe — a meaningful shift in perspective</li>
                    </ol>
                  </div>
                  <div>
                    <p className="t-label mb-2">Hook Starters</p>
                    <ul className="ed-list space-y-1">
                      <li className="t-body italic">&ldquo;One of the strangest things about being alive is...&rdquo;</li>
                      <li className="t-body italic">&ldquo;Nobody talks about this, but...&rdquo;</li>
                      <li className="t-body italic">&ldquo;The older I get, the more I realize...&rdquo;</li>
                      <li className="t-body italic">&ldquo;Something happened that I can&apos;t stop thinking about...&rdquo;</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Format 4 */}
              <div className="card card-warm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="t-sub">Format 4 — Micro Stories</h3>
                  <span className="t-caption">Narrative + Engagement</span>
                </div>
                <p className="t-body mt-3">
                  Short philosophical stories from real life — conversations, travel, encounters
                  with nature. These build the most personal connection with the audience.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-2">Structure</p>
                    <ol className="ed-list space-y-1">
                      <li className="t-body">Brief setup — who, where, what</li>
                      <li className="t-body">Unexpected turn — the moment of insight</li>
                      <li className="t-body">Philosophical reflection — what it means</li>
                    </ol>
                  </div>
                  <div>
                    <p className="t-label mb-2">Script Skeleton</p>
                    <p className="t-body italic">
                      &ldquo;A fisherman once told me something I will never forget.
                      The sea teaches you something strange. You cannot control it. You can only
                      learn to move with it. Maybe life is the same.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Format 5 */}
              <div className="card card-warm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="t-sub">Format 5 — Quiet Questions</h3>
                  <span className="t-caption">Comments + Saves + Discussion</span>
                </div>
                <p className="t-body mt-3">
                  Short videos asking a single existential question. Minimal visual frame. Designed
                  to drive comments, saves, and high-quality discussion.
                </p>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-2">Structure</p>
                    <ol className="ed-list space-y-1">
                      <li className="t-body">Single question — direct, specific, genuine</li>
                      <li className="t-body">Minimal visual — one image, slow movement</li>
                      <li className="t-body">Pause — let the question breathe</li>
                    </ol>
                  </div>
                  <div>
                    <p className="t-label mb-2">Example Questions</p>
                    <ul className="ed-list space-y-1">
                      <li className="t-body">What does it mean to live well?</li>
                      <li className="t-body">Why does anything exist at all?</li>
                      <li className="t-body">What is the most beautiful thing you have ever seen?</li>
                      <li className="t-body">What do you know now that your younger self needed to hear?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Weekly Schedule & Growth ── */}
        <section id="schedule" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="05" title="Weekly Schedule & Growth" />
            </div>

            <div className="wide-w mt-2">
              <p className="t-label mb-4">Weekly Posting Matrix</p>
              <div className="overflow-x-auto">
                <table className="ed-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Reel 1 — Philosophy</th>
                      <th>Reel 2 — Joy / Emotion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Monday</td><td>Worldly Mystic — Einstein</td><td>Joy montage — morning light</td></tr>
                    <tr><td>Tuesday</td><td>Nobody Talks About This</td><td>Sailing at sunset</td></tr>
                    <tr><td>Wednesday</td><td>Worldly Mystic — Bourdain</td><td>Street food / travel</td></tr>
                    <tr><td>Thursday</td><td>Micro Story</td><td>Animals / nature</td></tr>
                    <tr><td>Friday</td><td>Worldly Mystic — Da Vinci</td><td>Coffee by the sea</td></tr>
                    <tr><td>Saturday</td><td>Quiet Question</td><td>Friends / laughter</td></tr>
                    <tr><td>Sunday</td><td>Nobody Talks About This</td><td>Rain / quiet beauty</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-gold">
                <p className="t-label">Growth Tactic</p>
                <p className="t-body mt-3">
                  Every 5–7 reels, post a direct follow invitation: &ldquo;If you enjoy these
                  reflections on life and curiosity, follow for more.&rdquo; Simple. Consistent.
                  It converts viewers into followers.
                </p>
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Profile Optimization</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body"><strong>Name:</strong> The Great Mystery</li>
                    <li className="t-body"><strong>Bio:</strong> Everything is a mystery. Everyone is a mystic. | Exploring life, curiosity and wonder.</li>
                    <li className="t-body"><strong>Link:</strong> thegreatmystery.one</li>
                    <li className="t-body"><strong>Highlights:</strong> organize by format — Worldly Mystics / Joy of Living / Questions</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">60-Day Output Forecast</p>
                  <p className="t-body mt-4">2 reels/day × 60 days = <strong>120 reels</strong></p>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Normal", count: 90, pct: 75 },
                      { label: "Good", count: 25, pct: 21 },
                      { label: "Viral", count: 5, pct: 10 }
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between text-[1rem]">
                          <span className="t-body">{bar.label}</span>
                          <span className="font-medium">{bar.count}</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-[var(--ink-05)]">
                          <div className="h-2 rounded-full bg-[var(--gold)]" style={{ width: `${bar.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="t-body mt-4">
                    Those 5 viral reels can drive the account from hundreds to tens of thousands.
                    Consistency is the only path to the 5.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            PART THREE — THE PRODUCTION TOOLKIT
            ════════════════════════════════════ */}
        <PartDivider part="Part Three" title="The Production Toolkit" />

        {/* ── AI Prompt System ── */}
        <section id="prompts" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="06" title="AI Prompt System" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                Append this universal suffix to every AI video generation prompt to maintain
                visual consistency across all content. This single suffix is your visual identity
                in prompt form.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-gold">
                <p className="t-label">Universal Style Prompt</p>
                <code className="prompt-block mt-4">cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors, sense of wonder and curiosity, Terrence Malick style cinematography, slow gentle camera movement, 35mm film look with bokeh</code>
              </div>
            </div>

            <div className="wide-w mt-10">
              <p className="t-label mb-4">Prompt Template Structure</p>
              <div className="grid gap-4 md:grid-cols-4">
                {["1. Scene Description", "2. Emotional Atmosphere", "3. Camera Style", "4. + Universal Suffix"].map((step) => (
                  <div key={step} className="card card-warm text-center">
                    <p className="t-sub text-[1.1rem]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="wide-w mt-10">
              <p className="t-label mb-5">Prompt Library</p>
              <div className="space-y-4">
                {[
                  { label: "Worldly Mystics — Einstein", prompt: "Portrait of Albert Einstein standing under a star-filled night sky, looking upward in wonder, subtle cosmic atmosphere, science and mystery blending into one image." },
                  { label: "Worldly Mystics — Jung", prompt: "Carl Jung in his study, surrounded by books and symbolic objects, candlelight, psychological depth, a sense of inner exploration." },
                  { label: "Joy of Being Alive", prompt: "A man surfing a gentle turquoise wave at sunset, golden sunlight reflecting on the water, joyful expression, tropical atmosphere, cinematic slow motion." },
                  { label: "Joy of Being Alive — Morning", prompt: "Woman drinking coffee on a terrace overlooking the Mediterranean, early morning light, steam rising from the cup, quiet and content." },
                  { label: "Travel & Exploration", prompt: "A traveler walking through a colorful Mediterranean street at dawn, sunlight hitting pastel buildings, quiet peaceful atmosphere, sense of possibility and discovery." },
                  { label: "Quiet Existential Moments", prompt: "Person sitting alone on a cliff overlooking the ocean at sunset, vast horizon, peaceful contemplative atmosphere, small figure against enormous sky." },
                  { label: "Cosmic / Night Sky", prompt: "Human silhouette standing in a field under the Milky Way, arms open, looking up, the cosmic scale made intimate." }
                ].map((p) => (
                  <div key={p.label} className="card card-warm">
                    <p className="t-caption mb-2">{p.label}</p>
                    <code className="prompt-block">{p.prompt} [+ universal suffix]</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Voiceover & Captions ── */}
        <section id="voice" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="07" title="Voiceover & Captions" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The Great Mystery voice is calm, curious, and warm. Write the way you would speak
                to someone intelligent who you respect — not performing wisdom, but sharing a
                genuine observation.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Script Length by Format</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Worldly Mystics: 60–90 sec (180–250 words)</li>
                    <li className="t-body">Joy of Being Alive: 30–45 sec (80–120 words)</li>
                    <li className="t-body">Nobody Talks About This: 45–60 sec (120–160 words)</li>
                    <li className="t-body">Micro Stories: 45–75 sec (120–200 words)</li>
                    <li className="t-body">Quiet Questions: 15–30 sec (30–60 words)</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Voice Rules</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Short sentences. Space between ideas.</li>
                    <li className="t-body">Use &ldquo;you&rdquo; sparingly — it should feel like an invitation, not a command</li>
                    <li className="t-body">End on an opening, not a conclusion. Leave room for thought.</li>
                    <li className="t-body">Never explain the insight. State it and trust the listener.</li>
                    <li className="t-body">Read it aloud before recording. If you stumble, rewrite.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-warm">
                <p className="t-label">Hook Formula</p>
                <p className="t-body mt-3">
                  The first 3 seconds determine whether someone stays. A strong hook does one of
                  three things:
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <div className="card card-gold">
                    <p className="t-body"><strong>Creates curiosity</strong></p>
                    <p className="t-body mt-2 italic">&ldquo;Something happened that I can&apos;t stop thinking about&rdquo;</p>
                  </div>
                  <div className="card card-gold">
                    <p className="t-body"><strong>States a surprising truth</strong></p>
                    <p className="t-body mt-2 italic">&ldquo;The most brilliant people I&apos;ve met all had one thing in common&rdquo;</p>
                  </div>
                  <div className="card card-gold">
                    <p className="t-body"><strong>Creates recognition</strong></p>
                    <p className="t-body mt-2 italic">&ldquo;Does anyone else find it strange that we exist at all?&rdquo;</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="wide-w mt-10">
              <p className="t-label mb-5">Caption System</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Caption Structure</p>
                  <ol className="ed-list mt-4 space-y-2">
                    <li className="t-body">Opening line — restate the core thought in a new way (2–3 sentences)</li>
                    <li className="t-body">Pause (line break or dash)</li>
                    <li className="t-body">Closing reflection or question (1 sentence)</li>
                    <li className="t-body">3–5 hashtags — keep them specific and non-spammy</li>
                  </ol>
                </div>
                <div>
                  <p className="t-label mb-4">Caption Examples</p>
                  <div className="space-y-3">
                    <div className="card card-gold">
                      <p className="t-body italic">
                        The strange thing about life is that we are inside the mystery,
                        not outside it. Every answer opens into a larger question.
                      </p>
                      <p className="t-body mt-2 italic">Maybe that is the point.</p>
                      <p className="t-caption mt-3">#existence #philosophy #wonder</p>
                    </div>
                    <div className="card card-gold">
                      <p className="t-body italic">
                        Maybe the purpose of life is not to solve it,
                        but to experience it as fully as possible.
                      </p>
                      <p className="t-body mt-2 italic">What does that look like for you?</p>
                      <p className="t-caption mt-3">#curiosity #meaning #thegreatmystery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Production Workflow ── */}
        <section id="workflow" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="08" title="Production Workflow" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The goal of the production system is to eliminate daily decision-making. You should
                never wake up wondering what to post.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="card card-warm">
                  <p className="t-label">Sunday: Plan</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Review last week&apos;s performance</li>
                    <li className="t-body">Select 14 Reel slots (2/day)</li>
                    <li className="t-body">Assign each a format and subject</li>
                    <li className="t-body">Write scripts for all 14</li>
                    <li className="t-body">Queue AI prompts for video generation</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Mon–Tue: Generate</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Run all AI video generation prompts</li>
                    <li className="t-body">Download and review — cull anything off-brand</li>
                    <li className="t-body">Record voiceovers in one session</li>
                    <li className="t-body">Edit: video + VO + music</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Wednesday: Buffer</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li className="t-body">Final review of all 14 reels</li>
                    <li className="t-body">Upload as scheduled posts</li>
                    <li className="t-body">Prepare captions + 3–5 hashtags</li>
                    <li className="t-body">Week is done. Autopilot.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-gold">
                <p className="t-body">
                  <strong>Key principle:</strong> Batch production. Never produce content the day
                  it posts. Always have a 5–7 day buffer. Running out of buffer is the #1 reason
                  accounts go inconsistent.
                </p>
              </div>
            </div>

            <div className="wide-w mt-10">
              <p className="t-label mb-4">Recommended Tools</p>
              <div className="overflow-x-auto">
                <table className="ed-table">
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Tool</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>AI Video Generation</td><td>Higgsfield / Kling</td><td>Primary generation tools</td></tr>
                    <tr><td>Editing</td><td>CapCut</td><td>Mobile or desktop both work</td></tr>
                    <tr><td>Voiceover</td><td>ElevenLabs / own voice</td><td>Own voice builds trust faster</td></tr>
                    <tr><td>Music</td><td>Epidemic Sound</td><td>License-safe ambient tracks</td></tr>
                    <tr><td>Scheduling</td><td>Later / Buffer</td><td>Essential for batching</td></tr>
                    <tr><td>Script writing</td><td>Claude / Notion</td><td>Draft → refine → record</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="doc-section">
          <div className="page-w">
            <div className="content-w">
              <div className="card card-gold text-center">
                <p className="t-label">The Only Metric That Matters Right Now</p>
                <p className="t-sub mt-4">Days of consistent posting.</p>
                <p className="t-body mt-4">
                  Not follower count. Not views. Not engagement rate.
                </p>
                <p className="t-body mt-4">
                  The algorithm rewards accounts that post consistently over time. The audience
                  rewards accounts that always show up. The philosophy rewards founders who practice
                  what they believe.
                </p>
                <p className="t-sub mt-6">Start. Publish. Repeat.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="doc-footer page-w">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="t-caption">The Great Mystery · Founder&apos;s Execution Guide · 2026</p>
          <Link
            href="/"
            className="t-label border-b border-[var(--gold)] pb-1 text-[var(--ink-60)] transition-colors hover:text-[var(--ink)]"
          >
            ← Back to documents
          </Link>
        </div>
      </footer>
    </div>
  );
}
