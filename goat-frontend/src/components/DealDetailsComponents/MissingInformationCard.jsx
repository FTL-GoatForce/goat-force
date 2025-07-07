import React from "react";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import HygeineCardSuggestion from "./HygeineCardSuggestion";
import {
  Box,
  Card,
  Typography,
  Grid,
  Divider,
  Chip,
  CardHeader,
  Paper,
  Button,
} from "@mui/material";
import { green } from "@mui/material/colors";

function MissingInformationCard() {
  return (
    <>
      <Card
        sx={{
          padding: 1,
          boxShadow: 5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* card header */}
        <Box className="card-header" sx={{ display: "flex" }}>
          <CardHeader
            avatar={<AssignmentLateIcon color="primary" />}
            title="Missing Information"
            subheader="Missing key details about the deal opportunity"
          />
        </Box>

        {/* whole card container with scroll */}
        <Box
          className="card-content"
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            maxHeight: 290, // Adjust this to fit ~3 items
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#c1c1c1",
              borderRadius: "3px",
              "&:hover": {
                background: "#a8a8a8",
              },
            },
          }}
        >
          {/* individual cards suggestions */}
          <HygeineCardSuggestion
            title="Decision Maker"
            suggestion="Suggested: John Smith (CEO)"
            color="#F77171"
          />

          <HygeineCardSuggestion
            title="Budget Confirmed"
            suggestion="Suggested: $100K-150K range"
            color="#FACC14"
          />

          <HygeineCardSuggestion
            title="Competition"
            suggestion="Suggested: Salesforce, Hubspot"
            color="#5FA5F9"
          />

          <HygeineCardSuggestion
            title="Timeline"
            suggestion="Suggested: Q1 2024 implementation"
            color="#F77171"
          />

          <HygeineCardSuggestion
            title="Authority Level"
            suggestion="Suggested: C-Level approval required"
            color="#FACC14"
          />
        </Box>
      </Card>
    </>
  );
}

export default MissingInformationCard;
