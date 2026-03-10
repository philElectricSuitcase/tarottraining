-- Insert all constants data into the database

-- TERMS DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('terms', 'TERMS_SECTIONS_DATA', 'json', '[
  {
    "id": "booking",
    "title": "Booking & Payment",
    "iconName": "Payment",
    "content": "<p>Booking is confirmed once a <strong>50% non-refundable deposit</strong> has been received and a booking confirmation email issued.</p><p>The remaining <strong>50% balance</strong> must be paid no later than <strong>30 days before</strong> the Retreat start date.</p><p>Failure to pay by the deadline may result in cancellation and retention of the deposit. The place may then be offered to another participant.</p><p>Price ( <strong>residential standard & VIP residential</strong>) includes: <strong>2 nights luxury accommodation</strong>, all mindful meals, full workshop programme, retreat journal, and post-retreat digital toolkit. Travel not included.</p>"
  },
  {
    "id": "cancellation",
    "title": "Cancellation by Participant",
    "iconName": "Cancel",
    "content": "<p>All cancellations must be in writing via email. Refunds as follows:</p><ul><li><strong>60+ days:</strong> refund minus 50% deposit</li><li><strong>30–59 days:</strong> 25% refund</li><li><strong>Less than 30 days:</strong> no refund</li></ul><p><em>Travel/cancellation insurance recommended.</em></p>"
  },
  {
    "id": "transfer",
    "title": "Transfer of Booking",
    "iconName": "EventAvailable",
    "content": "<p>Booking may be transferred to another participant up to <strong>14 days before</strong> the Retreat, subject to approval. The replacement participant must accept these Terms and complete required booking information. <strong>No additional fee applies.</strong></p>"
  },
  {
    "id": "minimum",
    "title": "Minimum Participant Numbers",
    "iconName": "EmojiPeople",
    "content": "<p>Retreat requires a minimum number of participants. If minimum is not reached, we may cancel or reschedule. Participants notified at least <strong>21 days in advance</strong>. Options: <strong>full refund</strong>, <strong>rescheduled date</strong>, or <strong>credit voucher</strong>.</p>"
  },
  {
    "id": "organiser",
    "title": "Cancellation / Changes by Organiser",
    "iconName": "Gavel",
    "content": "<p>We may cancel or change venue/facilitators due to operational reasons. At least <strong>14 days'' notice</strong> where possible. Refund options: <strong>full refund</strong>, <strong>transfer to future date</strong>, or <strong>credit voucher valid 24 months</strong>. Liability limited to total amount paid. Not responsible for travel, accommodation, or loss of earnings.</p>"
  },
  {
    "id": "force",
    "title": "Force Majeure",
    "iconName": "Security",
    "content": "<p>We are not liable for failure due to events beyond reasonable control, including <strong>natural disasters, severe weather, pandemics, government restrictions, strikes, terrorism, or venue closure</strong>. Reasonable efforts will be made to reschedule or provide credit/refund.</p>"
  },
  {
    "id": "health",
    "title": "Health, Safety & Participation",
    "iconName": "HealthAndSafety",
    "content": "<p>Participants confirm they are <strong>physically and mentally able to participate</strong>. Must disclose <strong>medical conditions, allergies, or accessibility requirements</strong>. We may remove participants for disruptive or unsafe behaviour. Moderate alcohol may be served; consume responsibly.</p>"
  },
  {
    "id": "conduct",
    "title": "Code of Conduct",
    "iconName": "AssignmentTurnedIn",
    "content": "<p>Participants must behave <strong>respectfully and follow safety guidelines</strong>. Disruptive, abusive, or unsafe behaviour may result in <strong>removal without refund</strong>.</p>"
  },
  {
    "id": "media",
    "title": "Photography & Media",
    "iconName": "Description",
    "content": "<p>Photos/videos may be taken for documentation and marketing. <strong>Notify organiser if you do not wish to appear</strong>. Participants may not record sessions or teaching materials without permission.</p>"
  },
  {
    "id": "programme",
    "title": "Programme Changes",
    "iconName": "EventAvailable",
    "content": "<p>Organisers may change <strong>session timings, structure, facilitators, or activities</strong>. Changes do not constitute grounds for refund.</p>"
  },
  {
    "id": "medical",
    "title": "Medical Disclaimer",
    "iconName": "HealthAndSafety",
    "content": "<p>Retreat is a <strong>personal development experience, not medical or therapeutic treatment</strong>. Participants remain responsible for wellbeing. Consult a healthcare professional if undergoing treatment.</p>"
  },
  {
    "id": "dietary",
    "title": "Dietary Requirements",
    "iconName": "Restaurant",
    "content": "<p>Notify <strong>dietary restrictions/allergies</strong> at booking or at least <strong>14 days before</strong>. While care is taken, allergen-free environment cannot be guaranteed.</p>"
  },
  {
    "id": "property",
    "title": "Property & Venue Responsibility",
    "iconName": "LocalHotel",
    "content": "<p>Participants are <strong>responsible for damage</strong> to venue property or accommodation. Costs for repair/replacement will be charged to responsible participants.</p>"
  },
  {
    "id": "liability",
    "title": "Liability & Insurance",
    "iconName": "Security",
    "content": "<p>Nothing excludes liability for <strong>death, personal injury from negligence, fraud, or legal liability</strong>. Total liability capped at total retreat fee. Participants arrange <strong>travel, medical, and cancellation insurance</strong>.</p>"
  },
  {
    "id": "ip",
    "title": "Intellectual Property & Confidentiality",
    "iconName": "Description",
    "content": "<p>All materials remain <strong>Thought Reader property</strong>. Participants may not <strong>record, photograph, or distribute content</strong> without permission. <strong>Confidentiality must be respected</strong>.</p>"
  },
  {
    "id": "privacy",
    "title": "Data Protection & Privacy",
    "iconName": "Security",
    "content": "<p>We process personal data according to <strong>UK GDPR</strong>. Data used for <strong>booking management, delivering Retreat, and event updates</strong>. Full policy: <strong>thought-reader.co.uk/privacy-policy</strong></p>"
  },
  {
    "id": "consumer",
    "title": "Consumer Rights",
    "iconName": "Gavel",
    "content": "<p><strong>14-day cooling-off does not apply</strong> to bookings for specific-date leisure services (Consumer Contracts Regulations 2013). Nothing affects statutory rights under Consumer Rights Act 2015.</p>"
  },
  {
    "id": "law",
    "title": "Governing Law",
    "iconName": "Gavel",
    "content": "<p>These terms are governed by the laws of <strong>England and Wales</strong>. Disputes subject to exclusive jurisdiction of <strong>English and Welsh courts</strong>.</p>"
  },
  {
    "id": "acceptance",
    "title": "Acceptance",
    "iconName": "AssignmentTurnedIn",
    "content": "<p>By completing payment and receiving booking confirmation, participants confirm they have <strong>read, understood, and agree to these Terms & Conditions</strong>.</p>"
  }
]', '{"count": 19, "type": "terms_and_conditions"}');

