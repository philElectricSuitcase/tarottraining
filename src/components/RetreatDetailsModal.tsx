import React from "react";
import { Dialog, DialogContent, DialogTitle, Box, IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";

interface RetreatDetailsModalProps {
  open: boolean;
  onClose: () => void;
  content: string;
}

const RetreatDetailsModal: React.FC<RetreatDetailsModalProps> = ({ open, onClose, content }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pb: 1 }}>
        <Box sx={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a237e" }}>
          More About This Retreat
        </Box>
        <IconButton onClick={onClose} sx={{ color: "#666" }}>
          <MdClose size={24} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 2 }}>
        <Box
          sx={{
            lineHeight: 1.8,
            fontSize: "1rem",
            color: "#333",
            "& p": {
              mb: 2,
              "&:last-child": {
                mb: 0,
              },
            },
            "& strong": {
              color: "#1a237e",
              fontWeight: 700,
            },
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default RetreatDetailsModal;