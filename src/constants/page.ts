export type HeaderData = {
  title: string;
  subtitle: string;
  domain?: string;
};

export type FooterContactInfo = {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  linkedinUrl: string;
  domain?: string;
};

export type FooterCopyright = {
  text: string;
  year: number;
  location: string;
  dates: string;
  domain?: string;
};

export const HEADER_DATA: HeaderData[] = [
  {
    title: "Thought Leader | Thought Reader Retreat",
    subtitle: "April 18, 2026 | Online",
    domain: "tarot",
  },
];

export const FOOTER_CONTACT_INFO: FooterContactInfo[] = [
  {
    phone: "+44 (0) 7394 168872",
    phoneHref: "tel:+441739416887",
    email: "retreats@thought-reader.co.uk",
    emailHref: "mailto:retreats@thought-reader.co.uk",
    linkedinUrl: "https://www.linkedin.com/in/besthypnotherapist/",
    domain: "tarot",
  },
];

export const FOOTER_COPYRIGHT: FooterCopyright[] = [
  {
    text: "Leadership Pause Retreat",
    year: new Date().getFullYear(),
    location: "Online",
    dates: "18 April 2025",
    domain: "tarot",
  },
];

/**
 * Get header data by domain
 * @param domain - The current domain
 * @returns HeaderData object or first item as default
 */
export const getHeaderData = (domain: string): HeaderData => {
  const header = HEADER_DATA.find((item) => item.domain === domain);
  return header || HEADER_DATA[0];
};

/**
 * Get footer contact info by domain
 * @param domain - The current domain
 * @returns FooterContactInfo object or first item as default
 */
export const getFooterContactInfo = (domain: string): FooterContactInfo => {
  const contact = FOOTER_CONTACT_INFO.find((item) => item.domain === domain);
  return contact || FOOTER_CONTACT_INFO[0];
};

/**
 * Get footer copyright info by domain
 * @param domain - The current domain
 * @returns FooterCopyright object or first item as default
 */
export const getFooterCopyright = (domain: string): FooterCopyright => {
  const copyright = FOOTER_COPYRIGHT.find((item) => item.domain === domain);
  return copyright || FOOTER_COPYRIGHT[0];
};