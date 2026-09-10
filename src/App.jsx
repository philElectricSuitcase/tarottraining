import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  Brain,
  CalendarDays,
  Check,
  ChevronDown,
  Compass,
  Eye,
  GraduationCap,
  Heart,
  Menu,
  MessageCircle,
  MoonStar,
  Quote,
  Sparkles,
  Star,
  Users,
  X
} from 'lucide-react';

const services = [
  {
    kicker: '01',
    icon: Brain,
    title: 'Tarot for Mindfulness',
    summary: 'A practical way to slow the noise, notice what is happening now and explore a situation from a fresh angle.',
    body: 'This is not fortune telling. The cards become visual prompts for reflection, helping you notice patterns, assumptions and possibilities that can be hard to see when you are too close to a problem.',
    points: ['Guided reflection', 'Mindfulness prompts', 'Clarity and perspective', 'Useful for work, life and decisions']
  },
  {
    kicker: '02',
    icon: GraduationCap,
    title: 'Tarot Training 1-2-1',
    summary: 'Personal tuition with Phil, built around how you want to use tarot rather than a one-size-fits-all course.',
    body: 'Learn the Major Arcana, how to structure a reading, ask better questions and move beyond memorising fixed meanings. Training is practical, conversational and designed to build confidence quickly.',
    points: ['Major Arcana foundations', 'Reading structure', 'Questioning and interpretation', 'Online or in person']
  },
  {
    kicker: '03',
    icon: Users,
    title: 'Tarot Workshops',
    summary: 'Engaging small-group sessions for retreats, teams, communities and private groups.',
    body: 'A workshop can introduce tarot as a reflective tool, teach simple spreads and give people a safe framework to explore ideas together. Workshops can be light, mindful, developmental or business-focused.',
    points: ['Private groups', 'Retreats and events', 'Team reflection', 'Bespoke themes available']
  },
  {
    kicker: '04',
    icon: MoonStar,
    title: 'Personal Reading',
    summary: 'A calm one-to-one space to explore a question, decision or transition with curiosity rather than prediction.',
    body: 'Phil uses tarot to help you articulate what you already know, uncover what you may be overlooking and create a clearer next step. You leave with reflection, perspective and your own decisions — not somebody else’s prophecy.',
    points: ['30 or 60 minutes', 'Online or in person', 'Personal or professional focus', 'Confidential and conversational']
  }
];

const faqs = [
  ['Do you predict the future?', 'No. Phil uses tarot as a visual framework for reflection, curiosity and better questions. The future is not treated as fixed; the emphasis is on what you notice, decide and do next.'],
  ['Do I need to believe in tarot?', 'Not at all. You can approach a session as a mindfulness exercise, a coaching-style conversation or simply an interesting way to look at a situation differently.'],
  ['Which cards do you teach?', 'Phil’s training begins with the Major Arcana and the Marseille tradition, building confidence in symbolism, story, numbers and relationships between cards before expanding further.'],
  ['Can a workshop be tailored for a business or leadership team?', 'Yes. Sessions can focus on decision-making, clarity, creative thinking, communication, personal values or stepping away from habitual ways of seeing a problem.'],
  ['Can I book online?', 'Yes. Personal readings and one-to-one tuition can be delivered online, and workshops can be arranged in person or virtually depending on the group.']
];

