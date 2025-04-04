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
  useTheme,
  useMediaQuery,
  Container,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import 'bootstrap/dist/css/bootstrap.min.css';

const TechnicalAssistanceForm = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
  const [captchaError, setCaptchaError] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

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
    if (value) {
      setCaptchaVerified(true);
      setCaptchaError("");
    } else {
      setCaptchaVerified(false);
      setCaptchaError("Please complete the CAPTCHA verification");
    }
  };

  const handleReview = () => {
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.name || !formData.contactNumber || !formData.department || 
      !formData.issueType || !formData.consent || !captchaVerified) {
      if (!captchaVerified) {
        setCaptchaError("Please complete the CAPTCHA verification");
      }
      alert("Please fill in all required fields and complete the CAPTCHA.");
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

  const goBackToHome = () => {
    navigate("/");
  };

  const handleFinalSubmit = () => {
    setReviewDialogOpen(false);
    setIsSuccessOpen(true);
    console.log("Form Data:", formData);
    console.log("Uploaded File:", uploadedFile);
    setFormData({
      name: "", email: "", contactNumber: "", department: "", issueType: "",
      description: "", consent: false,
    });
    setCaptchaVerified(false);
    setUploadedFile(null);
  };

  const handleCloseSuccessDialog = () => {
    setIsSuccessOpen(false);
    navigate("/");
  };

  return (
    <div className="min-vh-100 position-relative overflow-hidden" style={{
      backgroundImage: "url(/backgroundlogin.png)",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        zIndex: 0,
      }}></div>

      <div className="position-relative flex-grow-1" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="position-absolute d-flex align-items-center gap-2 p-2 p-sm-3 p-md-4 rounded-3"
          style={{
            top: isMobile ? "10px" : isTablet ? "20px" : "30px",
            left: isMobile ? "10px" : isTablet ? "20px" : "50px",
            zIndex: 2,
          }}>
          <img
            src="/logo.png"
            alt="Logo"
            width={isMobile ? 50 : isTablet ? 55 : 60}
            height={isMobile ? 50 : isTablet ? 55 : 60}
            className="rounded-circle"
          />
          <Typography
            variant="h6"
            className="mb-0"
            style={{
              fontFamily: "Poppins",
              fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1.25rem",
              fontWeight: 600,
            }}
          >
            Division of Imus City
          </Typography>
        </div>

        {/* Back Button */}
        <IconButton
          onClick={goBackToHome}
          className="position-absolute rounded-circle"
          style={{
            top: isMobile ? "10px" : isTablet ? "20px" : "30px",
            right: isMobile ? "10px" : isTablet ? "20px" : "30px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: isMobile ? "0.5rem" : isTablet ? "0.75rem" : "1rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.05)",
            }
          }}
          sx={{
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.05)",
            }
          }}
        >
          <ArrowBackIcon 
            fontSize={isMobile ? "medium" : "large"} 
            sx={{ 
              color: theme.palette.primary.main,
              transition: "all 0.3s ease",
            }}
          />
        </IconButton>

        {/* Main Content */}
        <Container className="py-4" style={{
          marginTop: isMobile ? "100px" : isTablet ? "120px" : "140px",
          maxWidth: isMobile ? "95%" : isTablet ? "85%" : "800px",
          position: "relative",
          zIndex: 1,
        }}>
          <Paper elevation={5} className="p-3 p-sm-4 rounded-4" style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}>
            <Typography
              variant="h4"
              className="text-center mb-4"
              style={{
                fontFamily: "Poppins",
                fontSize: isMobile ? "1.5rem" : "1.75rem",
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              Technical Assistance Form
            </Typography>

            <div className="row g-2">
              <div className="col-12 col-sm-6">
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
              </div>
              <div className="col-12 col-sm-6">
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  margin="normal"
                />
              </div>
              <div className="col-12 col-sm-6">
                <TextField
                  fullWidth
                  label="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  inputProps={{ maxLength: 11 }}
                  required
                  margin="normal"
                  placeholder="Enter an 11-digit number"
                />
              </div>
              <div className="col-12 col-sm-6">
                <TextField
                  select
                  fullWidth
                  label="Department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  margin="normal"
                >
                  {departments.map((dept, index) => (
                    <MenuItem key={index} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="col-12">
                <TextField
                  select
                  fullWidth
                  label="Issue Type"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  required
                  margin="normal"
                >
                  {issueTypes.map((issue, index) => (
                    <MenuItem key={index} value={issue}>
                      {issue}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="col-12">
                <div className="row align-items-start">
                  <div className="col-12 col-md-8">
                    <TextField
                      fullWidth
                      label="Specific Problem"
                      name="description"
                      multiline
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      margin="normal"
                      sx={{ 
                        '& .MuiOutlinedInput-root': {
                          height: '100%',
                          minHeight: '120px'
                        }
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <Box 
                      display="flex" 
                      flexDirection="column" 
                      alignItems="center" 
                      sx={{ 
                        mt: 2,
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleCaptchaChange}
                        style={{ 
                          margin: "16px 0",
                          transform: 'scale(0.85)',
                          transformOrigin: 'center'
                        }}
                      />
                      {captchaError && (
                        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                          {captchaError}
                        </Typography>
                      )}
                    </Box>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="mt-4 d-flex justify-content-center gap-2">
              <Button
                variant="contained"
                color="primary"
                onClick={handleReview}
                className="px-3"
                style={{
                  borderRadius: "8px",
                  padding: "6px 16px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setFormData({
                    name: "", email: "", contactNumber: "", department: "",
                    issueType: "", description: "", consent: false,
                  });
                  setCaptchaVerified(false);
                }}
                className="px-3"
                style={{
                  borderRadius: "8px",
                  padding: "6px 16px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                }}
              >
                Clear
              </Button>
            </div>
          </Paper>
        </Container>

        {/* Footer */}
        <div className="d-flex flex-column align-items-center p-1 rounded-top-3"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: "100%",
          backdropFilter: "blur(10px)",
          boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "8px 0",
        }}>
        <div className="d-flex gap-1 mb-1">
          <div className="rounded-circle p-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <img
              src="/lugo1.png"
              alt="lugo1"
              width={isMobile ? 20 : 25}
              height={isMobile ? 20 : 25}
              className="rounded-circle"
            />
          </div>
          <div className="rounded-circle p-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <img
              src="/lugo2.png"
              alt="lugo2"
              width={isMobile ? 20 : 25}
              height={isMobile ? 20 : 25}
              className="rounded-circle"
            />
          </div>
          </div>
          <Typography
            variant="body2"
            className="text-white text-center"
            style={{
              fontFamily: "Poppins",
              fontSize: isMobile ? "0.6rem" : isTablet ? "0.7rem" : "0.75rem",
              fontWeight: 600,
            }}
          >
            &copy; 2025 Division Office of Imus City. All rights reserved.
          </Typography>
        </div>
      </div>

      {/* Review Dialog */}
      <Dialog
        open={reviewDialogOpen}
        onClose={() => setReviewDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            width: isMobile ? "95%" : "80%",
            margin: "auto",
          }
        }}
      >
        <DialogTitle className="text-center" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
          📝 Review Your Submission
        </DialogTitle>
        <DialogContent dividers>
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={formData.name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={formData.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact Number" secondary={formData.contactNumber} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Department" secondary={formData.department} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Issue Type" secondary={formData.issueType} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Issue Description" secondary={formData.description || "No description provided"} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions className="p-3 d-flex justify-content-center gap-2">
          <Button
            onClick={() => setReviewDialogOpen(false)}
            color="secondary"
            variant="outlined"
            className="px-3"
            style={{
              borderRadius: "8px",
              padding: "6px 16px",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
            }}
          >
            Edit
          </Button>
          <Button
            onClick={handleFinalSubmit}
            color="primary"
            variant="contained"
            className="px-3"
            style={{
              borderRadius: "8px",
              padding: "6px 16px",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Dialog */}
      <Dialog
        open={isSuccessOpen}
        onClose={handleCloseSuccessDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            width: isMobile ? "95%" : "80%",
            margin: "auto",
          }
        }}
      >
        <DialogTitle className="text-center" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>
          <CheckCircleIcon 
            color="success" 
            sx={{ 
              fontSize: 40,
              marginBottom: 1
            }} 
          />
          <Typography variant="h5" style={{ color: theme.palette.success.main }}>
            Technical Support Request Submitted!
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <div className="d-grid gap-3 text-center">
            <Typography variant="body1" style={{ fontFamily: "Poppins" }}>
              Your technical support request has been successfully submitted.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our IT team will review your request and get back to you soon.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You will receive updates via email  {formData.email}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions className="p-3 d-flex justify-content-center">
          <Button
            onClick={handleCloseSuccessDialog}
            color="primary"
            variant="contained"
            className="px-4"
            style={{
              borderRadius: "8px",
              padding: "8px 24px",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Return to Home
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
    </div>
  );
};

export default TechnicalAssistanceForm;
