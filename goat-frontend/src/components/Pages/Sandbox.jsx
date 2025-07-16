import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useState } from "react";
import ContactSelector from "../SandboxComponents/ContactSelector";
import ContactProfile from "../SandboxComponents/ContactProfile";
import Header from "../ReusableComponents/Header";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


// mock data (data flow)
// deals.participants (to get contact information)
// deals.participants.personality (to get personality traits)

const mockData = [
  {
    deal_id: "1",
    deal_name: "Enterprise Cloud Migration",
    client_company: "TechForward Inc",
    deal_stage: "negotiation",
    deal_value_usd: 125000,
    participants: [
      {
        name: "Bruce Thompson",
        email: "bruce@techforward.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Direct and concise, with a cooperative and reassuring tone.",
            objection_style:
              "Collaborative (actively addresses external requests without raising internal objections).",
          },
          communication_behavior: {
            response_time: "Very fast, often within seconds.",
          },
          objections_concerns: {
            objection_types: [],
          },
        },
      },
    ],
  },
  {
    deal_id: "2",
    deal_name: "Marketing Analytics Platform",
    client_company: "DataDriven Solutions",
    deal_stage: "proposal",
    deal_value_usd: 85000,
    participants: [
      {
        name: "Sophia Nguyen",
        email: "sophia@datadriven.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Professional, concise, and direct. Appreciative of quick responses.",
            objection_style:
              "Direct and collaborative (raises specific questions for clarification, not outright objections).",
          },
          communication_behavior: {
            response_time: "Fast to moderate, responding within minutes.",
          },
          objections_concerns: {
            objection_types: ["Technical/Scope (implementation support)"],
          },
        },
      },
    ],
  },
  {
    deal_id: "3",
    deal_name: "HR Management System Upgrade",
    client_company: "PeopleFirst Corp",
    deal_stage: "discovery",
    deal_value_usd: 200000,
    participants: [
      {
        name: "Marcus Rodriguez",
        email: "marcus@peoplefirst.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Methodical and thorough, prefers detailed explanations with supporting documentation.",
            objection_style:
              "Analytical (requests extensive proof of concept and case studies before making decisions).",
          },
          communication_behavior: {
            response_time:
              "Slow and deliberate, typically responds within 24-48 hours.",
          },
          objections_concerns: {
            objection_types: [
              "Budget/ROI (needs detailed cost-benefit analysis)",
              "Technical/Scope (integration requirements)",
            ],
          },
        },
      },
      {
        name: "Jennifer Kim",
        email: "jen.kim@peoplefirst.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Warm and relationship-focused, values personal connection and trust-building.",
            objection_style:
              "Diplomatic (expresses concerns indirectly through questions about team impact).",
          },
          communication_behavior: {
            response_time:
              "Moderate, responds within 2-4 hours during business hours.",
          },
          objections_concerns: {
            objection_types: ["Change Management (employee adoption concerns)"],
          },
        },
      },
    ],
  },
  {
    deal_id: "4",
    deal_name: "Cybersecurity Audit & Implementation",
    client_company: "SecureBank Financial",
    deal_stage: "qualification",
    deal_value_usd: 350000,
    participants: [
      {
        name: "David Chen",
        email: "d.chen@securebank.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Highly technical and precise, expects detailed technical specifications and compliance information.",
            objection_style:
              "Skeptical (challenges assumptions and demands proof of security certifications).",
          },
          communication_behavior: {
            response_time:
              "Variable, depends on urgency - can be immediate for critical issues or days for routine matters.",
          },
          objections_concerns: {
            objection_types: [
              "Technical/Scope (compliance requirements)",
              "Security/Risk (regulatory concerns)",
            ],
          },
        },
      },
    ],
  },
  {
    deal_id: "5",
    deal_name: "E-commerce Platform Redesign",
    client_company: "StyleHub Retail",
    deal_stage: "closed-won",
    deal_value_usd: 95000,
    participants: [
      {
        name: "Amanda Walsh",
        email: "amanda@stylehub.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Energetic and results-driven, focuses on business outcomes and user experience metrics.",
            objection_style:
              "Constructive (provides specific feedback and alternative suggestions).",
          },
          communication_behavior: {
            response_time: "Fast, typically responds within 1-2 hours.",
          },
          objections_concerns: {
            objection_types: [],
          },
        },
      },
      {
        name: "Tyler Johnson",
        email: "tyler.j@stylehub.com",
        personality: {
          personality_communication_profile: {
            communication_style:
              "Creative and visionary, emphasizes brand alignment and customer journey optimization.",
            objection_style:
              "Inspirational (reframes concerns as opportunities for innovation).",
          },
          communication_behavior: {
            response_time:
              "Moderate to slow, prefers scheduled calls over email exchanges.",
          },
          objections_concerns: {
            objection_types: ["Design/UX (brand consistency concerns)"],
          },
        },
      },
    ],
  },
];

