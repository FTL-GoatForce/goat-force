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

const CRMChatBot = ({ handleExit }) => {
  const MCP = import.meta.env.VITE_MCP_SERVER;
  const messageRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState(() => {
    const localState = localStorage.getItem("chatHistory");
    return localState ? JSON.parse(localState) : [];
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const chatObj = { context: prompt, sender: "User" };
    setChat((prev) => [...prev, chatObj]);
    try {
      setLoading(true);
      const response = await axios.post(MCP, {
        message: prompt,
      });
      setLoading(false);

      const LLM_Repy = response.data.response;
      const LLM_chatObj = { context: LLM_Repy, sender: "Ai" };
      setChat((prev) => [...prev, LLM_chatObj]);
      console.log(LLM_Repy);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setChat((prev) => [
        ...prev,
        { context: "Error: Could not connect to the backend", sender: "Ai" },
      ]);
    }
    setPrompt("");
  }
  function handleNewChat() {
    localStorage.removeItem("chatHistory");
    setChat([]);
  }

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chat));
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <Box>
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
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            overflowY: "auto",
            scrollbarGutter: "auto",
            display: "flex",
            flexDirection: "column",
            height: "700px",
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
          {loading && <LoadingThreeDotsPulse style={{ mt: 2 }} />}
          <div ref={messageRef} />
        </List>

        {/* Looping through chats END */}
        {/* TEXTField & SUBMIT Chat Container START */}
        <Box
          sx={{
            m: 2.5,
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              position: "absolute",
              bottom: 10,
              marginLeft: 0,
              width: 340,
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
              disabled={error}
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
