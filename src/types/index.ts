export type InfographicItem = {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  domain?: string;
};

export type Facilitator = {
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string;
  domain?: string;
};

export type PricingFeature = {
  icon: string;
  text: string;
};

export type PricingOption = {
  name: string;
  description: string;
  price: string;
  features: PricingFeature[];
  badge?: string;
  highlighted: boolean;
  footnote?: string;
  paymentLink?: string;
  domain?: string;
};

export type ScheduleActivity = {
  title: string;
  keyPoints: string[];
  objectives: string[];
};

export type ScheduleSession = {
  session: number;
  activities: ScheduleActivity[];
};

export type ScheduleDay = {
  day: string;
  title: string;
  sessions: ScheduleSession[];
  domain?: string;
};

export type FormData = {
  name: string;
  email: string;
  company: string;
  position: string;
  phone: string;
  message: string;
};

export type FormField = keyof FormData;

export type TermsSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};