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

function Loading() {
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

export default Loading;
