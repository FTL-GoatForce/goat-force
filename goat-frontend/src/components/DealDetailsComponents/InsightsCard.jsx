import {
  Typography,
  Box,
  Card,
  TextField,
  Button,
  Chip,
  CardHeader,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  AutoAwesome,
  Business,
  Person,
  Analytics,
  AttachEmail,
} from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";

// email parameters passed in
function InsightsCard({
  email_contact_address,
  email_subject,
  email_body,
  slack_contact_address,
  slack_body,
}) {
  // State for editable email body
  const [editableEmailBody, setEditableEmailBody] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [isTyping, setIsTyping] = useState(false); // typing animation state
  const [isGenerating, setIsGenerating] = useState(false); // generation state => adds loading spinner + disables buttons
  const [isSending, setIsSending] = useState(false); // sending state (loading spinner)
  const [sent, setSent] = useState(false); // email sent state (confirmation message)
  const [error, setError] = useState(false); // error state for API calls, (email sent error)

  // refs to track if we should continue typing
  const typingIntervalRef = useRef(null);
  const shouldContinueTyping = useRef(true);

  // typing animation function, keeps setting text in intervals for loop
  const typeText = (text, setter, speed = 50) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        if (!shouldContinueTyping.current) {
          clearInterval(interval);
          resolve();
          return;
        }

        if (i <= text.length) {
          setter(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);

      typingIntervalRef.current = interval;
    });
  };

  // initialize typing animation on component mount
  useEffect(() => {
    const startTypingAnimation = async () => {
      if (email_subject || email_body) {
        setIsGenerating(true);
        setIsTyping(true);
        shouldContinueTyping.current = true;

        // type subject first
        if (email_subject) {
          await typeText(email_subject, setEmailSubject, 15);
        }

        //  delay between subject and body
        await new Promise((resolve) => setTimeout(resolve, 300));

        // type body after email subject is complete
        if (email_body) {
          await typeText(email_body, setEditableEmailBody, 15);
        }

        // once finished, reset typing states
        setIsTyping(false);
        setIsGenerating(false);
      }
    };

    startTypingAnimation();

    // cleanup function
    return () => {
      shouldContinueTyping.current = false;
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [email_subject, email_body]);

  // Handle manual text field changes (overrides typing)
  const handleEmailBodyChange = (event) => {
    shouldContinueTyping.current = false;
    setEditableEmailBody(event.target.value);
    setIsTyping(false);
  };

  const handleEmailSubjectChange = (event) => {
    shouldContinueTyping.current = false;
    setEmailSubject(event.target.value);
    setIsTyping(false);
  };

  // handle sending email
  const handleSendEmail = async () => {
    console.log("Sending email");
    console.log("email_subject", emailSubject);
    console.log("editableEmailBody", editableEmailBody);

    setIsSending(true); // set sending state to true, waiting for confirmation
    const response = await fetch("http://localhost:3001/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "olivermajano01@gmail.com",
        subject: emailSubject,
        body: editableEmailBody,
      }),
    });

    // if response.ok => sending = false and sent = true (states update)
    if (response.ok) {
      // 1. sent state true, use sent state to show confirmation modal
      await new Promise((resolve) => setTimeout(resolve, 3500));
      setIsSending(false); // reset sending state
      setSent(true); // set sent state to true
      console.log("Email sent successfully");

      // 2. reset email body and subject (optional)
      // open modal
    } else {
      // set error state to true, set sending state to false
      setIsSending(false);
      setError(true);
    }
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
        {/* ERROR Notification Pop-Up */}
        <Snackbar
          open={error}
          autoHideDuration={2000}
          onClose={() => setError(false)} // set error back to false when closed
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={"Failed to send email. Please try again."}
        >
          <Alert
            variant="outlined"
            onClose={() => setError(false)}
            severity="error"
            sx={{ width: "100%" }}
          >
            Failed to send email. Please try again.
          </Alert>
        </Snackbar>

        {/* LOADING Notification Pop-Up */}
        <Snackbar
          open={isSending}
          autoHideDuration={10000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={"Sending email..."}
          onClose={() => setIsSending(false)} // set sending back to false when closed
        >
          <Alert
            variant="outlined"
            onClose={() => setIsSending(false)}
            severity="info"
            sx={{ width: "100%" }}
          >
            Sending email...
          </Alert>
        </Snackbar>

        {/* SUCCESS Notification Pop-Up */}
        <Snackbar
          open={sent}
          autoHideDuration={2000}
          onClose={() => setSent(false)} // set sent back to false when closed
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={"Email sent successfully!"}
        >
          <Alert
            variant="outlined"
            onClose={() => setSent(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
        {/* Card Header */}
        <Box className="card-header" sx={{ mb: 3 }}>
          <CardHeader
            avatar={<AttachEmail color="primary" />}
            title={
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                AI Generated Follow-Up
                {isGenerating && (
                  <CircularProgress size={16} sx={{ color: "primary.main" }} />
                )}
              </Box>
            }
            subheader={
              isGenerating
                ? "AI is crafting your personalized email..."
                : "Personalized email draft based on deal context and contact preferences"
            }
            sx={{ marginBottom: 1.4 }}
          />
          <Chip
            label={isGenerating ? "Generating..." : "Smart Draft"}
            size="small"
            color="primary"
            sx={{
              opacity: 0.8,
              ...(isGenerating && {
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }),
            }}
          />
        </Box>

        {/* Card Content -> Text Field */}

        <Box className="card-content" sx={{ mb: 3 }}>
          {/* Email Subject */}
          <TextField
            variant="outlined"
            label="Email Subject"
            value={emailSubject}
            placeholder={isTyping ? "" : "Enter email subject..."}
            fullWidth
            onChange={handleEmailSubjectChange}
            disabled={isTyping}
            sx={{
              marginBottom: 2.5,
              width: "100%",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
                ...(isTyping && {
                  "&::after": {
                    content: '"|"',
                    animation: "blink 1s infinite",
                    marginLeft: "2px",
                  },
                }),
              },
            }}
          />

          {/* Email Body */}
          <TextField
            label="Email Description"
            multiline
            rows={10}
            variant="outlined"
            value={editableEmailBody}
            onChange={handleEmailBodyChange}
            placeholder={isTyping ? "" : "Enter email content..."}
            disabled={isTyping}
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}></Box>
          <Box sx={{ display: "flex", gap: 1, mt: 1.37, mb: 1.37 }}>
            <Button
              variant="outlined"
              size="small"
              disabled={isGenerating || isSending}
            >
              {isGenerating ? "Regenerating..." : "Regenerate"}
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={handleSendEmail}
              disabled={isGenerating || isSending}
            >
              Send Follow Up
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.8;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default InsightsCard;
