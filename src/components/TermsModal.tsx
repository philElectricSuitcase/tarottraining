import React, { useRef } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Divider,
  Stack,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { TERMS_SECTIONS_DATA, getIconComponent } from "../constants/terms";

interface TermsModalProps {
  open: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ open, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && contentRef.current) {
      const top = el.offsetTop - 16;
      contentRef.current.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={{ "& .MuiDialog-paper": { maxHeight: "90vh", borderRadius: 3 } }}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#1a237e",
        }}
      >
        Terms & Conditions
        <Button onClick={onClose} sx={{ minWidth: "auto", p: 0, color: "#1a237e" }}>
          <Close />
        </Button>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{ display: "flex", overflowY: "hidden", p: 0 }}
      >
        {/* Sidebar */}
        {!isMobile && (
          <Box
            sx={{
              width: 250,
              borderRight: "1px solid #ddd",
              position: "sticky",
              top: 0,
              height: "90vh",
              overflowY: "auto",
              p: 2,
              bgcolor: "#f9f9f9",
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Jump to Section
            </Typography>
            <List dense>
              {TERMS_SECTIONS_DATA.map((section) => {
                const IconComponent = getIconComponent(section.iconName);
                return (
                  <ListItemButton
                    key={section.id}
                    onClick={() => handleScrollTo(section.id)}
                  >
                    <Box sx={{ mr: 1 }}>
                      <IconComponent />
                    </Box>
                    <ListItemText primary={section.title} />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        )}

        {/* Main Content */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 3 }} ref={contentRef}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Thought Leader – Thought Reader Retreat
          </Typography>

          <Typography variant="body2" sx={{ mb: 4 }}>
            Operated by Thought Reader (thought-reader.co.uk). By booking, you confirm that you have read,
            understood, and agree to these Terms & Conditions.
          </Typography>

          {TERMS_SECTIONS_DATA.map((section) => {
            const IconComponent = getIconComponent(section.iconName);
            return (
              <Box key={section.id} id={section.id} sx={{ mb: 4 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <IconComponent />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {section.title}
                  </Typography>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                <Box
                  sx={{
                    "& p": { mb: 1.5, lineHeight: 1.6 },
                    "& ul": { pl: 2, mb: 1.5 },
                    "& li": { mb: 0.5, lineHeight: 1.6 },
                    "& strong": { fontWeight: 600 },
                    "& em": { fontStyle: "italic" },
                  }}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </Box>
            );
          })}

          <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic", opacity: 0.7 }}>
            Last updated: February 2026
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="contained" sx={{ backgroundColor: "#1a237e" }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TermsModal;