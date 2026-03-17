export interface VenueImage {
  id: number;
  src: string;
  alt: string;
}

export interface VenueFacility {
  id: number;
  text: string;
}

export interface VenueData {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  facilitiesTitle: string;
  facilities: VenueFacility[];
  closingStatement: string;
  images: VenueImage[];
}

export const VENUE_DATA: VenueData = {
  title: "Introduction to Tarot Workshop",
  subtitle: "Live, Online & Interactive Experience",

  description1:
    "Join a high-quality, live online tarot workshop designed to give you a clear and confident start. This is not a passive webinar—you’ll be actively guided through the foundations of tarot, with the option to participate, ask questions, and practice in real time.",

  description2:
    "From the comfort of your own space, you’ll experience focused learning without distractions. With direct interaction, practical exercises, and clear step-by-step guidance, you’ll leave the session not just understanding tarot—but actually able to start reading with confidence.",

  facilitiesTitle: "What You’ll Experience",

  facilities: [
    {
      id: 1,
      text: "Live, interactive Zoom session with direct guidance and real-time Q&A",
    },
    {
      id: 2,
      text: "Hands-on practice opportunities with simple tarot spreads during the workshop",
    },
    {
      id: 3,
      text: "Clear breakdown of tarot foundations, symbolism, and the Major Arcana",
    },
    {
      id: 4,
      text: "Beginner-friendly teaching style focused on intuition over memorisation",
    },
    {
      id: 5,
      text: "Full session recording provided so you can revisit and reinforce your learning anytime",
    },
    {
      id: 6,
      text: "Detailed handouts after the session to support continued practice and confidence building",
    },
  ],

  closingStatement:
    "This is your opportunity to step into tarot in a simple, supportive, and practical way—learning not just what the cards mean, but how to actually read them with confidence and intuition.",

  images: [],
};

  /*


    "This historic haven provides the serene, inspiring backdrop for your 3-day Thought Leader Retreat—far enough from the city to truly unplug, close enough to make the journey seamless. Recharge amid heritage, nature, and luxury, emerging aligned and empowered.",
  images: [
    {
      id: 1,
      src: require("../images/1.jpg"),
      alt: "De Vere Latimer Estate - Image 1",
    },

    */