-- INFOGRAPHICS DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('infographics', 'INFOGRAPHICS_DATA', 'json', '[
  {
    "id": 1,
    "title": "Decluttering Your Mind",
    "description": "Clear any mental space by organising thoughts, practicing mindfulness, and letting go of unnecessary worries to achieve mental clarity.",
    "iconName": "FaBrain",
    "color": "#B4A7D6"
  },
  {
    "id": 2,
    "title": "Dealing with Stress",
    "description": "Develop healthy coping mechanisms, practice relaxation techniques, and maintain work-life balance to manage stress effectively.",
    "iconName": "FaHandHoldingHeart",
    "color": "#D4A5D4"
  },
  {
    "id": 3,
    "title": "Addressing Imposter Syndrome",
    "description": "Recognise and identify imposter feelings in yourself and others. Build strategies to reframe these thoughts and foster authentic confidence in leadership roles.",
    "iconName": "FaStar",
    "color": "#F0C9A8"
  },
  {
    "id": 4,
    "title": "Improve Communication",
    "description": "Enhance active listening skills, express thoughts clearly, and build meaningful connections through effective communication.",
    "iconName": "FaComments",
    "color": "#A8D8E8"
  },
  {
    "id": 5,
    "title": "Build Trust",
    "description": "Foster authentic relationships through consistency, transparency, reliability, and genuine care for others.",
    "iconName": "FaHandshake",
    "color": "#B8E6D5"
  },
  {
    "id": 6,
    "title": "Setting Achievable Goals",
    "description": "Create achievable goals, break them into manageable steps, track progress, and celebrate milestones for continuous growth.",
    "iconName": "FaBullseye",
    "color": "#F0B8D8"
  }
]', '{"count": 6, "type": "infographic_items"}');

