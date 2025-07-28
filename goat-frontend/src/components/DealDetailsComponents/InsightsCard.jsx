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
  FormControl,
  Select,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  AutoAwesome,
  Business,
  Person,
  Analytics,
  AttachEmail,
} from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { getCurrentUserId } from "../../utils/supabase";

const API_URL = import.meta.env.VITE_API_URL;

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
  const [slackBody, setSlackBody] = useState(""); // holds slack body text
  const [isTyping, setIsTyping] = useState(false); // typing animation state
  const [isGenerating, setIsGenerating] = useState(false); // generation state => adds loading spinner + disables buttons
  const [isSending, setIsSending] = useState(false); // sending state (loading spinner)
  const [sent, setSent] = useState(false); // email sent state (confirmation message)
  const [error, setError] = useState(false); // error state for API calls, (email sent error)
  const [method, setMethod] = useState("email"); // method to send (email or slack) => default is email
  const [displayMenu, setDisplayMenu] = useState(false); // state to control menu visibility

  // track what content has been generated
  const [generatedContent, setGeneratedContent] = useState({
    email: false,
    slack: false,
  });

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
    if (generatedContent[method]) {
      return; // if content already generated, skip typing animation
    }

    const startTypingAnimation = async () => {
      if (email_subject || email_body || slack_body) {
        setIsGenerating(true);
        setIsTyping(true);
        shouldContinueTyping.current = true;

        // type subject first
        if (email_subject && method === "email") {
          await typeText(email_subject, setEmailSubject, 15);
        }

        //  delay between subject and body
        await new Promise((resolve) => setTimeout(resolve, 300));

        // type body after email subject is complete
        if (email_body && method === "email") {
          await typeText(email_body, setEditableEmailBody, 15);
        }

        // type slack body if provided, and user selects it => start generating
        if (slack_body && method === "slack") {
          await typeText(slack_body, setSlackBody, 15);
        }

        // Mark this method as generated
        setGeneratedContent((prev) => ({
          ...prev,
          [method]: true,
        }));

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
  }, [email_subject, email_body, slack_body, method]);

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

  const handleSlackBodyChange = (event) => {
    shouldContinueTyping.current = false;
    setSlackBody(event.target.value);
    setIsTyping(false);
  };

  // handle sending email
  const handleSendEmail = async () => {
    console.log("Sending email");
    console.log("email_subject", emailSubject);
    console.log("editableEmailBody", editableEmailBody);
    // Get user ID using the utility function
    const user_id = await getCurrentUserId();
    console.log("user_id", user_id);
    setIsSending(true); // set sending state to true, waiting for confirmation
    const response = await fetch(`${API_URL}/api/email/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email_contact_address,
        subject: emailSubject,
        body: editableEmailBody,
        user_id: user_id,
      }),
    });

    // if response.ok => sending = false and sent = true (states update)
    if (response.ok) {
      // 1. sent state true, use sent state to show confirmation modal
      await new Promise((resolve) => setTimeout(resolve, 3500));
      setIsSending(false); // reset sending state
      setSent(true); // set sent state to true
      console.log("Email sent successfully");

      // 2. reset email body and subject and delete from einstein_response_json
      setEditableEmailBody(""); // clear email body
      setEmailSubject(""); // clear email subject

      // open modal
    } else {
      // set error state to true, set sending state to false
      setIsSending(false);
      setError(true);
    }
  };

  // TODO: handle sending slack message
  const handleSendSlackMessage = async () => {
    console.log("Sending Slack message");
    console.log("slack_body", slackBody);
    console.log("slack_contact_address", slack_contact_address);
    setIsSending(true); // set sending state to true, waiting for confirmation

    // const response = await fetch("http://localhost:3001/slack/send",

    // if (response.ok) { update states within } else { set error state to true }
    if (true) { // TODO: replace with response.ok
      // 1. sent state true, use sent state to show confirmation modal
      await new Promise((resolve) => setTimeout(resolve, 3500));
      setIsSending(false); 
      setSent(true); 
      console.log("Slack message sent successfully");

      // 2. reset slack body and delete from einstein_response_json
      setSlackBody(""); 
    }
    else {
      setIsSending(false);
      setError(true); 
      console.error("Failed to send Slack message");
    }
  };

  // DISPLAY MENU HANDLERS
  const handleMenuSelection = (event) => {
    setDisplayMenu(!displayMenu); // toggle menu visibility
  };

  const handleMenuClose = () => {
    setDisplayMenu(false); // close menu
  };

  const handleMenuItemClick = (method) => {
    setMethod(method);
    handleMenuClose();
  };

  return (
    <>
      {/* NOTIICATIONS */}

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
          height: "623px",
        }}
      >
        {/* ERROR Notification Pop-Up */}
        <Snackbar
          open={error}
          autoHideDuration={2000}
          onClose={() => setError(false)} // set error back to false when closed
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={"Failed to send message. Please try again."}
          sx={{ transform: "translateX(5px)" }}
        >
          <Alert
            variant="filled"
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
          message={"Sending message..."}
          onClose={() => setIsSending(false)} // set sending back to false when closed
          sx={{ transform: "translateX(5px)" }}
        >
          <Alert
            variant="filled"
            onClose={() => setIsSending(false)}
            severity="info"
            sx={{ width: "100%" }}
          >
            Sending message...
          </Alert>
        </Snackbar>

        {/* SUCCESS Notification Pop-Up */}
        <Snackbar
          open={sent}
          autoHideDuration={2000}
          onClose={() => setSent(false)} // set sent back to false when closed
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          message={"Message sent successfully!"}
          sx={{ transform: "translateX(5px)" }}
        >
          <Alert
            variant="filled"
            onClose={() => setSent(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
        {/* Card Header */}
        <Box className="card-header" sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardHeader
              avatar={
                method === "email" ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                    alt="Gmail"
                    style={{ width: 30, height: 23 }}
                  />
                ) : (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
                    alt="Slack"
                    style={{ width: 30, height: 30 }}
                  />
                )
              }
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {method === "email" ? (
                    <Typography variant="body2">
                      Gmail AI Generated Follow-Up
                    </Typography>
                  ) : (
                    <Typography variant="body2">
                      Slack AI Generated Follow-Up
                    </Typography>
                  )}
                  {isGenerating && (
                    <CircularProgress
                      size={16}
                      sx={{ color: "primary.main" }}
                    />
                  )}
                </Box>
              }
              subheader={
                isGenerating
                  ? "AI is crafting your personalized message..."
                  : method === "email"
                  ? "Personalized email draft based on deal context and contact preferences"
                  : "Personalized Slack message draft based on deal context and contact preferences"
              }
              sx={{ marginBottom: 1.4 }}
            />
            {/* Method Selection Button (Gmail / Slack Styles) */}
            <Button
              id="method-selection-button"
              variant="outlined"
              size="small"
              sx={{ height: "38px", width: "100px", marginTop: "10px" }}
              onClick={handleMenuSelection}
              color="white"
            >
              <img
                src={
                  method === "email"
                    ? "https://cdn.iconscout.com/icon/free/png-256/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--new-google-logos-pack-icons-2476484.png?f=webp"
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
                }
                alt={method === "email" ? "Gmail" : "Slack"}
                style={{ width: 18, height: 18, marginRight: 8 }}
              />
              {method === "email" ? "Gmail" : "Slack"}
            </Button>
            <Menu
              anchorEl={document.getElementById("method-selection-button")}
              anchorOrigin={{
                vertical: "bottom",
                // horizontal: "left",
                horizontal: "left",
              }}
              open={displayMenu}
              onClose={handleMenuClose}
            >
              {/* email item: set on click */}
              <MenuItem onClick={() => handleMenuItemClick("email")}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-gmail-logo-icon-download-in-svg-png-gif-file-formats--new-google-logos-pack-icons-2476484.png?f=webp"
                  alt="Gmail"
                  style={{ width: 18, height: 18, marginRight: 8 }}
                />
                <Typography variant="body2"> Gmail </Typography>
              </MenuItem>
              {/* slack item: set on click */}
              <MenuItem onClick={() => handleMenuItemClick("slack")}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
                  alt="Slack"
                  style={{ width: 18, height: 18, marginRight: 8 }}
                />
                <Typography variant="body2"> Slack </Typography>
              </MenuItem>
            </Menu>
          </Box>
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
          {method === "email" && (
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
          )}

          {/* Email Body */}
          {method === "email" && (
            <TextField
              label={"Email Body" }
              multiline
              rows={10}
              variant="outlined"
              value={editableEmailBody}
              onChange={handleEmailBodyChange}
              placeholder={"Enter email body..."}
              disabled={isTyping}
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "background.paper",
                },
              }}
            />
          )}
        </Box>

        {/* Slack Body */}
        {method === "slack" && (
          <TextField
            label="Slack Body"
            multiline
            rows={10}
            variant="outlined"
            value={slackBody}
            onChange={handleSlackBodyChange}
            placeholder={"Enter Slack message..."}
            disabled={isTyping}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "background.paper",
              },
            }}
          ></TextField>
        )}

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
            position: "absolute",
            bottom: "20px",
            left: "20px",
            right: "20px",
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
              onClick={
                method === "email" ? handleSendEmail : handleSendSlackMessage
              } // depending on the method, call the appropriate function
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
