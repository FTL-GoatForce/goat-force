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
  Chip,
  CircularProgress,
} from "@mui/material";
import {
  AutoAwesome,
  Close,
  Send,
  Psychology,
  Fingerprint,
} from "@mui/icons-material";
import ShinyText from "../ReusableComponents/Shiny";
import { alpha } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useEffect, useState, useRef } from "react";
import logo from "../../assets/sfgoat.webp";
import CRMChatbotTextEntry from "./CRMChatbotTextEntry";
import CRMAiEntry from "./CRMAiEntry";
import axios from "axios";
import LoadingThreeDotsPulse from "./LoadingThreeDotsPulse";
import { getCurrentSession } from "../../utils/supabase";

const CRMChatBot = ({ handleExit }) => {
  const MCPServer = import.meta.env.VITE_MCP_SERVER;
  const messageRef = useRef(null);
  const listRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [chat, setChat] = useState(() => {
    const localState = localStorage.getItem("chatHistory");
    return localState ? JSON.parse(localState) : [];
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    const chatObj = { context: prompt, sender: "User" };
    const updatedChat = [...chat, chatObj];
    setChat(updatedChat);
    setStreamingText("");
    setPrompt(""); // Clear the text field instantly
    
    try {
      setLoading(true);
      
      // Get current user session
      const session = await getCurrentSession();
      if (!session) {
        console.error('No session found. User needs to log in.');
        window.location.href = '/auth';
        return;
      }
      
      const response = await axios.post(MCPServer, {
        message: prompt,
        chatHistory: updatedChat,
        user_id: session.user.id
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setLoading(false);

      const LLM_Reply = response.data.response;
      
      // Simple streaming effect
      let currentText = "";
      for (let i = 0; i < LLM_Reply.length; i++) {
        currentText += LLM_Reply[i];
        setStreamingText(currentText);
        // Increase delay to 50ms for slower text streaming
        await new Promise(resolve => setTimeout(resolve, 10));
        
        // Add extra delay for punctuation marks to create more natural pauses
        if (['.', '!', '?', '\n'].includes(LLM_Reply[i])) {
          await new Promise(resolve => setTimeout(resolve, 200));
        } else if ([',', ';', ':'].includes(LLM_Reply[i])) {
          await new Promise(resolve => setTimeout(resolve, 100)); 
        }
      }
      
      const LLM_chatObj = { context: LLM_Reply, sender: "Ai" };
      setChat((prev) => [...prev, LLM_chatObj]);
      setStreamingText("");
      console.log(LLM_Reply);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setStreamingText("");
      setChat((prev) => [
        ...prev,
        { context: "Error: Could not connect to the backend", sender: "Ai" },
      ]);
    } finally {
      setDisabled(false);
    }
  }
  function handleNewChat() {
    localStorage.removeItem("chatHistory");
    setChat([]);
  }

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chat));
    // Auto-scroll 
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      }
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [chat, streamingText]);

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
          alignItems: "center",
          bgcolor: (theme) => alpha(theme.palette.background.paper, 0.5),
          borderBottom: "1px solid",
          borderColor: "divider",
          borderRadius: "8px 8px 0 0",
          height: "60px",
          px: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}
        >
          <Avatar
            sx={{
              background: (theme) =>
                `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              width: 32,
              height: 32,
            }}
            src={logo}
          ></Avatar>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              GoatForce AI
            </Typography>
            <Chip
              label="Online"
              size="small"
              sx={{
                backgroundColor: (theme) =>
                  alpha(theme.palette.success.main, 0.2),
                color: "success.main",
                border: (theme) =>
                  `1px solid ${alpha(theme.palette.success.main, 0.3)}`,
                height: 16,
                fontSize: "0.65rem",
              }}
            />
          </Box>
        </Box>

        <Tooltip title="New Chat">
          <IconButton
            variant="contained"
            onClick={handleNewChat}
            sx={{ position: "absolute", ml: 36, mt: 0 }}
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
      <Box sx={{ display: "flex", flexDirection: "column", height: "calc(90vh - 60px)" }}>
        {/* WELCOME MESSAGE */}
        {chat.length === 0 && (
          <Box
            sx={{
              display: "flex",
              height: "250px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                m: 2,
                border: (theme) =>
                  `3px solid ${alpha(theme.palette.primary.light, 0.2)}`,
                // background: (theme) =>
                //   `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary.main, 0.1),
                borderRadius: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "1.2rem", m: 2 }}
                variant="h2"
                color="white"
              >
                <ShinyText
                  text="I'm your GoatForce AI assistant. Ask me anything about your CRM
                data, deals, or pipeline insights "
                ></ShinyText>
                {/* I'm your GoatForce AI assistant. Ask me anything about your CRM
                data, deals, or pipeline insights */}
                <br />
                <Fingerprint sx={{ ml: 1 }} color="white" />
              </Typography>
            </Box>
          </Box>
        )}
        {/* END OF WELCOME MESSAGE */}
        <List
          ref={listRef}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            overflowY: "auto",
            scrollbarGutter: "auto",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
          }}
        >
          {/* Looping through chats Start*/}
          {chat.map((current) => {
            if (current.sender == "User") {
              return (
                <CRMChatbotTextEntry
                  sender={current.sender}
                  context={current.context}
                />
              );
            } else {
              return (
                <CRMAiEntry sender={current.sender} context={current.context} />
              );
            }
          })}
          {streamingText && (
            <CRMAiEntry sender="Ai" context={streamingText} />
          )}
          {loading && !streamingText && <LoadingThreeDotsPulse style={{ mt: 2 }} />}
          <div ref={messageRef} />
        </List>

        {/* Looping through chats END */}
        {/* TEXTField & SUBMIT Chat Container START */}
        <Box
          sx={{
            p: 2.5,
            borderTop: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
            }}
          >
            <Box sx={{ bgcolor: "background.paper" }}>
              <TextField
                fullWidth
                placeholder="Ask GoatChat"
                value={prompt}
                color="secondary"
                onChange={(e) => {
                  setPrompt(e.target.value);
                  if (e.target.value == "") {
                    setError(true);
                  } else {
                    setError(false);
                  }
                }}
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
              disabled={error || disabled}
            >
              Send
            </Button>
          </form>
        </Box>
        {/* TEXTField & SUBMIT Chat Container END */}
      </Box>
    </Box>
  );
};

export default CRMChatBot;
