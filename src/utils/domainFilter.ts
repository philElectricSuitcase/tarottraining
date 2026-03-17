/**
 * Get the current subdomain from the URL
 * Examples:
 * - tarot.example.com -> "tarot"
 * - hypnotherapy.example.com -> "hypnotherapy"
 * - example.com -> "default" (no subdomain)
 * - localhost:3000 -> "default" (local development)
 * 
 * @returns The subdomain string
 */
export const getCurrentDomain = (): string => {
  if (typeof window === "undefined") {
    return "tarot"; // Default for server-side rendering
  }

  const hostname = window.location.hostname;
  
  // Handle localhost and IP addresses
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.includes(":")) {
    return "tarot"; // Default for local development
  }

  // Split hostname by dots
  const parts = hostname.split(".");
  
  // If there's only one part (e.g., "localhost") or it's an IP, return default
  if (parts.length <= 2) {
    return "tarot"; // Default domain
  }

  // Return the first part as the subdomain
  return parts[0];
};

/**
 * Filter an array of items by domain
 * Items without a domain attribute are included by default
 * 
 * @param items - Array of items with optional domain property
 * @param currentDomain - The current domain to filter by
 * @returns Filtered array
 */
export const filterByDomain = <T extends { domain?: string }>(
  items: T[],
  currentDomain: string
): T[] => {
  return items.filter((item) => {
    // If no domain is specified, include it for all domains
    if (!item.domain) {
      return true;
    }
    // Otherwise, only include if domain matches
    return item.domain === currentDomain;
  });
};