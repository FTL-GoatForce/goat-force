import React, { use } from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import CRMChatbotTextEntry from "../CRMComponents/CRMChatbotTextEntry";
import { useState } from "react";
import CRMAiEntry from "../CRMComponents/CRMAiEntry";
import { m } from "motion/react";
import { useEffect } from "react";
import { useRef } from "react";
import LoadingThreeDotsPulse from "../CRMComponents/LoadingThreeDotsPulse";
import axios from "axios";
import { Send } from "@mui/icons-material";

function SandboxChat({ selectedDeal, deals }) {
  const SandboxServer = import.meta.env.VITE_SANDBOX_MODE;
  const [prompt, setPrompt] = useState(""); // holds the user's input on the chat box
  const [messages, setMessages] = useState([]); // holds the chat messages
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [currentDealName, setCurrentDealName] = useState(
    selectedDeal.deal.deal_name
  );
  const [participant, setParticipant] = useState(
    selectedDeal.participants[0].prospect_name || "Emily Johnson"
  );
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

  // selectedDeal is updated, reset chat
  useEffect(() => {
    handleChatReset();
  }, [selectedDeal]);

  return (
    <Box
      marginTop={2}
      width={"100%"}
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
          {/* Chat Header */}
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
    </Box>
  );
}

export default SandboxChat;
