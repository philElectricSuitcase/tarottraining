export type InfographicItemData = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  domain?: string;
};

export type InfographicsSection = {
  sectionTitle: string;
  sectionSubtitle: string;
  domain?: string;
};

export const INFOGRAPHICS_DATA: InfographicItemData[] = [
  {
    id: 1,
    title: "Understanding Tarot Foundations",
    description:
      "Learn the structure of tarot, including the Major Arcana, symbolism, and how tarot works as a tool for insight and reflection.",
    iconName: "FaBookOpen",
    color: "#B4A7D6",
    domain: "tarot",
  },
  {
    id: 2,
    title: "Developing Intuition",
    description:
      "Strengthen your natural intuition by learning to trust first impressions, read symbols, and connect with the cards beyond memorisation.",
    iconName: "FaEye",
    color: "#D4A5D4",
    domain: "tarot",
  },
  {
    id: 3,
    title: "The Major Arcana",
    description:
      "Explore the key archetypes and themes of the Major Arcana, understanding the Fool's Journey and how it reflects real-life experiences.",
    iconName: "FaStar",
    color: "#F0C9A8",
    domain: "tarot",
  },
  {
    id: 4,
    title: "Reading Tarot with Confidence",
    description:
      "Learn how to interpret cards clearly, combine meanings, and deliver simple, confident readings without overthinking.",
    iconName: "FaComments",
    color: "#A8D8E8",
    domain: "tarot",
  },
  {
    id: 5,
    title: "Simple Spreads & Practice",
    description:
      "Use beginner-friendly spreads and guided exercises to practice reading cards and applying your knowledge in real time.",
    iconName: "FaLayerGroup",
    color: "#B8E6D5",
    domain: "tarot",
  },
  {
    id: 6,
    title: "Applying Tarot to Real Life",
    description:
      "Use tarot as a tool for clarity, decision-making, and personal insight to support everyday life and long-term growth.",
    iconName: "FaBullseye",
    color: "#F0B8D8",
    domain: "tarot",
  },
];

export const INFOGRAPHICS_SECTIONS: InfographicsSection[] = [
  {
    sectionTitle: "Core Themes Covered in the Workshop",
    sectionSubtitle: "Each section is designed to build your confidence and understanding of tarot in a clear, practical way.",
    domain: "tarot",
  },
];

/**
 * Get infographics section content by domain
 * @param domain - The current domain
 * @returns InfographicsSection object or first item as default
 */
export const getInfographicsSection = (domain: string): InfographicsSection => {
  const section = INFOGRAPHICS_SECTIONS.find((item) => item.domain === domain);
  return section || INFOGRAPHICS_SECTIONS[0]; // Return first item as default
};