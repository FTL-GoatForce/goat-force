import { Box, Typography, Paper, Button } from "@mui/material";
import {
  motion,
  AnimatePresence,
  easeInOut,
  numberValueTypes,
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
  // * Fetching all deals comes back as an array of deal objects
  // * a deal object looks like this
  //   "deal": {
  //     "id": 1,
  //     "company_name": "FedEx",
  //     "deal_name": "Global CRM Overhaul",
  //     "deal_description": "This deal is for FedEx",
  //     "deal_value": 280000,
  //     "contract_term_length": "1 year",
  //     "expected_close_date": "09-05-2025",
  //     "service_category": "CRM Software",
  //     "stage": "qualification",
  //     "created_at": "2025-07-15T23:02:00.850Z",
  //     "updated_at": "2025-07-15T23:03:47.050Z"
  //   },
  //   "participants": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "prospect_name": "David Gonzalez",
  //       "email": "David.gonzalez.fedex2025@gmail.com",
  //       "slack_id": "D094RO7DZ4J"
  //     }
  //   ],
  //   "activityMetrics": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "engagement_trend": "improving",
  //       "message_count": 6,
  //       "prospect_response_time": 24,
  //       "last_communication_source": "email",
  //       "last_communication_summary": "The prospect confirmed the meeting and requested additional information about CRM capabilities.",
  //       "created_at": "2025-07-15T23:03:48.510Z",
  //       "updated_at": "2025-07-15T23:03:48.510Z"
  //     }
  //   ],
  //   "aiRecommendation": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "next_steps": [
  //         "Follow up with CRM trial link",
  //         "Schedule a technical walkthrough",
  //         "Send ROI calculator"
  //       ],
  //       "escalation_triggers": "If the prospect indicates a preference for a competitor or expresses dissatisfaction with the provided materials.",
  //       "deal_acceleration_tactics": "Offer a demo or trial period to showcase the CRM's capabilities."
  //     }
  //   ],
  //   "conversationHistory": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "channel": {
  //         "id": "197e6e21467c29cd",
  //         "name": "Exploring CRM Solutions for FedEx Ops",
  //         "type": "email"
  //       },
  //       "thread_id": "197e6e21467c29cd",
  //       "last_activity": "2025-07-07T15:22:08-07:00",
  //       "messages": [
  //         /* Array of 6 message objects */
  //       ],
  //       "summary": "The sales rep, Bruce Wayne, initiated contact with David Gonzalez from FedEx Ops regarding CRM solutions...",
  //       "deal_summary": "Bruce Wayne from GoatForce initiated a conversation with David Gonzalez at FedEx Ops about CRM solutions...",
  //       "engagement_metrics": {
  //         "message_count": 6,
  //         "objections_raised": 2,
  //         "followups_committed": 1,
  //         "rep_response_time_sec": 602.5
  //       },
  //       "tags": [
  //         "meeting_scheduled",
  //         "technical_question",
  //         "integration_concern",
  //         "product_info_request"
  //       ],
  //       "email": "David.gonzalez.fedex2025@gmail.com",
  //       "created_at": "2025-07-15T23:03:48.809Z",
  //       "updated_at": "2025-07-15T23:03:48.809Z"
  //     }
  //   ],
  //   "dealInsights": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "key_objections": ["Integration with current tools"],
  //       "decision_maker_status": "unknown",
  //       "urgency_level": "medium"
  //     }
  //   ],
  //   "followUps": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "communication_type": "Email",
  //       "contact_address": "David.gonzalez.fedex2025@gmail.com",
  //       "subject": "Looking Forward to Our Meeting"
  //     },
  //     {
  //       "id": 2,
  //       "deal_id": 1,
  //       "communication_type": "Slack",
  //       "contact_address": "D094RO7DZ4J",
  //       "subject": null
  //     }
  //   ],
  //   "personality": [
  //     {
  //       "id": 1,
  //       "participant_id": 1,
  //       "personality_traits": {
  //         "tone": "professional",
  //         "communication_style": "analytical"
  //       },
  //       "created_at": "2025-07-15T23:03:48.968Z",
  //       "updated_at": "2025-07-15T23:03:48.968Z"
  //     }
  //   ],
  //   "risks": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "deal_risk_score": 40,
  //       "churn_risk_score": 30,
  //       "timeline_risk_score": 20
  //     }
  //   ],
  //   "riskExplanation": [
  //     {
  //       "id": 1,
  //       "risk_id": 1,
  //       "budget_risk_explanation": "No explicit budget concerns have been mentioned, but the prospect is still in the early evaluation phase.",
  //       "timeline_risk_explanation": "The timeline appears stable as a meeting is scheduled, but internal discussions are still ongoing.",
  //       "churn_risk_explanation": "The prospect is evaluating multiple platforms, which raises concerns about potential churn."
  //     }
  //   ],
  //   "tags": [
  //     {
  //       "id": 1,
  //       "deal_id": 1,
  //       "tag": [
  //         "meeting_scheduled",
  //         "technical_question",
  //         "integration_concern",
  //         "product_info_request"
  //       ],
  //       "created_at": "2025-07-15T23:03:48.364Z",
  //       "updated_at": "2025-07-15T23:03:48.364Z"
  //     }
  //   ],
  //   "timeline": [
  //     {
  //       "id": 1,
  //       "activity_metrics_id": 1,
  //       "event": [
  //         "Email sent",
  //         "Meeting scheduled",
  //         "Follow-up planned"
  //       ],
  //       "created_at": "2025-07-15T23:03:48.657Z",
  //       "updated_at": "2025-07-15T23:03:48.657Z"
  //     }
  //   ]
  // }

  const [deals, setDeals] = useState(null);
  const [totalDeals, setTotalDeals] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
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
            <CRMGraphs /> {/* The graphs component */}
            <CRMCards /> {/* The cards component */}
            <CRMData deals={deals} />{" "}
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
