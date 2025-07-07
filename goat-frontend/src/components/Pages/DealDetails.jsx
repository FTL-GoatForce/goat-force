import React from "react";
import SideBar from "../ReusableComponents/Sidebar";
import { Box } from "@mui/material";
import DealSummary from "../DealDetailsComponents/DealSummary";
import DealDetailsHeader from "../DealDetailsComponents/DealDetailsHeader";
import InsightsCard from "../DealDetailsComponents/InsightsCard";
import MissingInformationCard from "../DealDetailsComponents/MissingInformationCard";
import RecentActivity from "../DealDetailsComponents/RecentActivity";
import ContactPersonality from "../DealDetailsComponents/ContactPersonality";

function DealDetails() {
  return (
    <>
      {/* page-container */}
      <Box
        className="deal-details-page"
        sx={{
          minHeight: "100vh",
          display: "flex", // Arrange children (SideBar and main content) in a row
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%", // Ensure it takes full width
        }}
      >
        <SideBar /> {/* The sidebar component */}
        {/* full container of content (excluding sidebar)*/}
        <Box
          className="deal-details-content"
          sx={{
            display: "flex",
            flexDirection: "column", // Arrange header, cards, and data in a column
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            gap: 2,
            margin: "30px",
          }}
        >
          {/* Header of page */}
          <DealDetailsHeader />

          {/* Cards-container layout */}
          <Box className="cards-container" sx={{ display: "flex", gap: 3 }}>
            {/* Container with left 3 cards */}
            <Box
              className="deal-details-left-cards"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "65%",
              }}
            >
              {/* Left-side component cards */}
              <DealSummary
                value="$125,000"
                stage="Negotiation"
                closeDate="2024-01-15"
                daysLeft="12"
                company="Acme Corp"
                primaryContact="John Smith"
              />
              <InsightsCard />
              <MissingInformationCard />
            </Box>

            {/* Container with right 2 cards */}
            <Box
              className="deal-details-right-cards"
              sx={{
                display: "flex",
                width: "35%",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* INPUT COMPONENTS HERE */}
              <RecentActivity />
              <ContactPersonality
                communicationStyle={"Direct & Analytical"}
                responseTime={"Within 2-4 hours"}
                decisionMaking={"Data Driven, consensus-seeking"}
                objectionStyle={"Price-focused, ROI-conscious"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DealDetails;
