import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { MdEventAvailable } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

interface HeaderProps {
  onScheduleClick: () => void;
  onRegisterClick: () => void;
  onTermsClick: () => void;
  onLoginClick: () => void;
  userEmail: string | null;
  userRole: string | null;
  onLogout: () => void;
}

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#1a237e",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
});

const RoleChip = styled(Box)({
  backgroundColor: "#ff6f00",
  color: "white",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: 600,
  display: "inline-block",
});

const Header: React.FC<HeaderProps> = ({
  onScheduleClick,
  onRegisterClick,
  onTermsClick,
  onLoginClick,
  userEmail,
  userRole,
  onLogout,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleScheduleClick = () => {
    onScheduleClick();
    handleMenuClose();
  };

  const handleTermsClick = () => {
    onTermsClick();
    handleMenuClose();
  };

  const handleRegisterClick = () => {
    onRegisterClick();
    handleMenuClose();
  };

  const handleLoginClick = () => {
    onLoginClick();
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    onLogout();
    handleMenuClose();
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <MdEventAvailable size={32} style={{ marginRight: "15px" }} />
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
          }}
        >
          Thought Leader | Thought Reader Retreat - 26-28 August 2026
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={() => setMobileMenuOpen(true)}
              sx={{ ml: 2 }}
            >
              <GiHamburgerMenu size={24} />
            </IconButton>

            <Drawer
              anchor="right"
              open={mobileMenuOpen}
              onClose={handleMenuClose}
            >
              <Box
                sx={{
                  width: 280,
                  backgroundColor: "#1a237e",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2,
                  }}
                >
                  <IconButton
                    color="inherit"
                    onClick={handleMenuClose}
                    sx={{ color: "white" }}
                  >
                    <MdClose size={24} />
                  </IconButton>
                </Box>

                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)" }} />

                <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                  <Button
                    onClick={handleScheduleClick}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      fontSize: "16px",
                      py: 1.5,
                      color: "white",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Schedule
                  </Button>
                  <Button
                    onClick={handleTermsClick}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      fontSize: "16px",
                      py: 1.5,
                      color: "white",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Terms & Conditions
                  </Button>
                  <Button
                    onClick={handleRegisterClick}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      fontSize: "16px",
                      py: 1.5,
                      color: "white",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    Register
                  </Button>

                  <Divider sx={{ my: 1, backgroundColor: "rgba(255,255,255,0.2)" }} />

                  {userRole ? (
                    <>
                      <Box sx={{ p: 1 }}>
                        <RoleChip>{userRole}</RoleChip>
                      </Box>
                      <Button
                        onClick={handleLogoutClick}
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          fontSize: "16px",
                          py: 1.5,
                          color: "white",
                          "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleLoginClick}
                      fullWidth
                      sx={{
                        justifyContent: "flex-start",
                        fontSize: "16px",
                        py: 1.5,
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                      }}
                    >
                      Login
                    </Button>
                  )}
                </Box>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Button color="inherit" onClick={onScheduleClick} sx={{ mr: 2 }}>
              Schedule
            </Button>
            <Button color="inherit" onClick={onTermsClick} sx={{ mr: 2 }}>
              Terms & Conditions
            </Button>
            <Button color="inherit" onClick={onRegisterClick} sx={{ mr: 2 }}>
              Register
            </Button>

            {userRole ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <RoleChip>{userRole}</RoleChip>
                <Button color="inherit" onClick={onLogout} sx={{ fontSize: "12px" }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Button color="inherit" onClick={onLoginClick}>
                Login
              </Button>
            )}
          </>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;