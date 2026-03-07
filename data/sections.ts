export type SectionBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

export type ManifestoSection = {
  id: string;
  title: string;
  blocks: SectionBlock[];
};

export const sections: ManifestoSection[] = [
  {
    id: "manifesto",
    title: "Manifesto",
    blocks: [
      { type: "paragraph", text: "Existence itself remains a mystery." },
      {
        type: "paragraph",
        text: "Human civilization has accumulated knowledge for thousands of years. We have mapped the stars, decoded the genome, built machines that think and networks that connect the entire planet."
      },
      {
        type: "paragraph",
        text: "And yet the most fundamental question remains unanswered."
      },
      {
        type: "paragraph",
        text: "Why is there something rather than nothing?"
      },
      {
        type: "paragraph",
        text: "Every person wakes each morning inside a reality that no one fully understands. We experience consciousness, love, curiosity, fear, beauty, time, and death — but the nature of existence itself remains hidden."
      },
      {
        type: "paragraph",
        text: "Most of modern culture tries to replace mystery with certainty."
      },
      {
        type: "paragraph",
        text: "The Great Mystery takes the opposite view."
      },
      {
        type: "paragraph",
        text: "Mystery is not a problem to solve."
      },
      {
        type: "paragraph",
        text: "Mystery is the condition that makes life meaningful."
      },
      {
        type: "paragraph",
        text: "It is the unknown that creates curiosity."
      },
      {
        type: "paragraph",
        text: "It is uncertainty that creates adventure."
      },
      {
        type: "paragraph",
        text: "It is the limits of knowledge that create wonder."
      },
      {
        type: "paragraph",
        text: "The Great Mystery exists to remind people that life is not a puzzle to finish, but an experience to explore."
      }
    ]
  },
  {
    id: "philosophy",
    title: "Philosophy",
    blocks: [
      {
        type: "paragraph",
        text: "At the center of this project is a simple idea:"
      },
      {
        type: "paragraph",
        text: "Everything is fundamentally mysterious."
      },
      {
        type: "paragraph",
        text: "No matter how much humanity discovers, existence itself remains beyond complete explanation."
      },
      {
        type: "paragraph",
        text: "This realization can lead in two different directions."
      },
      { type: "paragraph", text: "One response is fear." },
      { type: "paragraph", text: "Another response is curiosity." },
      {
        type: "paragraph",
        text: "The Great Mystery chooses curiosity."
      },
      {
        type: "paragraph",
        text: "When mystery is embraced rather than feared, life becomes an open landscape of exploration."
      },
      {
        type: "paragraph",
        text: "Introduce the Body – Mind – Soul framework:"
      },
      { type: "subheading", text: "Body" },
      {
        type: "paragraph",
        text: "A healthy body is the foundation of experience. Strength, movement, and vitality allow us to fully participate in the world."
      },
      { type: "subheading", text: "Mind" },
      {
        type: "paragraph",
        text: "A clear mind enables reflection. It allows us to ask questions, examine ideas, and observe the world with curiosity rather than distraction."
      },
      { type: "subheading", text: "Soul" },
      {
        type: "paragraph",
        text: "The soul represents meaning, wonder, and connection. It is the part of human experience that asks deeper questions."
      },
      {
        type: "paragraph",
        text: "Healthy body supports a clear mind. A clear mind supports a healthy soul. Together they allow people to experience life fully."
      }
    ]
  },
  {
    id: "core-principles",
    title: "Core Principles",
    blocks: [
      {
        type: "list",
        items: [
          "Curiosity over certainty",
          "Exploration over explanation",
          "Joy in everyday life",
          "Embracing mystery rather than fearing it",
          "Balancing intellect, creativity, and adventure"
        ]
      }
    ]
  },
  {
    id: "brand-voice-and-tone",
    title: "Brand Voice & Tone",
    blocks: [
      {
        type: "paragraph",
        text: "The voice of The Great Mystery is calm, reflective, and thoughtful."
      },
      {
        type: "paragraph",
        text: "Captions should feel like short philosophical observations, not motivational slogans."
      },
      { type: "subheading", text: "Tone Characteristics" },
      {
        type: "list",
        items: ["calm", "curious", "reflective", "intelligent", "human"]
      },
      { type: "subheading", text: "Good Caption Examples" },
      {
        type: "list",
        items: [
          "The strange thing about life is that we are inside the mystery, not outside it.",
          "Maybe the purpose of life is not to solve it, but to experience it."
        ]
      },
      { type: "subheading", text: "High-Performing Hook Starters" },
      {
        type: "list",
        items: [
          "One of the strangest things about being alive is...",
          "Some of the most brilliant minds believed this...",
          "Nobody talks about this, but...",
          "The older I get the more I realize...",
          "A fisherman once told me something..."
        ]
      },
      { type: "subheading", text: "Avoid" },
      {
        type: "list",
        items: [
          "GRIND HARD",
          "NEVER GIVE UP",
          "SUCCESS MINDSET",
          "dark motivational style",
          "corporate language",
          "startup jargon"
        ]
      },
      {
        type: "paragraph",
        text: "Most important rule: each piece should feel like a quiet moment of wonder, not a lecture."
      }
    ]
  },
  {
    id: "visual-identity",
    title: "Visual Language",
    blocks: [
      {
        type: "paragraph",
        text: "The Great Mystery visual language should feel like a philosopher traveling the world and noticing small beautiful mysteries."
      },
      { type: "subheading", text: "Core Aesthetic" },
      {
        type: "list",
        items: [
          "dreamlike realism",
          "warm curiosity",
          "cinematic wonder",
          "slightly mystical but grounded"
        ]
      },
      { type: "subheading", text: "Visual Influences" },
      {
        type: "list",
        items: [
          "Mediterranean arthouse films (Vicky Cristina Barcelona, Call Me by Your Name)",
          "travel documentaries",
          "cosmic imagery",
          "warm Mediterranean life",
          "quiet philosophical moments"
        ]
      },
      { type: "subheading", text: "Color Palette - Primary" },
      {
        type: "list",
        items: ["golden sunlight", "turquoise sea", "deep blue sky", "warm skin tones"]
      },
      { type: "subheading", text: "Color Palette - Accent" },
      {
        type: "list",
        items: ["orange sunset", "cosmic purple", "emerald green"]
      },
      { type: "subheading", text: "Mood" },
      {
        type: "list",
        items: ["warm", "vibrant", "life affirming"]
      },
      { type: "subheading", text: "Avoid" },
      {
        type: "list",
        items: ["dark motivational style", "black backgrounds", "neon cyberpunk"]
      },
      { type: "subheading", text: "Cinematic Style" },
      {
        type: "list",
        items: [
          "soft film grain",
          "natural light",
          "shallow depth of field",
          "slow camera movement"
        ]
      },
      { type: "subheading", text: "Lens Look" },
      {
        type: "list",
        items: ["35mm film", "anamorphic lens", "bokeh"]
      },
      {
        type: "paragraph",
        text: "This combination creates a premium documentary look."
      },
      { type: "subheading", text: "Recurring Visual Elements - Nature" },
      {
        type: "list",
        items: ["ocean", "waves", "sunsets", "mountains", "forests", "animals"]
      },
      { type: "subheading", text: "Recurring Visual Elements - Human Life" },
      {
        type: "list",
        items: ["coffee", "travel", "sailing", "walking", "conversations"]
      },
      { type: "subheading", text: "Recurring Visual Elements - Cosmic" },
      {
        type: "list",
        items: ["stars", "galaxies", "night sky"]
      },
      {
        type: "paragraph",
        text: "The feeling should always be human life inside a vast mysterious universe."
      }
    ]
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "Layer 1 is audience. It is the foundation engine that powers everything else."
      },
      { type: "subheading", text: "Audience Foundation (Layer 1)" },
      {
        type: "list",
        items: [
          "Instagram",
          "YouTube",
          "Newsletter",
          "Short-form video",
          "Website"
        ]
      },
      { type: "subheading", text: "Audience Growth Path" },
      {
        type: "paragraph",
        text: "10k followers -> 100k -> 1M"
      },
      { type: "subheading", text: "Audience Attraction Pillars" },
      {
        type: "list",
        items: [
          "curiosity about existence",
          "philosophical ideas",
          "joy of life",
          "exploration",
          "worldly mystics (Einstein, Cohen, Bourdain, and others)"
        ]
      },
      {
        type: "paragraph",
        text: "Revenue at this layer is often near zero, but it compounds attention capital."
      },
      {
        type: "paragraph",
        text: "To grow from around 500 followers to 100k, consistency alone is not enough. Use repeatable content formats that the algorithm can recognize and distribute."
      },
      {
        type: "paragraph",
        text: "The brand grows primarily through short philosophical videos and visual storytelling."
      },
      { type: "subheading", text: "Format System" },
      {
        type: "list",
        items: [
          "Repeat 3 to 5 recognizable formats so viewers instantly know what they are getting.",
          "Anchor each format in the same visual universe.",
          "Balance authority, emotion, relatability, storytelling, and conversation."
        ]
      },
      {
        type: "paragraph",
        text: "Platforms include Instagram and YouTube."
      },
      {
        type: "paragraph",
        text: "The purpose is to increase curiosity and joy in people's lives."
      },
      {
        type: "paragraph",
        text: "Biggest growth lever: consistency of visual identity. If every reel feels like it comes from the same world, recognition and follow conversion increase dramatically."
      },
      { type: "subheading", text: "Motion Style" },
      {
        type: "list",
        items: [
          "slow",
          "floating",
          "gentle",
          "slow drone shots",
          "slow walking",
          "waves moving",
          "wind in trees",
          "boats rocking"
        ]
      },
      { type: "subheading", text: "Avoid Motion Patterns" },
      {
        type: "list",
        items: ["fast cuts", "hyper editing", "TikTok chaos"]
      },
      {
        type: "paragraph",
        text: "Aim for a calm hypnotic rhythm."
      },
      { type: "subheading", text: "Sound Design" },
      {
        type: "list",
        items: ["ambient", "piano", "soft cinematic", "emotional but calm"]
      },
      { type: "paragraph", text: "Reference moods:" },
      {
        type: "list",
        items: [
          "Ludovico Einaudi style",
          "soft ambient synths",
          "gentle piano"
        ]
      }
    ]
  },
  {
    id: "reel-formats",
    title: "Reel Formats",
    blocks: [
      { type: "paragraph", text: "Define five repeatable formats." },
      {
        type: "paragraph",
        text: "These five formats are optimized for authority, emotion, curiosity, story, and engagement."
      },
      { type: "subheading", text: "Worldly Mystics" },
      {
        type: "paragraph",
        text: "Short stories about historical figures who embraced curiosity about existence while living productive lives."
      },
      {
        type: "paragraph",
        text: "Examples include Einstein, Jung, Leonardo da Vinci, Leonard Cohen, and Anthony Bourdain."
      },
      { type: "subheading", text: "Worldly Mystics Structure" },
      {
        type: "list",
        items: [
          "Hook",
          "Existential observation",
          "Reveal the person",
          "Closing philosophical insight"
        ]
      },
      { type: "subheading", text: "Worldly Mystics Visual Inputs" },
      {
        type: "list",
        items: ["archival-style imagery", "AI cinematic portraits", "cosmic imagery"]
      },
      { type: "subheading", text: "Worldly Mystics People to Feature" },
      {
        type: "list",
        items: [
          "Einstein",
          "Carl Jung",
          "Leonard Cohen",
          "Anthony Bourdain",
          "Leonardo da Vinci",
          "Steve Jobs"
        ]
      },
      { type: "subheading", text: "Worldly Mystics Script Skeleton" },
      {
        type: "list",
        items: [
          "Some of the greatest minds in history were obsessed with the same question...",
          "Albert Einstein once said the most beautiful thing we can experience is the mysterious.",
          "He believed curiosity about the universe was almost a spiritual feeling.",
          "Maybe the goal of life is not to solve the mystery, but to live inside it."
        ]
      },
      { type: "subheading", text: "Joy of Being Alive" },
      {
        type: "paragraph",
        text: "Montages of beautiful everyday moments such as sailing, coffee by the sea, sunsets, travel, animals, friendship — with reflective philosophical narration."
      },
      { type: "subheading", text: "Joy of Being Alive Structure" },
      {
        type: "list",
        items: [
          "Simple philosophical statement",
          "Series of joyful micro-moments",
          "Closing reflection"
        ]
      },
      { type: "subheading", text: "Joy of Being Alive Visual Motifs" },
      {
        type: "list",
        items: [
          "sailing at sunset",
          "coffee by the sea",
          "riding horses",
          "waves crashing",
          "laughter with friends",
          "street food",
          "cats sleeping",
          "rain on windows"
        ]
      },
      {
        type: "paragraph",
        text: "Reference closing line: The mystery of life is not something far away. It is right here."
      },
      { type: "subheading", text: "Nobody Talks About This" },
      {
        type: "paragraph",
        text: "Observations about the strange nature of existence and modern life. Short reflections that make viewers pause."
      },
      { type: "subheading", text: "Nobody Talks About This Structure" },
      {
        type: "list",
        items: ["Hook", "Observation about modern life", "Reframe"]
      },
      { type: "subheading", text: "Nobody Talks About This Script Skeleton" },
      {
        type: "list",
        items: [
          "Nobody talks about how strange it is that we exist at all.",
          "We wake up, drink coffee, answer emails, while floating on a rock in space.",
          "Maybe the real problem is not that life has no meaning. Maybe it is that we forget how mysterious it is."
        ]
      },
      { type: "subheading", text: "Micro Stories" },
      {
        type: "paragraph",
        text: "Short philosophical stories with a moral or insight, inspired by conversations, travel, or encounters with nature."
      },
      { type: "subheading", text: "Micro Stories Structure" },
      {
        type: "list",
        items: ["Short story", "Unexpected moment", "Philosophical reflection"]
      },
      { type: "subheading", text: "Micro Stories Script Skeleton" },
      {
        type: "list",
        items: [
          "A fisherman once told me something I will never forget.",
          "The sea teaches you something strange. You cannot control it. You can only learn to move with it.",
          "Maybe life is the same."
        ]
      },
      { type: "subheading", text: "Micro Stories Visual Inputs" },
      {
        type: "list",
        items: [
          "cinematic nature",
          "boats",
          "travel",
          "old cities",
          "quiet moments"
        ]
      },
      { type: "subheading", text: "Quiet Questions" },
      {
        type: "paragraph",
        text: "Short videos asking existential questions:"
      },
      {
        type: "list",
        items: [
          "What does it mean to live well?",
          "Why does anything exist at all?",
          "What would you ask the universe if it could answer?"
        ]
      },
      { type: "subheading", text: "Quiet Questions Structure" },
      {
        type: "list",
        items: [
          "Simple existential question",
          "Minimal visuals",
          "Pause"
        ]
      },
      {
        type: "paragraph",
        text: "Quiet Questions are designed to drive comments, saves, and high-quality discussion."
      },
      { type: "subheading", text: "Example Prompt - Joy of Being Alive" },
      {
        type: "paragraph",
        text: "a man surfing a gentle turquoise wave at sunset, golden sunlight reflecting on the water, joyful expression, tropical atmosphere, cinematic slow motion"
      },
      {
        type: "paragraph",
        text: "cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, vibrant natural colors, dreamy atmosphere, Mediterranean arthouse cinematography inspired by Vicky Cristina Barcelona and Call Me by Your Name"
      },
      { type: "subheading", text: "Example Prompt - Worldly Mystics" },
      {
        type: "paragraph",
        text: "portrait of Albert Einstein standing under a star filled night sky, looking upward in wonder, subtle cosmic atmosphere blending science and mystery"
      },
      {
        type: "paragraph",
        text: "cinematic lighting, dramatic but warm atmosphere, soft film grain, shallow depth of field, realistic cinematic style, cosmic wonder mood"
      },
      { type: "subheading", text: "Example Prompt - Travel Curiosity" },
      {
        type: "paragraph",
        text: "a traveler walking through a colorful Mediterranean street early morning, sunlight hitting pastel buildings, quiet peaceful atmosphere"
      },
      {
        type: "paragraph",
        text: "cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, vibrant colors, soft film grain"
      },
      { type: "subheading", text: "Example Prompt - Quiet Existential Moments" },
      {
        type: "paragraph",
        text: "person sitting alone on a cliff overlooking the ocean at sunset, vast horizon, peaceful contemplative atmosphere"
      },
      {
        type: "paragraph",
        text: "cinematic documentary style, warm natural lighting, golden hour sunlight, soft film grain, shallow depth of field, dreamy atmosphere"
      }
    ]
  },
  {
    id: "ai-visual-prompt-system",
    title: "AI Visual Prompt System",
    blocks: [
      {
        type: "paragraph",
        text: "Use a universal style suffix for Higgsfield and similar AI tools to keep videos visually consistent."
      },
      { type: "subheading", text: "Higgsfield Universal Style Prompt" },
      {
        type: "paragraph",
        text: "cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors, sense of wonder and curiosity, Mediterranean arthouse cinematography inspired by Vicky Cristina Barcelona and Call Me by Your Name, slow gentle camera movement"
      },
      {
        type: "paragraph",
        text: "Append this string to most prompts to preserve recognizability."
      },
      { type: "subheading", text: "Prompt Template for Reels" },
      {
        type: "list",
        items: [
          "scene description",
          "visual atmosphere",
          "camera style"
        ]
      },
      { type: "subheading", text: "Template Example" },
      {
        type: "paragraph",
        text: "A man sitting on a small sailboat at sunset in the Mediterranean, calm turquoise water, golden sun reflecting on the sea, peaceful atmosphere of quiet reflection"
      },
      {
        type: "paragraph",
        text: "cinematic documentary style, warm natural lighting, golden hour sunlight, shallow depth of field, soft film grain, anamorphic lens look, dreamy but realistic, vibrant natural colors, Mediterranean arthouse cinematography inspired by Vicky Cristina Barcelona and Call Me by Your Name"
      }
    ]
  },
  {
    id: "posting-strategy",
    title: "Posting Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "The growth strategy relies on consistent publishing."
      },
      { type: "paragraph", text: "Two reels per day:" },
      {
        type: "list",
        items: ["one philosophical reel", "one joy-of-life reel"]
      },
      { type: "subheading", text: "Daily Cadence" },
      {
        type: "list",
        items: [
          "Reel 1: philosophy, mystics, stories, or questions",
          "Reel 2: joy of life montage or warm travel moments"
        ]
      },
      { type: "subheading", text: "Example Weekly Mix" },
      {
        type: "list",
        items: [
          "Mon: Einstein + joy montage",
          "Tue: Jung + sailing sunset",
          "Wed: Bourdain + street food",
          "Thu: Da Vinci + travel moment",
          "Fri: Cohen + quiet reflection",
          "Sat: question reel + animals",
          "Sun: micro story + nature"
        ]
      },
      {
        type: "paragraph",
        text: "Publishing consistently for several months allows the algorithm to surface the strongest content."
      },
      {
        type: "paragraph",
        text: "One growth tactic creators often miss: every 5 to 7 reels, post a direct follow invitation."
      },
      {
        type: "list",
        items: [
          "If you enjoy these reflections on life and curiosity, follow for more."
        ]
      },
      {
        type: "paragraph",
        text: "This simple cadence helps convert viewers into followers."
      },
      { type: "subheading", text: "60-Day Output Math" },
      {
        type: "list",
        items: [
          "2 reels per day for 60 days = 120 reels",
          "Expected pattern: around 90 normal, 25 good, 5 viral",
          "Those 5 viral reels can drive 10k to 100k followers"
        ]
      },
      {
        type: "paragraph",
        text: "This is a realistic way small accounts can accelerate quickly."
      },
      { type: "subheading", text: "Profile Bio Recommendation" },
      {
        type: "paragraph",
        text: "The Great Mystery"
      },
      {
        type: "paragraph",
        text: "Everything is a mystery. Everyone is a mystic."
      },
      {
        type: "paragraph",
        text: "Exploring life, curiosity and wonder."
      }
    ]
  },
  {
    id: "brand-ecosystem",
    title: "Philosophy Studio Blueprint",
    blocks: [
      {
        type: "paragraph",
        text: "Do not think: I am building apps. Think: I am building a philosophy studio."
      },
      {
        type: "paragraph",
        text: "Everything should reinforce everything else: media, apps, courses, community, products, and experiences."
      },
      { type: "subheading", text: "Studio Structure" },
      {
        type: "list",
        items: [
          "Media",
          "Apps",
          "Courses",
          "Community",
          "Experiences"
        ]
      },
      { type: "subheading", text: "Six-Layer Stack" },
      {
        type: "list",
        items: [
          "Layer 1: Audience (foundation)",
          "Layer 2: Apps (advantage)",
          "Layer 3: Digital products (high margin)",
          "Layer 4: Membership community",
          "Layer 5: Physical objects (lifestyle brand)",
          "Layer 6: Experiences (highest impact)"
        ]
      },
      {
        type: "paragraph",
        text: "Most creators stop at content and sponsorships. The Great Mystery can compound through content -> apps -> products -> experiences."
      },
      {
        type: "paragraph",
        text: "Strategic insight: apps are one expression of the studio, not the whole identity."
      }
    ]
  },
  {
    id: "business-model",
    title: "Business Model",
    blocks: [
      {
        type: "paragraph",
        text: "Layer 2 is apps, and this is a major structural advantage because of engineering ability."
      },
      { type: "subheading", text: "Layer 2 - Apps as Tools for Living the Mystery" },
      {
        type: "list",
        items: [
          "One Body - physical wellbeing",
          "One Mind - mental clarity",
          "One Soul - spiritual reflection",
          "Dream app - subconscious exploration",
          "Field Guide - curiosity about the world"
        ]
      },
      {
        type: "paragraph",
        text: "Subscription model: $5 to $10 per month."
      },
      {
        type: "paragraph",
        text: "Example: 10,000 users x $6/month = $60,000/month ($720,000/year)."
      },
      { type: "subheading", text: "Layer 3 - Digital Products (High Margin)" },
      {
        type: "list",
        items: [
          "philosophy courses",
          "journaling systems",
          "guided explorations",
          "curiosity challenges",
          "creative workshops"
        ]
      },
      {
        type: "paragraph",
        text: "Example: $79 course x 5,000 buyers = $395,000 (often 90%+ margin)."
      },
      { type: "subheading", text: "Layer 4 - Membership Community" },
      {
        type: "list",
        items: [
          "live salons",
          "discussions",
          "philosophy nights",
          "guest speakers",
          "community rituals"
        ]
      },
      {
        type: "paragraph",
        text: "Example: 5,000 members x $12/month = $60,000/month."
      },
      { type: "subheading", text: "Layer 5 - Physical Objects" },
      {
        type: "list",
        items: [
          "journals",
          "posters",
          "philosophical card decks",
          "exploration kits",
          "clothing"
        ]
      },
      {
        type: "paragraph",
        text: "Example launch: 20,000 followers with 2% buying a $40 product = $16,000."
      },
      { type: "subheading", text: "Layer 6 - Experiences" },
      {
        type: "list",
        items: [
          "retreats",
          "sailing trips",
          "philosophy gatherings",
          "creative workshops"
        ]
      },
      {
        type: "paragraph",
        text: "Example: retreat at $2,000 with 20 people = $40,000 weekend."
      }
    ]
  },
  {
    id: "revenue-forecast-example",
    title: "Revenue Forecast (Example)",
    blocks: [
      {
        type: "paragraph",
        text: "Example mature monthly stack:"
      },
      {
        type: "list",
        items: [
          "Apps: $80,000/month",
          "Membership: $50,000/month",
          "Courses: $40,000/month",
          "Products: $20,000/month",
          "Events: $15,000/month"
        ]
      },
      {
        type: "paragraph",
        text: "Total: around $205,000/month."
      },
      {
        type: "paragraph",
        text: "Annualized: approximately $2.4M/year."
      },
      {
        type: "paragraph",
        text: "Many lifestyle brands can scale well beyond this once the ecosystem compounds."
      }
    ]
  },
  {
    id: "roadmap",
    title: "Roadmap",
    blocks: [
      { type: "subheading", text: "Phase 1 - Audience" },
      {
        type: "paragraph",
        text: "Grow the audience engine with recognizable formats and consistent visual identity."
      },
      { type: "subheading", text: "Phase 2 - One Successful App" },
      {
        type: "paragraph",
        text: "Launch and validate one profitable app that proves product-market fit."
      },
      { type: "subheading", text: "Phase 3 - Community" },
      {
        type: "paragraph",
        text: "Build a membership layer through salons, discussions, and recurring gatherings."
      },
      { type: "subheading", text: "Phase 4 - Products" },
      {
        type: "paragraph",
        text: "Expand into digital and physical products with strong margins."
      },
      { type: "subheading", text: "Phase 5 - Experiences" },
      {
        type: "paragraph",
        text: "Scale high-impact retreats, workshops, and travel-based experiences."
      }
    ]
  },
  {
    id: "operational-structure",
    title: "Operational Structure",
    blocks: [
      {
        type: "paragraph",
        text: "The Great Mystery operates as a single philosophy studio under one company structure."
      },
      {
        type: "paragraph",
        text: "Media, apps, courses, community, products, and experiences should share one strategic direction."
      },
      {
        type: "paragraph",
        text: "Single biggest risk: trying to build too many layers at once."
      },
      { type: "subheading", text: "Execution Rule" },
      {
        type: "paragraph",
        text: "Focus sequence: audience -> one successful app -> community -> products -> experiences."
      }
    ]
  },
  {
    id: "vision",
    title: "Vision",
    blocks: [
      {
        type: "paragraph",
        text: "The long-term vision is to build a global philosophy lifestyle brand."
      },
      {
        type: "paragraph",
        text: "The goal is not only to distribute content but to inspire people to explore life with curiosity, joy, and wonder."
      },
      {
        type: "paragraph",
        text: "The Great Mystery exists to remind people that life itself is the greatest mystery."
      },
      {
        type: "paragraph",
        text: "The simplest first milestone is clear: 10,000 followers plus one profitable app."
      },
      {
        type: "paragraph",
        text: "Core founder advantage combines engineering, philosophical depth, exploration lifestyle, international perspective, and storytelling instinct."
      }
    ]
  }
];
