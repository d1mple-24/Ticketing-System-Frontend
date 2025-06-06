import React, { useState } from "react";
import {
    Box, Typography, Button, TextField, MenuItem,
    Dialog, DialogTitle, DialogContent, DialogActions,
    useTheme, useMediaQuery, Container, Paper, IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha";

const Upload = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [priority, setPriority] = useState("");
    const [subject, setSubject] = useState("");
    const [openConfirmation, setOpenConfirmation] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [captchaError, setCaptchaError] = useState("");

    const locations = ["SDO - Imus City", "Schools - Imus City"];
    const priorityLevels = ["Low", "Medium", "High", "Critical"];

    const handleFileChange = (event) => {
        setSelectedFiles([...selectedFiles, ...event.target.files]);
    };

    const handleSubmit = () => {
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!email || !location || !priority || !subject) {
            alert("Please fill in all required fields.");
            return;
        }
        if (selectedFiles.length === 0) {
            alert("Please select files to upload.");
            return;
        }
        if (!captchaVerified) {
            setCaptchaError("Please complete the CAPTCHA verification");
            return;
        }
        setOpenConfirmation(true);
    };

    const handleConfirmUpload = () => {
        setOpenConfirmation(false);
        setIsSuccessOpen(true);
        setSelectedFiles([]);
        setDescription("");
        setEmail("");
        setLocation("");
        setPriority("");
        setSubject("");
    };

    const handleCancelUpload = () => {
        setOpenConfirmation(false);
    };

    const handleCloseSuccessDialog = () => {
        setIsSuccessOpen(false);
        navigate("/");
    };

    const goBackToHome = () => {
        navigate("/");
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
        setCaptchaError("");
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
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                backdropFilter: "blur(1px)",
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
                        src="/Ticket1.png"
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
                        Ticketing System
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
                    <Paper elevation={5} className="p-3 p-sm-4 rounded-4 flex-grow-1" style={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        maxWidth: "100%",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "calc(100vh - 140px)",
                        marginBottom: "80px",
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
                            Upload Documents
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            className="text-center mb-4"
                            style={{
                                fontFamily: "Poppins",
                                fontSize: isMobile ? "0.9rem" : "1rem",
                            }}
                        >
                            Fill out the details, select files, and provide a brief description if needed.
                        </Typography>

                        <div className="row g-2">
                            <div className="col-12 col-sm-6">
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    margin="normal"
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <TextField
                                    select
                                    fullWidth
                                    label="Location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
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
                                    select
                                    fullWidth
                                    label="Priority Level"
                                    value={priority}
                                    onChange={(e) => setPriority(e.target.value)}
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
                            <div className="col-12 col-sm-6">
                                <TextField
                                    fullWidth
                                    label="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    margin="normal"
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </div>
                            <div className="col-12">
                                <TextField
                                    multiline
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Enter a description (optional)"
                                    fullWidth
                                    margin="normal"
                                />
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <div className="d-flex flex-column align-items-center p-3 rounded-3" 
                                    style={{ 
                                        border: captchaError ? "1px solid #f44336" : "none",
                                        animation: captchaError ? "shake 0.5s" : "none",
                                        width: "304px",
                                        margin: "0 auto",
                                        fontFamily: "Poppins, sans-serif"
                                    }}>
                                    <ReCAPTCHA
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={handleCaptchaChange}
                                        style={{ 
                                            transform: "scale(0.85)",
                                            fontFamily: "Poppins, sans-serif"
                                        }}
                                    />
                                    {captchaError && (
                                        <Typography 
                                            variant="caption" 
                                            color="error" 
                                            className="mt-2"
                                            style={{ 
                                                fontFamily: "Poppins, sans-serif",
                                                animation: "shake 0.5s",
                                                textAlign: "center"
                                            }}
                                        >
                                            {captchaError}
                                        </Typography>
                                    )}
                                </div>
                            </div>
                        </div>

                        {selectedFiles.length > 0 && (
                            <Box mt={2} className="p-3 rounded-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                                <Typography variant="h6" fontFamily="Poppins" className="mb-2">
                                    Selected Files:
                                </Typography>
                                <ul className="mb-0">
                                    {selectedFiles.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            </Box>
                        )}

                        <div className="mt-4 d-flex justify-content-center gap-2">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                className="px-3"
                                style={{
                                    borderRadius: "8px",
                                    padding: "6px 16px",
                                    fontSize: isMobile ? "0.8rem" : "0.9rem",
                                }}
                            >
                                Upload Files
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={() => {
                                    setSelectedFiles([]);
                                    setDescription("");
                                    setEmail("");
                                    setLocation("");
                                    setPriority("");
                                    setSubject("");
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
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        width: "100%",
                        backdropFilter: "blur(10px)",
                        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
                        zIndex: 999,
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "8px 0",
                        transform: "translateZ(0)",
                        willChange: "transform",
                        maxWidth: "100vw",
                        overflow: "hidden",
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
                            fontSize: isMobile ? "0.5rem" : "0.6rem",
                            fontWeight: 600,
                            marginBottom: "2px",
                            maxWidth: "100%",
                            padding: "0 10px",
                        }}
                    >
                        &copy; 2025 Division Office of Imus City. All rights reserved.
                    </Typography>
                </div>
            </div>

            {/* Confirmation Dialog */}
            <Dialog
                open={openConfirmation}
                onClose={handleCancelUpload}
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
                    📝 Confirm Upload
                </DialogTitle>
                <DialogContent dividers>
                    <div className="d-grid gap-3">
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📧 Email</Typography>
                            <Typography>{email}</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📍 Location</Typography>
                            <Typography>{location}</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">⚠️ Priority</Typography>
                            <Typography>{priority}</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📋 Subject</Typography>
                            <Typography>{subject}</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📝 Description</Typography>
                            <Typography>{description || "None"}</Typography>
                        </div>
                        <div>
                            <Typography variant="subtitle1" fontWeight="bold" color="primary">📎 Selected Files</Typography>
                            <ul>
                                {selectedFiles.map((file, index) => (
                                    <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions className="p-3 d-flex justify-content-center gap-2">
                    <Button
                        onClick={handleCancelUpload}
                        color="secondary"
                        variant="outlined"
                        className="px-3"
                        style={{
                            borderRadius: "8px",
                            padding: "6px 16px",
                            fontSize: isMobile ? "0.8rem" : "0.9rem",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleConfirmUpload}
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
                        Files Uploaded Successfully!
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <div className="d-grid gap-3 text-center">
                        <Typography variant="body1" style={{ fontFamily: "Poppins" }}>
                            Your files have been successfully uploaded to our system.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            You will receive a confirmation email at {email} with the details of your upload.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our team will review your submission and get back to you soon.
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

export default Upload;
