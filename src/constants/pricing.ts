import type { PricingOption } from "../types";

export const PRICING_OPTIONS: PricingOption[] = [
  {
    name: "Non-Residential (Day Program)",
    description: "Full daytime access for busy executives and London-based leaders seeking high-impact development without overnight commitment.",
    price: "£1,525 per person",
    features: [
      { icon: "Event", text: "Full 3-day daytime access to the immersive Thought Reader retreat" },
      { icon: "Psychology", text: "All workshops, sessions, and facilitated leadership activities" },
      { icon: "Restaurant", text: "Daily lunches, refreshments, and welcome dinner included" },
      { icon: "Book", text: "Personal retreat journal + Thought Reader permanence toolkit" },
    ],
    badge: "Flexible",
    highlighted: false,
    footnote: "Perfect for senior professionals balancing schedules."
  },
  {
    name: "Standard Residential",
    description: "Complete immersion with luxury accommodation and full support – designed for leaders committed to deep, measurable transformation.",
    price: "£2,595 per person",
    features: [
      { icon: "Hotel", text: "3 days / 2 nights in luxury accommodation" },
      {icon: "IoFitnessOutline", text: "Full use of fitness and wellness facilities" },
      { icon: "Psychology", text: "All workshops, coaching sessions, and retreat activities" },
      { icon: "RestaurantMenu", text: "All meals and refreshments (breakfast, lunches, dinners)" },
      { icon: "Book", text: "Personal journal + permanence toolkit" },
      { icon: "SupportAgent", text: "30-day post-retreat support framework (resources & accountability)" },
      { icon: "WorkspacePremium", text: "Certificate of completion" },
      { icon: "TrackChanges", text: "Measurable change framework to track leadership impact" },
      { icon: "Group", text: "Intimate cohort – maximum 30 senior participants" }
    ],
    badge: undefined,
    highlighted: true,
    footnote: "Early Bird (book by 24th March 2026): £2,200 | Group (2+): £2,090 per person"
  },
  {
    name: "VIP Residential",
    description: "Elite, high-touch experience for executives seeking maximum personal and leadership leverage from the retreat.",
    price: "£3,195 per person",
    features: [
      { icon: "CheckCircle", text: "Everything included in Standard Residential" },
      { icon: "CoPresent", text: "Private 1:1 coaching session (60 minutes) – tailored to your strategic goals" },
      { icon: "SupportAgent", text: "Enhanced ipost-retreat follow-up (additional in person or calls)" },
      { icon: "PriorityHigh", text: "Priority placement and exclusive materials" },
      { icon: "KingBed", text: "Upgraded room category (subject to availability)" },
      { icon: "Diamond", text: "Deeper investment in personal transformation and sustained executive performance" }
    ],
    badge: "Premium",
    highlighted: false,
    footnote: "Limited places available – recommended for leaders who prioritise individualised / personalised acceleration."
  }
];