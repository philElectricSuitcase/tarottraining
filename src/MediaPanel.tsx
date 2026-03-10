import React, { SyntheticEvent, useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Typography,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdEdit } from "react-icons/md";
import { MEDIA_TABS_DATA, type TabOption, type TabData } from "./constants/media";
import EditMediaModal from "./components/EditMediaModal";

type ContentType = "video" | "image" | "website" | "html";

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: "3rem",
  paddingBottom: "3rem",
  minHeight: "100vh",
  backgroundColor: "#ffffff",
  fontFamily: "'Satoshi', sans-serif",
  [theme.breakpoints.up("sm")]: {
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: "1.5rem",
  backgroundColor: "#f9f9f9",
  borderRadius: "1rem",
  boxShadow: "0 4px 32px 0 rgba(45, 51, 81, 0.06)",
  "& .MuiTabs-indicator": {
    backgroundColor: "#ff7132",
    height: "3px",
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: "2rem",
    borderRadius: "1.25rem",
  },
  [theme.breakpoints.up("md")]: {
    marginBottom: "2.5rem",
    borderRadius: "1.5rem",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#7e8492",
  fontFamily: "'Satoshi', sans-serif",
  padding: "8px 12px",
  minHeight: "40px",
  "&.Mui-selected": {
    color: "#1d1e25",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.875rem",
    padding: "10px 16px",
    minHeight: "44px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    padding: "12px 20px",
    minHeight: "48px",
  },
}));

type OptionCardProps = {
  disabled?: boolean;
};

const OptionCard = styled(Paper)<OptionCardProps>(({ disabled, theme }) => ({
  padding: "1rem",
  textAlign: "center",
  cursor: disabled ? "not-allowed" : "pointer",
  opacity: disabled ? 0.5 : 1,
  transition: "all 0.3s ease",
  borderRadius: "1rem",
  backgroundColor: "#fff",
  boxShadow: "0 2px 12px 0 rgba(45, 51, 81, 0.08)",
  border: "1px solid #e5e5e5",
  "&:hover": {
    transform: disabled ? "none" : "translateY(-5px)",
    boxShadow: disabled
      ? "0 2px 12px 0 rgba(45, 51, 81, 0.08)"
      : "0 8px 32px rgba(45, 51, 81, 0.15)",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1.25rem",
    borderRadius: "1.25rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: "1.5rem",
    borderRadius: "1.5rem",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: "80px",
  height: "80px",
  margin: "0 auto 0.75rem",
  border: "3px solid #a6d4c7",
  boxShadow: "0 4px 12px rgba(166, 212, 199, 0.3)",
  [theme.breakpoints.up("sm")]: {
    width: "100px",
    height: "100px",
    margin: "0 auto 0.875rem",
    border: "3px solid #a6d4c7",
  },
  [theme.breakpoints.up("md")]: {
    width: "120px",
    height: "120px",
    margin: "0 auto 1rem",
    border: "4px solid #a6d4c7",
  },
}));

const PhoneContainer = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "140px",
  margin: "0 auto 0.75rem",
  background: "#000",
  borderRadius: "16px",
  padding: "6px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "40%",
    height: "14px",
    background: "#000",
    borderRadius: "0 0 16px 16px",
    zIndex: 10,
  },
  [theme.breakpoints.up("sm")]: {
    width: "100px",
    height: "170px",
    margin: "0 auto 0.875rem",
    borderRadius: "18px",
    padding: "7px",
    "&::before": {
      height: "16px",
      borderRadius: "0 0 18px 18px",
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "120px",
    height: "200px",
    margin: "0 auto 1rem",
    borderRadius: "20px",
    padding: "8px",
    "&::before": {
      height: "20px",
      borderRadius: "0 0 20px 20px",
    },
  },
}));

const PhoneScreen = styled("img")(() => ({
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  objectFit: "cover",
  display: "block",
}));

const NewspaperContainer = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "130px",
  margin: "0 auto 0.75rem",
  background: "#f5e6d3",
  borderRadius: "2px",
  padding: "6px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: "1px solid #d4c4b0",
  [theme.breakpoints.up("sm")]: {
    width: "120px",
    height: "155px",
    margin: "0 auto 0.875rem",
    padding: "7px",
  },
  [theme.breakpoints.up("md")]: {
    width: "140px",
    height: "180px",
    margin: "0 auto 1rem",
    padding: "8px",
  },
}));

const NewspaperHeader = styled(Box)(() => ({
  width: "100%",
  padding: "4px 6px",
  borderBottom: "2px solid #000",
  marginBottom: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const NewspaperTitle = styled(Typography)(() => ({
  fontFamily: "'Georgia', serif",
  fontSize: "10px",
  fontWeight: 900,
  color: "#000",
  letterSpacing: "1px",
  margin: 0,
  flex: 1,
}));

const NewspaperDate = styled(Typography)(() => ({
  fontFamily: "'Georgia', serif",
  fontSize: "6px",
  color: "#333",
  margin: 0,
  marginLeft: "4px",
}));

const NewspaperContent = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  overflow: "hidden",
}));

