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
} from "@mui/material";
import { AutoAwesome, Close, Send } from "@mui/icons-material";
import React, { useState } from "react";
import logo from "../../assets/sfgoat.webp";
import CRMChatbotTextEntry from "./CRMChatbotTextEntry";

const CRMChatBot = ({ handleExit }) => {
  const [prompt, setPrompt] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
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
          borderBottom: 1,
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
        <IconButton
          variant="contained"
          onClick={handleExit}
          sx={{ position: "absolute", right: 0, m: 1 }}
          size="small"
        >
          <Close />
        </IconButton>
      </Box>
      {/* End of ChatBot Header */}

      {/* Start of Chat */}
      <Box>
        <CRMChatbotTextEntry />
        <List
          sx={{
            mb: 2,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            height: "700px",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="User"
              secondary="This is the message content"
            />
          </ListItem>
          <ListItem justify-content="flex-end">
            <ListItemText
              primary="GoatChat"
              secondary="This is the message response"
            />
          </ListItem>
        </List>
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
      </Box>
      {/* End of Chat */}
    </Box>
  );
};

export default CRMChatBot;
