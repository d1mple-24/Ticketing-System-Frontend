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
        background: "linear-gradient(90deg, rgba(0,255,255,1) 0%, rgba(0,128,255,1) 50%, rgba(128,0,255,1) 100%)",
        animation: "gradientAnimation 10s ease infinite",
        "@keyframes gradientAnimation": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        backgroundSize: "200% 200%",
        padding: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
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
    </Box>
  );
};

export default TechnicalAssistanceForm;
