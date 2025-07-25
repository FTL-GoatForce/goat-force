import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useState } from "react";
import ContactSelector from "../SandboxComponents/ContactSelector";
import ContactProfile from "../SandboxComponents/ContactProfile";
import Header from "../ReusableComponents/Header";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SandboxChat from "../SandboxComponents/SandboxChat";

function Sandbox() {
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
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            gap: 2,
            flexDirection: "column",
            backgroundColor: "background.default",
          }}
        >
          {/* Header Skeleton */}
          <Box sx={{ padding: 2 }}>
            <Skeleton
              height={40}
              width="30%"
              baseColor="#020617"
              highlightColor="#06B6D4"
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={35}
              width="25%"
              baseColor="#020617"
              highlightColor="#06B6D4"
            />
          </Box>

          {/* Cards Content Skeleton */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100%",
            }}
          >
            {/* Left Cards (33% width) */}
            <Box
              width={"33%"}
              padding={2}
              display={"flex"}
              flexDirection="column"
              gap={2}
            >
              {/* Contact Selector Card Skeleton */}
              <Skeleton
                height={300}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
              {/* Contact Profile Card Skeleton */}
              <Skeleton
                height={250}
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8 }}
              />
            </Box>

            {/* Middle Card (67% width) */}
            <Box
              marginTop={2}
              width={"100%"}
              backgroundColor="background.default"
              display={"flex"}
              flexDirection="column"
              sx={{ paddingRight: 2 }}
            >
              {/* Message Box Skeleton */}
              <Skeleton
                height="85%"
                baseColor="#020617"
                highlightColor="#06B6D4"
                style={{ borderRadius: 8, marginBottom: "16px" }}
              />
              {/* Chat Box Skeleton */}
              <Skeleton
                height="15%"
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
            {/* Left Card, holds two cards flex column*/}
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
              <ContactSelector
                deals={deals}
                onDealClick={handleDealClick}
                selectedDeal={selectedDeal}
              />
              {/* Card #2: Contact Profile */}
              <ContactProfile selectedDeal={selectedDeal} deals={deals} />
            </Box>
            {/* Middle card */}
            <SandboxChat selectedDeal={selectedDeal} deals={deals} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sandbox;
