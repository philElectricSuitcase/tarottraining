import { IconType } from "react-icons";
import { MdGroup, MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export type RetreatHighlight = {
  id: number;
  icon: IconType;
  text: string;
  color: string;
  isHtml?: boolean;
  domain?: string;
};

export const RETREAT_HIGHLIGHTS: RetreatHighlight[] = [
  {
    id: 1,
    icon: MdGroup,
    text: "Limited live <br>interactive group",
    color: "#ff6f00",
    isHtml: true,
    domain: "tarot",
  },
  {
    id: 2,
    icon: FaCalendarAlt,
    text: "18 April 2026 <br> Live 2-hour Zoom session",
    color: "#ff6f00",
    isHtml: true,
    domain: "tarot",
  },
  {
    id: 3,
    icon: MdLocationOn,
    text: "Online experience: <br> live workshop, recording <br> & downloadable handouts",
    color: "#ff6f00",
    isHtml: true,
    domain: "tarot",
  },
];

export type RetreatDescriptionContent = {
  sectionTitle: string;
  header: string;
  subheader: string;
  domain?: string;
  highlightsPosition?: "image" | "highlights";
};

export const RETREAT_DESCRIPTION_CONTENT: RetreatDescriptionContent[] = [
  {
    sectionTitle: "What if you could learn to read the signals you're already sensing?",
    header: "Ever felt drawn to tarot but unsure where to start or how to read the cards with confidence?",
    subheader: "This beginner-friendly workshop gives you a clear, practical introduction—no overwhelm, no guesswork.",
    domain: "tarot",
    highlightsPosition: "highlights",
  },
];

// Helper function to get description content by domain
export const getRetreatDescriptionContent = (domain: string): RetreatDescriptionContent => {
  const content = RETREAT_DESCRIPTION_CONTENT.find((item) => item.domain === domain);
  return content || RETREAT_DESCRIPTION_CONTENT[0]; // Return first item as default
};

// Legacy exports for backward compatibility
export const RETREAT_DESCRIPTION_HEADER =
  "Ever felt drawn to tarot but unsure where to start or how to read the cards with confidence?";

export const RETREAT_DESCRIPTION_SUBHEADER =
  "This beginner-friendly workshop gives you a clear, practical introduction—no overwhelm, no guesswork.";

export const RETREAT_DESCRIPTION_BODY = `
<strong>Two Hours to Unlock Tarot</strong><br>
Join a live, guided session designed to help you understand tarot in a simple, intuitive way.<p><strong>No experience needed.</strong> Just curiosity and an open mind.</p>

<p><strong>Learn by Doing</strong><br>
This is not just theory. You’ll explore the Major Arcana, learn simple spreads, and have the opportunity to practice reading cards in real time with guidance.</p>

<p><strong>Discover Your Intuition</strong><br>
Tarot isn’t about memorising meanings—it’s about learning how to see, feel, and interpret. You’ll begin developing your own intuitive reading style from day one.</p>

<p><strong>Accessible, Practical, Clear</strong><br>
Everything is broken down into simple steps so you can start using tarot immediately, whether for personal insight or deeper reflection.</p>
`;

export const RETREAT_DESCRIPTION_BODY_2 = `
<p>This workshop is designed to give you a strong, confident foundation in tarot—without overwhelm.</p>

<p><strong>What makes this different:</strong></p>
<p>Rather than focusing on rigid definitions, this session teaches you how to read tarot naturally and intuitively. You'll learn how to connect with the cards, understand symbolism, and trust your interpretations.</p>

<p><strong>Beginner-friendly structure:</strong></p>
<p>We focus on the essentials—tarot history, the Nicolas Conver Tarot de Marseille deck, the Major Arcana, and simple spreads—so you leave with clarity, not confusion.</p>

<p><strong>Hands-on experience:</strong></p>
<p>You'll have the option to pull cards and practice during the session. This is where real learning happens—by doing, not just watching.</p>

<p><strong>Take it with you:</strong></p>
<p>You'll receive a full recording of the session plus detailed handouts, so you can revisit everything and continue building your confidence after the workshop.</p>

<p><strong>Your next step into tarot:</strong></p>
<p>Whether you're exploring tarot out of curiosity or looking to develop a deeper intuitive practice, this session gives you the tools to begin with confidence.</p>
`;

export type RetreatImage = {
  domain: string;
  image: string;
  isLocal: boolean;
  imageAlt: string;
};

export const RETREAT_IMAGES: RetreatImage[] = [
  {
    domain: "tarot",
    image: "tarot_death.png",
    isLocal: true,
    imageAlt: "Taror for fun",
  },
];

/**
 * Get retreat image by domain
 * @param domain - The current domain
 * @returns RetreatImage object or first item as default
 */
export const getRetreatImage = (domain: string): RetreatImage => {
  const image = RETREAT_IMAGES.find((item) => item.domain === domain);
  return image || RETREAT_IMAGES[0]; // Return first item as default
};