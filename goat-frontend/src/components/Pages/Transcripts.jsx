import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { ArrowBack } from "@mui/icons-material";
import "react-loading-skeleton/dist/skeleton.css";
import DealSelector from "../TranscriptsComponents/DealSelector";
import MainContent from "../TranscriptsComponents/MainContent";
const Transcripts = () => {
  const [deals, setDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all deals and update state
  useEffect(() => {
    async function getAllDeals() {
      try {
        const response = await axios.get("http://localhost:3000/deal/all");
        setDeals(response.data.deals);

        setSelectedDeal(response.data.deals[0]);

        // end the loading when data is fetched
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getAllDeals();
  }, []);

  // set selected deal filter array by id on click
  const handleDealClick = (dealId) => {
    const deal = deals.find((d) => d.deal.id === dealId);
    setSelectedDeal(deal);
  };
  // loading state skeleton
  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%",
        }}
      >
        <SideBar />
        {/* Skeleton Page Content */}
        <Box
          sx={{
            ml: 2,
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: 2,
            overflowX: "hidden",
          }}
        >
          {/* Header Skeleton */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Skeleton
              width={160}
              height={40}
              baseColor="#020617"
              highlightColor="#06B6D4"
            />
            <Skeleton
              width={140}
              height={40}
              baseColor="#020617"
              highlightColor="#06B6D4"
            />
          </Box>

          {/* Page Title Skeleton */}
          <Skeleton
            width={220}
            height={35}
            style={{ marginLeft: "20px", marginBottom: "20px" }}
            baseColor="#020617"
            highlightColor="#06B6D4"
          />

          {/* Content Skeleton Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              height: "100%",
              width: "100%",
            }}
          >
            {/* Left Card (Selector) */}
            <Box
              width={"33%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              maxWidth={"425px"}
              gap={2}
            >
              {[...Array(5)].map((_, i) => (
                <Skeleton
                  key={i}
                  height={80}
                  baseColor="#020617"
                  highlightColor="#06B6D4"
                />
              ))}
            </Box>

            {/* Main Content */}
            <Box
              width={"100%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              gap={2}
            >
              <Skeleton
                height={40}
                width="60%"
                baseColor="#020617"
                highlightColor="#06B6D4"
              />
              <Skeleton
                height={200}
                baseColor="#020617"
                highlightColor="#06B6D4"
              />
              <Skeleton
                height={40}
                width="40%"
                baseColor="#020617"
                highlightColor="#06B6D4"
              />
              <Skeleton
                count={3}
                height={100}
                baseColor="#020617"
                highlightColor="#06B6D4"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  // If not loading, render the real content
  else {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%",
        }}
      >
        <SideBar />
        {/* page content */}
        <Box
          sx={{
            ml: 2,
            display: "flex",
            flexDirection: "column", // Arrange header, cards, and data in a column
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            overflowX: "hidden", // Prevent horizontal scroll from inner elements
          }}
        >
          {/* Header of page */}
          <Box>
            <Box
              className="deal-details-header"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Button
                  variant="text"
                  startIcon={<ArrowBack />}
                  sx={{
                    color: "text.secondary",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                  onClick={() => navigate("/dashboard")}
                >
                  Back to Dashboard
                </Button>

                <Typography
                  variant="h5"
                  sx={{ color: "text.primary", fontWeight: "bold" }}
                  marginLeft={3.4}
                >
                  Deal Transcripts
                </Typography>
              </div>
              <div></div>
            </Box>
          </Box>
          {/* Cards Content of Page */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Left Card, holds one card*/}
            <Box
              width={"33%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              maxWidth={"425px"}
              minHeight={"80%"}
              maxHeight={"95%"}
              overflow={"auto"}
              gap={2}
            >
              {/* Card #1: Contact Selector */}
              <DealSelector
                deals={deals}
                onDealClick={handleDealClick}
                selectedDeal={selectedDeal}
              />
            </Box>
            {/* main content */}
            <Box
              width={"100%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              gap={2}
              height={"95%"}
            >
              <MainContent deals={deals} selectedDeal={selectedDeal} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default Transcripts;
