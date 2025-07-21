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

const Dashboard = () => {
  const [deals, setDeals] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [totalDeals, setTotalDeals] = useState(null);
  const [pipeline, setPipeline] = useState(null);
  const [dealsAtRisk, setDealAtRisk] = useState(null);
  const [avgValue, setAvgValue] = useState(null);
  const [refresh, setRefresh] = useState(null);
  const [cardData, setCardData] = useState({
    pipeline: null,
    totalDeals: null,
    dealsAtRisk: null,
    avgValue: null,
  });
  const [globalStats, setGlobalStats] = useState({});

  useEffect(() => {
    async function getAllDeals() {
      try {
        const response = await axios.get("http://localhost:3000/deal/all");
        setDeals(response.data.deals);
        setTotalDeals(response.data.totalDeals);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDeals();
  }, []);

  useEffect(() => {
    async function getAllDeals() {
      try {
        const response = await axios.get("http://localhost:3000/deal/all");
        setDeals(response.data.deals);
        setTotalDeals(response.data.totalDeals);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDeals();
  }, [refresh]);

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
      setAvgValue(cost / deals.length);
    } else {
      setAvgValue(null); // or setAvgValue("N/A")
    }
    setDealAtRisk(risk);
  }
  function handleExit() {
    setChatOpen((prev) => !prev);
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
              marginTop: "32px", // Spacing from the CRMHeader
            }}
          >
            <CRMGraphs deals={deals} /> {/* The graphs component */}
            <CRMCards
              dealsAtRisk={dealsAtRisk}
              totalDeals={totalDeals}
              totalCost={pipeline}
              avgValue={avgValue}
            />{" "}
            {/* The cards component */}
            <CRMData
              deals={deals}
              globalStats={globalStats}
              setGlobalStats={setGlobalStats}
              refresh={refresh}
              setRefresh={setRefresh}
            />{" "}
            {/* The data table component passing in our huge array of deals */}
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
