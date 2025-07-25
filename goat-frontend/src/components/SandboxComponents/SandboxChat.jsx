import React, { use } from "react";
import {
  Box,
  Button,
  Typography,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import CRMChatbotTextEntry from "../CRMComponents/CRMChatbotTextEntry";
import { useState } from "react";
import CRMAiEntry from "../CRMComponents/CRMAiEntry";
import { m } from "motion/react";
import { useEffect } from "react";
import { useRef } from "react";
import LoadingThreeDotsPulse from "../CRMComponents/LoadingThreeDotsPulse";
import axios from "axios";
import { AssessmentOutlined, Insights, Send } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import ShinyText from "../ReusableComponents/Shiny";
import Curved from "../ReusableComponents/Curved";

function SandboxChat({ selectedDeal, deals }) {
  const SandboxServer = import.meta.env.VITE_SANDBOX_MODE;
  const ReportServer = import.meta.env.VITE_REPORT_SERVER;

  const [prompt, setPrompt] = useState(""); // holds the user's input on the chat box
  const [messages, setMessages] = useState([]); // holds the chat messages
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [reportLoading, setReportLoading] = useState(false); // state to track report generation loading
  const [reportGenerated, setReportGenerated] = useState(false); // state to track if report is generated
  const [report, setReport] = useState({
    score: "",
    summary: "",
    improvements: [],
  });
  const [currentDealName, setCurrentDealName] = useState(
    selectedDeal.deal.deal_name
  );
  const [participant, setParticipant] = useState(
    selectedDeal.participants[0].prospect_name || "Emily Johnson"
  );
  function handleCloseReport() {
    setReportGenerated(false);
    setReportLoading(false);
    setReport({
      score: "",
      summary: "",
      improvements: [],
    });
  }
  const [communicationMode, setCommunicationMode] = useState("chat");
  const messageRef = useRef(null);
  const listRef = useRef(null);

  // scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages, streamingText]);

  // display user message / ai response
  const handleSend = async () => {
    // USER INPUT VALIDATION / SENDING
    if (!prompt.trim()) return;

    // create a new message object from user and append to messages array
    const newMessage = { context: prompt, sender: "User" };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    const currentPrompt = prompt;
    setPrompt("");

    try {
      setLoading(true);
      const response = await axios.post(SandboxServer, {
        message: prompt,
        participant: participant,
        chatHistory: messages,
        deal_name: currentDealName,
        deal_id: parseInt(selectedDeal.deal.id),
      });

      const aiResponse = response.data.response;
      let currentText = "";
      for (let i = 0; i < aiResponse.length; i++) {
        currentText += aiResponse[i];
        setStreamingText(currentText);
        await new Promise((resolve) => setTimeout(resolve, 10));
        // Add extra delay for punctuation marks to create more natural pauses
        if ([".", "!", "?", "\n"].includes(aiResponse[i])) {
          await new Promise((resolve) => setTimeout(resolve, 200));
        } else if ([",", ";", ":"].includes(aiResponse[i])) {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
      setMessages([...updatedMessages, { context: aiResponse, sender: "Ai" }]);
      setStreamingText("");
    } catch (err) {
      console.error("Error fetching AI response:", err);
      setError(true); // set error state if API call fails
    } finally {
      setLoading(false);
    }
  };

  // enter key to send message
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleSend(); // call handlesend function
    }
  };

  const handleChatReset = () => {
    setMessages([]); // clear messages
    setPrompt(""); // clear input field
    setError(false); // reset error state
    setParticipant(selectedDeal.participants[0].prospect_name);
    setCurrentDealName(selectedDeal.deal.deal_name); // reset selected deal
    console.log(participant);
    console.log(selectedDeal.participants[0].prospect_name);
  };

  const generateSandboxReport = async () => {
    // handle report generation logic here
    try {
      setReportLoading(true);
      setReportGenerated(true);
      console.log("Generating report for deal:", selectedDeal.deal.deal_name);
      const response = await axios.post(`${ReportServer}`, {
        participant: participant,
        chatHistory: messages,
        deal_name: currentDealName,
        deal_id: parseInt(selectedDeal.deal.id),
      });

      console.log(response.data);
      // Remove the code block wrapper (```json ... ```)
      const cleanJsonString = response.data.response.replace(
        /```json\n|\n```/g,
        ""
      );

      // Parse the clean JSON string
      const parsedResponse = JSON.parse(cleanJsonString);
      setReport(parsedResponse);
      console.log(report);
      // setReportGenerated(true);
      setReportLoading(false);
      handleChatReset(); // reset chat after report generation
    } catch {
      setReportLoading(false);
    } finally {
      setReportLoading(false);
    }
  };

  const handleModeChange = (event) => {
    setCommunicationMode(event.target.value);
    console.log("Communication mode changed to:", event.target.value);
    // TODO: Implement mode switching logic
  };

  // selectedDeal is updated, reset chat
  useEffect(() => {
    handleChatReset();
  }, [selectedDeal]);

  return (
    <Box
      marginTop={2}
      maxWidth={"82%"}
      minWidth={"82%"}
      // sx={{ maxWidth: "100%" }}
      backgroundColor="background.default"
      display={"flex"}
      flexDirection="column"
    >
      {/* Message Box*/}
      <Box border={1} height={"85%"} borderColor="divider" maxWidth={"100%"}>
        {/* Chat Header */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          gap={1}
          height={"100%"}
          overflow={"auto"}
          maxHeight={"900px"}
          ref={listRef}
        >
          {/* Toolbar */}
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
            bgcolor={"background.paper"}
            sx={{
              p: 2,
              borderRadius: "8px",
              boxShadow: 1,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            {/* Mode Selection Dropdown */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel color="text.primary" id="communication-mode-label">
                Mode
              </InputLabel>
              <Select
                labelId="communication-mode-label"
                id="communication-mode-select"
                value={communicationMode}
                label="Mode"
                onChange={handleModeChange}
                sx={{
                  backgroundColor: "background.paper",
                }}
              >
                <MenuItem value="chat"> Text Mode</MenuItem>
                <MenuItem value="voice"> Voice Mode</MenuItem>
              </Select>
            </FormControl>

            {/* Toolbar Actions */}
            <Box display="flex" gap={2} alignItems="center">
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontWeight: "medium",
                }}
              >
                Ready to see your analysis?
              </Typography>
              <Tooltip title="End the chat and generate report">
                <Button
                  variant="contained"
                  disabled={messages.length <= 1}
                  color="primary"
                  onClick={generateSandboxReport}
                  sx={{
                    fontSize: "1.1rem",
                    px: 3,
                    color: "#fdfdfdff",
                    py: 0.8,
                    borderRadius: 2,
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #4c5460ff, #272a42ff)",
                      transform: "scale(1.02)",
                      transition: "all 0.2s ease",
                    },
                  }}
                  endIcon={<AssessmentOutlined />}
                >
                  Generate
                </Button>
              </Tooltip>
            </Box>
          </Box>
          <Box>
            <CRMAiEntry
              sender={"Ai"}
              context={`Hi, I am ${selectedDeal.participants[0].prospect_name}. Practice preparing for a call with me!`}
            />
          </Box>

          {/* Displaying the messages object: {context: prompt (user input), sender: "User"} */}
          {messages.map((message, index) => {
            if (message.sender === "User") {
              return (
                <CRMChatbotTextEntry
                  key={index} // Add key prop
                  sender={message.sender}
                  context={message.context}
                />
              );
            } else {
              return (
                <CRMAiEntry
                  key={index} // Add key prop
                  sender={message.sender}
                  context={message.context}
                />
              );
            }
          })}
          {streamingText && <CRMAiEntry sender="Ai" context={streamingText} />}
          {/* Display loading indicator while AI is responding */}
          {loading && !streamingText && (
            <LoadingThreeDotsPulse style={{ mt: 2 }} />
          )}
          <div ref={messageRef}></div>
        </Box>
      </Box>
      {/* Chat Box*/}
      <Box height={"15%"}>
        {/* Chat box components container => row */}
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={1}
          sx={{ paddingTop: 1 }}
        >
          <TextField
            variant="outlined"
            placeholder="Type your response..."
            size="small"
            multiline
            rows={3}
            onKeyDown={handleKeyDown} // handle enter key when a key is pressed
            value={prompt} // bind the prompt state
            onChange={(e) => setPrompt(e.target.value)} // update the prompt state every time the user types
            sx={{
              flexGrow: 1,
              backgroundColor: "#334155",
              borderRadius: 2,
            }}
          />
          {/* Send Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            disabled={loading}
          >
            {/* <span style={{ color: "white", fontWeight: "bold" }}>
              {loading ? "Sending..." : "Send"}
            </span> */}
            <Send sx={{ color: "#fdfdfdff", borderRadius: 2 }} />
          </Button>
        </Box>
      </Box>
      {/* Modal that appears on Generation of Report */}
      <Dialog
        open={reportGenerated}
        onClose={handleCloseReport}
        sx={{ borderRadius: 10 }}
      >
        {reportLoading ? (
          <Box
            sx={{
              padding: 3,
              backgroundColor: "background.paper",
              pl: 4,
              pr: 4,
              width: 600,
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              minWidth: "fit-content",
              minHeight: "fit-content",
            }}
          >
            <Box width={"100%"} sx={{ position: "absolute", top: 70, left: 0 }}>
              <Curved
                marqueeText="Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦"
                speed={3}
                curveAmount={-250}
                interactive={false}
                direction="right"
              />
            </Box>

            <CircularProgress />
            <Box
              width={"100%"}
              sx={{ position: "absolute", bottom: 30, left: 0 }}
            >
              <Curved
                marqueeText="Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦ Generating Your Report ✦"
                speed={3}
                curveAmount={250}
                interactive={false}
                direction="left"
              />
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              padding: 3,
              backgroundColor: "background.paper",
              pl: 4,
              pr: 4,
              width: 600,
              height: 700,
              minWidth: "fit-content",
              minHeight: "fit-content",
            }}
          >
            <DialogTitle
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
                color: "text.primary",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Report Generated
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                    gutterBottom
                  >
                    Deal Name: {currentDealName}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary" }}
                    gutterBottom
                  >
                    Participant: {participant}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: report.score >= 70 ? "success.main" : "error.main",
                    }}
                    gutterBottom
                  >
                    Score: {report.score}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary" }}
                    gutterBottom
                  >
                    Summary: {report.summary}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", mt: 2 }}
                    gutterBottom
                  >
                    Improvements:
                  </Typography>
                  <ul>
                    {report.improvements.map((improvement, index) => (
                      <li key={index}>
                        <Typography
                          sx={{ color: "text.primary" }}
                          variant="body1"
                        >
                          {improvement}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseReport} color="primary">
                Close
              </Button>
            </DialogActions>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}

export default SandboxChat;
