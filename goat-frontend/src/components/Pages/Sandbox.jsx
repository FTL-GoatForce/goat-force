import React from "react";
import {Box, Button, Typography, Chip } from "@mui/material"
import SideBar from "../ReusableComponents/Sidebar";
import { useState } from "react";


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
            communication_style: "Direct and concise, with a cooperative and reassuring tone.",
            objection_style: "Collaborative (actively addresses external requests without raising internal objections)."
          },
          communication_behavior: {
            response_time: "Very fast, often within seconds."
          },
          objections_concerns: {
            objection_types: []
          }
        }
      }
    ]
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
            communication_style: "Professional, concise, and direct. Appreciative of quick responses.",
            objection_style: "Direct and collaborative (raises specific questions for clarification, not outright objections)."
          },
          communication_behavior: {
            response_time: "Fast to moderate, responding within minutes."
          },
          objections_concerns: {
            objection_types: ["Technical/Scope (implementation support)"]
          }
        }
      }
    ]
  }
];

function Sandbox() {
  const [deals, setDeals] = useState(mockData); // TODO: change mock data fetched within this file => will contain all deals
  const [selectedDeal, setSelectedDeal] = useState(null); // find deal by id within deals array and set it to selectedDeal

  // fetch deals and set state
  // set selected deal filter array by id  (should contain necessary data)

  const handleDealClick = (dealId) => {
    // for every deal in deals, check if dealid of the arr == dealid clicked
    // once the button is clicked within the deal, will pass deal_id
    const deal = deals.find((d) => d.deal_id === dealId);
    setSelectedDeal(deal);
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
            flexGrow: 1, // Allow this column to take up remaining horizontal space
            gap: 2,
            flexDirection: "column",
            backgroundColor: "#1E293B",
          }}
        >
          {/* Header of page */}
          <Box>
            <Typography fontSize={25} color="text.primary" fontWeight={"bold"} marginLeft={2} marginTop={2}> 
              Deal Practice Sandbox
            </Typography>
          </Box>
          {/* Cards Content of Page */}
          <Box sx={{display: "flex", flexDirection: "row", width: "100%", height: "100%"}}>
            {/* Left Card */}
            <Box flexGrow={1} border={1} borderColor="divider" borderRadius={0}>

            </Box>
            {/* Middle card */}
            <Box flexGrow={1} border={1} borderColor="divider" borderRadius={0} backgroundColor="background.paper" >


            </Box >
            {/* Right card */}
            <Box flexGrow={1} border={1} borderColor="divider" borderRadius={0} >


            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
}

export default Sandbox;
