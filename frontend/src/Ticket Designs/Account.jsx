import React, { useState } from "react";
import {
    Box, Typography, Button, TextField,
    useTheme, useMediaQuery, Container, Paper, IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountManagement = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
                            Account Management
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <div className="row g-2">
                                <div className="col-12">
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                </div>
                                <div className="col-12">
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                </div>
                                <div className="col-12">
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                </div>
                                <div className="col-12">
                                    <TextField
                                        fullWidth
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 d-flex justify-content-center gap-2">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="px-3"
                                    style={{
                                        borderRadius: "8px",
                                        padding: "6px 16px",
                                        fontSize: isMobile ? "0.8rem" : "0.9rem",
                                    }}
                                >
                                    Update Account
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => {
                                        setFormData({
                                            username: "",
                                            email: "",
                                            password: "",
                                            confirmPassword: "",
                                        });
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
                        </form>
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
        </div>
    );
};

export default AccountManagement;
