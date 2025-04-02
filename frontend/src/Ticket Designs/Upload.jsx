import React, { useState } from "react";
import {
    Box, Typography, Button, TextField, MenuItem,
    Dialog, DialogTitle, DialogContent, DialogActions,
    useTheme, useMediaQuery, Container, Paper, IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        setOpenConfirmation(true);
    };

    const handleConfirmUpload = () => {
        setOpenConfirmation(false);
        alert("Files uploaded successfully!");
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
        </div>
    );
};

export default Upload;
