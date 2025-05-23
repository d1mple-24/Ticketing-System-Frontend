import React from "react";
import { Box, Card, CardContent, Typography, useTheme, useMediaQuery } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const ServiceDesk = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleCardClick = (action) => {
    if (action === "submit") {
      navigate("/");
    } else if (action === "view") {
      navigate("/view-tickets");
    }
  };

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  return (
    <div className="min-vh-100 d-flex flex-column position-relative overflow-hidden" style={{
      backgroundImage: "url(/backgroundlogin.png)",
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      width: "100%",
    }}>
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        zIndex: 0,
      }}></div>

      {/* Wrapper for content to ensure proper z-index */}
      <div className="position-relative flex-grow-1" style={{ zIndex: 1 }}>
        {/* Admin Login Logo */}
        <div
          className="position-absolute rounded-circle"
          style={{
            top: isMobile ? "10px" : isTablet ? "20px" : "30px",
            right: isMobile ? "10px" : isTablet ? "20px" : "30px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: isMobile ? "0.3rem" : isTablet ? "0.4rem" : "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            zIndex: 2,
            transition: "transform 0.3s ease-in-out",
            '&:hover': {
              transform: "scale(1.05)",
            },
          }}
          
        >
          <img
            src="/admin.png"
            alt="Admin"
            width={isMobile ? 18 : isTablet ? 20 : 22}
            height={isMobile ? 18 : isTablet ? 20 : 22}
            className="rounded-circle"
          />
        </div>

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

        {/* Main Content */}
        <div className="container py-4" style={{
          marginTop: isMobile ? "100px" : isTablet ? "120px" : "140px",
          maxWidth: isMobile ? "95%" : isTablet ? "85%" : "800px",
          position: "relative",
          zIndex: 1,
        }}>
          <div className="p-2 p-sm-3 rounded-4" style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}>
            {/* Card Grid */}
            <div className="row g-3">
              {/* Submit Ticket Card */}
              <div className="col-12 col-md-6">
                <div
                  className="card h-100 border-0 rounded-4"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleCardClick("submit")}
                  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle mx-auto mb-3 p-3" style={{ backgroundColor: "rgba(0, 123, 255, 0.1)" }}>
                      <img
                        src="/submit.png"
                        alt="Submit Ticket"
                        width={isMobile ? 35 : isTablet ? 40 : 45}
                        height={isMobile ? 35 : isTablet ? 40 : 45}
                      />
                    </div>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: isMobile ? "0.9rem" : "1.1rem",
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Submit a Ticket
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        color: "#6c757d",
                        fontStyle: "italic",
                      }}
                    >
                      Create a new support ticket
                    </Typography>
                  </div>
                </div>
              </div>

              {/* View Tickets Card */}
              <div className="col-12 col-md-6">
                <div
                  className="card h-100 border-0 rounded-4"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleCardClick("view")}
                  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle mx-auto mb-3 p-3" style={{ backgroundColor: "rgba(0, 123, 255, 0.1)" }}>
                      <img
                        src="/existing.png"
                        alt="View Tickets"
                        width={isMobile ? 35 : isTablet ? 40 : 45}
                        height={isMobile ? 35 : isTablet ? 40 : 45}
                      />
                    </div>
                    <Typography
                      variant="h6"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: isMobile ? "0.9rem" : "1.1rem",
                        fontWeight: "bold",
                        color: theme.palette.primary.main,
                        marginBottom: "0.5rem",
                      }}
                    >
                      View Existing Tickets
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Poppins",
                        fontSize: isMobile ? "0.75rem" : "0.875rem",
                        color: "#6c757d",
                        fontStyle: "italic",
                      }}
                    >
                      Check the status of your tickets
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            fontSize: isMobile ? "0.5rem" : "0.6rem",
            fontWeight: 600,
            marginBottom: "2px",
          }}
        >
          &copy; 2025 Division Office of Imus City. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};

export default ServiceDesk; 