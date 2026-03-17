import type { PricingOption } from "../types";

export const PRICING_OPTIONS: PricingOption[] = [
  {
    name: "Standard Access",
    description:
      "Join the live 2-hour Introduction to Tarot workshop on Zoom. Perfect for beginners wanting a clear, practical introduction.",
    price: "£5 per person",
    features: [
      { icon: "Event", text: "Live 2-hour interactive Zoom workshop" },
      { icon: "Psychology", text: "Beginner-friendly guidance on tarot fundamentals & intuition" },
      { icon: "Style", text: "Introduction to the Major Arcana & symbolism" },
      { icon: "AutoAwesome", text: "Guided practice with simple spreads (optional participation)" },
      { icon: "VideoLibrary", text: "Full recording provided after the session" },
      { icon: "Description", text: "Digital handouts covering all topics in more depth" }
    ],
    badge: "Popular",
    highlighted: true,
    footnote:
      "Ideal if you already have a deck or just want to explore tarot.",
    paymentLink: "https://monzo.com/pay/r/thought-leader-thought-re_x0QHDuxnyPkmUS",
    domain: "tarot"
  },
  {
    name: "Workshop + Tarot Deck",
    description:
      "Everything in Standard Access plus your own Nicolas Conver Tarot de Marseille deck to learn and practice with.",
    price: "£45 per person",
    features: [
      { icon: "CheckCircle", text: "Full access to the live 2-hour workshop" },
      { icon: "Style", text: "Nicolas Conver Tarot de Marseille deck included" },
      { icon: "LocalShipping", text: "Deck shipped to you before or shortly after the session" },
      { icon: "AutoAwesome", text: "Hands-on participation with your own cards during practice" },
      { icon: "VideoLibrary", text: "Full session recording + replay access" },
      { icon: "Description", text: "Extended handouts and learning materials" }
    ],
    badge: "Best Value",
    highlighted: false,
    footnote:
      "Perfect if you want the full experience and a deck to continue your practice.",
    paymentLink: "https://monzo.com/pay/r/thought-leader-thought-re_TKgQHAJC9T8mvg",
    domain: "tarot"
  }
];