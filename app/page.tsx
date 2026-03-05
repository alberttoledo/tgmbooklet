import Image from "next/image";

export default function HomePage() {
  return (
    <div className="page-grid relative pb-16">
      <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[color:var(--color-paper)]/95 backdrop-blur print:hidden">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-4 md:px-8">
          <a href="#top" aria-label="The Great Mystery home" className="inline-flex items-center">
            <img
              src="https://thegreatmystery.one/fullLogo.png"
              alt="The Great Mystery one logo"
              className="h-auto w-[170px] md:w-[205px]"
            />
          </a>
          <nav aria-label="Document navigation" className="hidden items-center gap-5 md:flex">
            <a href="#contents" className="nav-link">Contents</a>
            <a href="#visual-language" className="nav-link">Visual Language</a>
            <a href="#studio-blueprint" className="nav-link">Studio Blueprint</a>
            <a href="#roadmap" className="nav-link">Roadmap</a>
            <a href="#vision" className="nav-link">Vision</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full space-y-14 px-4 pb-10 pt-8 md:space-y-20 md:px-8 md:pt-12">
        <section className="hero-stage reveal-in overflow-hidden">
          <div className="cover-layout p-6 pb-8 md:p-10 md:pb-10">
            <div className="hero-shell">
            <p className="chapter-eyebrow text-black/70">Founder Review Draft · March 2026</p>
            <div className="mt-4">
              <p className="cover-brand">
                <span className="font-brand text-black">The Great Mystery</span> · Strategy Dossier
              </p>
              <h1 className="hero-title font-display mt-4">
                A philosophy studio
                <br />
                built as a living system
              </h1>
              <p className="mt-5 max-w-[58ch] text-[1.03rem] leading-[1.66] text-black/85 md:text-[1.12rem]">
                Identity, audience growth, apps, products, community, and experiences as one
                compounding brand architecture.
              </p>
            </div>

            <div className="cover-grid mt-8">
              <article className="cover-panel">
                <p className="panel-kicker">Trajectory</p>
                <p className="mt-3 text-[1.02rem] leading-[1.45] text-[var(--color-ink)]">
                  10k → 100k → 1M audience
                </p>
              </article>
              <article className="cover-panel">
                <p className="panel-kicker">Core Sequence</p>
                <p className="mt-3 text-[0.98rem] leading-[1.55] text-[var(--color-ink-soft)]">
                  Audience → App → Community → Products → Experiences
                </p>
              </article>
              <article className="cover-panel">
                <p className="panel-kicker">Revenue Potential</p>
                <p className="mt-3 text-[1.02rem] leading-[1.45] text-[var(--color-ink)]">
                  ~$205k/month at mature stage
                </p>
              </article>
            </div>
            </div>
            <figure className="hero-media">
              <img
                src="https://thegreatmystery.one/bgnobottom.jpg"
                alt="Sailboat visual from The Great Mystery world"
                className="hero-image"
              />
            </figure>
          </div>
        </section>

        <section id="contents" className="brand-surface booklet-grid reveal-in p-6 md:p-9">
          <p className="chapter-eyebrow">Navigation</p>
          <h2 className="section-title mt-2">Contents</h2>
          <p className="mt-3 max-w-[70ch] text-[1.04rem] leading-[1.66] text-[var(--color-ink-soft)] md:text-[1.12rem]">
            Ordered for decision-making: positioning, visual system, growth engine, revenue model,
            and phased execution priorities.
          </p>

          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <a href="#manifesto" className="content-tile"><span>01</span> Manifesto</a>
            <a href="#visual-language" className="content-tile"><span>02</span> Visual Language</a>
            <a href="#audience-engine" className="content-tile"><span>03</span> Audience Engine</a>
            <a href="#format-system" className="content-tile"><span>04</span> Reel Format System</a>
            <a href="#prompt-system" className="content-tile"><span>05</span> Prompt + Production System</a>
            <a href="#studio-blueprint" className="content-tile"><span>06</span> Philosophy Studio Blueprint</a>
            <a href="#business-architecture" className="content-tile"><span>07</span> Business Architecture</a>
            <a href="#revenue-stack" className="content-tile"><span>08</span> Revenue Stack</a>
            <a href="#roadmap" className="content-tile"><span>09</span> Sequenced Roadmap</a>
            <a href="#vision" className="content-tile"><span>10</span> Vision + Founder Edge</a>
          </div>
        </section>

        <section id="manifesto" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 01</p>
          <h2 className="section-title mt-2">Manifesto</h2>

          <div className="mt-8 grid gap-7 lg:grid-cols-[1.24fr_0.76fr]">
            <div className="space-y-5 text-[1.06rem] leading-[1.74] text-[var(--color-ink-soft)] md:text-[1.14rem]">
              <p>
                Existence itself remains a mystery.{" "}
                <span className="brand-wordmark">The Great Mystery</span> treats this not as a
                problem to eliminate, but as the source of meaning, curiosity, and aliveness.
              </p>
              <p>
                Strategic test for this phase: can this positioning attract a broad audience while
                keeping a distinct point of view that feels coherent across media, apps, and
                experiences.
              </p>
              <p>
                The core principle is simple: life is not a puzzle to finish. Life is an experience
                to inhabit fully, with wonder.
              </p>
            </div>
            <aside className="quote-panel">
              <p>
                The strange thing about life is that we are inside the mystery, not outside it.
              </p>
            </aside>
          </div>
        </section>

        <section id="visual-language" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 02</p>
          <h2 className="section-title mt-2">Visual Language</h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            <article className="surface-panel">
              <p className="panel-kicker">Core Aesthetic</p>
              <h3 className="panel-title">Dreamlike realism, warm curiosity, cinematic wonder.</h3>
              <ul className="mt-4 space-y-2 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">
                <li>Terrence Malick atmosphere</li>
                <li>Travel documentary intimacy</li>
                <li>Cosmic imagery with grounded human life</li>
                <li>Warm Mediterranean texture and light</li>
              </ul>
            </article>
            <article className="surface-panel atmosphere-panel">
              <p className="panel-kicker">Mood Rule</p>
              <h3 className="panel-title">A quiet moment of wonder. Never a lecture.</h3>
              <p className="mt-4 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
                Warm, vibrant, life-affirming. Avoid black backgrounds, neon cyberpunk, and dark
                motivational styling.
              </p>
            </article>
          </div>

          <div className="mt-6 surface-panel">
            <p className="panel-kicker">Color Catalogue</p>
            <div className="mt-4 grid gap-3 md:grid-cols-4">
              <div className="palette-card"><span style={{ background: "#F7B500" }} />Golden Sunlight</div>
              <div className="palette-card"><span style={{ background: "#2DBCCB" }} />Turquoise Sea</div>
              <div className="palette-card"><span style={{ background: "#2C5AA0" }} />Deep Blue Sky</div>
              <div className="palette-card"><span style={{ background: "#D69C77" }} />Warm Skin Tones</div>
              <div className="palette-card"><span style={{ background: "#FF8B3E" }} />Orange Sunset</div>
              <div className="palette-card"><span style={{ background: "#6E4AC5" }} />Cosmic Purple</div>
              <div className="palette-card"><span style={{ background: "#1E9B6F" }} />Emerald Green</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <figure className="reference-card">
              <Image src="/editorial/references/malick-style.png" alt="Terrence Malick influence" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Terrence Malick influence</figcaption>
            </figure>
            <figure className="reference-card">
              <Image src="/editorial/references/travel-doc-style.png" alt="Travel documentary influence" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Travel documentary influence</figcaption>
            </figure>
            <figure className="reference-card">
              <Image src="/editorial/references/cosmic-style.png" alt="Cosmic imagery influence" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Cosmic imagery influence</figcaption>
            </figure>
            <figure className="reference-card">
              <Image src="/editorial/references/mediterranean-life-style.png" alt="Warm Mediterranean life influence" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Warm Mediterranean life</figcaption>
            </figure>
            <figure className="reference-card">
              <Image src="/editorial/references/quiet-philosophy-style.png" alt="Quiet philosophical moments" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Quiet philosophical moments</figcaption>
            </figure>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="surface-panel">
              <p className="panel-kicker">Cinematic Grammar</p>
              <p className="mt-2 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
                35mm feel, anamorphic lens character, shallow depth of field, natural light, soft
                film grain, and slow floating camera movement.
              </p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Sound Direction</p>
              <p className="mt-2 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
                Ambient, gentle piano, and soft cinematic beds. Emotional but calm, closer to
                contemplative film than social hype edits.
              </p>
            </article>
          </div>
        </section>

        <section id="audience-engine" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 03</p>
          <h2 className="section-title mt-2">Audience Engine</h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="surface-panel">
              <p className="panel-kicker">Layer 1 Foundation</p>
              <h3 className="panel-title">Audience first. Everything else compounds from this.</h3>
              <p className="mt-4 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
                Revenue is near zero at the beginning, but attention capital is the engine that
                powers every later layer in the business.
              </p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Growth Path</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[1.02rem] md:text-[1.12rem]">
                <span className="path-chip">10k</span>
                <span className="path-arrow">→</span>
                <span className="path-chip">100k</span>
                <span className="path-arrow">→</span>
                <span className="path-chip">1M</span>
              </div>
              <p className="mt-4 text-[0.98rem] leading-[1.58] text-[var(--color-ink-soft)]">
                The lever is repeatable formats plus consistent identity, not random posting.
              </p>
            </article>
          </div>

          <div className="mt-5 surface-panel">
            <p className="panel-kicker">Platforms</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="signal-chip">Instagram</span>
              <span className="signal-chip">YouTube</span>
              <span className="signal-chip">Newsletter</span>
              <span className="signal-chip">Short-form Video</span>
              <span className="signal-chip">Website</span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="surface-panel">
              <p className="panel-kicker">Attraction Pillars</p>
              <ul className="mt-3 space-y-2 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">
                <li>Curiosity about existence</li>
                <li>Philosophical ideas</li>
                <li>Joy of life</li>
                <li>Exploration</li>
                <li>Worldly mystics: Einstein, Jung, Cohen, Bourdain, da Vinci</li>
              </ul>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Content Rhythm</p>
              <ul className="mt-3 space-y-2 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">
                <li>2 reels/day: one philosophy, one joy-of-life</li>
                <li>Every 5 to 7 reels: direct follow invitation</li>
                <li>Target output for 60 days: 120 reels</li>
                <li>Expected profile: 90 normal, 25 good, 5 viral</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="format-system" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 04</p>
          <h2 className="section-title mt-2">Reel Format System</h2>
          <p className="mt-3 max-w-[70ch] text-[1.04rem] leading-[1.66] text-[var(--color-ink-soft)]">
            Core operating rule: use recurring formats so distribution compounds and the account is
            immediately recognizable in-feed.
          </p>

          <div className="mt-7 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            <article className="format-card">
              <Image src="/editorial/references/cosmic-style.png" alt="Worldly Mystics" width={1536} height={1024} className="format-image" />
              <div className="format-body">
                <p className="panel-kicker">Authority + Philosophy</p>
                <h3 className="panel-title">Worldly Mystics</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Hook → existential observation → person reveal → closing insight.</p>
              </div>
            </article>

            <article className="format-card">
              <Image src="/editorial/ocean-light.png" alt="Joy of Being Alive" width={1536} height={1024} className="format-image" />
              <div className="format-body">
                <p className="panel-kicker">Most Viral Emotion</p>
                <h3 className="panel-title">Joy of Being Alive</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Simple statement → joyful micro-moments → reflective close.</p>
              </div>
            </article>

            <article className="format-card">
              <Image src="/editorial/references/quiet-philosophy-style.png" alt="Nobody Talks About This" width={1536} height={1024} className="format-image" />
              <div className="format-body">
                <p className="panel-kicker">Curiosity + Relatability</p>
                <h3 className="panel-title">Nobody Talks About This</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Hook → modern life observation → philosophical reframe.</p>
              </div>
            </article>

            <article className="format-card">
              <Image src="/editorial/references/travel-doc-style.png" alt="Micro Stories" width={1536} height={1024} className="format-image" />
              <div className="format-body">
                <p className="panel-kicker">Narrative Engagement</p>
                <h3 className="panel-title">Micro Stories</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Short story → unexpected turn → philosophical reflection.</p>
              </div>
            </article>

            <article className="format-card">
              <Image src="/editorial/great-mystery-sky.png" alt="Quiet Questions" width={1536} height={1024} className="format-image" />
              <div className="format-body">
                <p className="panel-kicker">Comments + Saves</p>
                <h3 className="panel-title">Quiet Questions</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Simple existential question → minimal frame → pause.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="prompt-system" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 05</p>
          <h2 className="section-title mt-2">Prompt + Production System</h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="surface-panel">
              <p className="panel-kicker">Universal Style Prompt</p>
              <code className="prompt-block mt-3">
                cinematic documentary style, warm natural lighting, golden hour sunlight, shallow
                depth of field, soft film grain, anamorphic lens look, dreamy but realistic,
                vibrant natural colors, sense of wonder and curiosity, terrence malick style
                cinematography, slow gentle camera movement
              </code>
            </article>

            <article className="surface-panel">
              <p className="panel-kicker">Prompt Template</p>
              <ol className="mt-3 space-y-2 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">
                <li>1. Scene description</li>
                <li>2. Visual atmosphere</li>
                <li>3. Camera style</li>
              </ol>
              <p className="mt-4 text-[0.98rem] leading-[1.56] text-[var(--color-ink-soft)]">
                Operational rule: append the universal style prompt to preserve visual consistency
                across formats.
              </p>
            </article>
          </div>

          <div className="mt-5 surface-panel overflow-x-auto">
            <p className="panel-kicker">Weekly Production Matrix</p>
            <table className="editorial-table mt-3 min-w-[640px]">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Reel 1</th>
                  <th>Reel 2</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Mon</td><td>Einstein</td><td>Joy montage</td></tr>
                <tr><td>Tue</td><td>Jung</td><td>Sailing sunset</td></tr>
                <tr><td>Wed</td><td>Bourdain</td><td>Street food</td></tr>
                <tr><td>Thu</td><td>Da Vinci</td><td>Travel moment</td></tr>
                <tr><td>Fri</td><td>Cohen</td><td>Quiet reflection</td></tr>
                <tr><td>Sat</td><td>Question reel</td><td>Animals</td></tr>
                <tr><td>Sun</td><td>Micro story</td><td>Nature</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 surface-panel">
            <p className="panel-kicker">60-Day Output Forecast</p>
            <p className="mt-2 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">120 reels total from a 2 reels/day cadence.</p>
            <div className="mt-4 space-y-3">
              <div>
                <div className="stack-row"><span>Normal reels</span><span>90</span></div>
                <div className="stack-track"><span style={{ width: "75%" }} /></div>
              </div>
              <div>
                <div className="stack-row"><span>Good reels</span><span>25</span></div>
                <div className="stack-track"><span style={{ width: "21%" }} /></div>
              </div>
              <div>
                <div className="stack-row"><span>Viral reels</span><span>5</span></div>
                <div className="stack-track"><span style={{ width: "10%" }} /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="studio-blueprint" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 06</p>
          <h2 className="section-title mt-2">Philosophy Studio Blueprint</h2>

          <article className="surface-panel mt-7">
            <h3 className="panel-title">Do not build isolated products. Build one philosophy studio.</h3>
            <p className="mt-3 max-w-[70ch] text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
              Apps are one expression of the brand. The full model compounds through media,
              products, community, and experiences.
            </p>
          </article>

          <div className="ecosystem-grid mt-5">
            <div className="eco-node eco-center brand-wordmark">The Great Mystery</div>
            <div className="eco-node">Media</div>
            <div className="eco-node">Apps</div>
            <div className="eco-node">Courses</div>
            <div className="eco-node">Community</div>
            <div className="eco-node">Experiences</div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="surface-panel">
              <p className="panel-kicker">Most Creator Paths</p>
              <p className="mt-2 text-[1.05rem] leading-[1.6] text-[var(--color-ink-soft)]">content → sponsorships</p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker brand-wordmark">Great Mystery Advantage</p>
              <p className="mt-2 text-[1.05rem] leading-[1.6] text-[var(--color-ink-soft)]">content → apps → products → experiences</p>
            </article>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <article className="surface-panel">
              <p className="panel-kicker">Layer 1</p>
              <h3 className="panel-title">Audience</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Attention engine.</p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Layer 2</p>
              <h3 className="panel-title">Apps</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Tools for living the mystery.</p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Layer 3</p>
              <h3 className="panel-title">Digital Products</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">High margin learning systems.</p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Layer 4</p>
              <h3 className="panel-title">Membership</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">
                <span className="brand-wordmark">Great Mystery</span> Society.
              </p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Layer 5</p>
              <h3 className="panel-title">Physical Objects</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Lifestyle artifacts.</p>
            </article>
            <article className="surface-panel">
              <p className="panel-kicker">Layer 6</p>
              <h3 className="panel-title">Experiences</h3>
              <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">Retreats, workshops, sailing.</p>
            </article>
          </div>
        </section>

        <section id="business-architecture" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 07</p>
          <h2 className="section-title mt-2">Business Architecture</h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
            <article className="surface-panel overflow-x-auto">
              <p className="panel-kicker">Layer 2 App Portfolio</p>
              <div className="app-chip-row mt-3">
                <div className="app-chip">
                  <img src="https://thegreatmystery.one/onebody.png" alt="One Body app icon" />
                  <span>One Body</span>
                </div>
                <div className="app-chip">
                  <img src="https://thegreatmystery.one/onemind.png" alt="One Mind app icon" />
                  <span>One Mind</span>
                </div>
              </div>
              <table className="editorial-table mt-3 min-w-[480px]">
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
                </tbody>
              </table>
              <p className="mt-4 text-[0.96rem] leading-[1.56] text-[var(--color-ink-soft)]">
                Subscription model: $5 to $10/month. Example baseline: 10,000 users × $6/month =
                $60,000/month or $720,000/year.
              </p>
            </article>

            <div className="space-y-4">
              <article className="surface-panel">
                <p className="panel-kicker">Layer 3 · Digital Products</p>
                <p className="mt-2 text-[0.96rem] text-[var(--color-ink-soft)]">Courses, journaling systems, guided explorations, challenges.</p>
                <p className="stat-pill mt-3">$79 × 5,000 buyers = $395,000</p>
              </article>
              <article className="surface-panel">
                <p className="panel-kicker">Layer 4 · Membership</p>
                <p className="mt-2 text-[0.96rem] text-[var(--color-ink-soft)]">Live salons, philosophy nights, guest speakers, community rituals.</p>
                <p className="stat-pill mt-3">5,000 members × $12 = $60,000/month</p>
              </article>
              <article className="surface-panel">
                <p className="panel-kicker">Layer 5 + 6 · Products + Experiences</p>
                <p className="mt-2 text-[0.96rem] text-[var(--color-ink-soft)]">Objects: journals, posters, decks, kits. Experiences: retreats, sailing trips, gatherings.</p>
                <p className="stat-pill mt-3">$16,000 launch · $40,000 retreat weekend</p>
              </article>
            </div>
          </div>
        </section>

        <section id="revenue-stack" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 08</p>
          <h2 className="section-title mt-2">Revenue Stack (Target Model)</h2>

          <div className="mt-7 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="surface-panel">
              <p className="panel-kicker">Mature Monthly Baseline</p>
              <table className="editorial-table mt-3">
                <thead>
                  <tr><th>Stream</th><th>Monthly</th></tr>
                </thead>
                <tbody>
                  <tr><td>Apps</td><td>$80,000</td></tr>
                  <tr><td>Membership</td><td>$50,000</td></tr>
                  <tr><td>Courses</td><td>$40,000</td></tr>
                  <tr><td>Products</td><td>$20,000</td></tr>
                  <tr><td>Events</td><td>$15,000</td></tr>
                  <tr><td>Total</td><td>$205,000/month</td></tr>
                </tbody>
              </table>
              <p className="mt-4 text-[0.98rem] leading-[1.58] text-[var(--color-ink-soft)]">Annualized baseline: approximately $2.46M/year.</p>
            </article>

            <article className="surface-panel">
              <p className="panel-kicker">Investment Logic</p>
              <h3 className="panel-title">A compounding ecosystem, not a single revenue bet.</h3>
              <p className="mt-3 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
                This stack is credible because each layer strengthens the others: audience fuels app
                adoption, apps deepen trust, trust enables community and products, and all of it
                raises demand for high-impact experiences.
              </p>
              <div className="mt-4 rounded-[12px] border border-[var(--color-line)] bg-[#fff8ec] p-4">
                <p className="text-[0.95rem] leading-[1.56] text-[var(--color-ink-soft)]">
                  Biggest risk: building too many layers at once.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="roadmap" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 09</p>
          <h2 className="section-title mt-2">Sequenced Roadmap</h2>

          <ol className="journey-track mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <li className="journey-card">
              <p className="panel-kicker">Phase 1</p>
              <h3 className="panel-title">Audience</h3>
              <p>Build recognizable formats and lock visual identity.</p>
            </li>
            <li className="journey-card">
              <p className="panel-kicker">Phase 2</p>
              <h3 className="panel-title">One Successful App</h3>
              <p>Validate a profitable app with clear product-market fit.</p>
            </li>
            <li className="journey-card">
              <p className="panel-kicker">Phase 3</p>
              <h3 className="panel-title">Community</h3>
              <p>Launch membership rituals, salons, and ongoing discussion spaces.</p>
            </li>
            <li className="journey-card">
              <p className="panel-kicker">Phase 4</p>
              <h3 className="panel-title">Products</h3>
              <p>Expand into digital and physical products with strong margin.</p>
            </li>
            <li className="journey-card">
              <p className="panel-kicker">Phase 5</p>
              <h3 className="panel-title">Experiences</h3>
              <p>Scale retreats, workshops, and travel-led gatherings.</p>
            </li>
          </ol>

          <div className="mt-6 surface-panel">
            <p className="panel-kicker">First Milestone</p>
            <h3 className="panel-title">10,000 followers + one profitable app</h3>
            <p className="mt-3 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
              Once this threshold exists, community, products, and experiences become much easier to
              scale.
            </p>
          </div>
        </section>

        <section id="vision" className="brand-surface reveal-in p-6 md:p-10">
          <p className="chapter-eyebrow">Chapter 10</p>
          <h2 className="section-title mt-2">Vision + Founder Edge</h2>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-panel">
              <h3 className="panel-title">Build a global philosophy lifestyle brand.</h3>
              <p className="mt-4 text-[1rem] leading-[1.64] text-[var(--color-ink-soft)]">
                The long-term aim is to create media, tools, products, and experiences that help
                people feel more curious, more alive, and more connected to existence.
              </p>
              <p className="mt-4 text-[1rem] leading-[1.64] text-[var(--color-ink-soft)]">
                Core founder advantage is rare: engineering ability, philosophical instinct,
                storytelling sensitivity, and an exploration-centered lifestyle.
              </p>
            </article>
            <figure className="reference-card">
              <Image src="/editorial/great-mystery-sky.png" alt="Open sky representing expansive brand vision" width={1536} height={1024} className="h-auto w-full" />
              <figcaption>Human life inside a vast mysterious universe.</figcaption>
            </figure>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.13em] text-[var(--color-ink-soft)]">
            <a href="#top" className="underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 hover:text-[var(--color-ink)]">Back to top</a>
          </p>
        </section>
      </main>

      <footer className="mx-auto w-full px-4 pb-10 md:px-8">
        <p className="border-t border-[var(--color-line)] pt-6 text-[0.72rem] uppercase tracking-[0.12em] text-[var(--color-ink-soft)]">
          <span className="brand-wordmark">The Great Mystery</span> · Founder, Advisor, and
          Investor Review Document
        </p>
      </footer>
    </div>
  );
}
