import React, { useState } from "react";
import {
    TextField, MenuItem, Button, Typography,
    Container, Paper, IconButton, Box, Dialog,
    DialogTitle, DialogContent, DialogActions,
    InputAdornment, useTheme, useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';

const Trouble = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        location: "",
        date: "",
        equipmentType: "",
        model: "",
        serialNo: "",
        priority: "",
        description: "",
    });

    const [uploadedFile, setUploadedFile] = useState(null);
    const [isReviewOpen, setIsReviewOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [captchaError, setCaptchaError] = useState("");

    const priorityLevels = ["Low", "Medium", "High", "Critical"];
    const locations = ["SDO - Imus City", "Schools - Imus City"];
    const equipmentModels = ["Model A", "Model B", "Model C", "Model D"];
    const equipmentTypes = ["Computer", "Printer", "Scanner", "Other"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleReview = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            setCaptchaError("Please complete the CAPTCHA verification");
            return;
        }
        setIsReviewOpen(true);
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

    const handleFinalSubmit = () => {
        setIsReviewOpen(false);
        setIsSuccessOpen(true);
        console.log("Form Data:", formData);
        console.log("Uploaded File:", uploadedFile);
        setFormData({
            name: "", email: "", location: "", date: "", equipmentType: "",
            model: "", serialNo: "", priority: "", description: "",
        });
        setUploadedFile(null);
        setCaptchaVerified(false);
    };

    const handleCloseSuccessDialog = () => {
        setIsSuccessOpen(false);
        navigate("/");
    };

    const goBackToHome = () => {
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

            {/* Wrapper for content to ensure proper z-index */}
            <div className="position-relative" style={{ zIndex: 1 }}>
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
                    }}
                >
                    <ArrowBackIcon fontSize={isMobile ? "medium" : "large"} />
                </IconButton>

                {/* Main Content */}
                <Container className="py-4" style={{
                    marginTop: isMobile ? "100px" : isTablet ? "120px" : "140px",
                    maxWidth: isMobile ? "95%" : isTablet ? "85%" : "800px",
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "calc(100vh - 140px)",
                }}>
                    <Paper elevation={5} className="p-3 p-sm-4 rounded-4 flex-grow-1" style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        maxWidth: "100%",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
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
                            IT Support Form
                        </Typography>

                        <form onSubmit={handleReview}>
                            <Typography
                                variant="h6"
                                className="mt-2 mb-3"
                                style={{
                                    fontFamily: "Poppins",
                                    fontSize: isMobile ? "1rem" : "1.1rem",
                                    fontWeight: "bold",
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Personal Information
                            </Typography>
                            <div className="row g-2">
                                <div className="col-12 col-sm-6">
                                    <TextField
                                        fullWidth
                                        label="Ticket ID"
                                        type="number"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                        InputProps={{
                                            endAdornment: formData.name && (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setFormData({ ...formData, name: "" })}>
                                                        <ClearIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
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
                                        InputProps={{
                                            endAdornment: formData.email && (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setFormData({ ...formData, email: "" })}>
                                                        <ClearIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                            </div>

                            <Typography
                                variant="h6"
                                className="mt-4 mb-3"
                                style={{
                                    fontFamily: "Poppins",
                                    fontSize: isMobile ? "1rem" : "1.1rem",
                                    fontWeight: "bold",
                                    color: theme.palette.primary.main,
                                }}
                            >
                                Request Details
                            </Typography>
                            <div className="row g-2">
                                <div className="col-12">
                                    <TextField
                                        select
                                        fullWidth
                                        label="Location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                    >
                                        {locations.map((loc, index) => (
                                            <MenuItem key={index} value={loc}>
                                                {loc}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <TextField
                                        fullWidth
                                        label="Date of Request"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                        InputLabelProps={{ shrink: true }}
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <TextField
                                        select
                                        fullWidth
                                        label="Type of Equipment"
                                        name="equipmentType"
                                        value={formData.equipmentType}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                    >
                                        {equipmentTypes.map((type, index) => (
                                            <MenuItem key={index} value={type}>
                                                {type}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <TextField
                                        select
                                        fullWidth
                                        label="Model of Equipment"
                                        name="model"
                                        value={formData.model}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                    >
                                        {equipmentModels.map((model, index) => (
                                            <MenuItem key={index} value={model}>
                                                {model}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <TextField
                                        fullWidth
                                        label="Serial No."
                                        name="serialNo"
                                        type="number"
                                        value={formData.serialNo}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                    />
                                </div>
                                <div className="col-12">
                                    <TextField
                                        select
                                        fullWidth
                                        label="Priority Level"
                                        name="priority"
                                        value={formData.priority}
                                        onChange={handleChange}
                                        required
                                        margin="normal"
                                    >
                                        {priorityLevels.map((level, index) => (
                                            <MenuItem key={index} value={level}>
                                                {level}
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

                            <div className="mt-4 d-flex flex-column align-items-center gap-2">
                                <Button
                                    variant="contained"
                                    component="label"
                                    startIcon={<CloudUploadIcon />}
                                    className="w-100 w-sm-auto px-4"
                                    style={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "8px 24px",
                                    }}
                                >
                                    Upload File or Photo
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*,application/pdf"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                const file = e.target.files[0];
                                                setUploadedFile(file.name);
                                                alert(`File "${file.name}" uploaded successfully.`);
                                            }
                                        }}
                                    />
                                </Button>

                                {uploadedFile && (
                                    <Typography variant="body2" color="textSecondary" className="mt-1">
                                        📎 {uploadedFile} attached
                                    </Typography>
                                )}
                            </div>

                            <div className="mt-4 d-flex justify-content-center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="w-100 w-sm-auto px-5"
                                    style={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: "white",
                                        borderRadius: "8px",
                                        padding: "10px 32px",
                                    }}
                                >
                                    Review Submission
                                </Button>
                            </div>
                        </form>
                    </Paper>

                    
                  {/* Footer */}
        <div className="d-flex flex-column align-items-center p-1 p-sm-2 p-md-3 rounded-top-3 mt-4"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            width: isMobile ? "80%" : "auto",
            maxWidth: "500px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
            margin: "0 auto",
          }}>
          <div className="d-flex gap-1 gap-sm-2 gap-md-3 mb-1">
            <div className="rounded-circle p-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <img
                src="/lugo1.png"
                alt="lugo1"
                width={isMobile ? 25 : isTablet ? 35 : 40}
                height={isMobile ? 25 : isTablet ? 35 : 40}
                className="rounded-circle"
              />
            </div>
            <div className="rounded-circle p-1" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
              <img
                src="/lugo2.png"
                alt="lugo2"
                width={isMobile ? 25 : isTablet ? 35 : 40}
                height={isMobile ? 25 : isTablet ? 35 : 40}
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
                </Container>
            </div>

            {/* Review Dialog */}
            <Dialog
                open={isReviewOpen}
                onClose={() => setIsReviewOpen(false)}
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
                    <div className="d-grid gap-3">
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">👤 Personal Information</Typography>
                            <Typography><strong>Name:</strong> {formData.name}</Typography>
                            <Typography><strong>Email:</strong> {formData.email}</Typography>
                        </div>

                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📍 Request Details</Typography>
                            <Typography><strong>Location:</strong> {formData.location}</Typography>
                            <Typography><strong>Date:</strong> {formData.date}</Typography>
                            <Typography><strong>Equipment Type:</strong> {formData.equipmentType}</Typography>
                            <Typography><strong>Model:</strong> {formData.model}</Typography>
                            <Typography><strong>Serial No.:</strong> {formData.serialNo}</Typography>
                            <Typography><strong>Priority Level:</strong> {formData.priority}</Typography>
                        </div>

                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">🔧 Issue Description</Typography>
                            <Typography>{formData.description}</Typography>
                        </div>

                        {uploadedFile && (
                            <div>
                                <Typography variant="subtitle1" fontWeight="bold" color="primary">📎 Attached File</Typography>
                                <Typography>{uploadedFile}</Typography>
                            </div>
                        )}
                    </div>
                </DialogContent>
                <DialogActions className="p-3">
                    <Button
                        onClick={() => setIsReviewOpen(false)}
                        color="secondary"
                        variant="outlined"
                        className="w-100 w-sm-auto"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={handleFinalSubmit}
                        color="primary"
                        variant="contained"
                        className="w-100 w-sm-auto"
                    >
                        Submit
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
                        Ticket Submitted Successfully!
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <div className="d-grid gap-3 text-center">
                        <Typography variant="body1" style={{ fontFamily: "Poppins" }}>
                            Your IT support ticket has been successfully submitted.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our IT team will review your request and get back to you soon.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You will receive updates via email {formData.email}
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
        </div>
    );
};

export default Trouble;
