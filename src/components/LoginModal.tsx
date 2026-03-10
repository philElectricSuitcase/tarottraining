import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdClose } from "react-icons/md";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onLoginSuccess: (email: string, role: string) => void;
}

const StyledTextField = styled(TextField)({
  marginBottom: "20px",
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "#ff6f00" },
    "&.Mui-focused fieldset": { borderColor: "#ff6f00" },
  },
});

const LoginButton = styled(Button)({
  backgroundColor: "#ff6f00",
  color: "white",
  padding: "12px 40px",
  fontSize: "16px",
  fontWeight: 600,
  "&:hover": { backgroundColor: "#e65100" },
});

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const usersJson = process.env.REACT_APP_USERS;
      
      if (!usersJson) {
        setError("Login configuration not found. Please restart the development server.");
        console.error("REACT_APP_USERS not found. Available env vars:", Object.keys(process.env).filter(k => k.startsWith('REACT_APP_')));
        return;
      }

      let usersData;
      try {
        usersData = JSON.parse(usersJson);
      } catch (parseErr) {
        setError("Login configuration is invalid");
        console.error("Failed to parse REACT_APP_USERS:", parseErr);
        return;
      }

      const user = usersData.users.find(
        (u: { email: string; password: string; role: string }) =>
          u.email === email && u.password === password
      );

      if (user) {
        onLoginSuccess(email, user.role);
        setEmail("");
        setPassword("");
        onClose();
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
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
          width: { xs: "90%", sm: 500 },
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
            Login
          </Typography>
          <IconButton onClick={onClose}>
            <MdClose size={28} />
          </IconButton>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <StyledTextField
            fullWidth
            required
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            fullWidth
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ textAlign: "center" }}>
            <LoginButton type="submit" variant="contained" size="large">
              Login
            </LoginButton>
          </Box>
        </form>

 
      </Box>
    </Modal>
  );
};

export default LoginModal;