import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AccountManagement = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    alert("Account updated successfully!");
  };

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      position="relative"
      sx={{
        backgroundImage: "url('/backgroundlogin.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        position="absolute"
        top={16}
        left={16}
        display="flex"
        alignItems="center"
        gap={1}
        marginLeft={10}
      >
        <img
          src="/logo.png"
          alt="Logo"
          width={90}
          height={90}
          style={{ borderRadius: "50%" }}
        />
        <Typography variant="h6" color="black" fontFamily="Poppins">
          Division of Imus City
        </Typography>
      </Box>
      
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleBackToHome}
          sx={{ position: "absolute", top: 8, left: 8 }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ fontFamily: "Poppins", fontWeight: "bold", textAlign: "center" }}
        >
          Account Management
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              Update Account
            </Button>
          </Box>
        </form>
      </Paper>

      <Box
        component="footer"
        position="absolute"
        bottom={16}
        right={16}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Box display="flex" gap={2} mb={1}>
          <img
            src="/lugo1.png"
            alt="lugo1"
            width={90}
            height={90}
            style={{ borderRadius: "50%" }}
          />
          <img
            src="/lugo2.png"
            alt="lugo2"
            width={90}
            height={90}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Typography
          variant="body2"
          color="white"
          fontStyle="normal"
          fontWeight={600}
          fontFamily="Poppins"
          textAlign="center"
        >
          &copy; 2025 Division Office of Imus City. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default AccountManagement;
