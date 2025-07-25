import React from "react";
import { Box, Card, CardHeader, Typography, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { object } from "prop-types";

function ContactPersonality({
  communicationStyle,
  responseTime,
  decisionMaking,
  objectionStyle,
}) {
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        maxHeight: '425px',
      }}
    >
      {/* card header */}
      <Box className="card-header" sx={{ display: "flex" }}>
        <CardHeader
          avatar={<PersonIcon color="primary" />}
          title="Contact Personality"
          subheader="View personality traits and communication preferences for this contact"
        />
      </Box>
      {/* CARD CONTENT CONTAINER*/}
      <Box
        className="card-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 2,
          gap: 2,
          mariginBotton: 3,
        }}
      >
        {/* INDIVIDUAL CARD */}
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Communication Style
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            {communicationStyle}
          </Typography>
          <Divider variant="" />
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Response Time
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            {responseTime}
          </Typography>
          <Divider variant="" />
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Decision Making
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 1,
            }}
          >
            {decisionMaking}
          </Typography>
          <Divider variant="" />
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", marginLeft: 2, fontSize: 15 }}
          >
            Objection Style
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.primary",
              marginLeft: 2,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 0.5,
              marginBottom: 9.5,
            }}
          >
            {objectionStyle}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default ContactPersonality;
