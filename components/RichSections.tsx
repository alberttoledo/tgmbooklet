import Image from "next/image";
import type { SectionBlock } from "@/data/sections";

type RoadmapItem = {
  phase: string;
  description: string;
};

function extractRoadmapItems(blocks: SectionBlock[]): RoadmapItem[] {
  const items: RoadmapItem[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];
    if (block.type !== "subheading") {
      continue;
    }

    const nextBlock = blocks[index + 1];
    if (nextBlock?.type === "paragraph") {
      items.push({ phase: block.text, description: nextBlock.text });
      index += 1;
    }
  }

  return items;
}

export function RoadmapTimeline({ blocks }: { blocks: SectionBlock[] }) {
  const items = extractRoadmapItems(blocks);

  if (items.length === 0) {
    return null;
  }

  return (
    <ol className="grid gap-5 md:grid-cols-2 xl:grid-cols-5 xl:gap-4">
      {items.map((item, index) => (
        <li key={`${item.phase}-${index}`} className="relative rounded-[14px] border border-[var(--color-line)] bg-[#f6f0e2] p-5 md:p-6">
          {index < items.length - 1 ? (
            <span aria-hidden className="pointer-events-none absolute right-[-20px] top-[46px] hidden h-[2px] w-[40px] bg-[var(--color-accent)]/50 xl:block" />
          ) : null}
          <span className="font-label text-[0.64rem] uppercase tracking-[0.13em] text-[var(--color-ink-soft)]">Milestone {index + 1}</span>
          <h3 className="font-heading mt-3 text-[1.75rem] leading-[1.05] text-[var(--color-ink)]">{item.phase}</h3>
          <p className="mt-3 text-[1.03rem] leading-[1.65] text-[var(--color-ink-soft)]">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

const primaryPalette = [
  { name: "Golden Sunlight", value: "#F7B500" },
  { name: "Turquoise Sea", value: "#2DBCCB" },
  { name: "Deep Blue Sky", value: "#2C5AA0" },
  { name: "Warm Skin Tones", value: "#D69C77" }
];

const accentPalette = [
  { name: "Orange Sunset", value: "#FF8B3E" },
  { name: "Cosmic Purple", value: "#6E4AC5" },
  { name: "Emerald Green", value: "#1E9B6F" }
];

const influenceBoard = [
  {
    title: "Terrence Malick Influence",
    caption: "Poetic natural light, wind, and contemplative pace.",
    src: "/editorial/references/malick-style.png"
  },
  {
    title: "Travel Documentary",
    caption: "Grounded movement, human detail, real places.",
    src: "/editorial/references/travel-doc-style.png"
  },
  {
    title: "Cosmic Imagery",
    caption: "Vastness and mystery without sci-fi noise.",
    src: "/editorial/references/cosmic-style.png"
  },
  {
    title: "Warm Mediterranean Life",
    caption: "Texture of everyday beauty and sunlight.",
    src: "/editorial/references/mediterranean-life-style.png"
  },
  {
    title: "Quiet Philosophical Moments",
    caption: "Stillness, horizon, and reflective presence.",
    src: "/editorial/references/quiet-philosophy-style.png"
  }
];

export function VisualLanguageShowcase() {
  return (
    <div className="space-y-10">
      <div className="rounded-[16px] border border-[var(--color-line)] bg-[linear-gradient(140deg,#fff8ed_10%,#f8f1e3_100%)] p-6 md:p-8">
        <p className="font-heading text-[1.45rem] leading-[1.1] text-[var(--color-ink)] md:text-[2.2rem]">
          A philosopher traveling the world and noticing small beautiful mysteries.
        </p>
        <p className="mt-4 max-w-[64ch] text-[1.05rem] leading-[1.66] text-[var(--color-ink-soft)]">
          Dreamlike realism, warm curiosity, cinematic wonder. Slightly mystical, always grounded in lived human moments.
        </p>
      </div>

      <section className="space-y-5">
        <h3 className="font-heading text-[1.55rem] leading-[1.08] md:text-[2rem]">Color Catalogue</h3>
        <div className="grid gap-4 md:grid-cols-4">
          {primaryPalette.map((color) => (
            <div key={color.name} className="rounded-[12px] border border-[var(--color-line)] bg-[#f8f2e6] p-3">
              <div className="h-20 rounded-md border border-black/5" style={{ backgroundColor: color.value }} />
              <p className="mt-3 text-sm font-medium">{color.name}</p>
              <p className="font-label mt-1 text-[0.67rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">{color.value}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {accentPalette.map((color) => (
            <div key={color.name} className="rounded-[12px] border border-[var(--color-line)] bg-[#f8f2e6] p-3">
              <div className="h-20 rounded-md border border-black/5" style={{ backgroundColor: color.value }} />
              <p className="mt-3 text-sm font-medium">{color.name}</p>
              <p className="font-label mt-1 text-[0.67rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">{color.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h3 className="font-heading text-[1.55rem] leading-[1.08] md:text-[2rem]">Visual Influence Board</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {influenceBoard.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[#f5ede0]">
              <Image src={item.src} alt={item.title} width={1536} height={1024} className="h-auto w-full" />
              <div className="p-4">
                <h4 className="font-heading text-[1.25rem] leading-[1.1] md:text-[1.45rem]">{item.title}</h4>
                <p className="mt-2 text-[0.98rem] leading-[1.58] text-[var(--color-ink-soft)]">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const formatCards = [
  {
    name: "Worldly Mystics",
    role: "Authority + philosophy",
    structure: ["Hook", "Existential observation", "Reveal the person", "Closing insight"],
    image: "/editorial/references/cosmic-style.png"
  },
  {
    name: "Joy of Being Alive",
    role: "Viral positivity",
    structure: ["Simple statement", "Joyful micro-moments", "Reflective close"],
    image: "/editorial/ocean-light.png"
  },
  {
    name: "Nobody Talks About This",
    role: "Curiosity + relatability",
    structure: ["Hook", "Modern-life observation", "Meaningful reframe"],
    image: "/editorial/references/quiet-philosophy-style.png"
  },
  {
    name: "Micro Stories",
    role: "Narrative engagement",
    structure: ["Short story", "Unexpected turn", "Philosophical reflection"],
    image: "/editorial/references/travel-doc-style.png"
  },
  {
    name: "Quiet Questions",
    role: "Comments + saves",
    structure: ["Simple question", "Minimal visual frame", "Pause"],
    image: "/editorial/great-mystery-sky.png"
  }
];

export function ReelFormatsCatalog() {
  return (
    <div className="space-y-8">
      <div className="rounded-[16px] border border-[var(--color-line)] bg-[#faf3e7] p-6 md:p-8">
        <p className="text-[1.05rem] leading-[1.66] text-[var(--color-ink-soft)]">
          Repeatable format architecture is the growth engine. Viewers should instantly recognize what kind of Great Mystery reel they are seeing.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {formatCards.map((card) => (
          <article key={card.name} className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[#f8f0e2]">
            <Image src={card.image} alt={`${card.name} style example`} width={1536} height={1024} className="h-auto w-full" />
            <div className="p-4 md:p-5">
              <p className="font-label text-[0.65rem] uppercase tracking-[0.11em] text-[var(--color-ink-soft)]">{card.role}</p>
              <h3 className="font-heading mt-2 text-[1.45rem] leading-[1.05] md:text-[1.8rem]">{card.name}</h3>
              <ul className="mt-3 space-y-2 text-[0.98rem] leading-[1.55] text-[var(--color-ink-soft)]">
                {card.structure.map((step) => (
                  <li key={step} className="relative pl-6 before:absolute before:left-0 before:top-[0.58em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[var(--color-accent)] before:content-['']">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const universalPrompt =
  "cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors, sense of wonder and curiosity, terrence malick style cinematography, slow gentle camera movement";

export function PromptSystemBoard() {
  return (
    <div className="space-y-8">
      <div className="rounded-[16px] border border-[var(--color-line)] bg-[#f7efe2] p-5 md:p-6">
        <p className="font-label text-[0.66rem] uppercase tracking-[0.11em] text-[var(--color-ink-soft)]">Universal Style Suffix</p>
        <code className="mt-3 block whitespace-pre-wrap rounded-md bg-[#fff8eb] p-4 text-[0.88rem] leading-[1.55] text-[var(--color-ink-soft)]">
          {universalPrompt}
        </code>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {["Scene Description", "Visual Atmosphere", "Camera Style"].map((item, index) => (
          <div key={item} className="rounded-[12px] border border-[var(--color-line)] bg-[#f8f1e4] p-4">
            <p className="font-label text-[0.64rem] uppercase tracking-[0.11em] text-[var(--color-ink-soft)]">Step {index + 1}</p>
            <p className="font-heading mt-2 text-[1.3rem] leading-[1.07]">{item}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
          <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Template Example - Scene</p>
          <p className="mt-2 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">
            A man sitting on a small sailboat at sunset in the Mediterranean, calm turquoise water, golden sun reflecting on the sea, peaceful atmosphere of quiet reflection.
          </p>
        </article>
        <article className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
          <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Template Example - Style Suffix</p>
          <p className="mt-2 text-[0.96rem] leading-[1.6] text-[var(--color-ink-soft)]">
            cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors.
          </p>
        </article>
      </div>
    </div>
  );
}

const audiencePlatforms = [
  "Instagram",
  "YouTube",
  "Newsletter",
  "Short-form video",
  "Website"
];

const audienceAttractors = [
  "curiosity about existence",
  "philosophical ideas",
  "joy of life",
  "exploration",
  "worldly mystics"
];

export function AudienceEngineBoard() {
  return (
    <div className="space-y-6">
      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <p className="font-label text-[0.65rem] uppercase tracking-[0.11em] text-[var(--color-ink-soft)]">Layer 1 Foundation</p>
        <h3 className="font-heading mt-2 text-[1.45rem] leading-[1.08] md:text-[2rem]">Audience Engine</h3>
        <p className="mt-3 text-[1rem] leading-[1.62] text-[var(--color-ink-soft)]">
          Revenue is low at this stage, but attention capital compounds and powers every future layer.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[14px] border border-[var(--color-line)] bg-[#faf4e8] p-4">
          <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Platforms</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {audiencePlatforms.map((platform) => (
              <span key={platform} className="rounded-full border border-[var(--color-line)] bg-[#fff8ec] px-3 py-1 text-[0.87rem]">
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[14px] border border-[var(--color-line)] bg-[#faf4e8] p-4">
          <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Growth Goal</p>
          <div className="mt-3 flex items-center gap-2 text-[0.95rem] md:text-[1.02rem]">
            <span className="rounded-md bg-[#fff8ec] px-2 py-1 font-medium">10k</span>
            <span className="text-[var(--color-ink-soft)]">-&gt;</span>
            <span className="rounded-md bg-[#fff8ec] px-2 py-1 font-medium">100k</span>
            <span className="text-[var(--color-ink-soft)]">-&gt;</span>
            <span className="rounded-md bg-[#fff8ec] px-2 py-1 font-medium">1M</span>
          </div>
          <p className="mt-4 text-[0.95rem] leading-[1.55] text-[var(--color-ink-soft)]">Recognizable formats and consistent visual identity drive this curve.</p>
        </div>
      </section>

      <section className="rounded-[14px] border border-[var(--color-line)] bg-[#faf4e8] p-4">
        <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Attraction Pillars</p>
        <ul className="mt-3 grid gap-2 text-[0.97rem] leading-[1.55] text-[var(--color-ink-soft)] md:grid-cols-2">
          {audienceAttractors.map((item) => (
            <li key={item} className="relative pl-6 before:absolute before:left-0 before:top-[0.58em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-[var(--color-accent)] before:content-['']">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const blueprintLayers = [
  { layer: "Layer 1", title: "Audience", detail: "Attention engine across media channels." },
  { layer: "Layer 2", title: "Apps", detail: "Tools for living the mystery." },
  { layer: "Layer 3", title: "Digital Products", detail: "High-margin education and systems." },
  { layer: "Layer 4", title: "Membership", detail: "Great Mystery Society community." },
  { layer: "Layer 5", title: "Physical Objects", detail: "Lifestyle products and artifacts." },
  { layer: "Layer 6", title: "Experiences", detail: "Retreats, sailing, gatherings." }
];

export function StudioBlueprintBoard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <p className="font-heading text-[1.35rem] leading-[1.08] md:text-[1.9rem]">Build a philosophy studio, not a collection of disconnected products.</p>
        <p className="mt-3 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">
          Strategic frame: apps are one expression. The full system compounds through media, products, community, and experiences.
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-2">
        {blueprintLayers.map((item) => (
          <article key={item.layer} className="rounded-[12px] border border-[var(--color-line)] bg-[#faf3e6] p-4">
            <p className="font-label text-[0.62rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">{item.layer}</p>
            <h3 className="font-heading mt-2 text-[1.35rem] leading-[1.06]">{item.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-[1.55] text-[var(--color-ink-soft)]">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
          <p className="font-label text-[0.63rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Most Creator Paths</p>
          <p className="mt-3 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">content -&gt; sponsorships</p>
        </article>
        <article className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
          <p className="font-label text-[0.63rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">Great Mystery Path</p>
          <p className="mt-3 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">content -&gt; apps -&gt; products -&gt; experiences</p>
        </article>
      </section>
    </div>
  );
}

const appRows = [
  { app: "One Body", role: "physical wellbeing" },
  { app: "One Mind", role: "mental clarity" },
  { app: "One Soul", role: "spiritual reflection" },
  { app: "Dream app", role: "subconscious exploration" },
  { app: "Field Guide", role: "curiosity about the world" }
];

const monetizationLayers = [
  {
    title: "Layer 3 - Digital Products",
    detail: "Courses, journaling systems, guided explorations, challenges, workshops.",
    metric: "$79 x 5,000 buyers = $395,000",
    note: "Typical high-margin products (90%+)."
  },
  {
    title: "Layer 4 - Membership",
    detail: "Live salons, philosophy nights, guest speakers, community space.",
    metric: "5,000 members x $12 = $60,000/month",
    note: "Recurring and relationship-driven."
  },
  {
    title: "Layer 5 - Physical Objects",
    detail: "Journals, posters, card decks, exploration kits, clothing.",
    metric: "20,000 followers x 2% x $40 = $16,000 launch",
    note: "Lifestyle signal and brand artifacts."
  },
  {
    title: "Layer 6 - Experiences",
    detail: "Retreats, sailing trips, workshops, philosophy gatherings.",
    metric: "$2,000 retreat x 20 people = $40,000 weekend",
    note: "Highest impact and premium positioning."
  }
];

export function BusinessModelBlueprintBoard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <h3 className="font-heading text-[1.4rem] leading-[1.08] md:text-[1.95rem]">Layer 2 Advantage: Apps</h3>
        <p className="mt-3 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">You have engineering leverage most creators do not. Subscription range: $5 to $10/month.</p>
        <p className="mt-2 text-[0.96rem] leading-[1.58] text-[var(--color-ink-soft)]">Example baseline: 10,000 users x $6/month = $60,000/month ($720,000/year).</p>
        <div className="mt-4 overflow-hidden rounded-[10px] border border-[var(--color-line)]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#efe6d4]">
              <tr>
                <th className="px-3 py-2 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">App</th>
                <th className="px-3 py-2 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Role</th>
              </tr>
            </thead>
            <tbody className="bg-[#fcf6ea] text-[0.95rem]">
              {appRows.map((row) => (
                <tr key={row.app} className="border-t border-[var(--color-line)]">
                  <td className="px-3 py-2 font-medium">{row.app}</td>
                  <td className="px-3 py-2 text-[var(--color-ink-soft)]">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {monetizationLayers.map((item) => (
          <article key={item.title} className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
            <h4 className="font-heading text-[1.2rem] leading-[1.08]">{item.title}</h4>
            <p className="mt-2 text-[0.96rem] leading-[1.58] text-[var(--color-ink-soft)]">{item.detail}</p>
            <p className="mt-3 rounded-md bg-[#fff8ec] px-3 py-2 text-[0.93rem] font-medium">{item.metric}</p>
            <p className="mt-2 text-[0.85rem] leading-[1.5] text-[var(--color-ink-soft)]">{item.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

const revenueRows = [
  { stream: "Apps", monthly: 80000 },
  { stream: "Membership", monthly: 50000 },
  { stream: "Courses", monthly: 40000 },
  { stream: "Products", monthly: 20000 },
  { stream: "Events", monthly: 15000 }
];

const monthlyTotal = revenueRows.reduce((sum, item) => sum + item.monthly, 0);

export function RevenueStackBoard() {
  return (
    <div className="space-y-6">
      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <h3 className="font-heading text-[1.4rem] leading-[1.08] md:text-[1.95rem]">Mature Revenue Stack</h3>
        <p className="mt-2 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">Illustrative scenario of a fully layered Great Mystery studio.</p>
      </section>

      <section className="overflow-hidden rounded-[12px] border border-[var(--color-line)]">
        <table className="w-full border-collapse text-left">
          <thead className="bg-[#efe6d4]">
            <tr>
              <th className="px-3 py-2 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Stream</th>
              <th className="px-3 py-2 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Monthly</th>
            </tr>
          </thead>
          <tbody className="bg-[#fcf6ea] text-[0.96rem]">
            {revenueRows.map((row) => (
              <tr key={row.stream} className="border-t border-[var(--color-line)]">
                <td className="px-3 py-2 font-medium">{row.stream}</td>
                <td className="px-3 py-2 text-[var(--color-ink-soft)]">${row.monthly.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="border-t border-[var(--color-line)] bg-[#f7ebd6]">
              <td className="px-3 py-2 font-semibold">Total</td>
              <td className="px-3 py-2 font-semibold">${monthlyTotal.toLocaleString()} / month</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="rounded-[12px] border border-[var(--color-line)] bg-[#f9f2e5] p-4">
        <p className="text-[0.95rem] leading-[1.58] text-[var(--color-ink-soft)]">
          Annualized baseline: approximately ${(monthlyTotal * 12).toLocaleString()} per year.
        </p>
      </section>
    </div>
  );
}

const weeklyPlan = [
  { day: "Mon", reel1: "Einstein", reel2: "Joy montage" },
  { day: "Tue", reel1: "Jung", reel2: "Sailing sunset" },
  { day: "Wed", reel1: "Bourdain", reel2: "Street food" },
  { day: "Thu", reel1: "Da Vinci", reel2: "Travel moment" },
  { day: "Fri", reel1: "Cohen", reel2: "Quiet reflection" },
  { day: "Sat", reel1: "Question reel", reel2: "Animals" },
  { day: "Sun", reel1: "Micro story", reel2: "Nature" }
];

const outputBars = [
  { label: "Normal reels", count: 90, width: "75%" },
  { label: "Good reels", count: 25, width: "21%" },
  { label: "Viral reels", count: 5, width: "10%" }
];

export function GrowthPlannerBoard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <p className="font-heading text-[1.35rem] leading-[1.08] md:text-[1.8rem]">Growth Timeline: 500 to 100k</p>
        <ol className="mt-4 space-y-3 text-[1rem] leading-[1.58] text-[var(--color-ink-soft)]">
          <li className="rounded-md border border-[var(--color-line)] bg-[#fff8ec] p-3">Month 1: establish recognizable format cadence and visual identity lock.</li>
          <li className="rounded-md border border-[var(--color-line)] bg-[#fff8ec] p-3">Month 2: volume and repetition push distribution; early winners emerge.</li>
          <li className="rounded-md border border-[var(--color-line)] bg-[#fff8ec] p-3">Compounding phase: a few breakout reels drive disproportionate follow growth.</li>
        </ol>
      </section>

      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#faf3e6] p-5 md:p-6">
        <h3 className="font-heading text-[1.35rem] leading-[1.08] md:text-[1.8rem]">Weekly Production Matrix</h3>
        <div className="mt-4 overflow-hidden rounded-[10px] border border-[var(--color-line)]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-[#efe6d4]">
              <tr>
                <th className="px-3 py-2 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Day</th>
                <th className="px-3 py-2 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Reel 1</th>
                <th className="px-3 py-2 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">Reel 2</th>
              </tr>
            </thead>
            <tbody className="bg-[#fcf6ea] text-[0.95rem] md:text-[1rem]">
              {weeklyPlan.map((row) => (
                <tr key={row.day} className="border-t border-[var(--color-line)]">
                  <td className="px-3 py-2 font-medium">{row.day}</td>
                  <td className="px-3 py-2 text-[var(--color-ink-soft)]">{row.reel1}</td>
                  <td className="px-3 py-2 text-[var(--color-ink-soft)]">{row.reel2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f9f2e5] p-5 md:p-6">
        <h3 className="font-heading text-[1.35rem] leading-[1.08] md:text-[1.8rem]">60-Day Output Forecast</h3>
        <p className="mt-2 text-[1rem] leading-[1.6] text-[var(--color-ink-soft)]">2 reels/day x 60 days = 120 reels</p>
        <div className="mt-4 space-y-3">
          {outputBars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-1 flex items-center justify-between text-[0.9rem] text-[var(--color-ink-soft)]">
                <span>{bar.label}</span>
                <span>{bar.count}</span>
              </div>
              <div className="h-2 rounded-full bg-[#efe5d1]">
                <div className="h-2 rounded-full bg-[var(--color-accent)]" style={{ width: bar.width }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 rounded-md border border-[var(--color-line)] bg-[#fff8ec] p-3 text-[0.97rem] leading-[1.6] text-[var(--color-ink-soft)]">
          Conversion trigger: every 5 to 7 reels, post a direct invitation to follow for more reflections on life and curiosity.
        </p>
      </section>

      <section className="rounded-[16px] border border-[var(--color-line)] bg-[#f8f1e3] p-5 md:p-6">
        <p className="font-label text-[0.64rem] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">First Milestone</p>
        <p className="font-heading mt-2 text-[1.35rem] leading-[1.08] md:text-[1.8rem]">10,000 followers + one profitable app</p>
        <p className="mt-3 text-[0.98rem] leading-[1.58] text-[var(--color-ink-soft)]">
          Once this milestone exists, community, products, and experiences become significantly easier to scale.
        </p>
      </section>
    </div>
  );
}
