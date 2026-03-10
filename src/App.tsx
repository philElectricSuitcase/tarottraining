import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdGroup, MdLocationOn } from "react-icons/md";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScheduleDrawer from "./components/ScheduleDrawer";
import ContactModal from "./components/ContactModal";
import TermsModal from "./components/TermsModal";
import LoginModal from "./components/LoginModal";
import PricingCard from "./components/PricingCard";
import InfographicCard from "./components/InfographicCard";
import FacilitatorCard from "./components/FacilitatorCard";
import MediaPanel from "./MediaPanel";

import { INFOGRAPHICS_DATA } from "./constants/infographics";
import { FACILITATORS } from "./constants/facilitators";
import { PRICING_OPTIONS } from "./constants/pricing";
import { SCHEDULE_DATA } from "./constants/schedule";
import { RETREAT_HIGHLIGHTS, RETREAT_DESCRIPTION_HEADER, RETREAT_DESCRIPTION_SUBHEADER, RETREAT_DESCRIPTION_BODY, RETREAT_DESCRIPTION_BODY_2 } from "./constants/retreatHighlights";
import RetreatDetailsModal from "./components/RetreatDetailsModal";
import type { InfographicItem, PricingOption, Facilitator, ScheduleDay } from "./types";

const HeroSection = styled(Box)({
  backgroundImage:
    "linear-gradient(rgba(26, 35, 126, 0.75), rgba(26, 35, 126, 0.75)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  padding: "120px 0 90px",
  textAlign: "center",
  marginTop: "64px",
});

const SectionTitle = styled(Box)({
  fontWeight: 700,
  marginBottom: "40px",
  color: "#1a237e",
  position: "relative",
  paddingBottom: "15px",
  textAlign: "center",
  fontSize: "2.5rem",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100px",
    height: "5px",
    backgroundColor: "#ff6f00",
    borderRadius: "3px",
  },
});

