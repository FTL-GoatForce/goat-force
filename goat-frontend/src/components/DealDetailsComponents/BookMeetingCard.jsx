import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import dayjs from "dayjs";
import { useEffect } from "react";
import axios from "axios";

const BookMeetingCard = ({ clientEmail, userEmail, dealId }) => {
  // state to manage meeting data
  const [meetingData, setMeetingData] = useState({
    title: "",
    description: "",
    startDateTime: dayjs().add(1, "day").hour(10).minute(0),
    endDateTime: dayjs().add(1, "day").hour(11).minute(0),
    location: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "info",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setMeetingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBookMeeting = async () => {
    // validation checks
    if (!meetingData.title.trim()) {
      setAlert({
        show: true,
        message: "Please enter a meeting title",
        type: "error",
      });
      return;
    }

    if (meetingData.startDateTime.isAfter(meetingData.endDateTime)) {
      setAlert({
        show: true,
        message: "End time must be after start time",
        type: "error",
      });
      return;
    }

    setLoading(true);

    try {
      // create the meeting that is sent to the backend and destructured in the backend
      const meetingPayload = {
        title: meetingData.title,
        description: meetingData.description,
        startDateTime: meetingData.startDateTime.toISOString(),
        endDateTime: meetingData.endDateTime.toISOString(),
        location: meetingData.location || "Video Call",
        clientEmail: clientEmail,
        userEmail: userEmail,
        dealId: dealId,
      };

      console.log("Booking meeting with payload:", meetingPayload);
      const response = await axios.post(
        "http://localhost:3000/deal/create-meeting",
        meetingPayload
      );
      console.log("Meeting booking response:", response.data);

      if (response.data.success) {
        setAlert({
          show: true,
          message: "Meeting booked successfully!",
          type: "success",
        });

        // Reset form
        setMeetingData({
          title: "",
          description: "",
          startDateTime: dayjs().add(1, "day").hour(10).minute(0),
          endDateTime: dayjs().add(1, "day").hour(11).minute(0),
          location: "Video Call",
        });
      } else {
        throw new Error("Failed to book meeting");
      }
    } catch (error) {
      setAlert({
        show: true,
        message: "Failed to book meeting. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // auto-hide alert after 5 seconds
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert.show]);

  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <CalendarTodayIcon sx={{ mr: 1, color: "primary.main" }} />
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Book Meeting
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Alert */}
        <Collapse in={alert.show}>
          <Alert
            severity={alert.type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setAlert((prev) => ({ ...prev, show: false }))}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {alert.message}
          </Alert>
        </Collapse>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            fullWidth
            label="Meeting Title"
            placeholder="e.g., Product Demo Call"
            value={meetingData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            size="small"
          />

          <TextField
            fullWidth
            label="Description"
            placeholder="Meeting agenda and notes..."
            multiline
            rows={3}
            value={meetingData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            size="small"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <DateTimePicker
                label="Start Date & Time"
                value={meetingData.startDateTime}
                onChange={(newValue) =>
                  handleInputChange("startDateTime", newValue)
                }
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
              <DateTimePicker
                label="End Date & Time"
                value={meetingData.endDateTime}
                onChange={(newValue) =>
                  handleInputChange("endDateTime", newValue)
                }
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            </Box>
          </LocalizationProvider>

          <TextField
            fullWidth
            label="Location"
            value={meetingData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            size="small"
          />

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Meeting invites will be sent to: {clientEmail} and {userEmail}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleBookMeeting}
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? "Booking..." : "Book Meeting"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookMeetingCard;