-- FACILITATORS DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('facilitators', 'FACILITATORS', 'json', '[
  {
    "name": "Phil MacLeod",
    "title": "Founder & Lead Coach, Thought Reader",
    "bio": "Executive Leadership Coach, Clinical Hypnotherapist & NLP Specialist. With over 20 years transforming high-achieving professionals and senior leaders, Phil specialises in lighter, powerful NLP techniques, guided hypnosis, and mindset mastery to deliver permanent clarity, resilience, and peak performance. Phil combines stage-hypnosis precision, therapeutic hypnosis, and real-world leadership mentoring to help busy executives step away from overwhelm and step into their next powerful chapter.",
    "image": "DSC03588.jpg",
    "expertise": "Deep mindset resets that last, Rapid release of mental clutter and limiting beliefs, Executive coaching for high-pressure decision-making and authentic leadership presence, Tools for sustained focus, alignment, and personal/professional breakthroughs"
  }
]', '{"count": 1, "type": "facilitators"}');

-- PRICING DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('pricing', 'PRICING_OPTIONS', 'json', '[
  {
    "name": "Non-Residential (Day Program)",
    "description": "Full daytime access for busy executives and London-based leaders seeking high-impact development without overnight commitment.",
    "price": "£1,525 per person",
    "features": [
      {"icon": "Event", "text": "Full 3-day daytime access to the immersive Thought Reader retreat"},
      {"icon": "Psychology", "text": "All workshops, sessions, and facilitated leadership activities"},
      {"icon": "Restaurant", "text": "Daily lunches, refreshments, and welcome dinner included"},
      {"icon": "Book", "text": "Personal retreat journal + Thought Reader permanence toolkit"}
    ],
    "badge": "Flexible",
    "highlighted": false,
    "footnote": "Perfect for senior professionals balancing schedules."
  },
  {
    "name": "Standard Residential",
    "description": "Complete immersion with luxury accommodation and full support – designed for leaders committed to deep, measurable transformation.",
    "price": "£2,595 per person",
    "features": [
      {"icon": "Hotel", "text": "3 days / 2 nights in luxury accommodation"},
      {"icon": "IoFitnessOutline", "text": "Full use of fitness and wellness facilities"},
      {"icon": "Psychology", "text": "All workshops, coaching sessions, and retreat activities"},
      {"icon": "RestaurantMenu", "text": "All meals and refreshments (breakfast, lunches, dinners)"},
      {"icon": "Book", "text": "Personal journal + permanence toolkit"},
      {"icon": "SupportAgent", "text": "30-day post-retreat support framework (resources & accountability)"},
      {"icon": "WorkspacePremium", "text": "Certificate of completion"},
      {"icon": "TrackChanges", "text": "Measurable change framework to track leadership impact"},
      {"icon": "Group", "text": "Intimate cohort – maximum 30 senior participants"}
    ],
    "badge": null,
    "highlighted": true,
    "footnote": "Early Bird (book by 24th March 2026): £2,200 | Group (2+): £2,090 per person"
  },
  {
    "name": "VIP Residential",
    "description": "Elite, high-touch experience for executives seeking maximum personal and leadership leverage from the retreat.",
    "price": "£3,195 per person",
    "features": [
      {"icon": "CheckCircle", "text": "Everything included in Standard Residential"},
      {"icon": "CoPresent", "text": "Private 1:1 coaching session (60 minutes) – tailored to your strategic goals"},
      {"icon": "SupportAgent", "text": "Enhanced post-retreat follow-up (additional in person or calls)"},
      {"icon": "PriorityHigh", "text": "Priority placement and exclusive materials"},
      {"icon": "KingBed", "text": "Upgraded room category (subject to availability)"},
      {"icon": "Diamond", "text": "Deeper investment in personal transformation and sustained executive performance"}
    ],
    "badge": "Premium",
    "highlighted": false,
    "footnote": "Limited places available – recommended for leaders who prioritise individualised / personalised acceleration."
  }
]', '{"count": 3, "type": "pricing_options"}');

