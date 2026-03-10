import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  IconButton,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdClose } from "react-icons/md";
import type { TabOption } from "../constants/media";

interface EditMediaModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (updatedOption: TabOption) => void;
  option: TabOption | null;
}

const StyledTextField = styled(TextField)({
  marginBottom: "16px",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "#ff7132" },
    "&.Mui-focused fieldset": { borderColor: "#ff7132" },
  },
});

const SaveButton = styled(Button)({
  backgroundColor: "#ff7132",
  color: "white",
  padding: "10px 24px",
  fontSize: "14px",
  fontWeight: 600,
  marginRight: "8px",
  "&:hover": { backgroundColor: "#e55f00" },
});

const CancelButton = styled(Button)({
  color: "#ff7132",
  borderColor: "#ff7132",
  padding: "10px 24px",
  fontSize: "14px",
  fontWeight: 600,
  "&:hover": { 
    backgroundColor: "rgba(255, 113, 50, 0.1)",
    borderColor: "#ff7132",
  },
});

const EditMediaModal: React.FC<EditMediaModalProps> = ({
  open,
  onClose,
  onSave,
  option,
}) => {
  const [formData, setFormData] = useState<TabOption | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (option) {
      setFormData({ ...option });
      setError("");
    }
  }, [option, open]);

  const handleChange = (field: keyof TabOption, value: any) => {
    if (formData) {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleSave = () => {
    if (!formData) return;

    // Validation
    if (!formData.label || formData.label.trim() === "") {
      setError("Label is required");
      return;
    }

    if (!formData.image || formData.image.trim() === "") {
      setError("Image URL is required");
      return;
    }

    setError("");
    onSave(formData);
    onClose();
  };

  if (!formData) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          backgroundColor: "#ff7132",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
        }}
      >
        Edit Media Item
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <MdClose size={24} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <StyledTextField
          fullWidth
          label="Label"
          value={formData.label}
          onChange={(e) => handleChange("label", e.target.value)}
          placeholder="Enter media item label"
        />

        <StyledTextField
          fullWidth
          label="Image URL"
          value={formData.image}
          onChange={(e) => handleChange("image", e.target.value)}
          placeholder="Enter image URL"
          multiline
          rows={2}
        />

        {formData.content && (
          <StyledTextField
            fullWidth
            label="Content URL"
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            placeholder="Enter content URL"
            multiline
            rows={2}
          />
        )}

        {formData.footer && (
          <StyledTextField
            fullWidth
            label="Footer Text"
            value={formData.footer}
            onChange={(e) => handleChange("footer", e.target.value)}
            placeholder="Enter footer text"
            multiline
            rows={2}
          />
        )}

        <Typography variant="caption" sx={{ color: "#666", display: "block", mt: 2 }}>
          Image Preview:
        </Typography>
        <Box
          component="img"
          src={formData.image}
          alt="Preview"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=400";
          }}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            marginTop: "8px",
            marginBottom: "16px",
            border: "1px solid #e0e0e0",
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <CancelButton variant="outlined" onClick={onClose}>
            Cancel
          </CancelButton>
          <SaveButton variant="contained" onClick={handleSave}>
            Save Changes
          </SaveButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditMediaModal;