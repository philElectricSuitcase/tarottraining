import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import {
  FaBrain,
  FaComments,
  FaHandshake,
  FaBullseye,
  FaStar,
} from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import type { InfographicItem } from "../types";

interface InfographicCardProps {
  item: InfographicItem;
}

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<{ bgColor: string }>(({ bgColor }) => ({
  padding: "30px",
  textAlign: "center",
  background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`,
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 48px rgba(0,0,0,0.15)",
  },
}));

const IconWrapper = styled(Box)({
  fontSize: "48px",
  marginBottom: "20px",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
});

const iconMap: Record<string, React.ReactNode> = {
  FaBrain: <FaBrain />,
  FaHandHoldingHeart: <FaHandHoldingHeart />,
  FaStar: <FaStar />,
  FaComments: <FaComments />,
  FaHandshake: <FaHandshake />,
  FaBullseye: <FaBullseye />,
};

const InfographicCard: React.FC<InfographicCardProps> = ({ item }) => {
  const icon = iconMap[item.iconName] || <FaBrain />;

  return (
    <StyledPaper bgColor={item.color} elevation={4}>
      <IconWrapper>{icon}</IconWrapper>
      <Typography
        variant="h6"
        fontWeight={700}
        color="#2c3e50"
        mb={2}
        sx={{ textTransform: "uppercase", letterSpacing: 1 }}
      >
        {item.title}
      </Typography>
      <Typography variant="body2" color="#34495e" sx={{ opacity: 0.95 }}>
        {item.description}
      </Typography>
    </StyledPaper>
  );
};

export default InfographicCard;