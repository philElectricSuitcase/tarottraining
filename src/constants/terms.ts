import {
  Payment,
  Cancel,
  EventAvailable,
  Gavel,
  Security,
  HealthAndSafety,
  Description,
  Restaurant,
  LocalHotel,
  AssignmentTurnedIn,
  EmojiPeople,
} from "@mui/icons-material";

export interface TermsSectionData {
  id: string;
  title: string;
  iconName: string;
  content: string;
}

export const TERMS_SECTIONS_DATA: TermsSectionData[] = [
  {
    id: "booking",
    title: "Booking & Payment",
    iconName: "Payment",
    content: `<p>Booking is confirmed once a <strong>50% non-refundable deposit</strong> has been received and a booking confirmation email issued.</p>

<p>The remaining <strong>50% balance</strong> must be paid no later than <strong>30 days before</strong> the Retreat start date.</p>

<p>Failure to pay by the deadline may result in cancellation and retention of the deposit. The place may then be offered to another participant.</p>

<p>Price ( <strong>residential standard & VIP residential</strong>) includes: <strong>2 nights luxury accommodation</strong>, all mindful meals, full workshop programme, retreat journal, and post-retreat digital toolkit. Travel not included.</p>`,
  },
  {
    id: "cancellation",
    title: "Cancellation by Participant",
    iconName: "Cancel",
    content: `<p>All cancellations must be in writing via email. Refunds as follows:</p>

<ul>
  <li><strong>60+ days:</strong> refund minus 50% deposit</li>
  <li><strong>30–59 days:</strong> 25% refund</li>
  <li><strong>Less than 30 days:</strong> no refund</li>
</ul>

<p><em>Travel/cancellation insurance recommended.</em></p>`,
  },
  {
    id: "transfer",
    title: "Transfer of Booking",
    iconName: "EventAvailable",
    content: `<p>Booking may be transferred to another participant up to <strong>14 days before</strong> the Retreat, subject to approval. The replacement participant must accept these Terms and complete required booking information. <strong>No additional fee applies.</strong></p>`,
  },
  {
    id: "minimum",
    title: "Minimum Participant Numbers",
    iconName: "EmojiPeople",
    content: `<p>Retreat requires a minimum number of participants. If minimum is not reached, we may cancel or reschedule. Participants notified at least <strong>21 days in advance</strong>. Options: <strong>full refund</strong>, <strong>rescheduled date</strong>, or <strong>credit voucher</strong>.</p>`,
  },
  {
    id: "organiser",
    title: "Cancellation / Changes by Organiser",
    iconName: "Gavel",
    content: `<p>We may cancel or change venue/facilitators due to operational reasons. At least <strong>14 days' notice</strong> where possible. Refund options: <strong>full refund</strong>, <strong>transfer to future date</strong>, or <strong>credit voucher valid 24 months</strong>. Liability limited to total amount paid. Not responsible for travel, accommodation, or loss of earnings.</p>`,
  },
  {
    id: "force",
    title: "Force Majeure",
    iconName: "Security",
    content: `<p>We are not liable for failure due to events beyond reasonable control, including <strong>natural disasters, severe weather, pandemics, government restrictions, strikes, terrorism, or venue closure</strong>. Reasonable efforts will be made to reschedule or provide credit/refund.</p>`,
  },
  {
    id: "health",
    title: "Health, Safety & Participation",
    iconName: "HealthAndSafety",
    content: `<p>Participants confirm they are <strong>physically and mentally able to participate</strong>. Must disclose <strong>medical conditions, allergies, or accessibility requirements</strong>. We may remove participants for disruptive or unsafe behaviour. Moderate alcohol may be served; consume responsibly.</p>`,
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    iconName: "AssignmentTurnedIn",
    content: `<p>Participants must behave <strong>respectfully and follow safety guidelines</strong>. Disruptive, abusive, or unsafe behaviour may result in <strong>removal without refund</strong>.</p>`,
  },
  {
    id: "media",
    title: "Photography & Media",
    iconName: "Description",
    content: `<p>Photos/videos may be taken for documentation and marketing. <strong>Notify organiser if you do not wish to appear</strong>. Participants may not record sessions or teaching materials without permission.</p>`,
  },
  {
    id: "programme",
    title: "Programme Changes",
    iconName: "EventAvailable",
    content: `<p>Organisers may change <strong>session timings, structure, facilitators, or activities</strong>. Changes do not constitute grounds for refund.</p>`,
  },
  {
    id: "medical",
    title: "Medical Disclaimer",
    iconName: "HealthAndSafety",
    content: `<p>Retreat is a <strong>personal development experience, not medical or therapeutic treatment</strong>. Participants remain responsible for wellbeing. Consult a healthcare professional if undergoing treatment.</p>`,
  },
  {
    id: "dietary",
    title: "Dietary Requirements",
    iconName: "Restaurant",
    content: `<p>Notify <strong>dietary restrictions/allergies</strong> at booking or at least <strong>14 days before</strong>. While care is taken, allergen-free environment cannot be guaranteed.</p>`,
  },
  {
    id: "property",
    title: "Property & Venue Responsibility",
    iconName: "LocalHotel",
    content: `<p>Participants are <strong>responsible for damage</strong> to venue property or accommodation. Costs for repair/replacement will be charged to responsible participants.</p>`,
  },
  {
    id: "liability",
    title: "Liability & Insurance",
    iconName: "Security",
    content: `<p>Nothing excludes liability for <strong>death, personal injury from negligence, fraud, or legal liability</strong>. Total liability capped at total retreat fee. Participants arrange <strong>travel, medical, and cancellation insurance</strong>.</p>`,
  },
  {
    id: "ip",
    title: "Intellectual Property & Confidentiality",
    iconName: "Description",
    content: `<p>All materials remain <strong>Thought Reader property</strong>. Participants may not <strong>record, photograph, or distribute content</strong> without permission. <strong>Confidentiality must be respected</strong>.</p>`,
  },
  {
    id: "privacy",
    title: "Data Protection & Privacy",
    iconName: "Security",
    content: `<p>We process personal data according to <strong>UK GDPR</strong>. Data used for <strong>booking management, delivering Retreat, and event updates</strong>. Full policy: <strong>thought-reader.co.uk/privacy-policy</strong></p>`,
  },
  {
    id: "consumer",
    title: "Consumer Rights",
    iconName: "Gavel",
    content: `<p><strong>14-day cooling-off does not apply</strong> to bookings for specific-date leisure services (Consumer Contracts Regulations 2013). Nothing affects statutory rights under Consumer Rights Act 2015.</p>`,
  },
  {
    id: "law",
    title: "Governing Law",
    iconName: "Gavel",
    content: `<p>These terms are governed by the laws of <strong>England and Wales</strong>. Disputes subject to exclusive jurisdiction of <strong>English and Welsh courts</strong>.</p>`,
  },
  {
    id: "acceptance",
    title: "Acceptance",
    iconName: "AssignmentTurnedIn",
    content: `<p>By completing payment and receiving booking confirmation, participants confirm they have <strong>read, understood, and agree to these Terms & Conditions</strong>.</p>`,
  },
];

export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Payment,
    Cancel,
    EventAvailable,
    Gavel,
    Security,
    HealthAndSafety,
    Description,
    Restaurant,
    LocalHotel,
    AssignmentTurnedIn,
    EmojiPeople,
  };
  return iconMap[iconName] || Description;
};