function TarotGlyph({ variant = 0 }) {
  const glyphs = [
    <><circle cx="50" cy="39" r="15"/><path d="M50 14v8M50 56v29M31 70h38M37 85h26"/><path d="M24 39h11M65 39h11"/></>,
    <><path d="M50 17 66 47 50 78 34 47Z"/><circle cx="50" cy="47" r="11"/><path d="M16 47h18M66 47h18M50 17V7M50 88V78"/></>,
    <><path d="M28 76c4-21 13-37 22-48 9 11 18 27 22 48"/><path d="M20 76h60M32 83h36"/><circle cx="50" cy="29" r="7"/></>,
    <><circle cx="50" cy="48" r="28"/><path d="M50 20v56M22 48h56M30 28l40 40M70 28 30 68"/><circle cx="50" cy="48" r="5"/></>
  ];
  return <svg viewBox="0 0 100 100" aria-hidden="true">{glyphs[variant % glyphs.length]}</svg>;
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Personal reading',
    message: ''
  });
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailJsPublicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailJsServiceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const closeNav = () => setNavOpen(false);

  const onFormValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));
  };

  const onEnquirySubmit = async (event) => {
    event.preventDefault();

    if (!emailJsPublicKey || !emailJsServiceId || !emailJsTemplateId) {
      setSubmitState({
        type: 'error',
        message: 'Email is not configured yet. Add REACT_APP_EMAILJS_SERVICE_ID and REACT_APP_EMAILJS_TEMPLATE_ID to your .env file.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: 'idle', message: '' });

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          interest: formData.interest,
          message: formData.message
        },
        {
          publicKey: emailJsPublicKey
        }
      );

      setSubmitState({
        type: 'success',
        message: 'Thanks, your enquiry has been sent.'
      });
      setFormData({
        name: '',
        email: '',
        interest: 'Personal reading',
        message: ''
      });
    } catch (error) {
      const errorStatus = error?.status ? ` (${error.status})` : '';
      const errorText = error?.text ? ` ${error.text}` : '';
      setSubmitState({
        type: 'error',
        message: `Sorry, there was a problem sending your enquiry${errorStatus}.${errorText}`
      });
      console.error('EmailJS send failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeNav}>
          <span className="brand-mark"><Sparkles size={19} /></span>
          <span><strong>Thought Leader</strong><em>| Thought Reader</em></span>
        </a>
        <button className="menu-button" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
          {navOpen ? <X /> : <Menu />}
        </button>
        <nav className={navOpen ? 'nav open' : 'nav'}>
          <a href="#approach" onClick={closeNav}>Approach</a>
          <a href="#services" onClick={closeNav}>Services</a>
          <a href="#about" onClick={closeNav}>About Phil</a>
          <a href="#press" onClick={closeNav}>Press</a>
          <a className="nav-cta" href="#contact" onClick={closeNav}>Book / enquire</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Tarot for clarity, reflection & mindful change</div>
            <h1>See the situation<br/><em>differently.</em></h1>
            <p className="hero-lead">Tarot with Phil Macleod is less about predicting what happens next and more about creating enough space to see what is happening <strong>now</strong> — with greater clarity, curiosity and confidence.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">Explore tarot services <ArrowRight size={18}/></a>
              <a className="text-link" href="#approach">Why Phil uses tarot <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div><Star size={18}/><strong>20+ years</strong><span>working with people & change</span></div>
              <div><Eye size={18}/><strong>Reflection, not prediction</strong><span>a grounded approach to tarot</span></div>
            </div>
          </div>

          <div className="hero-art" aria-label="Tarot inspired artwork">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="tarot-card card-back"><div className="mini-sun"></div></div>
            <div className="tarot-card card-main">
              <div className="card-num">XVII</div>
              <TarotGlyph variant={1}/>
              <div className="card-name">THE STAR</div>
            </div>
            <div className="tarot-card card-side">
              <div className="card-num">IX</div>
              <TarotGlyph variant={2}/>
              <div className="card-name">THE HERMIT</div>
            </div>
            <div className="hero-note"><Quote size={17}/><span>“The cards have no power. Thinking creates a power you can use.”</span></div>
          </div>
        </section>

        <section id="approach" className="manifesto section-pad">
          <div className="section-label">A different way to use tarot</div>
          <div className="manifesto-grid">
            <h2>Not fortune telling.<br/>A framework for <em>insight.</em></h2>
            <div className="manifesto-copy">
              <p>When we are close to a problem, we tend to look at it from the same angle and arrive at the same conclusions. Tarot interrupts that loop.</p>
              <p>Phil uses the imagery, symbolism and story of the cards as prompts. A card does not hand you an answer; it creates a question, a perspective or a possibility that you can explore.</p>
              <p>In that sense, the cards can act as a kind of mirror - helping people articulate what they may already know or feel, but have not yet fully recognised.</p>
              <div className="principle"><Compass/><span><strong>Clarity over certainty.</strong> You make the decision. The cards simply help widen the view.</span></div>
            </div>
          </div>
        </section>

        <section id="services" className="services section-pad">
          <div className="section-head">
            <div><div className="section-label">Ways to work with Phil</div><h2>Four ways to explore tarot.</h2></div>
            <p>Phil works with individuals, entrepreneurs and professionals, using tarot as a reflective tool to explore decisions, periods of change and situations where it can be difficult to see the way forward.</p>
          </div>
          <div className="service-grid">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article className="service-card" key={s.title}>
                  <div className="service-top"><span>{s.kicker}</span><Icon size={24}/></div>
                  <h3>{s.title}</h3>
                  <p className="service-summary">{s.summary}</p>
                  <p>{s.body}</p>
                  <ul>{s.points.map(p => <li key={p}><Check size={15}/>{p}</li>)}</ul>
                  <a href="#contact">Enquire about this <ArrowRight size={16}/></a>
                  <div className="service-glyph"><TarotGlyph variant={i}/></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mirror-section section-pad">
          <div className="mirror-inner">
            <div className="section-label">Phil's perspective</div>
            <h2>I believe tarot is a mirror into your thoughts.</h2>
            <p>It can help you name what feels half-formed, bring hidden assumptions into view and make sense of moments when your next step is not obvious.</p>
            <p>The cards do not decide for you. They create space to think, feel and choose with more clarity.</p>
          </div>
        </section>

        <section className="quote-band">
          <div className="quote-mark">“</div>
          <blockquote>Sometimes just stopping, pausing and reframing the situation can bring more clarity — and, in turn, better results.</blockquote>
          <div className="quote-source">Phil Macleod · 9AM Business</div>
        </section>

        <section id="about" className="about section-pad">
          <div className="about-visual">
            <div className="portrait-placeholder">
              <div className="portrait-initials">PM</div>
              <div className="portrait-line">Thought Leader<br/>Thought Reader</div>
            </div>
            <div className="about-badge"><Sparkles/><span>Supporting people<br/>to thrive</span></div>
          </div>
          <div className="about-copy">
            <div className="section-label">Meet Phil Macleod</div>
            <h2>Human behaviour, hypnosis, mindfulness — and a pack of cards.</h2>
            <p className="large-copy">Phil Macleod is the founder of Thought Leader | Thought Reader. For more than 20 years his work has centred on how people think, change and make decisions.</p>
            <p>His background spans hypnotherapy, psychology, NLP, coaching and performance. Tarot has become another part of that work: not as a way of claiming certainty about the future, but as a visual, structured way to unlock conversation and reflection.</p>
            <p>Phil’s style is calm, direct and practical. The aim is not to tell you what to do. It is to help you hear your own thinking more clearly and move forward with greater awareness.</p>
            <div className="about-stats">
              <div><strong>20+</strong><span>years supporting change</span></div>
              <div><strong>1-2-1</strong><span>personal & professional work</span></div>
              <div><strong>UK + online</strong><span>sessions available</span></div>
            </div>
          </div>
        </section>

        <section id="press" className="press section-pad">
          <div className="press-copy">
            <div className="section-label">Featured thinking</div>
            <h2>Tarot as a tool for clarity is already part of the conversation.</h2>
            <p>Phil has written and spoken about using tarot as a reflective tool for business, coaching, mindfulness and personal growth — challenging the idea that a reading has to be about prediction.</p>
            <a className="article-link" href="https://9ambusiness.co.uk/exclusive/why-tarot-reading-for-business-is-the-next-big-thing/" target="_blank" rel="noreferrer">
              <span><small>9AM BUSINESS · 24 JULY 2026</small><strong>Why Tarot Reading for Business Is the Next Big Thing</strong></span><ArrowRight/>
            </a>
            <div className="press-points">
              <div><MessageCircle/><span>Tarot can create a different question rather than force an answer.</span></div>
              <div><Brain/><span>Awareness is the starting point for meaningful change.</span></div>
              <div><Heart/><span>A calm, supportive environment makes reflection easier.</span></div>
            </div>
          </div>
          <div className="press-image-wrap">
            <img src="/assets/aspire-feature.png" alt="Aspire magazine feature: Supporting People to Thrive, Phil Macleod on Tarot as an Emerging Tool for Coaching and Clarity" />
            <div className="press-caption"><span>ASPIRE · JULY 2026</span><strong>Supporting People to Thrive</strong></div>
          </div>
        </section>

        <section className="process section-pad">
          <div className="section-head compact">
            <div><div className="section-label">A personal reading</div><h2>What actually happens?</h2></div>
            <p>No smoke, no dramatic predictions and no need to know anything about tarot before you arrive.</p>
          </div>
          <div className="steps">
            <div><span>01</span><h3>Bring a focus</h3><p>A question, decision, challenge or simply an area of life you want to understand more clearly.</p></div>
            <div><span>02</span><h3>Explore the cards</h3><p>The imagery creates prompts for conversation, pattern recognition and different ways of seeing what is in front of you.</p></div>
            <div><span>03</span><h3>Reflect, don’t react</h3><p>There is room to notice what resonates, what does not, and what assumptions might be shaping your current view.</p></div>
            <div><span>04</span><h3>Choose your next step</h3><p>You leave with your own insight and direction. The reading supports agency rather than taking it away.</p></div>
          </div>
        </section>

        <section className="faq section-pad">
          <div className="faq-title"><div className="section-label">Questions people ask</div><h2>Tarot, without the mystery.</h2></div>
          <div className="faq-list">
            {faqs.map(([q,a], i) => (
              <button className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                <span className="faq-question">{q}<ChevronDown size={20}/></span>
                <span className="faq-answer">{a}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section-pad">
          <div className="contact-card">
            <div className="contact-copy">
              <div className="section-label light">Start a conversation</div>
              <h2>Curious what the cards might help you <em>notice?</em></h2>
              <p>Book a personal reading, ask about one-to-one training, or tell Phil what you have in mind for a workshop.</p>
              <div className="contact-options">
                <span><CalendarDays size={18}/>Personal readings</span>
                <span><GraduationCap size={18}/>1-2-1 tuition</span>
                <span><Users size={18}/>Private workshops</span>
              </div>
            </div>
            <form className="enquiry-form" onSubmit={onEnquirySubmit}>
              <label>Name<input type="text" name="name" value={formData.name} onChange={onFormValueChange} placeholder="Your name" required /></label>
              <label>Email<input type="email" name="email" value={formData.email} onChange={onFormValueChange} placeholder="you@example.com" required /></label>
              <label>I’m interested in
                <select name="interest" value={formData.interest} onChange={onFormValueChange}>
                  <option>Personal reading</option>
                  <option>Tarot for mindfulness</option>
                  <option>Tarot training 1-2-1</option>
                  <option>Tarot workshop</option>
                </select>
              </label>
              <label>Tell me a little more<textarea rows="4" name="message" value={formData.message} onChange={onFormValueChange} placeholder="What would you like to explore?" required /></label>
              <button className="btn btn-gold" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending enquiry...' : 'Send enquiry'} <ArrowRight size={17}/></button>
              {submitState.message && <small className={submitState.type === 'error' ? 'form-message error' : 'form-message success'}>{submitState.message}</small>}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Sparkles size={18}/></span><span><strong>Thought Leader</strong><em>| Thought Reader</em></span></a>
        <p>Tarot for mindfulness, reflection, learning and personal insight with Phil Macleod.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#about">About</a><a href="#press">Press</a><a href="#contact">Contact</a></div>
        <div className="footer-bottom"><span>© 2026 Thought Leader | Thought Reader</span><span>Reflection, not prediction.</span></div>
      </footer>
    </div>
  );
}

export default App;
