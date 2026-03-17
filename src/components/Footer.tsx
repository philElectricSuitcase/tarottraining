import React from "react";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { getFooterContactInfo, getFooterCopyright } from "../constants/page";
import { getCurrentDomain } from "../utils/domainFilter";

interface FooterProps {
  onRegisterClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onRegisterClick, onTermsClick }) => {
  const currentDomain = getCurrentDomain();
  const contactInfo = getFooterContactInfo(currentDomain);
  const copyrightInfo = getFooterCopyright(currentDomain);

  return (
    <Box sx={{ backgroundColor: "#1a237e", color: "white", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 4, alignItems: "start" }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <FaPhone style={{ marginRight: 8 }} />
              <Typography
                component="a"
                href={contactInfo.phoneHref}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {contactInfo.phone}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FaEnvelope style={{ marginRight: 8 }} />
              <Typography
                component="a"
                href={contactInfo.emailHref}
                sx={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {contactInfo.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography variant="body2" sx={{ mr: 1, opacity: 0.9 }}>
                Follow
              </Typography>
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white" }}
              >
                <FaLinkedin />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Copyright {copyrightInfo.year} {copyrightInfo.text}
              <br />
              {copyrightInfo.location} - {copyrightInfo.dates}
            </Typography>
          </Box>

          <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: { xs: "flex-start", sm: "flex-end" }, flexWrap: "wrap" }}>
              <Button
                variant="text"
                size="small"
                onClick={onTermsClick}
                sx={{ color: "white", "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" } }}
              >
                Terms & Conditions
              </Button>
              <Button
                variant="contained"
                size="large"
                onClick={onRegisterClick}
                sx={{ backgroundColor: "#ff6f00", "&:hover": { backgroundColor: "#e65100" } }}
              >
                Register Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;