const NewspaperImage = styled("img")(() => ({
  width: "100%",
  height: "70px",
  objectFit: "cover",
  borderRadius: "1px",
  border: "1px solid #999",
}));

const NewspaperText = styled(Box)(() => ({
  fontSize: "5px",
  fontFamily: "'Georgia', serif",
  color: "#000",
  lineHeight: "1.2",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));

const NewspaperLine = styled(Box)(() => ({
  width: "100%",
  height: "1px",
  background: "repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 4px)",
  opacity: 0.6,
}));

const StyledDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    borderRadius: "1.5rem",
    minWidth: "600px",
    maxWidth: "800px",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(() => ({
  backgroundColor: "#ff7132",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1.5rem 1.5rem",
  fontFamily: "'Satoshi', sans-serif",
}));

const VideoContainer = styled(Box)(() => ({
  position: "relative",
  paddingTop: "56.25%",
  backgroundColor: "#000",
  borderRadius: "8px",
  overflow: "hidden",
}));

const StyledVideo = styled("iframe")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: "none",
}));

const StyledImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  display: "block",
}));

const StyledWebsite = styled("iframe")(() => ({
  width: "100%",
  height: "600px",
  border: "none",
  borderRadius: "8px",
}));

const StyledDialogFooter = styled(Box)(() => ({
  backgroundColor: "#f9f9f9",
  borderTop: "1px solid #e5e5e5",
  padding: "1.5rem 1.5rem",
  marginTop: "1rem",
  borderRadius: "0 0 1.5rem 1.5rem",
}));

interface MediaPanelProps {
  userEmail?: string | null;
  userRole?: string | null;
}

