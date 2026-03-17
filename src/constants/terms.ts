import {
  Payment,
  Cancel,
  EventAvailable,
  Gavel,
  Security,
  Description,
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
    content: `<p>Booking is confirmed once full payment has been received and a confirmation email issued.</p>

<p>The workshop fee is <strong>£5 (standard access)</strong> or <strong>£45 (including tarot deck)</strong>.</p>

<p>All payments are processed securely. Your place is only guaranteed once payment is completed.</p>`,
  },
  {
    id: "cancellation",
    title: "Cancellation by Participant",
    iconName: "Cancel",
    content: `<p>Due to the low-cost nature of this workshop, <strong>all bookings are non-refundable</strong>.</p>

<p>If you are unable to attend, you will still receive the <strong>full session recording and materials</strong>.</p>`,
  },
  {
    id: "transfer",
    title: "Transfer of Booking",
    iconName: "EventAvailable",
    content: `<p>You may transfer your place to another participant up to <strong>24 hours before</strong> the session.</p>

<p>Please notify the organiser with the replacement participant’s details.</p>`,
  },
  {
    id: "minimum",
    title: "Minimum Participant Numbers",
    iconName: "EmojiPeople",
    content: `<p>This workshop requires a minimum number of participants to run.</p>

<p>If this is not reached, you will be offered a <strong>full refund</strong> or the option to transfer to a future session.</p>`,
  },
  {
    id: "organiser",
    title: "Cancellation / Changes by Organiser",
    iconName: "Gavel",
    content: `<p>We reserve the right to reschedule or cancel the session due to unforeseen circumstances.</p>

<p>In such cases, participants will be offered a <strong>full refund</strong>, <strong>alternative date</strong>, or <strong>credit</strong>.</p>`,
  },
  {
    id: "force",
    title: "Force Majeure",
    iconName: "Security",
    content: `<p>We are not liable for delays or cancellations caused by events beyond reasonable control, including <strong>internet outages, platform failures, or external disruptions</strong>.</p>

<p>Where possible, sessions will be rescheduled or recordings provided.</p>`,
  },
  {
    id: "participation",
    title: "Participation & Online Experience",
    iconName: "EmojiPeople",
    content: `<p>This is an <strong>interactive live session</strong>. Participants are encouraged, but not required, to engage in exercises and discussions.</p>

<p>A stable internet connection and access to Zoom are required for the best experience.</p>`,
  },
  {
    id: "conduct",
    title: "Code of Conduct",
    iconName: "AssignmentTurnedIn",
    content: `<p>Participants must behave respectfully toward others.</p>

<p>Disruptive or inappropriate behaviour may result in removal from the session without refund.</p>`,
  },
  {
    id: "media",
    title: "Recording & Use of Materials",
    iconName: "Description",
    content: `<p>The session will be recorded and shared with participants after the event.</p>

<p>Participants may not record, reproduce, or distribute the session or materials without permission.</p>`,
  },
  {
    id: "programme",
    title: "Programme Changes",
    iconName: "EventAvailable",
    content: `<p>The organiser may adjust the structure or timing of the session to best support learning outcomes.</p>

<p>This does not constitute grounds for refund.</p>`,
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    iconName: "Security",
    content: `<p>This workshop is for <strong>educational and personal development purposes only</strong>.</p>

<p>Tarot is a reflective tool and should not be used as a substitute for professional advice (medical, legal, financial, or psychological).</p>`,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    iconName: "Description",
    content: `<p>All workshop content, materials, and recordings remain the intellectual property of Thought Reader.</p>

<p>Materials are provided for personal use only and may not be shared or resold.</p>`,
  },
  {
    id: "privacy",
    title: "Data Protection & Privacy",
    iconName: "Security",
    content: `<p>Your data will be handled in accordance with <strong>UK GDPR</strong> and used only for booking, delivery, and follow-up communication.</p>`,
  },
  {
    id: "law",
    title: "Governing Law",
    iconName: "Gavel",
    content: `<p>These terms are governed by the laws of <strong>England and Wales</strong>.</p>`,
  },
  {
    id: "acceptance",
    title: "Acceptance",
    iconName: "AssignmentTurnedIn",
    content: `<p>By completing your booking, you confirm that you have <strong>read, understood, and agree to these Terms & Conditions</strong>.</p>`,
  },
];

export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Payment,
    Cancel,
    EventAvailable,
    Gavel,
    Security,
    Description,
    AssignmentTurnedIn,
    EmojiPeople,
  };
  return iconMap[iconName] || Description;
};