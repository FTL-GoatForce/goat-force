import { Box, Typography, Paper, Button } from "@mui/material";
import {
  motion,
  AnimatePresence,
  easeInOut,
  numberValueTypes,
  pipe,
} from "motion/react";

import React, { useEffect, useState } from "react";
import SideBar from "../ReusableComponents/Sidebar";
import Header from "../ReusableComponents/Header";
import CRMCards from "../CRMComponents/CRMCards";
import CRMData from "../CRMComponents/CRMData";
import CRMGraphs from "../CRMComponents/CRMGraphs";
import AssistantIcon from "@mui/icons-material/Assistant";
import CRMChatBot from "../CRMComponents/CRMChatBot";
import Sandbox from "./Sandbox";
import axios from "axios";
import { getCurrentSession } from "../../utils/supabase";
import { Add, Business, TrendingUp } from "@mui/icons-material";
import socket from "../../web_socket/socket";
import { Sledding } from "@mui/icons-material";
import { connect } from "socket.io-client";

const Dashboard = () => {
  const [originalDeals, setOriginalDeals] = useState(null);
  const [deals, setDeals] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [totalDeals, setTotalDeals] = useState(null);
  const [pipeline, setPipeline] = useState(null);
  const [dealsAtRisk, setDealAtRisk] = useState(null);
  const [avgValue, setAvgValue] = useState(null);
  const [cardData, setCardData] = useState({
    pipeline: null,
    totalDeals: null,
    dealsAtRisk: null,
    avgValue: null,
  });
  const [globalStats, setGlobalStats] = useState({});
  const [filter, setFilter] = useState(null);
  const [input, setInput] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function getAllDeals() {
      try {
        // Get current user session
        const session = await getCurrentSession();
        if (!session) {
          console.error('No session found. User needs to log in.');
          window.location.href = '/auth';
          return;
        }
        console.log('🔐 Session ID:', session.user.id);
        const response = await axios.get(`${API_URL}/deal/all`, {
          params: {
            user_id: session.user.id
          }
        });
        
        setDeals(response.data.deals);
        setOriginalDeals(response.data.deals);
        setTotalDeals(response.data.totalDeals);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDeals();
  }, []);
  //  Hearing for new deal updates
  useEffect(() => {
    // connect to socket
    if (!socket.connected) {
      socket.connect();
      console.log("socket connect to dash");
    }
    const handleDealUpdate = (data) => {
      console.log("Updated Deal fields received from frontend");
      // update our deals to show this new deal
      setDeals((prev) =>
        prev.map((deal) => (deal.deal.id == data.dealId ? data.deal : deal))
      );
      // update our og deals to show this in case user filters after
      setOriginalDeals((prev) =>
        prev.map((deal) => (deal.deal.id == data.dealId ? data.deal : deal))
      );
    };

    socket.on("connect", () => console.log("WebSocket Connected to dashboard"));

    socket.on("NewDealUpdate", handleDealUpdate);

    // when we navigate off close our socket ports
    return () => {
      socket.off("connect");
      socket.off("NewDealUpdate", handleDealUpdate);
    };
  }, []);
  useEffect(() => {
    generateCardData();
  }, [deals]);

  async function generateCardData() {
    let cost = 0;
    let risk = 0;

    deals?.map((currentDeal) => {
      cost += currentDeal.deal.deal_value;
      if (currentDeal.risks[0]?.deal_risk_score > 65) {
        risk += 1;
      }
    });
    // Setting AVG deal Value
    setPipeline(cost);
    if (Array.isArray(deals) && deals.length > 0 && cost !== undefined) {
      setAvgValue((cost / deals.length).toFixed(2));
    } else {
      setAvgValue(null); // or setAvgValue("N/A")
    }
    setDealAtRisk(risk);
  }
  function handleExit() {
    setChatOpen((prev) => !prev);
  }

  // Check if deals are loaded and empty
  const hasDeals = deals && deals.length > 0;
  const isLoading = deals === null;

  function handleFilterChange(newFilter) {
    const filter = newFilter;
    setFilter(newFilter);

    if (filter == null || "") {
      setDeals(originalDeals);
    }
    if (filter == "open") {
      const openDeals = originalDeals.filter(
        (deal) => !deal.deal.stage.includes("closed")
      );
      setDeals(openDeals);
    }
    if (filter == "closed") {
      const closedDeals = originalDeals.filter((deal) =>
        deal.deal.stage.includes("closed")
      );
      if (closedDeals.length <= 0) return;
      setDeals(closedDeals);
    }
  }

  function handleInputChange(newInput) {
    setInput(newInput);

    if (newInput != null && newInput != "") {
      const filteredSearch = originalDeals.filter((deal) =>
        deal.deal.deal_name.toLowerCase().includes(newInput.toLowerCase())
      );
      setDeals(filteredSearch);
    } else {
      setDeals(originalDeals);
    }
  }

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
              marginTop: "10px", // Spacing from the CRMHeader
            }}
          >
            {!isLoading && !hasDeals ? (
              // Empty State
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "60vh",
                  textAlign: "center",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    backgroundColor: "background.paper",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed",
                    borderColor: "divider",
                  }}
                >
                  <Business sx={{ fontSize: 48, color: "text.secondary" }} />
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ color: "text.secondary", fontWeight: 600, mb: 1 }}>
                    No deals yet
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                    Start building your pipeline by creating your first deal
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Add />}
                    onClick={() => window.location.href = "/create"}
                    sx={{ borderRadius: 2 }}
                  >
                    Create Your First Deal
                  </Button>
                </Box>
              </Box>
            ) : (
              <>
                <CRMGraphs deals={deals} /> {/* The graphs component */}
                <CRMCards
                  dealsAtRisk={dealsAtRisk}
                  totalDeals={deals ? deals.length : totalDeals}
                  totalCost={pipeline}
                  avgValue={avgValue}
                />{" "}
                {/* The cards component */}
                <CRMData
                  deals={deals}
                  globalStats={globalStats}
                  setGlobalStats={setGlobalStats}
                  handleFilterChange={handleFilterChange}
              handleInputChange={handleInputChange}
            />{" "}
                {/* The data table component passing in our huge array of deals */}
              </>
            )}
          </Box>
        </Box>
        {/* Chat Bot Section */}
        <AnimatePresence initial={false}>
          {chatOpen ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.35 }}
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
