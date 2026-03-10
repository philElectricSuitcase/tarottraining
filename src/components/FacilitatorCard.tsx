import React from "react";
import { Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import type { Facilitator } from "../types";

interface FacilitatorCardProps {
  facilitator: Facilitator;
}

const FacilitatorCard: React.FC<FacilitatorCardProps> = ({ facilitator }) => {
  return (
    <Card sx={{ height: "100%", boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="320"
        image={facilitator.image}
        alt={facilitator.name}
      />
      <CardContent>
        <Typography variant="h5" fontWeight={700} color="#1a237e">
          {facilitator.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color="#ff6f00"
          fontWeight={600}
          gutterBottom
        >
          {facilitator.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          {facilitator.bio}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" fontWeight={600} color="#555">
          Expertise: {facilitator.expertise}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FacilitatorCard;