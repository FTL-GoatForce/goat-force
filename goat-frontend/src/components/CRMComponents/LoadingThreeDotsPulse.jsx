import { motion } from "motion/react";
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
import Markdown from "react-markdown";
import { alpha } from "@mui/material";
import logo from "../../assets/sfgoat.webp";

function LoadingThreeDotsPulse() {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "flex-start",
        backgroundColor: "rgba(55, 70, 104, 0.5)",
        ml: 1,
        px: 1.5,
        py: 0.75,
        width: "fit-content",
        maxWidth: "80%",
        border: (theme) =>
          `1px solid ${alpha(theme.palette.primary.light, 0.2)}`,
        borderRadius: 2,
        mt: 1,
        mb: 1,
      }}
    >
      <Avatar sx={{ mt: "2px", height: 24, width: 24, mr: 1 }} src={logo} />

      <motion.div
        animate="pulse"
        transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
        className="container"
      >
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <motion.div className="dot" variants={dotVariants} />
        <StyleSheet />
      </motion.div>
    </ListItem>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin: 10px;
            }

            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #06b6d4;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsPulse;
