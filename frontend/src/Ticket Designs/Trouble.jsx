import React, { useState } from "react";
import {
    TextField, MenuItem, Button, Typography,
    Container, Paper, IconButton, Box, Dialog,
    DialogTitle, DialogContent, DialogActions,
    InputAdornment,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ClearIcon from "@mui/icons-material/Clear";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Trouble = () => {
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
        setIsReviewOpen(true);
    };

    const handleFinalSubmit = () => {
        setIsReviewOpen(false);

        if (window.confirm("Are you sure you want to submit this issue?")) {
            console.log("Form Data:", formData);
            console.log("Uploaded File:", uploadedFile);
            alert("✅ Your issue has been successfully submitted! Our IT team will get back to you soon.");
            setFormData({
                name: "", email: "", location: "", date: "", equipmentType: "",
                model: "", serialNo: "", priority: "", description: "",
            });
            setUploadedFile(null);
        }
    };

    const goBackToHome = () => {
        window.location.href = "/";
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f5f7fa",
                backgroundImage:  "url(/backgroundlogin.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            {/* Logo in the top-right corner */}
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

            <Container maxWidth="md" sx={{ padding: 3 }}>
                <Paper elevation={5} sx={{ padding: 4, borderRadius: 3, mt: 5, position: "relative" }}>
                    <IconButton
                        onClick={goBackToHome}
                        sx={{ position: "absolute", top: 16, left: 16, color: "black" }}
                    >
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>

                    <Typography variant="h4" fontWeight="bold" textAlign="center" mb={3} color="black">
                        IT Support Form
                    </Typography>

                    <form onSubmit={handleReview}>
                        <Typography variant="h6" fontWeight="bold" mt={2} color="#444">
                            Personal Information
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2 }}>
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
                        </Box>

                        <Typography variant="h6" fontWeight="bold" mt={2} color="#444">
                            Request Details
                        </Typography>
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

                        <Box sx={{ display: "flex", gap: 2 }}>
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
                        </Box>

                        <Box sx={{ display: "flex", gap: 2 }}>
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
                        </Box>

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
                        />

                        <Box sx={{ mt: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                            <Button
                                variant="contained"
                                component="label"
                                startIcon={<CloudUploadIcon />}
                                sx={{
                                    backgroundColor: "#1976d2",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#155a9f",
                                    },
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
                                <Typography variant="body2" color="textSecondary">
                                    📎 {uploadedFile} attached
                                </Typography>
                            )}
                        </Box>

                        <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#1976d2",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#155a9f",
                                    },
                                }}
                            >
                                Review Submission
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>

            <Dialog open={isReviewOpen} onClose={() => setIsReviewOpen(false)} maxWidth="sm" fullWidth>
                <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
                    📝 Review Your Submission
                </DialogTitle>
                <DialogContent dividers>
                    <Box sx={{ display: "grid", gap: 2 }}>
                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">👤 Personal Information</Typography>
                            <Typography><strong>Name:</strong> {formData.name}</Typography>
                            <Typography><strong>Email:</strong> {formData.email}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">📍 Request Details</Typography>
                            <Typography><strong>Location:</strong> {formData.location}</Typography>
                            <Typography><strong>Date:</strong> {formData.date}</Typography>
                            <Typography><strong>Equipment Type:</strong> {formData.equipmentType}</Typography>
                            <Typography><strong>Model:</strong> {formData.model}</Typography>
                            <Typography><strong>Serial No.:</strong> {formData.serialNo}</Typography>
                            <Typography><strong>Priority Level:</strong> {formData.priority}</Typography>
                        </Box>

                        <Box>
                            <Typography variant="subtitle1" fontWeight="bold">🔧 Issue Description</Typography>
                            <Typography>{formData.description}</Typography>
                        </Box>

                        {uploadedFile && (
                            <Box>
                                <Typography variant="subtitle1" fontWeight="bold">📎 Attached File</Typography>
                                <Typography>{uploadedFile}</Typography>
                            </Box>
                        )}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsReviewOpen(false)} color="secondary">Edit</Button>
                    <Button onClick={handleFinalSubmit} color="primary">Submit</Button>
                </DialogActions>
            </Dialog>

            {/* Footer */}
            <Box
                component="footer"
                position="absolute"
                bottom={10}
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

export default Trouble;
