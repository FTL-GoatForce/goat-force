import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useState } from "react";
import ContactSelector from "../SandboxComponents/ContactSelector";
import ContactProfile from "../SandboxComponents/ContactProfile";
import Header from "../ReusableComponents/Header";
import { ArrowBack, Forum, Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SandboxChat from "../SandboxComponents/SandboxChat";
import VoiceChat from "../SandboxComponents/VoiceChat";

function Sandbox() {
  const [deals, setDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMode, setSelectedMode] = useState("text");
  const navigate = useNavigate();

  // Fetch all deals and update state
  useEffect(() => {
    async function getAllDeals() {
      try {
        const response = await axios.get("http://localhost:3000/deal/all");
        setDeals(response.data.deals);

        // set the first deal as selected when deals are loaded
        if (response.data.deals && response.data.deals.length > 0) {
          setSelectedDeal(response.data.deals[0]);
        }
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
  const handleModeSwitch = () => {
    if (selectedMode == "text") {
      setSelectedMode("voice");
      console.log("voice");
    } else {
      setSelectedMode("text");
      console.log("text");
    }
  };

  // LOADING STATE - matching the layout structure
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

  return (
    <>
      {/* page-container */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "background.default",
          width: "100%",
        }}
      >
        <SideBar /> {/* The sidebar component */}
        {/* page content */}
        <Box
          sx={{
            ml: 2, // added some margin here
            display: "flex",
            width: "100%",
            gap: 2,
            flexDirection: "column",
            backgroundColor: "background.default",
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
                  Sandbox Mode
                </Typography>
              </div>
              <Button
                variant="contained"
                sx={{ mr: 3 }}
                color={selectedMode == "text" ? "secondary" : "primary"}
                onClick={handleModeSwitch}
                endIcon={selectedMode == "text" ? <Phone /> : <Forum />}
              >
                {selectedMode == "text" ? "Try a Phone Call" : "Back to text"}
              </Button>
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
            {/* Left Card, holds two cards flex column*/}
            <Box
              width={"30%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              // maxWidth={"425px"}
              minHeight={"80%"}
              maxHeight={"95%"}
              sx={{ "::-webkit-scrollbar": { width: 0 }, overflowY: "auto" }}
              gap={2}
            >
              {/* Card #1: Contact Selector */}
              <ContactSelector
                deals={deals}
                onDealClick={handleDealClick}
                selectedDeal={selectedDeal}
              />
              {/* Card #2: Contact Profile */}
              <ContactProfile selectedDeal={selectedDeal} deals={deals} />
            </Box>
            {/* Middle card */}
            <Box
              minWidth={"69%"}
              display={"flex"}
              flexDirection="row"
              minHeight={"80%"}
              maxHeight={"95%"}
              sx={{
                "::-webkit-scrollbar": { width: 0 },
                overflowX: "hidden",
                overflowY: "auto",
              }}
              gap={2}
            >
              {selectedMode == "text" ? (
                <SandboxChat selectedDeal={selectedDeal} deals={deals} />
              ) : (
                <VoiceChat selectedDeal={selectedDeal} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sandbox;
