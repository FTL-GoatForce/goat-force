import React, { useEffect, useState } from "react";
import SideBar from "../ReusableComponents/Sidebar";
import { Box } from "@mui/material";
import DealSummary from "../DealDetailsComponents/DealSummary";
import DealDetailsHeader from "../DealDetailsComponents/DealDetailsHeader";
import InsightsCard from "../DealDetailsComponents/InsightsCard";
import MissingInformationCard from "../DealDetailsComponents/MissingInformationCard";
import RecentActivity from "../DealDetailsComponents/RecentActivity";
import ContactPersonality from "../DealDetailsComponents/ContactPersonality";
import { useParams } from "react-router-dom";
import axios from "axios";

function DealDetails() {
  const { id } = useParams();
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch deal data based on the ID from the URL
  useEffect(() => {
    async function fetchDeal() {
      try {
        const response = await axios.get(`http://localhost:3000/deal/${id}`);
        setDeal(response.data); // Assuming response is the full deal object
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch deal:", error);
        setLoading(false);
      }
    }
    fetchDeal();
  }, [id]);

  // LOADING STATE
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!deal) {
    return <div>Deal not found</div>;
  }

  // helper function to capitalize the first letter of a string
  const capitalizeFirst = (str) => {
    if (!str) return "Unknown";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(deal);

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
          <DealDetailsHeader
            deal_name={deal.deal.deal_name} // Fallback if deal_name is not provided
          />

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
                value={deal.deal.deal_value}
                stage={deal.deal.stage}
                closeDate={deal.deal.expected_close_date}
                daysLeft="12" // TODO: calculate today -
                company={deal.deal.company_name}
                primaryContact={deal.participants[0].prospect_name}
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
              <RecentActivity
                deal_id={id} // Pass the deal ID to fetch activities
              />
              {/* TODO: pass in data from personalityData useState */}
              <ContactPersonality
              // call the helper function to return a capitalized string
                communicationStyle={capitalizeFirst(
                  deal?.personality?.[0]?.personality_traits
                    ?.personality_communication_profile?.communication_style
                )}
                responseTime={capitalizeFirst(
                  deal?.personality?.[0]?.personality_traits
                    ?.communication_behavior?.response_time
                )}
                decisionMaking={capitalizeFirst(
                  deal?.personality?.[0]?.personality_traits
                    ?.personality_communication_profile?.decision_making_style
                )}
                objectionStyle={capitalizeFirst(
                  deal?.personality?.[0]?.personality_traits
                    ?.personality_communication_profile?.objection_style
                )}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DealDetails;
