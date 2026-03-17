import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/system";
import { FaMapMarkerAlt } from "react-icons/fa";

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

import { INFOGRAPHICS_DATA, getInfographicsSection } from "./constants/infographics";
import { FACILITATORS } from "./constants/facilitators";
import { PRICING_OPTIONS } from "./constants/pricing";
import { SCHEDULE_DATA } from "./constants/schedule";
import { RETREAT_HIGHLIGHTS, RETREAT_DESCRIPTION_BODY, RETREAT_DESCRIPTION_BODY_2, getRetreatDescriptionContent, getRetreatImage } from "./constants/retreatHighlights";
import { VENUE_DATA } from "./constants/venue";
import { HERO_SECTION_DATA, getHeroBackgroundImage } from "./constants/heroSection";
import { getCurrentDomain, filterByDomain } from "./utils/domainFilter";
import RetreatDetailsModal from "./components/RetreatDetailsModal";

interface HeroSectionProps {
  backgroundImage?: string | null;
  backgroundColor?: string;
}

const HeroSection = styled(Box)<HeroSectionProps>(
  ({ backgroundImage, backgroundColor }) => ({
    backgroundImage: backgroundImage
      ? `linear-gradient(rgba(26, 35, 126, 0.75), rgba(26, 35, 126, 0.75)), url('${backgroundImage}')`
      : "linear-gradient(rgba(26, 35, 126, 0.75), rgba(26, 35, 126, 0.75))",
    backgroundColor: backgroundColor || "#1a237e",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    padding: "120px 0 90px",
    textAlign: "center",
    marginTop: "64px",
  })
);

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

  // Get current domain and filter data
  const currentDomain = getCurrentDomain();
  const filteredInfographics = filterByDomain(INFOGRAPHICS_DATA, currentDomain);
  const filteredPricing = filterByDomain(PRICING_OPTIONS, currentDomain);
  const filteredSchedule = filterByDomain(SCHEDULE_DATA, currentDomain);
  const filteredFacilitators = filterByDomain(FACILITATORS, currentDomain);
  const filteredRetreatHighlights = filterByDomain(RETREAT_HIGHLIGHTS, currentDomain);
  const retreatDescriptionContent = getRetreatDescriptionContent(currentDomain);
  const retreatImage = getRetreatImage(currentDomain);
  const retreatImageUrl = getHeroBackgroundImage(retreatImage.image, retreatImage.isLocal);
  const infographicsSection = getInfographicsSection(currentDomain);

  const handleLoginSuccess = (email: string, role: string) => {
    setUserEmail(email);
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserEmail(null);
    setUserRole(null);
  };

  const defaultContactMessage = `${HERO_SECTION_DATA.subtitle}\n\nEvent Details: ${HERO_SECTION_DATA.eventDetails}`;

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

      <HeroSection
        backgroundImage={getHeroBackgroundImage(HERO_SECTION_DATA.backgroundImage, HERO_SECTION_DATA.isLocalImage)}
        backgroundColor={HERO_SECTION_DATA.fallbackBackgroundColor}
      >
        <Container maxWidth="lg">
          <Box sx={{ fontWeight: 800, mb: 2, fontSize: "3.75rem" }}>
            {HERO_SECTION_DATA.mainTitle}
          </Box>
          <Box sx={{ mb: 3, fontWeight: 400, fontSize: "2.125rem" }}>
            {HERO_SECTION_DATA.subtitle}
          </Box>
          <Box sx={{ mb: 3, fontSize: "1.875rem" }}>
            <FaMapMarkerAlt style={{ marginRight: "10px" }} />
            {HERO_SECTION_DATA.location}
          </Box>
          <Box sx={{ mb: 5, opacity: 0.9, fontSize: "1.25rem" }}>
            {HERO_SECTION_DATA.eventDetails}
          </Box>
        </Container>
      </HeroSection>

      <Container maxWidth="xl" sx={{ py: 10 }}>
        <SectionTitle>{retreatDescriptionContent.sectionTitle}</SectionTitle>
        <Box sx={{ fontSize: "1.2rem", fontWeight: 600, color: "#555", mb: 6, textAlign: "center" }}>
          {retreatDescriptionContent.header}
        </Box>
        <Box sx={{ fontSize: "1rem", fontWeight: 400, color: "#666", mb: 6, textAlign: "center" }}>
          {retreatDescriptionContent.subheader}
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(12, 1fr)" }, gap: 6, alignItems: "flex-start" }}>
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "1 / 7" } }}>
            {retreatDescriptionContent.highlightsPosition === "image" ? (
              <>
                <Box
                  component="img"
                  src={retreatImageUrl || retreatImage.image}
                  alt={retreatImage.imageAlt}
                  sx={{ borderRadius: 4, boxShadow: 8, width: "100%", height: "auto", mb: 4 }}
                />
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
                  {filteredRetreatHighlights.map((highlight) => {
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
              </>
            ) : (
              <Box
                component="img"
                src={retreatImageUrl || retreatImage.image}
                alt={retreatImage.imageAlt}
                sx={{ borderRadius: 4, boxShadow: 8, width: "100%", height: "auto", mb: 4 }}
              />
            )}
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
            {retreatDescriptionContent.highlightsPosition === "highlights" && (
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3, mt: 4 }}>
                {filteredRetreatHighlights.map((highlight) => {
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
            )}
          </Box>
        </Box>
      </Container>

      <Box sx={{ background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", py: 10 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Box sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", mb: 2, fontSize: "2.5rem", fontWeight: 800 }}>
              {infographicsSection.sectionTitle}
            </Box>
            <Box sx={{ fontSize: "1.25rem", color: "text.secondary" }}>
              {infographicsSection.sectionSubtitle}
            </Box>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }, gap: 4 }}>
            {filteredInfographics.map((item) => (
              <InfographicCard key={item.id} item={item} />
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#ffffff", py: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "auto" }}>
        <Container maxWidth="lg">
          <SectionTitle>Investment in Lasting Leadership</SectionTitle>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 4, maxWidth: "1200px", width: "100%" }}>
              {filteredPricing.map((option) => (
                <PricingCard key={option.name} option={option} onRegisterClick={(packageName) => {
                  setSelectedPackage(packageName);
                  setContactOpen(true);
                }} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#f8f9fa", py: 10 }}>
        <Container maxWidth="lg">
          <SectionTitle>{VENUE_DATA.subtitle}</SectionTitle>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 5, alignItems: "flex-start" }}>
            <Box>
              <Box sx={{ fontWeight: 700, color: "#1a237e", mb: 2, fontSize: "1.5rem" }}>
                {VENUE_DATA.title}
              </Box>
              <Box sx={{ lineHeight: 1.8, mb: 3, fontSize: "1rem" }}>
                {VENUE_DATA.description1}
              </Box>
              <Box sx={{ lineHeight: 1.8, mb: 3, fontSize: "1rem" }}>
                {VENUE_DATA.description2}
              </Box>
              <Box sx={{ fontWeight: 700, color: "#1a237e", mb: 2, fontSize: "1.1rem" }}>
                {VENUE_DATA.facilitiesTitle}
              </Box>
              <Box component="ul" sx={{ pl: 4, mb: 3 }}>
                {VENUE_DATA.facilities.map((facility) => (
                  <Box key={facility.id} component="li" sx={{ mb: 1 }}>
                    {facility.text}
                  </Box>
                ))}
              </Box>
              <Box sx={{ lineHeight: 1.8, fontSize: "1rem", fontStyle: "italic", color: "#555" }}>
                {VENUE_DATA.closingStatement}
              </Box>
            </Box>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 3 }}>
              {VENUE_DATA.images.map((image) => (
                <Box
                  key={image.id}
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  sx={{ borderRadius: 3, boxShadow: 6, width: "100%", height: "auto", objectFit: "cover" }}
                />
              ))}
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
                {filteredFacilitators.map((fac) => (
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

      <ScheduleDrawer open={scheduleOpen} onClose={() => setScheduleOpen(false)} scheduleData={filteredSchedule} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} selectedPackage={selectedPackage} defaultMessage={defaultContactMessage} />
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} onLoginSuccess={handleLoginSuccess} />
      <RetreatDetailsModal open={retreatDetailsOpen} onClose={() => setRetreatDetailsOpen(false)} content={RETREAT_DESCRIPTION_BODY_2} />

      <Footer onRegisterClick={() => setContactOpen(true)} onTermsClick={() => setTermsOpen(true)} />
    </Box>
  );
}

export default App;