-- SCHEDULE DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('schedule', 'SCHEDULE_DATA', 'json', '[
  {
    "day": "Day 1 - Foundations",
    "title": "26 August 2026 - Arrival & Mind Declutter",
    "sessions": [
      {
        "session": 1,
        "activities": [
          {
            "title": "Welcome, Check-in, Registering and Meeting Other Delegates",
            "keyPoints": [
              "Welcome & Check-in (day access): Coffee/tea, quick venue orientation, facilities, health & safety",
              "Registration for people in the residential programme",
              "Opportunity to meet other delegates informally",
              "Refreshments provided"
            ],
            "objectives": ["Build Trust", "Improve Communication"]
          }
        ]
      },
      {
        "session": 2,
        "activities": [
          {
            "title": "Orientation & Venue Overview",
            "keyPoints": [
              "Overview of the retreat venue and facilities",
              "Health and safety briefing"
            ],
            "objectives": []
          }
        ]
      },
      {
        "session": 3,
        "activities": [
          {
            "title": "Setting the Scene",
            "keyPoints": [
              "Distribution of luxury welcome packs: retreat journal, Thought Reader toolset",
              "Overview of retreat objectives and structure",
              "Introduction to core methodology (mindfulness, NLP, hypnosis, reflection)"
            ],
            "objectives": ["Decluttering Your Mind", "Setting Achievable Goals"]
          }
        ]
      },
      {
        "session": 4,
        "activities": [
          {
            "title": "Reading the Room",
            "keyPoints": [
              "Delegates introduce themselves",
              "Share what they are looking to achieve from the course",
              "Share one specific personal or professional challenge they want to overcome"
            ],
            "objectives": ["Build Trust", "Improve Communication"]
          }
        ]
      },
      {
        "session": 5,
        "activities": [
          {
            "title": "Lunch & Networking",
            "keyPoints": ["Lunch / Networking"],
            "objectives": ["Build Trust"]
          }
        ]
      },
      {
        "session": 6,
        "activities": [
          {
            "title": "Mindset Reset",
            "keyPoints": [
              "Group grounding and introductions reinforcement",
              "Hypnosis to release mental clutter",
              "Body scan mindfulness",
              "Understanding stress and its effects",
              "Tools for mental declutter, removing stress, and gaining instant clarity for issue understanding and resolution"
            ],
            "objectives": ["Decluttering Your Mind", "Dealing with Stress"]
          }
        ]
      },
      {
        "session": 7,
        "activities": [
          {
            "title": "Free Time / Leisure",
            "keyPoints": ["Free Time / Leisure (room check-in available for residential guests)"],
            "objectives": []
          }
        ]
      },
      {
        "session": 8,
        "activities": [
          {
            "title": "Welcome Dinner & Evening Reflection",
            "keyPoints": [
              "Welcome Dinner: Informal networking & discussion on retreat intentions",
              "Evening Reflection & Journaling: Guided reflection on day''s mental blocks",
              "Hypnosis for deep relaxation before sleep",
              "Communication challenge activity to reinforce connection"
            ],
            "objectives": ["Build Trust", "Improve Communication", "Decluttering Your Mind", "Dealing with Stress"]
          }
        ]
      }
    ]
  },
  {
    "day": "Day 2 - Deep Tools",
    "title": "27 August 2026 - Clarity, Leadership & Resilience",
    "sessions": [
      {
        "session": 1,
        "activities": [
          {
            "title": "Morning Activation",
            "keyPoints": [
              "Morning Mindfulness: meditation or nature walk",
              "NLP anchoring for calm focused state"
            ],
            "objectives": ["Dealing with Stress", "Decluttering Your Mind"]
          }
        ]
      },
      {
        "session": 2,
        "activities": [
          {
            "title": "Breakfast",
            "keyPoints": ["Breakfast"],
            "objectives": []
          }
        ]
      },
      {
        "session": 3,
        "activities": [
          {
            "title": "Understanding Yourself and Your Team",
            "keyPoints": [
              "Leadership presence drills & role-play",
              "Emotional intelligence exercises to build trust and recognition",
              "Reflective journaling on leadership impact"
            ],
            "objectives": ["Addressing Imposter Syndrome", "Build Trust", "Improve Communication"]
          }
        ]
      },
      {
        "session": 4,
        "activities": [
          {
            "title": "Building Trust",
            "keyPoints": [
              "Exercises focused on valuing yourself and your team",
              "Group activities to strengthen interpersonal trust"
            ],
            "objectives": ["Build Trust", "Improve Communication"]
          }
        ]
      },
      {
        "session": 5,
        "activities": [
          {
            "title": "Lunch & Networking",
            "keyPoints": ["Lunch / Networking"],
            "objectives": ["Build Trust"]
          }
        ]
      },
      {
        "session": 6,
        "activities": [
          {
            "title": "Imposter Syndrome",
            "keyPoints": [
              "Addressing imposter syndrome through reflective exercises",
              "NLP reframing techniques to transform limiting beliefs"
            ],
            "objectives": ["Addressing Imposter Syndrome", "Dealing with Stress"]
          }
        ]
      },
      {
        "session": 7,
        "activities": [
          {
            "title": "Setting Goals Part 1",
            "keyPoints": [
              "NLP goal-mapping for priorities",
              "Hypnosis visualization of desired outcomes",
              "Communication exercise to articulate goals clearly"
            ],
            "objectives": ["Setting Achievable Goals", "Improve Communication"]
          }
        ]
      },
      {
        "session": 8,
        "activities": [
          {
            "title": "Dinner (Residential Package)",
            "keyPoints": ["Dinner for those on the residential package"],
            "objectives": []
          }
        ]
      },
      {
        "session": 9,
        "activities": [
          {
            "title": "Fireside Reflection (Residential Package)",
            "keyPoints": [
              "Hypnosis & mindfulness meditation on personal purpose",
              "Journaling prompts to reinforce clarity & actionable insights"
            ],
            "objectives": ["Dealing with Stress", "Decluttering Your Mind", "Setting Achievable Goals"]
          }
        ]
      }
    ]
  },
  {
    "day": "Day 3 - Integration",
    "title": "28 August 2026 - Permanent Shift & Departure",
    "sessions": [
      {
        "session": 1,
        "activities": [
          {
            "title": "Optional Morning Practice & Breakfast",
            "keyPoints": [
              "Optional Early Morning Mindfulness / Gratitude Walk: Walking meditation on gratitude & intention-setting, NLP anchoring to capture positive state for daily use",
              "Breakfast"
            ],
            "objectives": ["Dealing with Stress", "Decluttering Your Mind"]
          }
        ]
      },
      {
        "session": 2,
        "activities": [
          {
            "title": "Integration & Action Planning Workshop",
            "keyPoints": [
              "Bring all insights together – Create 90-day action plan (SMART steps, milestones, tracking, celebrations)",
              "Reflection & hypnosis to internalize tools for ongoing clarity & resilience",
              "Communication practice: Craft clear personal/professional mission statement"
            ],
            "objectives": ["Setting Achievable Goals", "Improve Communication", "All principles reinforced"]
          }
        ]
      },
      {
        "session": 3,
        "activities": [
          {
            "title": "Checkout & Farewell Circle",
            "keyPoints": [
              "Checkout / Luggage Storage",
              "Farewell Circle & Closing Ceremony: Share insights & commitments, Group reflection on transformation achieved"
            ],
            "objectives": ["Build Trust", "Improve Communication", "Addressing Imposter Syndrome (celebrating confidence gains)"]
          }
        ]
      },
      {
        "session": 4,
        "activities": [
          {
            "title": "Optional Extended Wrap-up & Departure",
            "keyPoints": [
              "Light lunch, final Q&A, networking, certificates, personal commitments",
              "Departure"
            ],
            "objectives": ["Build Trust", "Setting Achievable Goals (final reinforcement)"]
          }
        ]
      }
    ]
  }
]', '{"count": 3, "type": "schedule_days"}');

