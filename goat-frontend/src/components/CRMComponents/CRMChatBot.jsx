import {
  Box,
  Button,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { AutoAwesome, Close, Send } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/sfgoat.webp";
import CRMChatbotTextEntry from "./CRMChatbotTextEntry";
import PersonIcon from "@mui/icons-material/Person";

const CRMChatBot = ({ handleExit }) => {
  const [prompt, setPrompt] = useState("");
  const [chat, setChat] = useState(() => {
    const localState = localStorage.getItem("chatHistory");
    return localState ? JSON.parse(localState) : [];
  });
  function handleSubmit(event) {
    const chatObj = { context: prompt, sender: "User" };
    setChat((prev) => [...prev, chatObj]);
    setPrompt("");
    event.preventDefault();
  }
  function handleNewChat() {
    localStorage.removeItem("chatHistory");
    setChat([]);
  }
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chat));
  }, [chat]);

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bottom: 0,
        right: 0,
        position: "fixed",
        height: "90vh",
        width: "380px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ChatBot Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          bgcolor: "background.paper",
          m: 0,
          borderRadius: 2,
          borderColor: "#b8b8b8",
          height: "60px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "text.primary",
            m: 1.7,
            fontWeight: "bold",
          }}
        >
          GoatChat
        </Typography>
        <Avatar src={logo} sx={{ mt: 1 }} />

        <Tooltip title="New Chat">
          <IconButton
            variant="contained"
            onClick={handleNewChat}
            sx={{ position: "absolute", ml: 38, mt: 1 }}
            size="small"
          >
            <ModeEditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Close Chat">
          <IconButton
            variant="contained"
            onClick={handleExit}
            sx={{ position: "absolute", right: 0, m: 1 }}
            size="small"
          >
            <Close />
          </IconButton>
        </Tooltip>
      </Box>
      {/* End of ChatBot Header */}

      {/* Start of Chat main content */}
      <Box>
        {/* <CRMChatbotTextEntry /> */}
        {/* Main thought process --- useState array holding messages, every submit will make an api call and grab a direct result --> will add this to the messages array
            Bypass backend by using an MCP Server giving chatbot smart insights 
            Loop through chat array of objects holding a prompt and  */}

        <List
          sx={{
            mb: 2,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            height: "700px",
          }}
        >
          {/* WELCOME MESSAGE */}
          <ListItem
            justify-content="flex-reverse"
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              backgroundColor: "rgba(55, 70, 104, 0.5)",
              borderRadius: 5,
              m: 2,
              width: "fit-content",
            }}
          >
            <Avatar sx={{ mb: 0 }} src={logo} />
            <Typography sx={{ ml: 1, color: "white" }}>
              Hi, I am AgentGoat! Ask me anything about your data!
            </Typography>
          </ListItem>

          {/* Looping through chats Start*/}
          {chat.map((current) => {
            if (current.sender === "User")
              return (
                <ListItem
                  sx={{
                    display: "flex",
                    backgroundColor: "rgba(55, 70, 104, 0.5)",
                    borderRadius: 5,
                    m: 2,
                    width: "fit-content",
                  }}
                >
                  <Avatar sx={{ mb: 0, bgcolor: "white" }}>
                    <PersonIcon color="#FFFFFF" />
                  </Avatar>
                  {/* <ListItemText
                  sx={{ ml: 1 }}
                  slotProps={{
                    secondary: {
                      fontSize: 15,
                      color: "primary",
                    },
                 
                  }}
                  primary={current.sender}
                  secondary={current.context}
                /> */}
                  <Typography sx={{ ml: 1, color: "white" }}>
                    {current.context}
                  </Typography>
                </ListItem>
              );
            else {
              return (
                <ListItem
                  sx={{
                    display: "flex",
                    backgroundColor: "rgba(55, 70, 104, 0.5)",
                    borderRadius: 5,
                    m: 2,
                    width: "fit-content",
                  }}
                >
                  <Avatar sx={{ mb: 0 }} src={logo} />
                  <Typography sx={{ ml: 1, color: "white" }}>
                    {current.context}
                  </Typography>
                </ListItem>
              );
            }
          })}
          {/* Looping through chats END */}
        </List>

        {/* TEXTField & SUBMIT Chat Container START */}
        <form
          onSubmit={handleSubmit}
          style={{
            position: "absolute",
            bottom: 0,
            marginLeft: 0,
            width: 378,
          }}
        >
          <Box sx={{ bgcolor: "background.paper" }}>
            <TextField
              fullWidth
              placeholder="Ask GoatChat"
              value={prompt}
              color="secondary"
              onChange={(e) => setPrompt(e.target.value)}
              sx={{ borderRadius: 0, mb: 0.5, color: "secondary.main" }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AutoAwesome />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Button
            sx={{ borderRadius: 0, pb: 1 }}
            type="submit"
            variant="contained"
            endIcon={<Send />}
            color="secondary"
            fullWidth
          >
            Send
          </Button>
        </form>
        {/* TEXTField & SUBMIT Chat Container END */}
      </Box>
      {/* End of Chat main content */}
    </Box>
  );
};

export default CRMChatBot;
