import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Container,
  useTheme,
  useMediaQuery,
  IconButton,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Existing = () => {
  const [formData, setFormData] = useState({
    trackingId: '',
    email: '',
    rememberEmail: false
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'rememberEmail' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show success snackbar
    setOpenSnackbar(true);
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Navigate to home page after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
        {/* Header with Logo */}
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
            Ticketing System
          </Typography>
        </div>

        {/* Back Button */}
        <IconButton
          onClick={() => navigate('/')}
          sx={{
            position: 'absolute',
            top: isMobile ? "10px" : isTablet ? "20px" : "30px",
            right: isMobile ? "10px" : isTablet ? "20px" : "30px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 2,
            '&:hover': {
              backgroundColor: "rgba(255, 255, 255, 1)",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Main Content */}
        <Container maxWidth="sm" className="position-relative" style={{ zIndex: 1 }}>
          <Box sx={{ 
            mt: isMobile ? "100px" : isTablet ? "120px" : "140px",
            mb: 4 
          }}>
            <div className="p-4 rounded-4" style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}>
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                align="center"
                style={{
                  fontFamily: "Poppins",
                  fontSize: isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2rem",
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  marginBottom: "2rem",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Check Existing Ticket
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Enter Tracking ID"
                  name="trackingId"
                  value={formData.trackingId}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    setFormData(prevState => ({
                      ...prevState,
                      trackingId: value
                    }));
                  }}
                  margin="normal"
                  required
                  inputProps={{
                    min: 1,
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    autoComplete: "off"
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      },
                      '&.Mui-focused': {
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins',
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      }
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      },
                      '&.Mui-focused': {
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      }
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins',
                      '&.Mui-focused': {
                        color: theme.palette.primary.main,
                      }
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.rememberEmail}
                      onChange={handleChange}
                      name="rememberEmail"
                      sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(0, 123, 255, 0.1)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                        color: 'rgba(0, 0, 0, 0.7)',
                        fontWeight: 500,
                      }}
                    >
                      Remember my email
                    </Typography>
                  }
                  sx={{ 
                    mt: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(0, 123, 255, 0.05)',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease-in-out',
                    }
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ 
                    mt: 3,
                    borderRadius: '12px',
                    py: 1.5,
                    fontFamily: 'Poppins',
                    textTransform: 'none',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 600,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Search Ticket
                </Button>
              </form>
            </div>
          </Box>
        </Container>
      </div>

      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            fontFamily: 'Poppins',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            '& .MuiAlert-icon': {
              fontSize: '2rem',
              marginRight: '8px',
              color: theme.palette.success.main,
            },
            '& .MuiAlert-message': {
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: 500,
              color: theme.palette.success.dark,
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon />
            <Typography>
              Ticket search submitted successfully!
            </Typography>
          </Box>
        </Alert>
      </Snackbar>

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
  );
};

export default Existing;
