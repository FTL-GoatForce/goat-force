import React, { useEffect, useState } from "react";
import SideBar from "../ReusableComponents/Sidebar";
import { Box } from "@mui/material";
import DealSummary from "../DealDetailsComponents/DealSummary";
import DealDetailsHeader from "../DealDetailsComponents/DealDetailsHeader";
import InsightsCard from "../DealDetailsComponents/InsightsCard";
import MissingInformationCard from "../DealDetailsComponents/MissingInformationCard";
import RecentActivity from "../DealDetailsComponents/RecentActivity";
import ContactPersonality from "../DealDetailsComponents/ContactPersonality";

// TODO: pass in deals.deal_name, deals.id prop fetched from the database
// will not be fetched here, but in the parent component
function DealDetails( {deal_name, deal_id, company_name, deal_stage, deal_status, deal_amount, expected_close_date} ) {
  const [personalityData, setPersonalityData] = useState([]); 

  useEffect(() => {
    // const fetchPersonalityData = async () => {
    // const response = await axios.get('/deals/{deal_id}/personality');
    // set personalityData(response.data);
  

  }, [deal_id]) // re-render when deal_id changes
  
  return (
    <>
      {/* page-container */}
      <Box
        className="deal-details-page"
        sx={{
          minHeight: "100vh",
          display: "flex", 
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%", 
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
              {/* TODO: pass in from function parameters (parent will fetch) */}
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
              <RecentActivity />
              {/* TODO: pass in data from personalityData useState */}
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
