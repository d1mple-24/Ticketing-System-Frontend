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
  Checkbox
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

const Existing = () => {
  const [formData, setFormData] = useState({
    trackingId: '',
    email: '',
    rememberEmail: false
  });
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
    // Handle form submission here
    console.log('Form submitted:', formData);
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
            Division of Imus City
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
                  onChange={handleChange}
                  margin="normal"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins',
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
                    },
                    '& .MuiInputLabel-root': {
                      fontFamily: 'Poppins',
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
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontSize: isMobile ? '0.8rem' : '0.875rem',
                      }}
                    >
                      Remember my email
                    </Typography>
                  }
                  sx={{ mt: 1 }}
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
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
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
  );
};

export default Existing;
