import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import CRMChatbotTextEntry from "../CRMComponents/CRMChatbotTextEntry";
import { useState } from "react";
import CRMAiEntry from "../CRMComponents/CRMAiEntry";

function SandboxChat({ selectedDeal, deals }) {
  const [prompt, setPrompt] = useState(""); // holds the user's input on the chat box
  const [messages, setMessages] = useState([]); // holds the chat messages
  const [response, setResponse] = useState(""); // holds the AI response
  const [error, setError] = useState(null); // holds any error messages
  const [loading, setLoading] = useState(false); // loading state for the AI response

  // display user message / ai response
  const handleSend = async () => {
    // USER INPUT VALIDATION / SENDING
    if (!prompt.trim()) return; // do not send empty messages
    setError(null);
    // create a new message object from user and append to messages array
    const newMessage = { context: prompt, sender: "User" };
    setMessages([...messages, newMessage]);
    setPrompt(""); // clear the input field

    try {
      setLoading(true);
      // AI API call to get the response
    } catch (err) {
      setError("Failed to get response from AI");
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

  return (
    <Box
      marginTop={2}
      width={"100%"}
      backgroundColor="background.default"
      display={"flex"}
      flexDirection="column"
    >
      {/* Message Box*/}
      <Box border={1} height={"85%"} borderColor="divider">
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          gap={1}
          height={"100%"}
          overflow={"auto"}
        >
          {/* Displaying the messages object: {context: prompt (user input), sender: "User"} */}
          {messages.map((message, index) => {
            if (message.sender == "User") {
              return (
                <CRMChatbotTextEntry
                  sender={message.sender}
                  context={message.context}
                />
              );
            } else {
              return (
                <CRMAiEntry sender={message.sender} context={message.context} />
              );
            }
          })}
          {/* TODO: Displaying the AI response */}
        </Box>
      </Box>
      {/* Chat Box*/}
      <Box height={"15%"}>
        {/* Chat box components container => row */}
        <Box display={"flex"} flexDirection={"row"} gap={1} padding={2}>
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
            <span style={{ color: "white", fontWeight: "bold" }}>Send</span>
          </Button>{" "}
        </Box>
      </Box>
    </Box>
  );
}

export default SandboxChat;
