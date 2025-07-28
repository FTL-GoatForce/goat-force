import React, { useEffect, useState } from "react";
import SideBar from "../ReusableComponents/Sidebar";
import { Box, Card } from "@mui/material";
import DealSummary from "../DealDetailsComponents/DealSummary";
import DealDetailsHeader from "../DealDetailsComponents/DealDetailsHeader";
import InsightsCard from "../DealDetailsComponents/InsightsCard";
import MissingInformationCard from "../DealDetailsComponents/MissingInformationCard";
import RecentActivity from "../DealDetailsComponents/RecentActivity";
import ContactPersonality from "../DealDetailsComponents/ContactPersonality";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DealDetails() {
  const { id } = useParams();
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [followUpData, setFollowUpData] = useState(null); // useState to store latest follow-up data, will change when update button is clicked and re-rendered

  // fetch deal data based on the ID from the URL
  useEffect(() => {
    async function fetchDeal() {
      try {
        const response = await axios.get(`http://localhost:3000/deal/${id}`);
        setDeal(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch deal:", error);
        setLoading(false);
      }
    }
    fetchDeal();
  }, [id]);

  // LOADING STATE - match your actual layout
  if (loading) {
    return (
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
        <SideBar />
        <Box
          className="deal-details-content"
          sx={{
            marginTop: "100px",
            marginLeft: "50px",
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 2,
          }}
        >
          {/* Header Skeleton */}
          <Skeleton
            height={60}
            width="40%"
            baseColor="#020617"
            highlightColor="#06B6D4"
          />

          {/* Cards Container */}
          <Box className="cards-container" sx={{ display: "flex", gap: 3 }}>
            {/* Left Cards (65% width) */}
            <Box
              className="deal-details-left-cards"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "65%",
              }}
            >
              {/* Deal Summary Card */}
              <Skeleton
                height={200}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
              {/* Insights Card */}
              <Skeleton
                height={300}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
              {/* Missing Information Card */}
              <Skeleton
                height={250}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
            </Box>

            {/* Right Cards (35% width) */}
            <Box
              className="deal-details-right-cards"
              sx={{
                display: "flex",
                width: "35%",
                flexDirection: "column",
                gap: 3,
              }}
            >
              {/* Recent Activity Card */}
              <Skeleton
                height={400}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
              {/* Contact Personality Card */}
              <Skeleton
                height={300}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (!deal) {
    return <div>Deal not found</div>;
  }

  // helper function to capitalize the first letter of a string
  const capitalizeFirst = (str) => {
    if (!str) return "Unknown";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // helper function to calculate days left until the deal's expected close date
  const calculateDaysLeft = (closeDateString) => {
    if (!closeDateString) return "Unknown";

    const closeDate = new Date(closeDateString);
    const today = new Date();

    // reset time to start of day for accurate day calculation
    today.setHours(0, 0, 0, 0);
    closeDate.setHours(0, 0, 0, 0);

    const diffInMs = closeDate - today;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 0) {
      return `${Math.abs(diffInDays)} days overdue`;
    } else if (diffInDays === 0) {
      return "Due today";
    } else {
      return `${diffInDays} days left`;
    }
  };

  // latest email / slack follow-up
  const latestEmailFollowUp = deal.followUps
    .filter((followUp) => followUp.communication_type === "Email")
    .reverse()[0];
  const latestSlackFollowUp = deal.followUps
    .filter((followUp) => followUp.communication_type === "Slack")
    .reverse()[0];

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
        <SideBar />
        <Box
          className="deal-details-content"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            gap: 2,
            margin: "30px",
          }}
        >
          <DealDetailsHeader
            deal_name={deal.deal.deal_name}
            risk_score={deal.risks[deal.risks.length - 1].deal_risk_score}
          />

          <Box className="cards-container" sx={{ display: "flex", gap: 3 }}>
            <Box
              className="deal-details-left-cards"
              sx={{
                ml: 2, // added some margin here on the left side
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "65%",
                maxWidth: "1000px",
              }}
            >
              <DealSummary
                // all these values are fetched once id is clicked so up to date
                dealSummary={deal.conversationHistory[0].deal_summary}
                value={deal.deal.deal_value}
                stage={deal.deal.stage}
                closeDate={deal.deal.expected_close_date}
                daysLeft={calculateDaysLeft(deal.deal.expected_close_date)}
                company={deal.deal.company_name}
                primaryContact={deal.participants[0].prospect_name}
              />

              <InsightsCard
                email_contact_address={latestEmailFollowUp.contact_address}
                email_subject={latestEmailFollowUp.subject}
                email_body={latestEmailFollowUp.body}
                slack_contact_address={latestSlackFollowUp.contact_address}
                slack_body={latestSlackFollowUp.body}
              />

              {/* TODO:  Replace if go back to auto-fill idea */}
              {/* <MissingInformationCard /> */}
            </Box>

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
                timelineData={deal.timeline || []}
                loading={loading}
              />
              <ContactPersonality
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