function Sandbox() {
  const [deals, setDeals] = useState(mockData); // TODO: change mock data fetched within this file => will contain all deals
  const [selectedDeal, setSelectedDeal] = useState(deals[0]); // find deal by id within deals array and set it to selectedDeal, selected deal begins at first
  const navigate = useNavigate();
  

  // fetch deals and set state
  // set selected deal filter array by id  (should contain necessary data)

  const handleDealClick = (dealId) => {
    // for every deal in deals, check if dealid of the arr == dealid clicked
    // once the button is clicked within the deal, will pass deal_id
    const deal = deals.find((d) => d.deal_id === dealId);
    setSelectedDeal(deal);
    console.log("Selected Deal:", deal);
  };

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
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            gap: 2,
            flexDirection: "column",
            backgroundColor: "background.default",
          }}
        >
          {/* Header of page */}
          <Box>
            <Typography
              fontSize={25}
              color="text.primary"
              fontWeight={"bold"}
              marginLeft={3}
              marginTop={2}
            >
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
                          sx={{ color: "text.secondary" }}
                          onClick={() => navigate("/dashboard")}
                        >
                          Back to Dashboard
                        </Button>
              
                        <Typography
                          variant="h5"
                          sx={{ color: "text.primary", fontWeight: "bold" }}
                          marginTop={0.7}
                          marginLeft={1}
                        >
                          Sandbox Mode
                        </Typography>
                      </div>
                      <div>
                        <Chip
                          label="High Risk"
                          size="small"
                          sx={{
                            backgroundColor: "rgba(211, 47, 47, 0.1)", // Red background with low opacity
                            color: "error.main", // Full opacity red text
                            fontWeight: "medium",
                            marginRight: 2,
                            border: "1px solid rgba(211, 47, 47, 0.2)", // Optional: subtle border
                          }}
                        />
                      </div>
                    </Box>
            </Typography>
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
              gap={2}
            >
              {/* Card #1: Contact Selector */}
              <ContactSelector
                deals={deals}
                onDealClick={handleDealClick}
                selectedDeal={selectedDeal}
              >
                // TODO: pass in deals and onclick function
              </ContactSelector>
              {/* Card #2: Contact Profile */}
              <ContactProfile 
                selectedDeal={selectedDeal}
                deals={deals}
              >

              </ContactProfile>
            </Box>
            {/* Middle card */}
            <Box
              marginTop={2}
              width={"100%"}
              backgroundColor="background.default"
              display={"flex"}
              flexDirection="column"
            >
              {/* Message Box*/}
              <Box
                border={1}
                height={"85%"}
                borderColor="divider">



              </Box>
              {/* TODO: make these into components */}
              {/* Chat Box*/}
              <Box 
              height={"15%"}
              >
                {/* Chat box components container => row */}
                <Box
                display={"flex"}
                flexDirection={"row"}
                gap={1}
                padding={2}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Type your response..."
                    size="small"
                    multiline
                    rows={3}
                    sx={{ flexGrow: 1, backgroundColor: "#334155", borderRadius: 2}}
                  />
                  <Button variant="contained" color="primary">
                    <span style={{ color: "white", fontWeight: "bold" }}>Send</span>
                  </Button> {/* Send button */}

                </Box>
              </Box>



            </Box>
            {/* Right card */}

          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sandbox;
