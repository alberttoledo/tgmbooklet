export type SectionArt = {
  src: string;
  alt: string;
  caption: string;
};

export const sectionArt: Record<string, SectionArt> = {
  "visual-identity": {
    src: "/editorial/ocean-light.png",
    alt: "Quiet ocean-inspired scene with warm sunlight and minimalist waves",
    caption: "Natural light - ocean - wonder"
  },
  "reel-formats": {
    src: "/editorial/slow-travel.png",
    alt: "Minimal road and horizon visual evoking travel and reflective movement",
    caption: "Travel - human pace - reflective motion"
  },
  "ai-visual-prompt-system": {
    src: "/editorial/cinematic-frame.png",
    alt: "Framed cinematic composition with warm tonal contrast and calm geometry",
    caption: "Cinematic framing - calm movement"
  },
  "brand-ecosystem": {
    src: "/editorial/studio-ecosystem.png",
    alt: "Connected minimalist circles showing a unified ecosystem concept",
    caption: "Studio model - connected experiences"
  },
  vision: {
    src: "/editorial/great-mystery-sky.png",
    alt: "Open sky composition representing expansive curiosity and long-term vision",
    caption: "Global vision - joyful curiosity"
  }
};
