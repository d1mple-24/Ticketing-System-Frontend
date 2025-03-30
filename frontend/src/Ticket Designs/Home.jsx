import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const handleCardClick = (title) => {
    console.log(`${title} card clicked`);

    if (title === "Troubleshooting") {
      window.location.href = "/troubleshooting"; // Redirect to Trouble.jsx
    } else if (title === "Upload Documents") {
      window.location.href = "/upload"; // Redirect to Upload.jsx
    } else if (title === "Technical Assistance") {
      window.location.href = "/technical"; // Redirect to Technical.jsx
    } else if (title === "Account Management") {
      window.location.href = "/account"; // Redirect to Account.jsx
    }
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
    setIsProfileClicked(true);
    setTimeout(() => setIsProfileClicked(false), 200);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={6}
      sx={{
        padding: "0",
        position: "relative",
        backgroundImage: 'url("/backgroundlogin.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          
          zIndex: 0,
        },
      }}
    >
      {/* Logo at the top-left corner */}
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

      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          cursor: "pointer",
          zIndex: 3,
          transition: "transform 0.2s ease-in-out",
          transform: isProfileClicked ? "scale(1.2)" : "scale(1)",
        }}
        onClick={handleProfileClick}
      >
        <img
          src="/admin.png"
          alt="Profile"
          width={30}
          height={30}
          style={{ borderRadius: "50%" }}
        />
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: 10,
          border: "2px solid black",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: 1300,
          minHeight: 250,
        }}
      >
        <Typography
          variant="h4"
          fontSize={30}
          fontWeight="light"
          gutterBottom
          fontFamily="Poppins"
          marginTop={2.5}
        >
          
        </Typography>

        {/* Box layout for cards */}
        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {/* Troubleshooting Card */}
          <Box
            sx={{
              height: 175,
              width: 270,
              padding: 2,
              boxShadow: 5,
              border: "1px solid black",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleCardClick("Troubleshooting")}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src="/trouble.png"
                alt="Troubleshooting"
                width={40}
                height={40}
                style={{ marginBottom: 8 }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                fontFamily="Poppins"
              >
                Troubleshooting
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                Submit a ticket to resolve an issue.
              </Typography>
            </CardContent>
          </Box>

          {/* Upload Documents Card */}
          <Box
            sx={{
              height: 175,
              width: 270,
              padding: 2,
              boxShadow: 5,
              border: "1px solid black",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleCardClick("Upload Documents")}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src="/uplud.png"
                alt="Upload Documents"
                width={40}
                height={40}
                style={{ marginBottom: 8 }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                fontFamily="Poppins"
              >
                Upload Documents
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                Upload documents to your account.
              </Typography>
            </CardContent>
          </Box>

          {/* Technical Assistance Card */}
          <Box
            sx={{
              height: 175,
              width: 270,
              padding: 2,
              boxShadow: 5,
              border: "1px solid black",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleCardClick("Technical Assistance")}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src="/tech.png"
                alt="Technical Assistance"
                width={40}
                height={40}
                style={{ marginBottom: 8 }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                fontFamily="Poppins"
              >
                Technical Assistance
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                Get help with technical problems.
              </Typography>
            </CardContent>
          </Box>

          {/* Account Management Card */}
          <Box
            sx={{
              height: 175,
              width: 270,
              padding: 2,
              boxShadow: 5,
              border: "1px solid black",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleCardClick("Account Management")}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <img
                src="/account.png"
                alt="Account Management"
                width={40}
                height={40}
                style={{ marginBottom: 8 }}
              />
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                fontFamily="Poppins"
              >
                Account Management
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
                fontFamily="Poppins"
              >
                Manage your account settings and preferences.
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Box>

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

export default Home;