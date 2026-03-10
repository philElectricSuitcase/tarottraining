import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  FaCheckCircle,
  FaStar,
  FaCalendarAlt,
  FaBook,
  FaUtensils,
  FaHotel,
  FaUsers,
  FaAward,
  FaHeartbeat,
  FaTrophy,
  FaGem,
  FaPhone,
} from "react-icons/fa";
import { IoFitnessOutline } from "react-icons/io5";
import type { PricingOption } from "../types";

interface PricingCardProps {
  option: PricingOption;
  onRegisterClick: (packageName: string) => void;
}

const PricingCardStyled = styled(Card, {
  shouldForwardProp: (prop) => prop !== "highlighted",
})<{ highlighted?: boolean }>(({ highlighted }) => ({
  height: "100%",
  position: "relative",
  border: highlighted ? "3px solid #ff6f00" : "1px solid #e0e0e0",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: highlighted
      ? "0 12px 32px rgba(255, 111, 0, 0.3)"
      : "0 12px 28px rgba(0,0,0,0.15)",
  },
}));

const getIconComponent = (iconName: string): React.ComponentType<any> => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Event: FaCalendarAlt,
    Psychology: FaHeartbeat,
    Restaurant: FaUtensils,
    Book: FaBook,
    CalendarToday: FaCalendarAlt,
    Hotel: FaHotel,
    RestaurantMenu: FaUtensils,
    SupportAgent: FaPhone,
    WorkspacePremium: FaTrophy,
    TrackChanges: FaAward,
    Group: FaUsers,
    CheckCircle: FaCheckCircle,
    CoPresent: FaUsers,
    PriorityHigh: FaTrophy,
    KingBed: FaHotel,
    Diamond: FaGem,
    IoFitnessOutline: IoFitnessOutline,
  };
  return iconMap[iconName] || FaCheckCircle;
};

const PricingCard: React.FC<PricingCardProps> = ({ option, onRegisterClick }) => {
  return (
    <PricingCardStyled highlighted={option.highlighted}>
      {option.badge && (
        <Chip
          icon={<FaStar />}
          label={option.badge}
          color="warning"
          sx={{ position: "absolute", top: 16, right: 16 }}
        />
      )}
      <CardContent sx={{ p: 5 }}>
        <Typography variant="h4" fontWeight={700} color="#1a237e">
          {option.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, minHeight: "2.5em" }}
        >
          {option.description}
        </Typography>
        <Typography
          variant="h3"
          fontWeight={800}
          color={option.highlighted ? "#ff6f00" : "#1a237e"}
          sx={{ my: 2 }}
        >
          {option.price}
        </Typography>
        <Divider sx={{ my: 3 }} />
        {option.features.map((feature, index) => {
          const IconComponent = getIconComponent(feature.icon);
          return (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "flex-start", mb: 2, gap: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: option.highlighted ? "#ff6f00" : "#4caf50",
                  fontSize: 20,
                  mt: 0.5,
                  flexShrink: 0,
                }}
              >
                <IconComponent />
              </Box>
              <Typography variant="body2">{feature.text}</Typography>
            </Box>
          );
        })}
        {option.footnote && (
          <Typography
            variant="caption"
            sx={{ mt: 3, display: "block", fontStyle: "italic", color: "#666" }}
          >
            {option.footnote}
          </Typography>
        )}
        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={() => onRegisterClick(option.name)}
          sx={{
            mt: 4,
            py: 2,
            backgroundColor: option.highlighted ? "#ff6f00" : "#1a237e",
            fontSize: "1.1rem",
            "&:hover": {
              backgroundColor: option.highlighted ? "#e65100" : "#0d1b5e",
            },
          }}
        >
          Register {option.name}
        </Button>
      </CardContent>
    </PricingCardStyled>
  );
};

export default PricingCard;