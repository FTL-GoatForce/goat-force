import {
  Typography,
  Box,
  Card,
  TextField,
  Button,
  Chip,
  CardHeader,
} from "@mui/material";
import {
  AutoAwesome,
  Business,
  Person,
  Analytics,
  AttachEmail,
} from "@mui/icons-material";
import React, { useState } from "react";

// email parameters passed in
function InsightsCard({ email_contact_address, email_subject, email_body, slack_contact_address, slack_body }) {
  // State for editable email body
  const [editableEmailBody, setEditableEmailBody] = useState(email_body || "");

  // Handle text field changes
  const handleEmailBodyChange = (event) => {
    setEditableEmailBody(event.target.value);
  };

  return (
    <>
      {/* Insights card */}
      <Card
        className="insights-card"
        sx={{
          padding: 2.4,
          boxShadow: 5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "#",
        }}
      >
        {/* Card Header */}
        <Box className="card-header" sx={{ mb: 3 }}>
          <CardHeader
            avatar={<AttachEmail color="primary" />}
            title="AI Generated Follow-Up"
            subheader="Personalized email draft based on deal context and contact preferences"
            sx={{ marginBottom: 1.4 }}
          />
          <Chip
            label="Smart Draft"
            size="small"
            color="primary"
            sx={{ opacity: 0.8 }}
          />
        </Box>

        {/* Card Content -> Text Field */}
        <Box className="card-content" sx={{ mb: 3 }}>
          <TextField
            multiline
            rows={10}
            variant="outlined"
            value={editableEmailBody}
            onChange={handleEmailBodyChange}
            placeholder="Email content will appear here..."
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
              },
            }}
          />
        </Box>

        {/* Footer with tone indicator and buttons */}
        <Box
          className="card-footer"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* TODO: maybe add later if more info */}
            {/* <Typography variant="body2" color="text.secondary">
              Tone:
            </Typography>
            <Chip
              sx={{
                backgroundColor: "rgba(76, 175, 80, 0.1)", // Light green background
                color: "success.main", // Full opacity green text
                fontWeight: "medium",
              }}
              label="Professional & Solution-focused"
              size="small"
              variant="outlined"
            /> */}
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button 
              variant="outlined" 
              size="small"
              onClick={() => setEditableEmailBody(email_body || "")} // Reset to original
            >
              Regenerate
            </Button>
            <Button variant="contained" size="small">
              Send Follow Up
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default InsightsCard;