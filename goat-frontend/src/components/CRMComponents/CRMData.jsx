import React from "react";
import {
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditDeal from "../Pages/EditDeal"; // Importing the EditDeal modal component
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Info, Refresh } from "@mui/icons-material";
import axios from "axios";
import slackGif from "../../assets/slack.gif";
import gmailGif from "../../assets/gmail.gif";
import geminiGif from "../../assets/gemini.gif";
import einsteinGif from "../../assets/einstein.gif";

const CRMData = ({ deals }) => {
  const navigate = useNavigate();
  const [loadingStates, setLoadingStates] = useState({});
  const [loadingIcons, setLoadingIcons] = useState({});
  const [transitionStates, setTransitionStates] = useState({});

  // GIFs for rotating loading animation
  const loadingSequence = [
    { name: "Slack", gif: slackGif, color: "#4A154B" },
    { name: "Gmail", gif: gmailGif, color: "#EA4335" },
    { name: "Gemini", gif: geminiGif, color: "#4285F4" },
    { name: "Einstein", gif: einsteinGif, color: "#FF6B35" }
  ];

    async function refreshInsights(deal_id, slack_id, email) {
    // Set loading state for this specific deal
    setLoadingStates(prev => ({ ...prev, [deal_id]: true }));
    setLoadingIcons(prev => ({ ...prev, [deal_id]: 0 })); // Start with first icon
    setTransitionStates(prev => ({ ...prev, [deal_id]: false }));
    
    // Start rotating animation with transition effects
    const interval = setInterval(() => {
      // Start transition (spin out and fade out)
      setTransitionStates(prev => ({ ...prev, [deal_id]: true }));
      
      // After transition completes, switch to next GIF
      setTimeout(() => {
        setLoadingIcons(prev => {
          const currentIndex = prev[deal_id] || 0;
          const nextIndex = (currentIndex + 1) % loadingSequence.length;
          return { ...prev, [deal_id]: nextIndex };
        });
        // Reset transition state
        setTransitionStates(prev => ({ ...prev, [deal_id]: false }));
      }, 800); // Wait for transition to complete
    }, 10000); // Rotate every 10 seconds
    
    try {
      console.log(deal_id, slack_id, email);
      const response = await axios.put(
        `http://localhost:3000/deal/update`,
        {
          dealId: deal_id,
          slack_id: slack_id,
          email: email,
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error refreshing insights:", error);
    } finally {
      // Clear loading state and stop animation
      clearInterval(interval);
      setLoadingStates(prev => ({ ...prev, [deal_id]: false }));
      setLoadingIcons(prev => ({ ...prev, [deal_id]: 0 }));
      setTransitionStates(prev => ({ ...prev, [deal_id]: false }));
    }
  }
  
  if (!deals) {
    return (
      <Box
        sx={{
          padding: "24px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        <Skeleton
          height={40}
          width={"30%"}
          style={{ marginBottom: 12 }}
          baseColor={"#020617"}
          highlightColor={"#06b6d4"}
        />
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
              gap: "16px",
              paddingY: "12px",
            }}
          >
            {Array(7)
              .fill(0)
              .map((_, j) => (
                <Skeleton
                  key={j}
                  height={30}
                  baseColor={"#020617"}
                  highlightColor={"#06b6d4"}
                />
              ))}
          </Box>
        ))}
      </Box>
    );
  }
  return (
    <>
      {/* Container for all data START */}
      <Box
        sx={{
          padding: "24px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        {/* Box holding search field and filter buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          {/* Input box to search */}
          <TextField
            variant="outlined"
            placeholder="Search deals..."
            size="small"
            sx={{ width: "33.333%" }}
          />
          {/* Box holding buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button variant="outlined" color="primary">
              All Deals
            </Button>
            <Button variant="outlined" color="primary">
              Open
            </Button>
            <Button variant="outlined" color="primary">
              Closed
            </Button>
          </Box>
        </Box>
        {/* Box holding search field and filter buttons END */}

        {/* Table Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
            gap: "16px", // Converted from gap-4
            paddingY: "12px", // Converted from py-3
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Deal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Value
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Risk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actions
          </Typography>
        </Box>
        {/* Table Headers END */}
        
        {/* Table Rows - Example Data */}
        {deals.map((currentDeal, index) => (
          loadingStates[currentDeal.deal.id] ? (
            // Loading state - show centered loading with gif
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingY: "8px",
                borderBottom: "1px solid",
                borderColor: "divider",
                minHeight: "50px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h6" color="text.primary" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Gathering latest insights on {currentDeal.deal.deal_name}...
                </Typography>
                <img
                  src={loadingSequence[loadingIcons[currentDeal.deal.id] || 0]?.gif || slackGif}
                  alt="Loading"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                    transition: transitionStates[currentDeal.deal.id] 
                      ? "all 0.8s ease-in-out" 
                      : "all 0.3s ease",
                    transform: transitionStates[currentDeal.deal.id]
                      ? `rotate(720deg) scale(0.8)`
                      : `rotate(0deg) scale(1)`,
                    opacity: transitionStates[currentDeal.deal.id] ? 0 : 1,
                  }}
                />
              </Box>
            </Box>
          ) : (
            // Normal row when not loading
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
                gap: "16px", // Converted from gap-4
                paddingY: "12px", // Converted from py-3
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.deal_name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.company_name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.stage.charAt(0).toUpperCase() +
                currentDeal.deal.stage.slice(1)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // if value is greater than 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                color:
                  parseInt(currentDeal.deal.deal_value) > 100000
                    ? "success.main"
                    : parseInt(currentDeal.deal.deal_value) >= 50000
                    ? "warning.main"
                    : "error.main",
              }}
            >
              {"$" + currentDeal.deal.deal_value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // if value is greater than 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                color:
                  parseInt(
                    currentDeal.risks[currentDeal.risks.length - 1]
                      .deal_risk_score
                  ) <= 35
                    ? "success.main"
                    : parseInt(
                        currentDeal.risks[currentDeal.risks.length - 1]
                          .deal_risk_score
                      ) <= 65
                    ? "warning.main"
                    : "error.main",
              }}
            >
              {currentDeal.risks[currentDeal.risks.length - 1]
                .deal_risk_score <= 35
                ? "Low"
                : currentDeal.risks[currentDeal.risks.length - 1]
                    .deal_risk_score <= 65
                ? "Medium"
                : "High"}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ color: "white" }}
            >
              {currentDeal.timeline[
                currentDeal.timeline.length - 1
              ].updated_at.slice(0, 10)}
            </Typography>
            <Box sx={{ display: "flex", gap: 1.3 }}>
              <Tooltip title="View Deal">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/details/${currentDeal.deal.id}`)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0891b2, #0e7490)",
                      boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
                      color: "black",
                    },
                    color: "white",
                  }}
                >
                  <Info />
                </IconButton>
              </Tooltip>
              <EditDeal deal={currentDeal} />
              <Tooltip title="Refresh Insights">
                <IconButton
                  size="small"
                  onClick={() => {
                    refreshInsights(
                      currentDeal.deal.id,
                      currentDeal.participants[0].slack_id,
                      currentDeal.participants[0].email
                    );
                  }}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0891b2, #0e7490)",
                      boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
                      color: "black",
                    },
                    color: "white",
                  }}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          )
        ))}
      </Box>
      {/* Container for all data END */}
    </>
  );
};

export default CRMData;
