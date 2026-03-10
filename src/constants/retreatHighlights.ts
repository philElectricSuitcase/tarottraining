import { IconType } from "react-icons";
import { MdGroup, MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export type RetreatHighlight = {
  id: number;
  icon: IconType;
  text: string;
  color: string;
  isHtml?: boolean;
};

export const RETREAT_HIGHLIGHTS: RetreatHighlight[] = [
  {
    id: 1,
    icon: MdGroup,
    text: "Maximum 30 <br>senior leaders",
    color: "#ff6f00",
    isHtml: true,
  },
  {
    id: 2,
    icon: FaCalendarAlt,
    text: "26-28 August 2026 <br> 2 nights luxury stay",
    color: "#ff6f00",
    isHtml: true,
  },
  {
    id: 3,
    icon: MdLocationOn,
    text: "All-inclusive: <br> meals, program, <br>estate grounds & facilities",
    color: "#ff6f00",
     isHtml: true,

  },
];

export const RETREAT_DESCRIPTION_HEADER = "The constant demands pulling you in every direction, leaving little headspace for what really matters –both at work and in life?";
export const RETREAT_DESCRIPTION_SUBHEADER = "You're not alone. Many senior professionals reach a point where they need to step back, refocus, and reclaim some proper control.";
export const RETREAT_DESCRIPTION_BODY = `<strong>Three Days of Clarity and Focus</strong><br>This three-day luxury boutique retreat is set in peaceful countryside, giving you the perfect environment to breathe, reflect, and recharge fully.<p><strong>No distractions.</strong> Just the room to think deeply and reset your priorities.</p><p><strong>Structured for Maximum Impact</strong><br>Over the retreat, you'll engage with proven NLP-inspired techniques, guided hypnosis, and reflective journaling. The goal: quiet the mental noise, sharpen your decision-making, and gain -clear clarity on what truly matters.</p><p><strong>Connect with Exceptional Leaders</strong><br>Small group mastery sessions bring together senior executives from diverse industries. The insights from these conversations are often the most powerful, offering perspectives you wouldn't encounter elsewhere.</p><p><strong>Your Reset Awaits</strong><br>Sometimes a fresh perspective is all it takes. Step away, recharge, and return to your role with renewed focus and presence.</p>`;
export const RETREAT_DESCRIPTION_BODY_2 = `<p>This retreat is more than just a getaway—it's a transformative experience designed specifically for senior leaders who are ready to make a real change.</p><p><strong>What makes this different:</strong></p><p>Unlike generic wellness retreats, this programme combines cutting-edge psychological techniques with practical leadership development. You'll work with proven NLP-inspired methodologies that have helped thousands of executives break through mental barriers and unlock their full potential.</p><p><strong>The power of small groups:</strong></p><p>With a maximum of 30 participants, you'll have genuine space to work deeply. No large conference-style sessions. Instead, you'll benefit from intimate group work where real breakthroughs happen. The diversity of the group—senior leaders from different industries, sectors, and backgrounds—creates a unique learning environment. You'll gain fresh perspectives from people facing completely different challenges, yet sharing the same core struggles around pace, pressure, and priorities.</p><p><strong>Practical tools you'll take home:</strong></p><p>This isn't theoretical. Every technique, every exercise, every insight is designed to be immediately applicable to your real life. You'll leave with a personal toolkit—specific practices, frameworks, and strategies you can implement straight away. Many participants report measurable shifts in their decision-making, stress levels, and leadership presence within weeks of returning.</p><p><strong>The setting matters:</strong></p><p>De Vere Latimer Estate isn't just a venue—it's part of the experience. The historic grounds, the peaceful countryside, the quality of the facilities—all of it creates the right environment for genuine reflection and reset. You'll have space to think, to breathe, to reconnect with what matters.</p><p><strong>Optional one-to-one coaching:</strong></p><p>If you want to go deeper on specific challenges, one-to-one coaching sessions are available. This gives you the chance to work directly on your unique situation—whether that's leadership presence, decision-making under pressure, or navigating a specific transition.</p><p><strong>Networking with peers:</strong></p><p>Beyond the formal programme, there's genuine time to connect with other senior leaders. These conversations often prove as valuable as the structured sessions. You'll build relationships with people who truly understand the pressures and opportunities of senior leadership.</p><p>This is your opportunity to step back, reset, and return to your role with renewed clarity, stronger presence, and the resilience to lead on your own terms.</p>`;