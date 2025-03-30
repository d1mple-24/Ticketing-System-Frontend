import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const Upload = () => {
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

  const handleBackClick = () => {
    window.location.href = "/";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={4}
      sx={{
        position: "relative",
        backgroundImage: 'url("/backgroundlogin.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding:"0"
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
        }}
      >
        <Typography variant="h4" fontFamily="Poppins" gutterBottom>
          Upload Documents
        </Typography>
        <Typography variant="body1" color="text.secondary" fontFamily="Poppins" mb={2}>
          Fill out the details, select files, and provide a brief description if needed.
        </Typography>

        <Box display="flex" flexWrap="wrap" gap={2}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ flex: "1 1 48%" }}
          />
          <TextField
            select
            fullWidth
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            sx={{ flex: "1 1 48%" }}
          >
            {locations.map((loc, index) => (
              <MenuItem key={index} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Priority Level"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
            sx={{ flex: "1 1 48%" }}
          >
            {priorityLevels.map((level, index) => (
              <MenuItem key={index} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            sx={{ flex: "1 1 48%" }}
          />
        </Box>

        <TextField
          type="file"
          multiple
          onChange={handleFileChange}
          fullWidth
          sx={{ mt: 2 }}
        />
        <TextField
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description (optional)"
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ mt: 2 }}>
          Upload Files
        </Button>
        {selectedFiles.length > 0 && (
          <Box mt={2}>
            <Typography variant="h6" fontFamily="Poppins">
              Selected Files:
            </Typography>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </Box>
        )}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackClick}
          fullWidth
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog open={openConfirmation} onClose={handleCancelUpload}>
        <DialogTitle>Confirm Upload</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            Are you sure you want to upload the following details and files?
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Email:</strong> {email}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Location:</strong> {location}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Priority:</strong> {priority}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Subject:</strong> {subject}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Description:</strong> {description || "None"}
          </Typography>
          <Typography variant="body2" gutterBottom>
            <strong>Selected Files:</strong>
          </Typography>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelUpload} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmUpload} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Footer Section */}
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          right: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <img src="/lugo1.png" alt="lugo1" width={90} height={90} style={{ borderRadius: "50%" }} />
          <img src="/lugo2.png" alt="lugo2" width={90} height={90} style={{ borderRadius: "50%" }} />
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          fontStyle="normal"
          fontWeight={600}
          fontFamily="Poppins"
          sx={{ marginTop: 1 }}
        >
          &copy; 2025 Division Office of Imus City. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Upload;