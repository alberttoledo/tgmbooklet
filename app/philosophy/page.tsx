import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Philosophy Booklet — The Great Mystery",
  description: "What The Great Mystery is, why it exists, who it is for, and how the company grows."
};

function ChapterHead({ num, title }: { num: string; title: string }) {
  return (
    <header className="section-head">
      <span className="chapter-num">{num}</span>
      <h2 className="t-chapter mt-1">{title}</h2>
    </header>
  );
}

function PullQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <blockquote className="pull-quote">
      <p>{children}</p>
      {author && <cite className="mt-3 block text-[1rem] font-normal not-italic text-[var(--ink-60)]">— {author}</cite>}
    </blockquote>
  );
}

export default function PhilosophyPage() {
  return (
    <div className="bg-[var(--paper)]">
      {/* Navigation */}
      <nav className="site-nav print:hidden" aria-label="Document navigation">
        <div className="page-w flex h-14 items-center justify-between">
          <Link href="/" className="nav-link">← Back</Link>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#opening" className="nav-link">Opening</a>
            <a href="#way" className="nav-link">Way of Being</a>
            <a href="#missing" className="nav-link">Audience</a>
            <a href="#company" className="nav-link">Company</a>
            <a href="#principles" className="nav-link">Principles</a>
          </div>
        </div>
      </nav>

      <main id="top">
        {/* Hero */}
        <section className="hero page-w">
          <div className="wide-w text-center">
            <p className="t-label">Company Booklet · 2026</p>
            <h1 className="t-hero mt-5 mx-auto max-w-[16ch]">The Great Mystery</h1>
            <p className="t-lead mt-6 mx-auto max-w-[40ch]">
              Everything is a mystery. Everyone is a mystic.
            </p>
          </div>
        </section>

        {/* Contents */}
        <section className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <div className="toc-section">
                <p className="t-label">Contents</p>
                <ol className="toc-list mt-6">
                  <li><a href="#opening"><span className="toc-num">00</span><span className="toc-title">What Is All This?</span></a></li>
                  <li><a href="#way"><span className="toc-num">01</span><span className="toc-title">A Different Way of Being Here</span></a></li>
                  <li><a href="#missing"><span className="toc-num">02</span><span className="toc-title">Something Is Missing</span></a></li>
                  <li><a href="#obstacle"><span className="toc-num">03</span><span className="toc-title">What Gets in the Way</span></a></li>
                  <li><a href="#company"><span className="toc-num">04</span><span className="toc-title">A Company Built Around a Way of Living</span></a></li>
                  <li><a href="#principles"><span className="toc-num">05</span><span className="toc-title">Principles</span></a></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── Opening ── */}
        <section id="opening" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="00" title="What Is All This?" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                You are conscious. You experience the world. You feel pleasure and pain, wonder and
                grief, the pull of beauty and the weight of loss. You are alive, and you have no idea
                what that truly means.
              </p>
              <p className="t-body">
                Neither does anyone else.
              </p>
              <p className="t-body">
                We have mapped the genome, split the atom, sent machines to the edges of the solar
                system. And still the most fundamental question has no answer.
              </p>
            </div>

            <PullQuote>What is all this?</PullQuote>

            <div className="content-w space-y-6">
              <p className="t-body">
                Every answer opens into a larger question. Every discovery widens the horizon. This
                is not a failure — it is the nature of existence.
              </p>
              <p className="t-body">
                The Great Mystery is a company built on one premise: reality is fundamentally
                mysterious, and this is not a problem to be solved. It is a condition to be experienced.
              </p>
              <p className="t-body">
                Most of modern life is organized around ignoring that fact. We exist to remind people
                of it, and to build things that help them live well inside it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chapter One ── */}
        <section id="way" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="01" title="A Different Way of Being Here" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                There is a way of moving through the world that most people catch only in glimpses.
                On a long trip somewhere unfamiliar. In the middle of a project that fully absorbs
                them. In a conversation that goes somewhere unexpected. In a moment of stillness when
                the ordinary suddenly looks strange and beautiful.
              </p>
              <p className="t-body">
                It is the feeling of being fully present to existence. Curious about what is around
                the next corner. Alive to the texture and strangeness of the world. Finding meaning
                not just in the big moments but in the quality of attention brought to ordinary ones.
              </p>
              <p className="t-body">
                This is not a personality type or a philosophy. It is a mode of living. And it has
                three qualities that tend to appear together.
              </p>
            </div>

            <div className="wide-w mt-14">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="card card-warm">
                  <h3 className="t-sub">Curious Exploration</h3>
                  <p className="t-body mt-3">
                    An openness to the world across subjects, places, disciplines, and experiences.
                    The refusal to stop at one answer or one domain. The understanding that the
                    world is far larger and stranger than any single lens can capture, and that this
                    is a reason for delight, not anxiety.
                  </p>
                </div>
                <div className="card card-warm">
                  <h3 className="t-sub">Wonder</h3>
                  <p className="t-body mt-3">
                    The capacity to find the extraordinary inside the ordinary. A cup of coffee in
                    the morning light. A city seen for the first time. A conversation that shifts
                    something. Wonder is not naivety — it is a practiced attentiveness, the decision
                    to keep looking rather than assume you have already seen.
                  </p>
                </div>
                <div className="card card-warm">
                  <h3 className="t-sub">Creative Expression</h3>
                  <p className="t-body mt-3">
                    The impulse to respond to the world rather than just consume it. To make
                    something, however small, that reflects how you see things. Creativity in this
                    sense is not about talent. It is about staying in active relationship with your
                    own experience rather than drifting through it.
                  </p>
                </div>
              </div>
            </div>

            <div className="content-w mt-10 space-y-6">
              <p className="t-body">
                These three qualities reinforce each other. Curiosity feeds wonder. Wonder demands
                expression. Expression deepens curiosity. Together they describe a life that feels
                lived rather than managed.
              </p>
              <p className="t-body">
                This is the life The Great Mystery is organized around. Everything we build is an
                attempt to help people live closer to it.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chapter Two ── */}
        <section id="missing" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="02" title="Something Is Missing" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                Our audience is not defined by age or profession. It is defined by a feeling.
              </p>
              <p className="t-body">
                They are people who have always had too many interests to fit neatly into one
                identity. Who read across subjects, travel when they can, care about ideas and also
                about food, music, design, nature, sport, conversation. Who feel most alive when
                they are learning something new or standing somewhere unfamiliar.
              </p>
              <p className="t-body">
                And yet most of the world asks them to pick one thing. To specialize. To optimize.
                To build a career with a clear lane and stay in it. The gap between who they are and
                how modern life asks them to live creates a tension they carry quietly, often without
                being able to name it.
              </p>
              <p className="t-body">
                They are not unhappy exactly. But something is missing. A depth of experience. A
                sense that life could be lived more fully, more curiously, more intentionally. That
                the world is larger and stranger than their daily routine suggests.
              </p>
            </div>

            <PullQuote>Something is missing. They just can&apos;t name it yet.</PullQuote>

            <div className="content-w space-y-6">
              <p className="t-body">
                This is the person The Great Mystery exists for. Not to give them answers, but to
                give language to what they already feel, and to build things that help them live
                closer to who they actually are.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chapter Three ── */}
        <section id="obstacle" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="03" title="What Gets in the Way" />
            </div>
            <div className="content-w space-y-6">
              <p className="t-body">
                The obstacle is not laziness or lack of desire. It is the structure of modern life
                itself.
              </p>
              <p className="t-body">
                Modern culture has replaced the experience of life with the management of life. Time
                is optimized. Attention is monetized. Productivity has become a moral category — the
                measure by which a person is judged to have been worthwhile. In this environment,
                wonder is inefficient. Curiosity without a destination is a distraction. The vast,
                strange, beautiful fact of being alive is reduced to a scheduling problem.
              </p>
              <p className="t-body">
                The self-improvement industry offers solutions, but mostly the wrong ones. It treats
                pleasure as something you earn after becoming better. It fragments the person into
                separate problems to be optimized — a body to be trained, a mind to be focused, a
                sleep schedule to be fixed — rather than addressing the whole human being underneath.
              </p>
              <p className="t-body">
                The mystery was never solved. It was only ignored. And the cost is a life that feels
                thin, even when it looks full from the outside.
              </p>
            </div>

            <PullQuote author="Albert Einstein">
              The most beautiful thing we can experience is the mysterious. It is the source of all
              true art and science.
            </PullQuote>
          </div>
        </section>

        {/* ── Chapter Four ── */}
        <section id="company" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="04" title="A Company Built Around a Way of Living" />
            </div>
            <div className="content-w">
              <p className="t-lead">
                The Great Mystery is a cultural company organized around a single idea, expressed
                through whatever form best serves the people it is trying to reach. The company
                grows in stages, each one deepening the relationship with the audience and making
                the next possible.
              </p>
            </div>

            <div className="wide-w mt-14">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Audience",
                    text: "It begins with attention. Through video, writing and social content we build an audience of people who feel the pull of these ideas. A large and trusting audience is the foundation everything else is built on."
                  },
                  {
                    title: "Apps",
                    text: "With an audience comes the ability to build tools. Apps that help people strengthen the body, clarify the mind and deepen the soul. Not productivity systems — instruments for living with more intention."
                  },
                  {
                    title: "Books",
                    text: "The company publishes books. Not necessarily heavy or philosophical. Books can be light, visual, joyful, artistic. Something that lives on a shelf, gets given to a friend, and stays with a person."
                  },
                  {
                    title: "Film",
                    text: "Documentary and cinematic work that brings the visual world of The Great Mystery to life. People, places and stories that embody this way of living."
                  },
                  {
                    title: "Physical Products",
                    text: "Objects designed with care that carry the philosophy into everyday life. Things that slow a moment down, prompt reflection, or simply add beauty to the ordinary."
                  },
                  {
                    title: "Experiences",
                    text: "Retreats, travel gatherings, philosophy salons. Where the ideas become lived experience shared with others. Small, intentional, designed to matter."
                  }
                ].map((item) => (
                  <div key={item.title} className="card card-warm">
                    <h3 className="t-sub">{item.title}</h3>
                    <p className="t-body mt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="content-w mt-10">
              <p className="t-body">
                Each stage builds on the last. The company grows by going deeper, not just wider.
              </p>
            </div>
          </div>
        </section>

        {/* ── Chapter Five ── */}
        <section id="principles" className="doc-section">
          <div className="page-w">
            <div className="wide-w">
              <ChapterHead num="05" title="Principles" />
            </div>

            <div className="wide-w mt-4">
              <div className="space-y-5">
                {[
                  { num: "I", title: "Stay curious.", note: "Especially about the things that seem settled." },
                  { num: "II", title: "Seek beauty.", note: "It tells you something is worth slowing down for." },
                  { num: "III", title: "Seek truth.", note: "Over comfort. Over agreement." },
                  { num: "IV", title: "Enjoy life without apology.", note: "The pleasure of being alive is the point." },
                  { num: "V", title: "Embrace uncertainty.", note: "The open question is an invitation, not a problem." },
                  { num: "VI", title: "Create more than you consume.", note: "It is how you stay yourself." },
                  { num: "VII", title: "Pay attention.", note: "The mystery is always here. The only question is whether you are looking." }
                ].map((p) => (
                  <div key={p.num} className="card card-warm flex items-baseline gap-5">
                    <span className="t-caption min-w-[2rem] text-right">{p.num}</span>
                    <div>
                      <p className="t-sub">{p.title}</p>
                      <p className="t-body mt-1">{p.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="doc-section">
          <div className="page-w">
            <div className="content-w text-center space-y-3">
              <p className="t-body">We are here for a brief moment.</p>
              <p className="t-body">The goal is not to solve existence.</p>
              <p className="t-body">The goal is to explore it.</p>
              <p className="t-brand mt-8 text-[1.4rem]">The Great Mystery</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="doc-footer page-w">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="t-caption">The Great Mystery · Company Booklet · 2026</p>
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
