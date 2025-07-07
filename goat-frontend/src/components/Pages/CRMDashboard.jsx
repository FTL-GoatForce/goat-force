import { Box } from "@mui/material";
import React from "react";
import SideBar from "../ReusableComponents/Sidebar";
import Header from "../ReusableComponents/Header";
import CRMCards from "../CRMComponents/CRMCards";
import CRMData from "../CRMComponents/CRMData";
const Dashboard = () => {
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
          <Header /> {/* The header component */}
          {/* Container for cards and data to apply common padding and max-width */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1280px", // Apply max-width to content area
              padding: "24px", // Apply padding to content area
              margin: "0 auto", // Center the content horizontally within its column
              marginTop: "32px", // Spacing from the CRMHeader
            }}
          >
            <CRMCards /> {/* The cards component */}
            <CRMData /> {/* The data table component */}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Dashboard;
