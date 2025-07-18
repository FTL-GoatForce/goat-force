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
} from "@mui/material";
import { alpha } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { AutoAwesome, Close, Send, Psychology } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import logo from "../../assets/sfgoat.webp";
import PersonIcon from "@mui/icons-material/Person";

const CRMChatbotTextEntry = ({ sender, context }) => {
  return (
    <ListItem
      data-sender="User"
      sx={{
        display: "flex",
        backgroundColor: "rgba(55, 70, 104, 0.5)",
        alignItems: "flex-start",
        width: "fit-content",
        maxWidth: "80%",
        border: (theme) =>
          `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        borderRadius: 2,
        alignSelf: "flex-end",
        px: 1.5,
        py: 0.75,
        mt: 1,
        mb: 1,
        mr: 1,
      }}
    >
      <Avatar
        sx={{
          mb: 0,
          bgcolor: "secondary.main",
          width: 23,
          height: 23,
          mr: 1,
        }}
      >
        <PersonIcon />
      </Avatar>
      <Typography sx={{ color: "text.primary", fontSize: "0.9rem" }}>
        {context}
      </Typography>
    </ListItem>
  );
};

export default CRMChatbotTextEntry;
