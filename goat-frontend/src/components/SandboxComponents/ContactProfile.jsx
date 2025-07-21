import React from "react";
import {
  Box,
  Button,
  Typography,
  Chip,
  TextField,
  CardHeader,
  Avatar,
} from "@mui/material";
import AttachMoney from "@mui/icons-material/AttachMoney";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

function ContactProfile({ deals, selectedDeal }) {
  // Get personality data from the correct path
  const personalityData = selectedDeal?.personality?.[0]?.personality_traits;
  const participant = selectedDeal?.participants?.[0];

  return (
    <>
      <Box
        height={"100%"}
        display={"flex"}
        flexDirection="column"
        border={1}
        borderColor="divider"
        borderRadius={2}
        padding={2}
        backgroundColor="background.paper"
      >
        {/* card header */}
        <Box
          className="card-header"
          sx={{ display: "flex", color: "text.primary" }}
        >
          <Typography
            fontWeight={"bold"}
            display={"flex"}
            gap={1}
            fontSize={15}
            alignItems={"center"}
          >
            <PersonOutlineOutlinedIcon color="primary" />
            {participant?.prospect_name || 'Contact'}'s Profile
          </Typography>
        </Box>
        {/* card content */}
        <Box
          display={"flex"}
          flexDirection="column"
          gap={1}
          marginTop={2}
          marginLeft={0.5}
        >
          <Typography variant="body2" color="text.secondary">
            Style:{" "}
            <span style={{ color: "white" }}>
              {personalityData?.personality_communication_profile?.communication_style || 'N/A'}
            </span>
          </Typography>
          <Typography alignItems={"center"} variant="body2" color="text.secondary">
            Responds:{" "}
            <span style={{ color: "white" }}>
              {personalityData?.communication_behavior?.response_time || 'N/A'}
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Objection Style:{" "}
            <span style={{ color: "white" }}>
              {personalityData?.personality_communication_profile?.objection_style || 'N/A'}
            </span>
          </Typography>
          <Box>
            <Typography color="text.secondary" variant="body2" component="span" sx={{ mr: 1 }}>
              Concerns:
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, marginTop: 0.5 }}>
              {personalityData?.objections_concerns?.objection_types?.length > 0 ? (
                personalityData.objections_concerns.objection_types.map(
                  (objection, index) => (
                    <Chip
                      key={index}
                      label={objection}
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: "11px", height: "20px" }}
                    />
                  )
                )
              ) : (
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "11px" }}>
                  No concerns listed
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactProfile;