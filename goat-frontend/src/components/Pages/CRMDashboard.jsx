import { Box, Typography, Paper, Button, duration } from "@mui/material";
import { motion, AnimatePresence, easeInOut } from "motion/react";

import React from "react";
import SideBar from "../ReusableComponents/Sidebar";
import Header from "../ReusableComponents/Header";
import CRMCards from "../CRMComponents/CRMCards";
import CRMData from "../CRMComponents/CRMData";
import CRMGraphs from "../CRMComponents/CRMGraphs";

import AssistantIcon from "@mui/icons-material/Assistant";
import CRMChatBot from "../CRMComponents/CRMChatBot";
import { useState } from "react";

const Dashboard = () => {
  function handleExit() {
    setChatOpen((prev) => !prev);
  }
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <>
      {/* BOX that holds all components */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex", // Arrange children (SideBar and main content) in a row
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%", // Ensure it takes full width
        }}
      >
        <SideBar /> {/* The sidebar component */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Arrange header, cards, and data in a column
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            overflowX: "hidden", // Prevent horizontal scroll from inner elements
          }}
        >
          <Header />
          {/* Container for cards and data and graphs to apply common padding and max-width */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1280px", // Apply max-width to content area
              padding: "24px", // Apply padding to content area
              margin: "0 auto", // Center the content horizontally within its column
              marginTop: "32px", // Spacing from the CRMHeader
            }}
          >
            <CRMGraphs /> {/* The graphs component */}
            <CRMCards /> {/* The cards component */}
            <CRMData /> {/* The data table component */}
          </Box>
        </Box>
        {/* Chat Bot Section */}
        <AnimatePresence initial={false}>
          {chatOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CRMChatBot handleExit={handleExit} />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            color: "white",
            visibility: chatOpen ? "hidden" : "inline",
          }}
          color="secondary"
          startIcon={<AssistantIcon color="secondary.main" />}
          onClick={handleExit}
        >
          Ask the Goat
        </Button>
        {/* END Of ChatBot Section */}
      </Box>
    </>
  );
};
export default Dashboard;