const MediaPanel: React.FC<MediaPanelProps> = ({ userEmail, userRole }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedContent, setSelectedContent] = useState<TabOption | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [mediaData, setMediaData] = useState<TabData[]>(MEDIA_TABS_DATA);
  const [editingOption, setEditingOption] = useState<TabOption | null>(null);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  // Load saved media from localStorage on mount
  useEffect(() => {
    const savedMedia = localStorage.getItem("mediaTabsData");
    if (savedMedia) {
      try {
        setMediaData(JSON.parse(savedMedia));
      } catch (error) {
        console.error("Failed to load saved media:", error);
        setMediaData(MEDIA_TABS_DATA);
      }
    }
  }, []);

  // Save media to localStorage whenever it changes
  const saveMediaToStorage = (data: TabData[]) => {
    localStorage.setItem("mediaTabsData", JSON.stringify(data));
    setMediaData(data);
  };

  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const calculateGridColumns = (itemCount: number, screenSize: "xs" | "sm" | "md" | "lg"): string => {
    if (itemCount === 0) {
      return "1fr";
    }
    
    // Mobile (xs)
    if (screenSize === "xs") {
      return "repeat(1, 1fr)";
    }
    
    // Small tablets (sm)
    if (screenSize === "sm") {
      if (itemCount <= 2) return "repeat(1, 1fr)";
      if (itemCount <= 4) return "repeat(2, 1fr)";
      return "repeat(2, 1fr)";
    }
    
    // Medium tablets and up (md)
    if (screenSize === "md") {
      if (itemCount <= 3) return "repeat(1, 1fr)";
      if (itemCount <= 6) return "repeat(3, 1fr)";
      return "repeat(3, 1fr)";
    }
    
    // Large screens (lg)
    if (itemCount <= 3) return "repeat(1, 1fr)";
    if (itemCount <= 6) return "repeat(3, 1fr)";
    return "repeat(4, 1fr)";
  };

  // Detect screen size
  const [screenSize, setScreenSize] = React.useState<"xs" | "sm" | "md" | "lg">("md");

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) setScreenSize("xs");
      else if (width < 960) setScreenSize("sm");
      else if (width < 1280) setScreenSize("md");
      else setScreenSize("lg");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (_event: SyntheticEvent, newValue: number): void => {
    setActiveTab(newValue);
  };

  const handleOptionClick = (option: TabOption): void => {
    if (option.target === "_blank" && option.content) {
      window.open(option.content, "_blank", "noopener,noreferrer");
    } else if (option.enableContent) {
      setSelectedContent(option);
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = (): void => {
    setDialogOpen(false);
    setSelectedContent(null);
  };

  const renderDialogContent = (): React.ReactElement | null => {
    if (!selectedContent || !selectedContent.contentType || !selectedContent.content) {
      return null;
    }

    switch (selectedContent.contentType) {
      case "video":
        return (
          <VideoContainer>
            <StyledVideo
              src={selectedContent.content}
              title={selectedContent.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        );
      case "image":
        return (
          <StyledImage
            src={selectedContent.content}
            alt={selectedContent.label}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800";
            }}
          />
        );
      case "website":
        return (
          <StyledWebsite
            src={selectedContent.content}
            title={selectedContent.label}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        );
      case "html":
        return (
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              overflow: "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: selectedContent.content }}
          />
        );
      default:
        return (
          <Typography variant="body1" color="error">
            Unsupported content type
          </Typography>
        );
    }
  };

  return (
    <StyledContainer maxWidth="xl">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        className="hypnotherapy-intro__title"
      >
 
      </Typography>

      <StyledTabs value={activeTab} onChange={handleTabChange} variant="fullWidth" centered>
        {MEDIA_TABS_DATA.map((tab) => (
          <StyledTab key={tab.tabLabel} label={tab.tabLabel} />
        ))}
      </StyledTabs>

      <Box>
        {MEDIA_TABS_DATA.map((tab, tabIndex) => (
          <Box
            key={tab.tabLabel}
            role="tabpanel"
            hidden={activeTab !== tabIndex}
            sx={{ display: activeTab === tabIndex ? "block" : "none" }}
          >
            {activeTab === tabIndex && (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: calculateGridColumns(tab.options.length, screenSize),
                  gap: screenSize === "xs" ? 2 : screenSize === "sm" ? 2.5 : 3,
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                {tab.options.map((option) => (
                  <Box key={option.id} sx={{ position: "relative" }}>
                    <OptionCard onClick={() => handleOptionClick(option)} elevation={3}>
                      {option.imageStyle === "phone" ? (
                        <PhoneContainer>
                          <PhoneScreen
                            src={option.image}
                            alt={option.label}
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400";
                            }}
                          />
                        </PhoneContainer>
                      ) : option.imageStyle === "newspaper" ? (
                        <NewspaperContainer>
                          <NewspaperHeader>
                            <NewspaperTitle>THE DAILY</NewspaperTitle>
                            <NewspaperDate>TODAY</NewspaperDate>
                          </NewspaperHeader>
                          <NewspaperContent>
                            <NewspaperImage
                              src={option.image}
                              alt={option.label}
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                (e.target as HTMLImageElement).src =
                                  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400";
                              }}
                            />
                            <NewspaperText>
                              <NewspaperLine />
                              <Box sx={{ fontSize: "5px", fontFamily: "'Georgia', serif" }}>
                                {option.label.substring(0, 20)}...
                              </Box>
                            </NewspaperText>
                          </NewspaperContent>
                        </NewspaperContainer>
                      ) : (
                        <StyledAvatar
                          src={option.image}
                          alt={option.label}
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400";
                          }}
                        />
                      )}
                      <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{
                          fontWeight: 600,
                          color: "#1d1e25",
                          fontSize: "0.875rem",
                          lineHeight: 1.4,
                          fontFamily: "'Satoshi', sans-serif",
                        }}
                      >
                        {option.label}
                      </Typography>
                    </OptionCard>
                    {userEmail && (
                      <Tooltip title="Edit this item">
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingOption(option);
                            setEditModalOpen(true);
                          }}
                          sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            backgroundColor: "#ff7132",
                            color: "white",
                            "&:hover": {
                              backgroundColor: "#e55f00",
                            },
                          }}
                          size="small"
                        >
                          <MdEdit size={18} />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <StyledDialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        {selectedContent && (
          <>
            <StyledDialogTitle>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: 600,
                  fontFamily: "'Satoshi', sans-serif",
                  fontSize: "1.25rem",
                }}
              >
                {selectedContent.label}
              </Typography>
              <IconButton onClick={handleCloseDialog} sx={{ color: "#fff", fontSize: "24px" }}>
                x
              </IconButton>
            </StyledDialogTitle>
            <DialogContent sx={{ padding: "24px" }}>
              <Box>{renderDialogContent()}</Box>
            </DialogContent>
            {selectedContent.footer && (
              <StyledDialogFooter>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#7e8492",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    fontFamily: "'Satoshi', sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  {selectedContent.footer}
                </Typography>
              </StyledDialogFooter>
            )}
          </>
        )}
      </StyledDialog>

      <EditMediaModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setEditingOption(null);
        }}
        option={editingOption}
        onSave={(updatedOption) => {
          // Update the media data with the edited option
          const updatedMediaData = mediaData.map((tab) => ({
            ...tab,
            options: tab.options.map((opt) =>
              opt.id === updatedOption.id ? updatedOption : opt
            ),
          }));
          saveMediaToStorage(updatedMediaData);
          setEditingOption(null);
          setEditModalOpen(false);
        }}
      />
    </StyledContainer>
  );
};

export default MediaPanel;