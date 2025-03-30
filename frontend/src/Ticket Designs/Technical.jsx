import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const TechnicalAssistanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    department: "",
    issueType: "",
    description: "",
    consent: false,
  });

  const departments = ["IT", "HR", "Finance", "Admin"];
  const issueTypes = ["Hardware", "Software", "Network", "Other"];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "contactNumber") {
      if (isNaN(value) || value.length > 11) {
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (
      !formData.name ||
      !formData.contactNumber ||
      formData.contactNumber.length !== 11 ||
      !formData.department ||
      !formData.issueType ||
      !formData.consent
    ) {
      alert("Please fill in all required fields and provide consent.");
      return;
    }
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      department: "",
      issueType: "",
      description: "",
      consent: false,
    });
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        backgroundImage: "url('/backgroundlogin.png')", // Add your image URL
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: 2,
        padding: "0"
      }}
    >
      <Box
        sx={{
          backgroundColor: "white", // Semi-transparent background for the form
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 600,
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleBack}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "primary.main",
          }}
        >
          <ArrowBackIosIcon fontSize="medium" />
        </IconButton>

        <Typography
          variant="h4"
          fontFamily="Poppins"
          gutterBottom
          textAlign="center"
        >
          Technical Assistance Form
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mt: 2 }}
        />
        <TextField
          fullWidth
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          inputProps={{ maxLength: 11 }}
          required
          sx={{ mt: 2 }}
          placeholder="Enter an 11-digit number"
        />
        <TextField
          select
          fullWidth
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
          sx={{ mt: 2 }}
        >
          {departments.map((dept, index) => (
            <MenuItem key={index} value={dept}>
              {dept}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          label="Issue Type"
          name="issueType"
          value={formData.issueType}
          onChange={handleChange}
          required
          sx={{ mt: 2 }}
        >
          {issueTypes.map((issue, index) => (
            <MenuItem key={index} value={issue}>
              {issue}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Issue Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Provide a brief description of the issue"
          sx={{ mt: 2 }}
        />

        <FormGroup sx={{ mt: 2 }}>
          <FormControlLabel
            control={
              <Checkbox
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />
            }
            label="I consent to the processing of my information for technical assistance."
          />
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
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

export default TechnicalAssistanceForm;
