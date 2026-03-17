export interface HeroSectionData {
  mainTitle: string;
  subtitle: string;
  location: string;
  eventDetails: string;
  backgroundImage: string;
  isLocalImage: boolean;
  fallbackBackgroundColor: string;
}

export const HERO_SECTION_DATA: HeroSectionData = {
  mainTitle: "Thought Leader | Thought Reader",
  subtitle: "Tarot for Personal Growth & Insight",
  location: "Online via Zoom",
  eventDetails: "18 April 2026 | 6:00 PM - 8:00 PM BST",
  backgroundImage: "tarot_background.png",
  isLocalImage: true,
  fallbackBackgroundColor: "#1a237e",
};

/**
 * Helper function to get the correct image path
 * Supports both local images (from src/images directory) and external URLs
 * Returns null if image is not available, allowing fallback to color background
 * 
 * @param imagePath - The image filename (for local) or full URL (for external)
 * @param isLocalImage - Boolean flag to determine if image is local or URL
 * @returns The correct image source or null if not available
 * 
 * @example
 * // Local image
 * getHeroBackgroundImage("tarot_background.png", true)
 * 
 * @example
 * // External URL
 * getHeroBackgroundImage("https://example.com/image.jpg", false)
 */
export const getHeroBackgroundImage = (imagePath: string, isLocalImage: boolean): string | null => {
  if (isLocalImage) {
    try {
      return require(`../images/${imagePath}`);
    } catch (error) {
      console.warn(`Local image not found: ${imagePath}. Using fallback background color.`);
      return null;
    }
  }
  return imagePath;
};