-- MEDIA TABS DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('media', 'MEDIA_TABS_DATA', 'json', '[
  {
    "tabLabel": "Articles",
    "disableOnClick": true,
    "options": [
      {
        "id": 4,
        "label": "Managing your goals",
        "image": "",
        "contentType": "website",
        "content": "https://9ambusiness.co.uk/exclusive/5-most-effective-ways-for-entrepreneurs-to-stick-to-their-goals/",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      },
      {
        "id": 2,
        "label": "Mindset Not Motivation Achieves Goals.",
        "image": "https://www.preneur-world.com/wp-content/uploads/2025/09/Mindset-Brain-Business.jpg",
        "contentType": "website",
        "content": "https://www.preneur-world.com/new-year-mindset-motivation/",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      },
      {
        "id": 10,
        "label": "AI | Chat Confusion Syndrome",
        "image": "",
        "contentType": "website",
        "content": "https://9ambusiness.co.uk/people-and-policy/hr/is-chat-ai-making-entrepreneurs-more-anxious-meet-the-uk-expert-warning-of-a-new-mental-trap-caused-by-ai-addiction/",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      },
      {
        "id": 11,
        "label": "No need for Mounjaro",
        "image": "https://i2-prod.mirror.co.uk/article36541888.ece/ALTERNATES/s1200e/0_DSC03662.jpg",
        "contentType": "website",
        "content": "https://www.mirror.co.uk/news/uk-news/no-need-mounjaro-hypnotists-10-36541861",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      },
      {
        "id": 12,
        "label": "The Hustle Culture",
        "image": "",
        "contentType": "website",
        "content": "https://9ambusiness.co.uk/exclusive/the-truth-about-hustle-culture-and-how-you-can-lead-differently/",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      },
      {
        "id": 13,
        "label": "Red Flags in Relationships",
        "image": "https://okdiario.com/metabolic/en/wp-content/uploads/2025/09/Couple-talking-to-each-other.jpg",
        "contentType": "website",
        "content": "https://okdiario.com/metabolic/en/psychology/relationships-and-society/relationship-therapist-says-this-common-habit-in-couples-is-actually-a-major-red-flag-19326/amp/",
        "enableContent": false,
        "target": "_blank",
        "imageStyle": "phone"
      }
    ]
  },
  {
    "tabLabel": "Featured In",
    "disableOnClick": false,
    "options": [
      {
        "id": 7,
        "label": "9AM Business",
        "image": "",
        "enableContent": false
      },
      {
        "id": 6,
        "label": "US Observer",
        "image": "",
        "enableContent": false
      },
      {
        "id": 5,
        "label": "US Daily Mirror",
        "image": "",
        "enableContent": false
      },
      {
        "id": 3,
        "label": "UK Daily Express",
        "image": "",
        "enableContent": false
      },
      {
        "id": 4,
        "label": "UK Mirror",
        "image": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032014/untitled-1_21.png?itok=vhIoFwWW",
        "enableContent": false
      },
      {
        "id": 2,
        "label": "Scottish Daily Record",
        "image": "",
        "enableContent": false
      },
      {
        "id": 1,
        "label": "Irish Mirror",
        "image": "",
        "enableContent": false
      }
    ]
  }
]', '{"tabs": 2, "type": "media_tabs"}');

