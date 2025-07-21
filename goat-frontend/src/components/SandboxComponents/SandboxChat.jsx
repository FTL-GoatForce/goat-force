import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import CRMChatbotTextEntry from "../CRMComponents/CRMChatbotTextEntry";
import { useState } from "react";
import CRMAiEntry from "../CRMComponents/CRMAiEntry";
import { m } from "motion/react";
import { useEffect } from "react";
import { useRef } from "react";
import ShinyText from "../ReusableComponents/Shiny";

function SandboxChat({ selectedDeal, deals }) {
  const [prompt, setPrompt] = useState(""); // holds the user's input on the chat box
  const [messages, setMessages] = useState([]); // holds the chat messages
  const [error, setError] = useState(false); // holds any error messages
  const [loading, setLoading] = useState(false); // loading state for the AI response

  // display user message / ai response
  const handleSend = async () => {
    // USER INPUT VALIDATION / SENDING
    if (!prompt.trim()) return; // do not send empty messages

    // create a new message object from user and append to messages array
    const newMessage = { context: prompt, sender: "User" };
    const updatedMessages = [...messages, newMessage]; // Create updated array first
    setMessages(updatedMessages);

    const currentPrompt = prompt; // Store current prompt before clearing
    setPrompt(""); // clear the input field

    try {
      setLoading(true);
      // AI API call to get the response
      // const aiResponse = await axios.post()
      const aiResponse =
        "This is a mock AI response based on the prompt: " + currentPrompt; // Mock response for demonstration

      // use updatedMessages array instead of the old messages state (async state update)
      setMessages([...updatedMessages, { context: aiResponse, sender: "Ai" }]);
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

  // TODO: pass to parent sandbox to reset chat once new selected deal is chosen
  const handleChatReset = () => {
    setMessages([]); // clear messages
    setPrompt(""); // clear input field
    setError(false); // reset error state
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
          maxHeight={"900px"}
        >
          {/* Chat Header */}
          <Box>
            <CRMAiEntry
              sender={"Ai"}
              context={
                `Hi, I am ${selectedDeal.participants[0].prospect_name}. Practice with preparing for a call with me!`
              }
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
          {/* Display loading indicator while AI is responding */}
          {loading && <CRMAiEntry sender="Ai" context="Thinking..." />}
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
            <span style={{ color: "white", fontWeight: "bold" }}>
              {loading ? "Sending..." : "Send"}
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SandboxChat;
