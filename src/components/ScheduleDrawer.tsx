import React, { useState } from "react";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdClose, MdExpandMore } from "react-icons/md";
import type { ScheduleDay } from "../types";

interface ScheduleDrawerProps {
  open: boolean;
  onClose: () => void;
  scheduleData: ScheduleDay[];
}

const DrawerHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  borderBottom: "2px solid #ff6f00",
  backgroundColor: "#1a237e",
  color: "white",
});

const DayContainer = styled(Box)({
  padding: "24px",
  borderBottom: "1px solid #e0e0e0",
  "&:last-child": {
    borderBottom: "none",
  },
});

const DayTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#1a237e",
  marginBottom: "8px",
});

const DaySubtitle = styled(Typography)({
  fontSize: "0.95rem",
  color: "#666",
  marginBottom: "16px",
});

const SessionBox = styled(Box)({
  marginBottom: "16px",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  overflow: "hidden",
});

const SessionHeader = styled(AccordionSummary)({
  backgroundColor: "#f0f0f0",
  borderLeft: "4px solid #ff6f00",
  "&:hover": {
    backgroundColor: "#e8e8e8",
  },
});

const SessionTitle = styled(Typography)({
  fontWeight: 600,
  color: "#1a237e",
  fontSize: "1rem",
});

const ActivityTitle = styled(Typography)({
  fontWeight: 700,
  color: "#1a237e",
  fontSize: "1.05rem",
  marginBottom: "12px",
});

const KeyPointsList = styled(Box)({
  marginBottom: "16px",
});

const KeyPointItem = styled(Box)({
  display: "flex",
  gap: "12px",
  marginBottom: "8px",
  fontSize: "0.95rem",
  color: "#333",
  "&:before": {
    content: '"•"',
    color: "#ff6f00",
    fontWeight: "bold",
    minWidth: "20px",
  },
});

const ObjectiveChip = styled(Chip)({
  margin: "4px",
  backgroundColor: "#e3f2fd",
  color: "#1a237e",
  fontWeight: 500,
});

const SectionLabel = styled(Typography)({
  fontWeight: 600,
  color: "#1a237e",
  fontSize: "0.85rem",
  marginTop: "12px",
  marginBottom: "8px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
});

const ScheduleDrawer: React.FC<ScheduleDrawerProps> = ({
  open,
  onClose,
  scheduleData,
}) => {
  const [expandedDay, setExpandedDay] = useState<number | false>(0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: { xs: "100%", sm: 500 }, height: "100%" }}>
        <DrawerHeader>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            3-Day Retreat Schedule
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <MdClose size={24} />
          </IconButton>
        </DrawerHeader>

        <Box sx={{ overflowY: "auto", height: "calc(100% - 70px)" }}>
          {scheduleData.map((day, dayIndex) => (
            <DayContainer key={dayIndex}>
              <DayTitle>{day.day}</DayTitle>
              <DaySubtitle>{day.title}</DaySubtitle>

              {day.sessions.map((session, sessionIndex) => (
                <SessionBox key={sessionIndex}>
                  <Accordion
                    defaultExpanded={dayIndex === 0 && sessionIndex === 0}
                    sx={{
                      boxShadow: "none",
                      "&:before": { display: "none" },
                    }}
                  >
                    <SessionHeader expandIcon={<MdExpandMore size={20} />}>
                      <Box>
                        <SessionTitle>
                          Session {session.session}: {session.activities[0]?.title}
                        </SessionTitle>
                      </Box>
                    </SessionHeader>
                    <AccordionDetails sx={{ padding: "16px" }}>
                      {session.activities.map((activity, activityIndex) => (
                        <Box key={activityIndex}>
                          <ActivityTitle>{activity.title}</ActivityTitle>

                          {activity.keyPoints.length > 0 && (
                            <>
                              <SectionLabel>Key Points</SectionLabel>
                              <KeyPointsList>
                                {activity.keyPoints.map((point, pointIndex) => (
                                  <KeyPointItem key={pointIndex}>
                                    {point}
                                  </KeyPointItem>
                                ))}
                              </KeyPointsList>
                            </>
                          )}

                          {activity.objectives.length > 0 && (
                            <>
                              <SectionLabel>Learning Objectives</SectionLabel>
                              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                {activity.objectives.map((objective, objIndex) => (
                                  <ObjectiveChip
                                    key={objIndex}
                                    label={objective}
                                    size="small"
                                  />
                                ))}
                              </Box>
                            </>
                          )}
                        </Box>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </SessionBox>
              ))}
            </DayContainer>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};

export default ScheduleDrawer;