-- RETREAT HIGHLIGHTS DATA
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('retreatHighlights', 'RETREAT_HIGHLIGHTS', 'json', '[
  {
    "id": 1,
    "icon": "MdGroup",
    "text": "Maximum 30 <br>senior leaders",
    "color": "#ff6f00",
    "isHtml": true
  },
  {
    "id": 2,
    "icon": "FaCalendarAlt",
    "text": "26-28 August 2026 <br> 2 nights luxury stay",
    "color": "#ff6f00",
    "isHtml": true
  },
  {
    "id": 3,
    "icon": "MdLocationOn",
    "text": "All-inclusive: <br> meals, program, <br>estate grounds & facilities",
    "color": "#ff6f00",
    "isHtml": true
  }
]', '{"count": 3, "type": "retreat_highlights"}');

-- RETREAT DESCRIPTION HEADER
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('retreatHighlights', 'RETREAT_DESCRIPTION_HEADER', 'text', 'The constant demands pulling you in every direction, leaving little headspace for what really matters –both at work and in life?', '{"type": "header"}');

-- RETREAT DESCRIPTION SUBHEADER
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('retreatHighlights', 'RETREAT_DESCRIPTION_SUBHEADER', 'text', 'You''re not alone. Many senior professionals reach a point where they need to step back, refocus, and reclaim some proper control.', '{"type": "subheader"}');