function App(): React.ReactElement {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [termsOpen, setTermsOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [retreatDetailsOpen, setRetreatDetailsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const handleLoginSuccess = (email: string, role: string) => {
    setUserEmail(email);
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserEmail(null);
    setUserRole(null);
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header
        onScheduleClick={() => setScheduleOpen(true)}
        onRegisterClick={() => setContactOpen(true)}
        onTermsClick={() => setTermsOpen(true)}
        onLoginClick={() => setLoginOpen(true)}
        userEmail={userEmail}
        userRole={userRole}
        onLogout={handleLogout}
      />

      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ fontWeight: 800, mb: 2, fontSize: "3.75rem" }}>
            Thought Leader | Thought Reader
          </Box>
          <Box sx={{ mb: 3, fontWeight: 400, fontSize: "2.125rem" }}>
            Recharge, Refocus, Reclaim Your Power
          </Box>
          <Box sx={{ mb: 3, fontSize: "1.875rem" }}>
            <FaMapMarkerAlt style={{ marginRight: "10px" }} />
            De Vere Latimer Estate, Buckinghamshire
          </Box>
          <Box sx={{ mb: 5, opacity: 0.9, fontSize: "1.25rem" }}>
            26-28 August 2026 - Maximum 30 participants
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <SectionTitle>Are you fed up with the relentless pace? </SectionTitle>
        <Box sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#555", mb: 6, textAlign: "center" }}>
          {RETREAT_DESCRIPTION_HEADER}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 6, alignItems: "flex-start" }}>
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "1 / 7" } }}>
            <Box
              component="img"
              src="https://www.companyawaydays.com/images/accommodation/hotels/buckinghamshire/de-vere-latimer-estate/pic7.jpg"
              alt="Latimer Estate"
              sx={{ borderRadius: 4, boxShadow: 8, width: "100%", height: "auto", mb: 4 }}
            />
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
              {RETREAT_HIGHLIGHTS.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Box key={highlight.id} sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", fontSize: "1.1rem", p: 2, backgroundColor: "#f8f9fa", borderRadius: 2, boxShadow: 2 }}>
                    <IconComponent size={28} style={{ marginBottom: 12, color: highlight.color, flexShrink: 0 }} />
                    {highlight.isHtml ? (
                      <Box dangerouslySetInnerHTML={{ __html: highlight.text }} />
                    ) : (
                      <strong>{highlight.text}</strong>                      
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box sx={{ p: 4, backgroundColor: "#f8f9fa", borderRadius: 4, boxShadow: 6, gridColumn: { xs: "1 / -1", md: "7 / 13" } }}>
        
            <Box sx={{ lineHeight: 1.8, mb: 4, fontSize: "1.1rem" }} dangerouslySetInnerHTML={{ __html: RETREAT_DESCRIPTION_BODY }} />
            <Box sx={{ mb: 4 }}>
              <Box
                component="button"
                onClick={() => setRetreatDetailsOpen(true)}
                sx={{
                  backgroundColor: "#ff6f00",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "10px 24px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e55f00",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(255, 111, 0, 0.3)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                More
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", mb: 2, fontSize: "2.5rem", fontWeight: 800 }}>
              Core Themes of the Retreat
            </Box>
            <Box sx={{ fontSize: "1.25rem", color: "text.secondary" }}>
              Essential strategies for senior leaders
            </Box>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
            {INFOGRAPHICS_DATA.map((item) => (
              <InfographicCard key={item.id} item={item} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#ffffff", py: 10 }}>
        <Container maxWidth="lg">
          <SectionTitle>Investment in Lasting Leadership</SectionTitle>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
            {PRICING_OPTIONS.map((option) => (
              <PricingCard key={option.name} option={option} onRegisterClick={(packageName) => {
                setSelectedPackage(packageName);
                setContactOpen(true);
              }} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#f8f9fa", py: 10 }}>
        <Container maxWidth="lg">
          <SectionTitle>The Venue - De Vere Latimer Estate</SectionTitle>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5, alignItems: "flex-start" }}>
            <Box>
              <Box sx={{ fontWeight: 700, color: "#1a237e", mb: 2, fontSize: "1.5rem" }}>
                Historic countryside reset near London
              </Box>
              <Box sx={{ lineHeight: 1.8, mb: 3, fontSize: "1rem" }}>
                Nestled in the tranquil Buckinghamshire countryside, De Vere Latimer Estate offers an unforgettable escape steeped in over 800 years of history. First recorded as a manor in 1194 AD, this magnificent Victorian mansion—rebuilt in 1838—served as one of Britain's most secretive wartime intelligence hubs during World War II, where MI5 and MI6 extracted vital information from high-ranking prisoners in a top-secret operation comparable to Bletchley Park.
              </Box>
              <Box sx={{ lineHeight: 1.8, mb: 3, fontSize: "1rem" }}>
                Today, it blends timeless Tudor-style grandeur with contemporary luxury across 30 acres of peaceful grounds overlooking the stunning Chess Valley. Perfectly positioned for disconnection yet effortless access—just minutes from Junction 18 of the M25 and Chalfont & Latimer station (direct Metropolitan Line to central London)—it's the ideal venue for a profound mindset reset.
              </Box>
              <Box sx={{ fontWeight: 700, color: "#1a237e", mb: 2, fontSize: "1.1rem" }}>
                Key Facilities & Experiences
              </Box>
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                <Box component="li" sx={{ mb: 1 }}>Indoor swimming pool, fully equipped gym, sauna, and wellness spaces</Box>
                <Box component="li" sx={{ mb: 1 }}>Fine dining in the elegant 1838 Restaurant</Box>
                <Box component="li" sx={{ mb: 1 }}>Versatile, modern meeting and workshop rooms with historic charm</Box>
                <Box component="li" sx={{ mb: 1 }}>Extensive formal gardens and grounds for mindful walks, reflection, and movement</Box>
                <Box component="li" sx={{ mb: 1 }}>Seamless blend of original period features and 21st-century comfort after a multimillion-pound refurbishment</Box>
              </Box>
              <Box sx={{ lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", color: "#555" }}>
                This historic haven provides the serene, inspiring backdrop for your 3-day Thought Leader Retreat—far enough from the city to truly unplug, close enough to make the journey seamless. Recharge amid heritage, nature, and luxury, emerging aligned and empowered.
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
              <Box
                component="img"
                src={require("./images/1.jpg")}
                alt="De Vere Latimer Estate - Image 1"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/2.jpg")}
                alt="De Vere Latimer Estate - Image 2"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/3.jpg")}
                alt="De Vere Latimer Estate - Image 3"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/4.jpg")}
                alt="De Vere Latimer Estate - Image 4"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/5.jpg")}
                alt="De Vere Latimer Estate - Image 5"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/6.jpg")}
                alt="De Vere Latimer Estate - Image 6"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/7.jpg")}
                alt="De Vere Latimer Estate - Image 7"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
              <Box
                component="img"
                src={require("./images/8.jpg")}
                alt="De Vere Latimer Estate - Image 8"
                sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
        <Container maxWidth="xl">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(12, 1fr)" }, gap: 6, alignItems: "flex-start" }}>
            <Box sx={{ gridColumn: { xs: "1 / -1", lg: "1 / 7" } }}>
              <SectionTitle>Your Facilitator</SectionTitle>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr" }, gap: 4 }}>
                {FACILITATORS.map((fac) => (
                  <FacilitatorCard key={fac.name} facilitator={fac} />
                ))}
              </Box>
            </Box>
            <Box sx={{ gridColumn: { xs: "1 / -1", lg: "7 / 13" } }}>
              <SectionTitle>Explore Media Content</SectionTitle>
              <MediaPanel userEmail={userEmail} userRole={userRole} />
            </Box>
          </Box>
        </Container>
      </Box>

      <ScheduleDrawer open={scheduleOpen} onClose={() => setScheduleOpen(false)} scheduleData={SCHEDULE_DATA} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} selectedPackage={selectedPackage} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLoginSuccess={handleLoginSuccess} />
      <RetreatDetailsModal open={retreatDetailsOpen} onClose={() => setRetreatDetailsOpen(false)} content={RETREAT_DESCRIPTION_BODY_2} />

      <Footer onRegisterClick={() => setContactOpen(true)} onTermsClick={() => setTermsOpen(true)} />
    </Box>
  );
}

export default App;