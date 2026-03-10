import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdClose } from "react-icons/md";
import type { FormData, FormField } from "../types";

// @ts-ignore
import emailjs from "@emailjs/browser";

// Initialize EmailJS with public key from environment variable
const emailjsPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
if (emailjsPublicKey) {
  emailjs.init(emailjsPublicKey);
} else {
  console.warn("EmailJS public key not found in environment variables");
}

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  selectedPackage?: string | null;
}

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "#ff6f00" },
    "&.Mui-focused fieldset": { borderColor: "#ff6f00" },
  },
});

const SubmitButton = styled(Button)({
  backgroundColor: "#ff6f00",
  color: "white",
  padding: "12px 40px",
  fontSize: "16px",
  fontWeight: 600,
  "&:hover": { backgroundColor: "#e65100" },
});

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose, selectedPackage }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    position: "",
    phone: "",
    message: selectedPackage ? `I am interested in the ${selectedPackage} package.` : "",
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (open && selectedPackage) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in the ${selectedPackage} package.`,
      }));
    }
  }, [open, selectedPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as FormField;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_9vxttof",
        "template_my3oogc",
        {
          to_email: "retreats@thought-reader.co.uk",
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          position: formData.position,
          phone: formData.phone,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          position: "",
          phone: "",
          message: "",
        });
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit registration. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 700 },
          maxHeight: "90vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" fontWeight={700} color="#1a237e">
            Register Your Interest
          </Typography>
          <IconButton onClick={onClose}>
            <MdClose size={28} />
          </IconButton>
        </Box>

        {submitted ? (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h5" color="success.main" fontWeight={600} gutterBottom>
              Thank You!
            </Typography>
            <Typography>We'll contact you shortly with next steps.</Typography>
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3 }}>
              <Box>
                <StyledTextField
                  fullWidth
                  required
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <StyledTextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <StyledTextField
                  fullWidth
                  required
                  label="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Box>
              <Box>
                <StyledTextField
                  fullWidth
                  required
                  label="Position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ gridColumn: "1 / -1" }}>
                <StyledTextField
                  fullWidth
                  required
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ gridColumn: "1 / -1" }}>
                <StyledTextField
                  fullWidth
                  label="Questions / Comments"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </Box>
              <Box sx={{ gridColumn: "1 / -1", textAlign: "center" }}>
                <SubmitButton type="submit" variant="contained" size="large">
                  Submit Registration
                </SubmitButton>
              </Box>
            </Box>
          </form>
        )}
      </Box>
    </Modal>
  );
};

export default ContactModal;