-- RETREAT DESCRIPTION BODY
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('retreatHighlights', 'RETREAT_DESCRIPTION_BODY', 'html', '<strong>Three Days of Clarity and Focus</strong><br>This three-day luxury boutique retreat is set in peaceful countryside, giving you the perfect environment to breathe, reflect, and recharge fully.<p><strong>No distractions.</strong> Just the room to think deeply and reset your priorities.</p><p><strong>Structured for Maximum Impact</strong><br>Over the retreat, you''ll engage with proven NLP-inspired techniques, guided hypnosis, and reflective journaling. The goal: quiet the mental noise, sharpen your decision-making, and gain -clear clarity on what truly matters.</p><p><strong>Connect with Exceptional Leaders</strong><br>Small group mastery sessions bring together senior executives from diverse industries. The insights from these conversations are often the most powerful, offering perspectives you wouldn''t encounter elsewhere.</p><p><strong>Your Reset Awaits</strong><br>Sometimes a fresh perspective is all it takes. Step away, recharge, and return to your role with renewed focus and presence.</p>', '{"type": "body", "section": 1}');

-- RETREAT DESCRIPTION BODY 2
INSERT INTO constants (source, key_name, data_type, content, metadata) VALUES
('retreatHighlights', 'RETREAT_DESCRIPTION_BODY_2', 'html', '<p>This retreat is more than just a getaway—it''s a transformative experience designed specifically for senior leaders who are ready to make a real change.</p><p><strong>What makes this different:</strong></p><p>Unlike generic wellness retreats, this programme combines cutting-edge psychological techniques with practical leadership development. You''ll work with proven NLP-inspired methodologies that have helped thousands of executives break through mental barriers and unlock their full potential.</p><p><strong>The power of small groups:</strong></p><p>With a maximum of 30 participants, you''ll have genuine space to work deeply. No large conference-style sessions. Instead, you''ll benefit from intimate group work where real breakthroughs happen. The diversity of the group—senior leaders from different industries, sectors, and backgrounds—creates a unique learning environment. You''ll gain fresh perspectives from people facing completely different challenges, yet sharing the same core struggles around pace, pressure, and priorities.</p><p><strong>Practical tools you''ll take home:</strong></p><p>This isn''t theoretical. Every technique, every exercise, every insight is designed to be immediately applicable to your real life. You''ll leave with a personal toolkit—specific practices, frameworks, and strategies you can implement straight away. Many participants report measurable shifts in their decision-making, stress levels, and leadership presence within weeks of returning.</p><p><strong>The setting matters:</strong></p><p>De Vere Latimer Estate isn''t just a venue—it''s part of the experience. The historic grounds, the peaceful countryside, the quality of the facilities—all of it creates the right environment for genuine reflection and reset. You''ll have space to think, to breathe, to reconnect with what matters.</p><p><strong>Optional one-to-one coaching:</strong></p><p>If you want to go deeper on specific challenges, one-to-one coaching sessions are available. This gives you the chance to work directly on your unique situation—whether that''s leadership presence, decision-making under pressure, or navigating a specific transition.</p><p><strong>Networking with peers:</strong></p><p>Beyond the formal programme, there''s genuine time to connect with other senior leaders. These conversations often prove as valuable as the structured sessions. You''ll build relationships with people who truly understand the pressures and opportunities of senior leadership.</p><p>This is your opportunity to step back, reset, and return to your role with renewed clarity, stronger presence, and the resilience to lead on your own terms.</p>', '{"type": "body", "section": 2}');