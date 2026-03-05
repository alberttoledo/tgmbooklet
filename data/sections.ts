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
      { type: "paragraph", text: "Tone characteristics:" },
      {
        type: "list",
        items: ["calm", "curious", "reflective", "intelligent", "human"]
      },
      { type: "paragraph", text: "Avoid:" },
      {
        type: "list",
        items: ["motivational clichés", "corporate language", "startup jargon"]
      },
      {
        type: "paragraph",
        text: "The voice should feel like a thoughtful conversation about life."
      }
    ]
  },
  {
    id: "visual-identity",
    title: "Visual Identity",
    blocks: [
      { type: "paragraph", text: "Core aesthetic:" },
      {
        type: "list",
        items: [
          "cinematic documentary",
          "natural light",
          "warm colors",
          "sense of wonder"
        ]
      },
      { type: "paragraph", text: "Visual themes:" },
      {
        type: "list",
        items: ["ocean", "sunsets", "travel", "nature", "quiet human moments"]
      },
      { type: "paragraph", text: "Mood:" },
      { type: "paragraph", text: "joyful curiosity" }
    ]
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    blocks: [
      {
        type: "paragraph",
        text: "The brand grows primarily through short philosophical videos and visual storytelling."
      },
      {
        type: "paragraph",
        text: "Platforms include Instagram and YouTube."
      },
      {
        type: "paragraph",
        text: "The purpose is to increase curiosity and joy in people's lives."
      }
    ]
  },
  {
    id: "reel-formats",
    title: "Reel Formats",
    blocks: [
      { type: "paragraph", text: "Define five repeatable formats." },
      { type: "subheading", text: "Worldly Mystics" },
      {
        type: "paragraph",
        text: "Short stories about historical figures who embraced curiosity about existence while living productive lives."
      },
      {
        type: "paragraph",
        text: "Examples include Einstein, Jung, Leonardo da Vinci, Leonard Cohen, and Anthony Bourdain."
      },
      { type: "subheading", text: "Joy of Being Alive" },
      {
        type: "paragraph",
        text: "Montages of beautiful everyday moments such as sailing, coffee by the sea, sunsets, travel, animals, friendship — with reflective philosophical narration."
      },
      { type: "subheading", text: "Nobody Talks About This" },
      {
        type: "paragraph",
        text: "Observations about the strange nature of existence and modern life. Short reflections that make viewers pause."
      },
      { type: "subheading", text: "Micro Stories" },
      {
        type: "paragraph",
        text: "Short philosophical stories with a moral or insight, inspired by conversations, travel, or encounters with nature."
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
      }
    ]
  },
  {
    id: "ai-visual-prompt-system",
    title: "AI Visual Prompt System",
    blocks: [
      {
        type: "paragraph",
        text: "Describe a universal prompt style for AI video tools such as Higgsfield or Midjourney:"
      },
      {
        type: "list",
        items: [
          "cinematic documentary style",
          "warm natural lighting",
          "golden hour sunlight",
          "shallow depth of field",
          "soft film grain",
          "dreamlike but realistic",
          "vibrant natural colors",
          "sense of wonder and curiosity",
          "Terrence Malick style cinematography"
        ]
      },
      {
        type: "paragraph",
        text: "Camera movement should be slow and calm."
      },
      { type: "paragraph", text: "Avoid chaotic editing." }
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
      {
        type: "paragraph",
        text: "Publishing consistently for several months allows the algorithm to surface the strongest content."
      }
    ]
  },
  {
    id: "brand-ecosystem",
    title: "Brand Ecosystem",
    blocks: [
      {
        type: "paragraph",
        text: "The Great Mystery is a philosophy studio producing multiple types of experiences."
      },
      { type: "subheading", text: "Media" },
      {
        type: "list",
        items: ["videos", "essays", "visual storytelling"]
      },
      { type: "subheading", text: "Apps" },
      {
        type: "paragraph",
        text: "tools that help people explore body, mind, and soul (fitness, journaling, dream exploration, curiosity-based learning)"
      },
      { type: "subheading", text: "Community" },
      {
        type: "paragraph",
        text: "discussion spaces and philosophical gatherings"
      },
      { type: "subheading", text: "Experiences" },
      {
        type: "paragraph",
        text: "retreats, workshops, creative explorations"
      }
    ]
  },
  {
    id: "business-model",
    title: "Business Model",
    blocks: [
      { type: "paragraph", text: "Revenue streams include:" },
      {
        type: "list",
        items: [
          "apps and subscriptions",
          "digital courses",
          "community memberships",
          "physical products",
          "events and retreats"
        ]
      },
      {
        type: "paragraph",
        text: "The ecosystem grows gradually as the audience grows."
      }
    ]
  },
  {
    id: "revenue-forecast-example",
    title: "Revenue Forecast (Example)",
    blocks: [
      {
        type: "paragraph",
        text: "10,000 app users paying $6 per month ≈ $60,000 monthly revenue"
      },
      {
        type: "paragraph",
        text: "5,000 community members paying $12 per month ≈ $60,000 monthly revenue"
      },
      {
        type: "paragraph",
        text: "Courses and products provide additional revenue streams."
      },
      {
        type: "paragraph",
        text: "The combined ecosystem can grow into a multi-million dollar lifestyle brand."
      }
    ]
  },
  {
    id: "roadmap",
    title: "Roadmap",
    blocks: [
      { type: "subheading", text: "Phase 1" },
      {
        type: "paragraph",
        text: "Audience growth and first successful app."
      },
      { type: "subheading", text: "Phase 2" },
      {
        type: "paragraph",
        text: "Community and educational products."
      },
      { type: "subheading", text: "Phase 3" },
      {
        type: "paragraph",
        text: "Physical products and experiences."
      }
    ]
  },
  {
    id: "operational-structure",
    title: "Operational Structure",
    blocks: [
      {
        type: "paragraph",
        text: "The brand operates as a studio under a single company."
      },
      {
        type: "paragraph",
        text: "The Great Mystery LLC produces media, apps, products, and experiences."
      },
      {
        type: "paragraph",
        text: "Different projects operate under the same philosophy."
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
      }
    ]
  }
];
