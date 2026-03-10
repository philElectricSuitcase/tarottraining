export type InfographicItemData = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
};

export const INFOGRAPHICS_DATA: InfographicItemData[] = [
  {
    id: 1,
    title: "Decluttering Your Mind",
    description:
      "Clear any mental space by organising thoughts, practicing mindfulness, and letting go of unnecessary worries to achieve mental clarity.",
    iconName: "FaBrain",
    color: "#B4A7D6",
  },
  {
    id: 2,
    title: "Dealing with Stress",
    description:
      "Develop healthy coping mechanisms, practice relaxation techniques, and maintain work-life balance to manage stress effectively.",
    iconName: "FaHandHoldingHeart",
    color: "#D4A5D4",
  },
  {
    id: 3,
    title: "Addressing Imposter Syndrome",
    description:
      "Recognise and identify imposter feelings in yourself and others. Build strategies to reframe these thoughts and foster authentic confidence in leadership roles.",
    iconName: "FaStar",
    color: "#F0C9A8",
  },
  {
    id: 4,
    title: "Improve Communication",
    description:
      "Enhance active listening skills, express thoughts clearly, and build meaningful connections through effective communication.",
    iconName: "FaComments",
    color: "#A8D8E8",
  },
  {
    id: 5,
    title: "Build Trust",
    description:
      "Foster authentic relationships through consistency, transparency, reliability, and genuine care for others.",
    iconName: "FaHandshake",
    color: "#B8E6D5",
  },
  {
    id: 6,
    title: "Setting Achievable Goals",
    description:
      "Create achievable goals, break them into manageable steps, track progress, and celebrate milestones for continuous growth.",
    iconName: "FaBullseye",
    color: "#F0B8D8",
  },
];