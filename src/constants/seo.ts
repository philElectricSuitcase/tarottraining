export type SEOData = {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  domain?: string;
};

export const SEO_DATA: SEOData[] = [
  {
    title: "Thought Leader | Thought Reader Retreat - Tarot Workshop",
    description: "Join our transformative tarot retreat. Learn tarot for personal growth, intuition development, and practical insight. Live online workshop with expert facilitators.",
    image: "https://tarot.thought-reader.co.uk/preview-image.jpg",
    url: "https://tarot.thought-reader.co.uk/",
    type: "website",
    domain: "tarot",
  },
];

/**
 * Get SEO data by domain
 * @param domain - The current domain
 * @returns SEOData object or first item as default
 */
export const getSEOData = (domain: string): SEOData => {
  const seo = SEO_DATA.find((item) => item.domain === domain);
  return seo || SEO_DATA[0];
};