import Image from "next/image";

/* ═══════════════════════════════════════════
   Helper Components
   ═══════════════════════════════════════════ */

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <header className="section-head">
      <span className="chapter-num">{num}</span>
      <h2 className="t-chapter mt-1">{title}</h2>
    </header>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return <blockquote className="pull-quote">{children}</blockquote>;
}

function Spread({
  src,
  alt,
  caption,
  remote = false
}: {
  src: string;
  alt: string;
  caption?: string;
  remote?: boolean;
}) {
  return (
    <figure className="image-spread" role="group" aria-label={alt}>
      <div className="image-spread-bleed">
        {remote ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <Image src={src} alt={alt} width={1920} height={1080} />
        )}
      </div>
      {caption && <figcaption className="t-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="bg-[var(--paper)]">
      {/* ────── Navigation ────── */}
      <nav className="site-nav print:hidden" aria-label="Document navigation">
        <div className="page-w flex h-14 items-center justify-between">
          <a href="#top" aria-label="Back to top" className="inline-flex items-center">
            <img
              src="https://thegreatmystery.one/fullLogo.png"
              alt="The Great Mystery logo"
              className="h-auto w-[160px] md:w-[190px]"
            />
          </a>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#manifesto" className="nav-link">Manifesto</a>
            <a href="#studio" className="nav-link">Studio</a>
            <a href="#revenue" className="nav-link">Revenue</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
            <a href="#playbook" className="nav-link">Playbook</a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* ════════════════════════════════════
            HERO
            ════════════════════════════════════ */}
        <section className="hero page-w">
          <div className="hero-grid">
            <div>
              <p className="t-label">March 2026 · Strategy Dossier</p>
              <p className="t-brand mt-4 text-[1.4rem] leading-none md:text-[1.6rem]">
                The Great Mystery
              </p>
              <h1 className="t-hero mt-5">
                A philosophy studio built as a living system
              </h1>
              <p className="t-lead mt-6 max-w-[52ch]">
                Identity, audience growth, apps, products, community, and
                experiences — compounding as one brand architecture.
              </p>
              <dl className="key-facts">
                <div className="key-facts-row">
                  <dt>Trajectory</dt>
                  <dd>10k — 100k — 1M followers</dd>
                </div>
                <div className="key-facts-row">
                  <dt>Core Sequence</dt>
                  <dd>Audience → App → Community → Products → Experiences</dd>
                </div>
                <div className="key-facts-row">
                  <dt>Revenue Potential</dt>
                  <dd>~$205k/month at mature stage</dd>
                </div>
              </dl>
            </div>
            <div>
              <img
                src="https://thegreatmystery.one/bgnobottom.jpg"
                alt="Sailboat at golden hour — the visual world of The Great Mystery"
                className="hero-img"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CONTENTS
            ════════════════════════════════════ */}
        <section id="contents" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <div className="toc-section">
                <p className="t-label">Navigation</p>
                <h2 className="t-display mt-3">Contents</h2>
                <p className="t-lead mt-4 max-w-[54ch]">
                  Two parts: the strategic vision for investors and advisors, and the
                  founder&apos;s operational playbook for execution.
                </p>

                <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
                  <div>
                    <p className="toc-part-label">Part One · The Vision</p>
                    <ol className="toc-list">
                      <li><a href="#manifesto"><span className="toc-num">01</span><span className="toc-title">Manifesto</span></a></li>
                      <li><a href="#philosophy"><span className="toc-num">02</span><span className="toc-title">Philosophy & Principles</span></a></li>
                      <li><a href="#visual"><span className="toc-num">03</span><span className="toc-title">Visual Language</span></a></li>
                      <li><a href="#studio"><span className="toc-num">04</span><span className="toc-title">Philosophy Studio Blueprint</span></a></li>
                      <li><a href="#business"><span className="toc-num">05</span><span className="toc-title">Business Architecture</span></a></li>
                      <li><a href="#revenue"><span className="toc-num">06</span><span className="toc-title">Revenue Stack</span></a></li>
                      <li><a href="#roadmap"><span className="toc-num">07</span><span className="toc-title">Roadmap</span></a></li>
                      <li><a href="#vision"><span className="toc-num">08</span><span className="toc-title">Vision & Founder Edge</span></a></li>
                    </ol>
                  </div>
                  <div>
                    <p className="toc-part-label">Part Two · Playbook</p>
                    <ol className="toc-list">
                      <li><a href="#voice"><span className="toc-num">09</span><span className="toc-title">Brand Voice & Tone</span></a></li>
                      <li><a href="#audience"><span className="toc-num">10</span><span className="toc-title">Audience Engine</span></a></li>
                      <li><a href="#formats"><span className="toc-num">11</span><span className="toc-title">Reel Format System</span></a></li>
                      <li><a href="#prompts"><span className="toc-num">12</span><span className="toc-title">AI Prompt System</span></a></li>
                      <li><a href="#posting"><span className="toc-num">13</span><span className="toc-title">Posting & Production</span></a></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Spread
          src="https://thegreatmystery.one/bgnobottom.jpg"
          alt="Sailboat visual — the editorial world of The Great Mystery"
          caption="The Great Mystery visual world — cinematic wonder, warm curiosity, human life inside a vast mysterious universe."
          remote
        />

        {/* ════════════════════════════════════════════
            PART ONE — THE VISION
            ════════════════════════════════════════════ */}

        {/* ── Ch 01 · Manifesto ── */}
        <section id="manifesto" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="01" title="Manifesto" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                Existence itself remains a mystery.
              </p>
              <p className="t-body">
                Human civilization has accumulated knowledge for thousands of years. We have mapped the stars,
                decoded the genome, built machines that think and networks that connect the entire planet.
              </p>
              <p className="t-body">
                And yet the most fundamental question remains unanswered.
              </p>
            </div>

            <PullQuote>Why is there something rather than nothing?</PullQuote>

            <div className="content-w space-y-6">
              <p className="t-body">
                Every person wakes each morning inside a reality that no one fully understands. We
                experience consciousness, love, curiosity, fear, beauty, time, and death — but the
                nature of existence itself remains hidden.
              </p>
              <p className="t-body">
                Most of modern culture tries to replace mystery with certainty.
              </p>
              <p className="t-body">
                The Great Mystery takes the opposite view.
              </p>
              <p className="t-body">
                Mystery is not a problem to solve. Mystery is the condition that makes life meaningful.
              </p>
              <p className="t-body">
                It is the unknown that creates curiosity. It is uncertainty that creates adventure.
                It is the limits of knowledge that create wonder.
              </p>
            </div>

            <PullQuote>Life is not a puzzle to finish, but an experience to explore.</PullQuote>
          </div>
        </section>

        {/* ── Ch 02 · Philosophy ── */}
        <section id="philosophy" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="02" title="Philosophy & Principles" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                At the center of this project is a simple idea: everything is fundamentally mysterious.
                No matter how much humanity discovers, existence itself remains beyond complete explanation.
              </p>
              <p className="t-body">
                This realization can lead in two different directions. One response is fear.
                Another response is curiosity. The Great Mystery chooses curiosity.
              </p>
              <p className="t-body">
                When mystery is embraced rather than feared, life becomes an open landscape of exploration.
              </p>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-6">The Framework</p>
              <div className="grid gap-5 md:grid-cols-3">
                <div className="card card-warm">
                  <h3 className="t-sub">Body</h3>
                  <p className="t-body mt-3">
                    A healthy body is the foundation of experience. Strength, movement, and
                    vitality allow us to fully participate in the world.
                  </p>
                </div>
                <div className="card card-warm">
                  <h3 className="t-sub">Mind</h3>
                  <p className="t-body mt-3">
                    A clear mind enables reflection. It allows us to ask questions, examine ideas,
                    and observe the world with curiosity rather than distraction.
                  </p>
                </div>
                <div className="card card-warm">
                  <h3 className="t-sub">Soul</h3>
                  <p className="t-body mt-3">
                    The soul represents meaning, wonder, and connection. It is the part of
                    human experience that asks deeper questions.
                  </p>
                </div>
              </div>
              <p className="t-body mt-8 content-w">
                Healthy body supports a clear mind. A clear mind supports a healthy soul.
                Together they allow people to experience life fully.
              </p>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-5">Core Principles</p>
              <ul className="ed-list space-y-2 text-[1.05rem]">
                <li>Curiosity over certainty</li>
                <li>Exploration over explanation</li>
                <li>Joy in everyday life</li>
                <li>Embracing mystery rather than fearing it</li>
                <li>Balancing intellect, creativity, and adventure</li>
              </ul>
            </div>
          </div>
        </section>

        <Spread
          src="/editorial/ocean-light.svg"
          alt="Ocean light — calm rhythm and visual continuity"
          caption="Human life inside a vast mysterious universe"
        />

        {/* ── Ch 03 · Visual Language ── */}
        <section id="visual" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="03" title="Visual Language" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The visual world of The Great Mystery should feel like a philosopher traveling
                the earth and noticing small, beautiful mysteries everywhere.
              </p>
            </div>

            <div className="wide-w mt-14">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Core Aesthetic</p>
                  <h3 className="t-sub mt-3">Dreamlike realism, warm curiosity, cinematic wonder.</h3>
                  <ul className="ed-list mt-5 space-y-1 t-body">
                    <li>Terrence Malick atmosphere — poetic natural light</li>
                    <li>Travel documentary intimacy — human detail, real places</li>
                    <li>Cosmic imagery with grounded human life</li>
                    <li>Warm Mediterranean texture and light</li>
                  </ul>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Mood Rule</p>
                  <h3 className="t-sub mt-3">A quiet moment of wonder. Never a lecture.</h3>
                  <p className="t-body mt-5">
                    Warm, vibrant, life-affirming. Soft film grain, natural light, shallow depth
                    of field, slow camera movement. 35mm film look with anamorphic lens and bokeh.
                  </p>
                  <p className="t-body mt-4">
                    <strong>Avoid:</strong> dark motivational styling, black backgrounds, neon cyberpunk,
                    fast cuts, hyper editing.
                  </p>
                </div>
              </div>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-5">Color Palette</p>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <p className="t-caption mb-3">Primary</p>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#F7B500" }} /><span className="t-body">Golden Sunlight · #F7B500</span></div>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#2DBCCB" }} /><span className="t-body">Turquoise Sea · #2DBCCB</span></div>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#2C5AA0" }} /><span className="t-body">Deep Blue Sky · #2C5AA0</span></div>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#D69C77" }} /><span className="t-body">Warm Skin Tones · #D69C77</span></div>
                </div>
                <div>
                  <p className="t-caption mb-3">Accent</p>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#FF8B3E" }} /><span className="t-body">Orange Sunset · #FF8B3E</span></div>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#6E4AC5" }} /><span className="t-body">Cosmic Purple · #6E4AC5</span></div>
                  <div className="swatch-row"><span className="swatch-dot" style={{ background: "#1E9B6F" }} /><span className="t-body">Emerald Green · #1E9B6F</span></div>
                </div>
              </div>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-5">Recurring Visual Elements</p>
              <div className="grid gap-5 md:grid-cols-3">
                <div className="card card-warm">
                  <p className="t-caption mb-3">Nature</p>
                  <p className="t-body">Ocean, waves, sunsets, mountains, forests, animals</p>
                </div>
                <div className="card card-warm">
                  <p className="t-caption mb-3">Human Life</p>
                  <p className="t-body">Coffee, travel, sailing, walking, conversations</p>
                </div>
                <div className="card card-warm">
                  <p className="t-caption mb-3">Cosmic</p>
                  <p className="t-body">Stars, galaxies, night sky</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ch 04 · Philosophy Studio Blueprint ── */}
        <section id="studio" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="04" title="Philosophy Studio Blueprint" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                Do not think: I am building apps. Think: I am building a philosophy studio.
                Everything reinforces everything else.
              </p>
            </div>

            <div className="wide-w mt-14">
              <p className="t-label mb-5">The Six-Layer Stack</p>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { layer: "Layer 1", title: "Audience", note: "The foundation engine that powers everything." },
                  { layer: "Layer 2", title: "Apps", note: "Tools for living the mystery. Structural advantage." },
                  { layer: "Layer 3", title: "Digital Products", note: "Courses, journals, explorations. High margin." },
                  { layer: "Layer 4", title: "Membership", note: "Live salons, philosophy nights, community." },
                  { layer: "Layer 5", title: "Physical Objects", note: "Journals, posters, card decks, clothing." },
                  { layer: "Layer 6", title: "Experiences", note: "Retreats, sailing trips, gatherings." }
                ].map((item) => (
                  <div key={item.layer} className="card card-warm">
                    <p className="t-label">{item.layer}</p>
                    <h3 className="t-sub mt-2">{item.title}</h3>
                    <p className="t-body mt-2 text-[1.05rem]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="wide-w mt-14">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Most Creator Paths</p>
                  <p className="t-sub mt-3">Content → Sponsorships</p>
                  <p className="t-body mt-2 text-[1.05rem]">
                    Revenue capped by ad rates and brand deals. No compounding.
                  </p>
                </div>
                <div className="card card-gold">
                  <p className="t-label">The Great Mystery Path</p>
                  <p className="t-sub mt-3">Content → Apps → Products → Experiences</p>
                  <p className="t-body mt-2 text-[1.05rem]">
                    Each layer strengthens the others. Audience fuels apps, apps deepen trust,
                    trust enables community and products, demand rises for experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Spread
          src="/editorial/cinematic-frame.svg"
          alt="Cinematic frame — documentary atmosphere"
          caption="Apps are one expression of the studio. The full system compounds through media, products, community, and experiences."
        />

        {/* ── Ch 05 · Business Architecture ── */}
        <section id="business" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="05" title="Business Architecture" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The audience (Layer 1) is the foundation — covered in the Studio Blueprint above
                and the Playbook below. Here are the five revenue-generating layers that build on
                that foundation, each strengthening the others.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-warm">
                <p className="t-label">Apps — The Structural Advantage</p>
                <h3 className="t-sub mt-2">
                  Engineering leverage that most creators do not have.
                </h3>
                <p className="t-body mt-3">
                  Subscription range: $5–$10/month. Example baseline: 10,000 users × $6/month =
                  $60,000/month ($720,000/year).
                </p>
                <div className="mt-5 overflow-x-auto">
                  <table className="ed-table">
                    <thead>
                      <tr>
                        <th>App</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>One Body</td><td>Physical wellbeing</td></tr>
                      <tr><td>One Mind</td><td>Mental clarity</td></tr>
                      <tr><td>One Soul</td><td>Spiritual reflection</td></tr>
                      <tr><td>Dream App</td><td>Subconscious exploration</td></tr>
                      <tr><td>Field Guide</td><td>Curiosity about the world</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="wide-w mt-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Digital Products</p>
                  <p className="t-body mt-3">
                    Courses, journaling systems, guided explorations, curiosity challenges, creative workshops.
                  </p>
                  <p className="mt-4 border-t border-[var(--ink-10)] pt-3 text-[1.05rem] font-medium">
                    $79 × 5,000 buyers = $395,000
                  </p>
                  <p className="t-body text-[1rem]">Typical 90%+ margin.</p>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Membership</p>
                  <p className="t-body mt-3">
                    Live salons, philosophy nights, guest speakers, community rituals.
                  </p>
                  <p className="mt-4 border-t border-[var(--ink-10)] pt-3 text-[1.05rem] font-medium">
                    5,000 members × $12/mo = $60,000/month
                  </p>
                  <p className="t-body text-[1rem]">Recurring and relationship-driven.</p>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Physical Objects</p>
                  <p className="t-body mt-3">
                    Journals, posters, philosophical card decks, exploration kits, clothing.
                  </p>
                  <p className="mt-4 border-t border-[var(--ink-10)] pt-3 text-[1.05rem] font-medium">
                    20k followers × 2% × $40 = $16,000 launch
                  </p>
                  <p className="t-body text-[1rem]">Lifestyle signal and brand artifacts.</p>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Experiences</p>
                  <p className="t-body mt-3">
                    Retreats, sailing trips, philosophy gatherings, creative workshops.
                  </p>
                  <p className="mt-4 border-t border-[var(--ink-10)] pt-3 text-[1.05rem] font-medium">
                    $2,000 retreat × 20 people = $40,000 weekend
                  </p>
                  <p className="t-body text-[1rem]">Highest impact, premium positioning.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ch 06 · Revenue Stack ── */}
        <section id="revenue" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="06" title="Revenue Stack" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                A compounding ecosystem, not a single revenue bet. Each layer strengthens the others.
              </p>
            </div>

            <div className="wide-w mt-10">
              <p className="t-label mb-4">Mature Monthly Baseline</p>
              <div className="overflow-x-auto">
                <table className="ed-table">
                  <thead>
                    <tr>
                      <th>Stream</th>
                      <th>Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Apps</td><td>$80,000</td></tr>
                    <tr><td>Membership</td><td>$50,000</td></tr>
                    <tr><td>Courses</td><td>$40,000</td></tr>
                    <tr><td>Products</td><td>$20,000</td></tr>
                    <tr><td>Events</td><td>$15,000</td></tr>
                    <tr className="row-total"><td>Total</td><td>$205,000 / month</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="t-body mt-6">
                Annualized baseline: approximately <strong>$2.46M/year</strong>.
              </p>
            </div>

            <div className="wide-w mt-14">
              <div className="card card-gold">
                <p className="t-label">Investment Logic</p>
                <h3 className="t-sub mt-2">
                  This stack is credible because each layer feeds the next.
                </h3>
                <p className="t-body mt-4">
                  Audience fuels app adoption. Apps deepen trust. Trust enables community and products.
                  All of it raises demand for high-impact experiences. Many lifestyle brands scale well
                  beyond these numbers once the ecosystem compounds.
                </p>
                <p className="t-body mt-4">
                  <strong>Biggest risk:</strong> building too many layers at once. The roadmap addresses
                  this with strict sequencing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Ch 07 · Roadmap ── */}
        <section id="roadmap" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="07" title="Roadmap" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                Strict sequencing. Each phase must prove itself before the next begins.
              </p>
            </div>

            <div className="wide-w mt-10">
              <div className="roadmap-track">
                {[
                  {
                    phase: "Phase 1 — Audience",
                    detail: "Build recognizable formats and lock visual identity. Grow from ~500 to 10k+ followers with consistent daily publishing."
                  },
                  {
                    phase: "Phase 2 — One Successful App",
                    detail: "Launch and validate one profitable app with clear product-market fit. Prove that audience converts to paying users."
                  },
                  {
                    phase: "Phase 3 — Community",
                    detail: "Launch membership layer through salons, philosophy nights, guest speakers, and recurring discussion spaces."
                  },
                  {
                    phase: "Phase 4 — Products",
                    detail: "Expand into digital and physical products with strong margins. Courses, journals, card decks, clothing."
                  },
                  {
                    phase: "Phase 5 — Experiences",
                    detail: "Scale high-impact retreats, workshops, sailing trips, and travel-based gatherings."
                  }
                ].map((item) => (
                  <div key={item.phase} className="roadmap-node">
                    <h3 className="t-sub">{item.phase}</h3>
                    <p className="t-body mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="wide-w mt-10">
              <div className="card card-gold">
                <p className="t-label">First Milestone</p>
                <p className="t-sub mt-2">10,000 followers + one profitable app</p>
                <p className="t-body mt-3">
                  Once this milestone exists, community, products, and experiences become
                  significantly easier to launch and scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Spread
          src="/editorial/great-mystery-sky.svg"
          alt="Expansive sky — human life inside a vast mysterious universe"
          caption="The mystery of life is not something far away. It is right here."
        />

        {/* ── Ch 08 · Vision & Founder Edge ── */}
        <section id="vision" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="08" title="Vision & Founder Edge" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                The long-term vision is to build a global philosophy lifestyle brand.
              </p>
              <p className="t-body">
                The goal is not only to distribute content but to inspire people to explore life
                with curiosity, joy, and wonder — through media, tools, products, and shared experiences.
              </p>
            </div>

            <PullQuote>The Great Mystery exists to remind people that life itself is the greatest mystery.</PullQuote>

            <div className="wide-w mt-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="card card-warm">
                  <p className="t-label">Founder Advantage</p>
                  <p className="t-body mt-3">
                    A rare combination: engineering ability, philosophical instinct, storytelling
                    sensitivity, international perspective, and an exploration-centered lifestyle.
                  </p>
                </div>
                <div className="card card-warm">
                  <p className="t-label">Long-Term Structure</p>
                  <p className="t-body mt-3">
                    Media · Apps · Courses · Community · Experiences — a single philosophy studio
                    under one company, one strategic direction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            PART TWO — FOUNDER'S PLAYBOOK
            ════════════════════════════════════════════ */}
        <div id="playbook" className="part-divider">
          <p className="part-label">Part Two</p>
          <h2>Founder&apos;s Playbook</h2>
          <p>
            Operational systems, content formats, prompt engineering, and daily production
            cadence for building and growing The Great Mystery.
          </p>
        </div>

        <div className="playbook-bg">
          {/* ── Ch 09 · Brand Voice & Tone ── */}
          <section id="voice" className="doc-section">
            <div className="page-w">
              <div className="wide-w">
                <ChapterHead num="09" title="Brand Voice & Tone" />
              </div>
              <div className="content-w">
                <p className="t-lead">
                  The voice of The Great Mystery is calm, reflective, and thoughtful.
                  Captions should feel like short philosophical observations, not motivational slogans.
                </p>
              </div>

              <div className="wide-w mt-10">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="t-label mb-4">Tone Characteristics</p>
                    <ul className="ed-list space-y-2 text-[1.05rem]">
                      <li>Calm</li>
                      <li>Curious</li>
                      <li>Reflective</li>
                      <li>Intelligent</li>
                      <li>Human</li>
                    </ul>
                  </div>
                  <div>
                    <p className="t-label mb-4">Avoid</p>
                    <ul className="ed-list space-y-2 text-[1.05rem]">
                      <li>&quot;GRIND HARD&quot; / &quot;NEVER GIVE UP&quot;</li>
                      <li>Dark motivational style</li>
                      <li>Corporate language</li>
                      <li>Startup jargon</li>
                      <li>SUCCESS MINDSET energy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="wide-w mt-14">
                <p className="t-label mb-5">High-Performing Hook Starters</p>
                <div className="space-y-3">
                  {[
                    "One of the strangest things about being alive is…",
                    "Some of the most brilliant minds believed this…",
                    "Nobody talks about this, but…",
                    "The older I get the more I realize…",
                    "A fisherman once told me something…"
                  ].map((hook) => (
                    <div key={hook} className="card card-warm">
                      <p className="t-body italic">&ldquo;{hook}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wide-w mt-14">
                <p className="t-label mb-5">Good Caption Examples</p>
                <div className="space-y-3">
                  <div className="card card-gold">
                    <p className="t-body italic">
                      &ldquo;The strange thing about life is that we are inside the mystery, not outside it.&rdquo;
                    </p>
                  </div>
                  <div className="card card-gold">
                    <p className="t-body italic">
                      &ldquo;Maybe the purpose of life is not to solve it, but to experience it.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-w mt-10">
                <p className="t-body">
                  <strong>Most important rule:</strong> each piece should feel like a quiet moment of
                  wonder, not a lecture.
                </p>
              </div>
            </div>
          </section>

          {/* ── Ch 10 · Audience Engine ── */}
          <section id="audience" className="doc-section">
            <div className="page-w">
              <div className="wide-w">
                <ChapterHead num="10" title="Audience Engine" />
              </div>
              <div className="content-w">
                <p className="t-lead">
                  Layer 1 is audience. Revenue is near zero at the beginning, but attention capital
                  is the engine that powers every later layer in the business.
                </p>
              </div>

              <div className="wide-w mt-10">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="card card-warm">
                    <p className="t-label">Platforms</p>
                    <p className="t-body mt-3">Instagram · YouTube · Newsletter · Short-form Video · Website</p>
                  </div>
                  <div className="card card-warm">
                    <p className="t-label">Growth Path</p>
                    <p className="t-sub mt-3">10k → 100k → 1M</p>
                    <p className="t-body mt-2 text-[1.05rem]">
                      Recognizable formats plus consistent visual identity drive this curve.
                    </p>
                  </div>
                </div>
              </div>

              <div className="wide-w mt-8">
                <div className="card card-warm">
                  <p className="t-label">Attraction Pillars</p>
                  <ul className="ed-list mt-4 space-y-2">
                    <li>Curiosity about existence</li>
                    <li>Philosophical ideas made accessible</li>
                    <li>Joy of life — celebrating everyday beauty</li>
                    <li>Exploration — travel, nature, new experiences</li>
                    <li>Worldly mystics: Einstein, Jung, Cohen, Bourdain, da Vinci</li>
                  </ul>
                </div>
              </div>

              <div className="content-w mt-10 space-y-5">
                <p className="t-body">
                  To grow from ~500 followers to 100k, consistency alone is not enough.
                  Use repeatable content formats that the algorithm can recognize and distribute.
                </p>
                <p className="t-body">
                  <strong>Biggest growth lever:</strong> consistency of visual identity. If every reel
                  feels like it comes from the same world, recognition and follow conversion increase
                  dramatically.
                </p>
              </div>

              <div className="wide-w mt-14">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="card card-warm">
                    <p className="t-label">Motion Style</p>
                    <p className="t-body mt-3">
                      Slow, floating, gentle. Slow drone shots, slow walking, waves moving,
                      wind in trees, boats rocking. A calm hypnotic rhythm.
                    </p>
                    <p className="t-body mt-3">
                      <strong>Avoid:</strong> fast cuts, hyper editing, TikTok chaos.
                    </p>
                  </div>
                  <div className="card card-warm">
                    <p className="t-label">Sound Design</p>
                    <p className="t-body mt-3">
                      Ambient, piano, soft cinematic. Emotional but calm.
                    </p>
                    <p className="t-body mt-3">
                      Reference moods: Ludovico Einaudi style, soft ambient synths, gentle piano.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Ch 11 · Reel Format System ── */}
          <section id="formats" className="doc-section">
            <div className="page-w">
              <div className="wide-w">
                <ChapterHead num="11" title="Reel Format System" />
              </div>
              <div className="content-w">
                <p className="t-lead">
                  Five repeatable formats optimized for authority, emotion, curiosity, story,
                  and engagement. Viewers should instantly recognize what kind of reel they are seeing.
                </p>
              </div>

              <div className="wide-w mt-10 space-y-8">
                {/* Format 1 */}
                <div className="card card-warm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="t-sub">Worldly Mystics</h3>
                    <span className="t-caption">Authority + Philosophy</span>
                  </div>
                  <p className="t-body mt-3">
                    Short stories about historical figures who embraced curiosity about existence
                    while living productive lives. Einstein, Jung, da Vinci, Cohen, Bourdain.
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="t-label mb-2">Structure</p>
                      <ol className="ed-list space-y-1 text-[1.05rem]">
                        <li>Hook — existential observation</li>
                        <li>Reveal the person</li>
                        <li>Closing philosophical insight</li>
                      </ol>
                    </div>
                    <div>
                      <p className="t-label mb-2">Script Skeleton</p>
                      <p className="t-body text-[1.05rem] italic">
                        &ldquo;Some of the greatest minds in history were obsessed with the same question…
                        Einstein once said the most beautiful thing we can experience is the mysterious.
                        Maybe the goal of life is not to solve the mystery, but to live inside it.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Format 2 */}
                <div className="card card-warm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="t-sub">Joy of Being Alive</h3>
                    <span className="t-caption">Viral Positivity</span>
                  </div>
                  <p className="t-body mt-3">
                    Montages of beautiful everyday moments — sailing, coffee by the sea, sunsets,
                    travel, animals, friendship — with reflective philosophical narration.
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="t-label mb-2">Structure</p>
                      <ol className="ed-list space-y-1 text-[1.05rem]">
                        <li>Simple philosophical statement</li>
                        <li>Series of joyful micro-moments</li>
                        <li>Closing reflection</li>
                      </ol>
                    </div>
                    <div>
                      <p className="t-label mb-2">Visual Motifs</p>
                      <p className="t-body text-[1.05rem]">
                        Sailing at sunset, coffee by the sea, riding horses, waves crashing,
                        laughter with friends, street food, cats sleeping, rain on windows.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Format 3 */}
                <div className="card card-warm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="t-sub">Nobody Talks About This</h3>
                    <span className="t-caption">Curiosity + Relatability</span>
                  </div>
                  <p className="t-body mt-3">
                    Observations about the strange nature of existence and modern life.
                    Short reflections that make viewers pause.
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="t-label mb-2">Structure</p>
                      <ol className="ed-list space-y-1 text-[1.05rem]">
                        <li>Hook</li>
                        <li>Observation about modern life</li>
                        <li>Meaningful reframe</li>
                      </ol>
                    </div>
                    <div>
                      <p className="t-label mb-2">Script Skeleton</p>
                      <p className="t-body text-[1.05rem] italic">
                        &ldquo;Nobody talks about how strange it is that we exist at all.
                        We wake up, drink coffee, answer emails, while floating on a rock in space.
                        Maybe the real problem is that we forget how mysterious it is.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Format 4 */}
                <div className="card card-warm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="t-sub">Micro Stories</h3>
                    <span className="t-caption">Narrative Engagement</span>
                  </div>
                  <p className="t-body mt-3">
                    Short philosophical stories with a moral or insight, inspired by
                    conversations, travel, or encounters with nature.
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="t-label mb-2">Structure</p>
                      <ol className="ed-list space-y-1 text-[1.05rem]">
                        <li>Short story</li>
                        <li>Unexpected moment / turn</li>
                        <li>Philosophical reflection</li>
                      </ol>
                    </div>
                    <div>
                      <p className="t-label mb-2">Script Skeleton</p>
                      <p className="t-body text-[1.05rem] italic">
                        &ldquo;A fisherman once told me something I will never forget.
                        The sea teaches you something strange. You cannot control it.
                        You can only learn to move with it. Maybe life is the same.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Format 5 */}
                <div className="card card-warm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="t-sub">Quiet Questions</h3>
                    <span className="t-caption">Comments + Saves</span>
                  </div>
                  <p className="t-body mt-3">
                    Short videos asking existential questions. Designed to drive comments,
                    saves, and high-quality discussion.
                  </p>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="t-label mb-2">Structure</p>
                      <ol className="ed-list space-y-1 text-[1.05rem]">
                        <li>Simple existential question</li>
                        <li>Minimal visual frame</li>
                        <li>Pause</li>
                      </ol>
                    </div>
                    <div>
                      <p className="t-label mb-2">Example Questions</p>
                      <ul className="ed-list space-y-1 text-[1.05rem]">
                        <li>What does it mean to live well?</li>
                        <li>Why does anything exist at all?</li>
                        <li>What would you ask the universe if it could answer?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Spread
            src="/editorial/slow-travel.svg"
            alt="Slow travel — exploration and curiosity"
            caption="The feeling should always be: human life inside a vast mysterious universe."
          />

          {/* ── Ch 12 · AI Prompt System ── */}
          <section id="prompts" className="doc-section">
            <div className="page-w">
              <div className="wide-w">
                <ChapterHead num="12" title="AI Prompt System" />
              </div>
              <div className="content-w">
                <p className="t-lead">
                  Use a universal style suffix for Higgsfield and similar AI video tools
                  to keep all videos visually consistent and immediately recognizable.
                </p>
              </div>

              <div className="wide-w mt-10">
                <div className="card card-gold">
                  <p className="t-label">Universal Style Prompt</p>
                  <code className="prompt-block mt-4">cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors, sense of wonder and curiosity, terrence malick style cinematography, slow gentle camera movement</code>
                  <p className="t-body mt-4 text-[1rem]">
                    Append this string to most prompts to preserve recognizability across all content.
                  </p>
                </div>
              </div>

              <div className="wide-w mt-10">
                <p className="t-label mb-5">Prompt Template</p>
                <div className="grid gap-4 md:grid-cols-3">
                  {["1. Scene Description", "2. Visual Atmosphere", "3. Camera Style"].map((step) => (
                    <div key={step} className="card card-warm text-center">
                      <p className="t-sub">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="wide-w mt-10">
                <p className="t-label mb-5">Example Prompts</p>
                <div className="space-y-5">
                  <div className="card card-warm">
                    <p className="t-caption mb-2">Joy of Being Alive</p>
                    <code className="prompt-block">a man surfing a gentle turquoise wave at sunset, golden sunlight reflecting on the water, joyful expression, tropical atmosphere, cinematic slow motion</code>
                  </div>
                  <div className="card card-warm">
                    <p className="t-caption mb-2">Worldly Mystics</p>
                    <code className="prompt-block">portrait of Albert Einstein standing under a star filled night sky, looking upward in wonder, subtle cosmic atmosphere blending science and mystery</code>
                  </div>
                  <div className="card card-warm">
                    <p className="t-caption mb-2">Travel Curiosity</p>
                    <code className="prompt-block">a traveler walking through a colorful Mediterranean street early morning, sunlight hitting pastel buildings, quiet peaceful atmosphere</code>
                  </div>
                  <div className="card card-warm">
                    <p className="t-caption mb-2">Quiet Existential Moments</p>
                    <code className="prompt-block">person sitting alone on a cliff overlooking the ocean at sunset, vast horizon, peaceful contemplative atmosphere</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Ch 13 · Posting & Production ── */}
          <section id="posting" className="doc-section">
            <div className="page-w">
              <div className="wide-w">
                <ChapterHead num="13" title="Posting & Production" />
              </div>
              <div className="content-w">
                <p className="t-lead">
                  Two reels per day: one philosophical, one joy-of-life. Consistency is the
                  algorithm lever. Publishing daily for several months allows the strongest content
                  to surface.
                </p>
              </div>

              <div className="wide-w mt-10">
                <p className="t-label mb-4">Weekly Production Matrix</p>
                <div className="overflow-x-auto">
                  <table className="ed-table">
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Reel 1 (Philosophy)</th>
                        <th>Reel 2 (Joy of Life)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Monday</td><td>Einstein</td><td>Joy montage</td></tr>
                      <tr><td>Tuesday</td><td>Jung</td><td>Sailing sunset</td></tr>
                      <tr><td>Wednesday</td><td>Bourdain</td><td>Street food</td></tr>
                      <tr><td>Thursday</td><td>Da Vinci</td><td>Travel moment</td></tr>
                      <tr><td>Friday</td><td>Cohen</td><td>Quiet reflection</td></tr>
                      <tr><td>Saturday</td><td>Question reel</td><td>Animals</td></tr>
                      <tr><td>Sunday</td><td>Micro story</td><td>Nature</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="wide-w mt-14">
                <p className="t-label mb-4">60-Day Output Forecast</p>
                <div className="card card-warm">
                  <p className="t-body">
                    2 reels/day × 60 days = <strong>120 reels</strong>
                  </p>
                  <div className="mt-5 space-y-4">
                    {[
                      { label: "Normal reels", count: 90, pct: 75 },
                      { label: "Good reels", count: 25, pct: 21 },
                      { label: "Viral reels", count: 5, pct: 10 }
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex items-center justify-between text-[1rem]">
                          <span className="t-body">{bar.label}</span>
                          <span className="font-medium">{bar.count}</span>
                        </div>
                        <div className="mt-1 h-2 rounded-full bg-[var(--ink-05)]">
                          <div
                            className="h-2 rounded-full bg-[var(--gold)]"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="t-body mt-5 text-[1.05rem]">
                    Those 5 viral reels can drive 10k–100k followers. This is how small accounts
                    accelerate quickly.
                  </p>
                </div>
              </div>

              <div className="wide-w mt-14">
                <div className="card card-gold">
                  <p className="t-label">Growth Tactic</p>
                  <p className="t-body mt-3">
                    Every 5–7 reels, post a direct follow invitation: &ldquo;If you enjoy these
                    reflections on life and curiosity, follow for more.&rdquo; This simple cadence
                    converts viewers into followers.
                  </p>
                </div>
              </div>

              <div className="wide-w mt-14">
                <p className="t-label mb-4">Profile Bio Recommendation</p>
                <div className="card card-warm">
                  <p className="t-brand text-[1.3rem]">The Great Mystery</p>
                  <p className="t-body mt-2">Everything is a mystery. Everyone is a mystic.</p>
                  <p className="t-body">Exploring life, curiosity and wonder.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ────── Footer ────── */}
      <footer className="doc-footer page-w">
        <p className="t-brand text-[1.1rem]">The Great Mystery</p>
        <p className="t-caption mt-2">
          Founder, Advisor, and Investor Review Document · March 2026
        </p>
        <p className="mt-6">
          <a
            href="#top"
            className="back-to-top t-label border-b border-[var(--gold)] pb-1 text-[var(--ink-60)] transition-colors hover:text-[var(--ink)]"
          >
            Back to top
          </a>
        </p>
      </footer>
    </div>
  );
}
