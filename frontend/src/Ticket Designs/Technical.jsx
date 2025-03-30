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
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReCAPTCHA from "react-google-recaptcha";

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

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

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

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleReview = () => {
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
      !formData.consent ||
      !captchaVerified
    ) {
      alert("Please fill in all required fields, provide consent, and complete the CAPTCHA.");
      return;
    }
    setReviewDialogOpen(true);
  };

  const handleSubmit = () => {
    setSnackbarOpen(true);
    setReviewDialogOpen(false);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      department: "",
      issueType: "",
      description: "",
      consent: false,
    });
    setCaptchaVerified(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
        backgroundImage: "url('/backgroundlogin.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: 2,
        padding: "0",
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
        <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Issue Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a brief description of the issue"
          />
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
            style={{ marginLeft: 16 }}
          />
        </Box>

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
          onClick={handleReview}
          fullWidth
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>

      {/* Review Dialog */}
      <Dialog open={reviewDialogOpen} onClose={() => setReviewDialogOpen(false)}>
        <DialogTitle>Review Your Information</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={formData.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={formData.email} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Contact Number"
                secondary={formData.contactNumber}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Department"
                secondary={formData.department}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Issue Type" secondary={formData.issueType} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Issue Description"
                secondary={formData.description || "No description provided"}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReviewDialogOpen(false)} color="secondary">
            Edit
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          ✅ Your form has been successfully submitted!
        </Alert>
      </Snackbar>

      {/* Footer */}
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
