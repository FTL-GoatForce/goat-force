import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HygeineCardSuggestion from "./HygeineCardSuggestion";
import RecentActivityCards from "./RecentActivityCards";

import { Box, Card, CardHeader } from "@mui/material";

function RecentActivity() {
  return (
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
          avatar={<AccessTimeIcon color="primary" />}
          title="Recent Activity"
          subheader="Latest updates and interactions with this deal"
        />
      </Box>
      {/* card components container -> body */}
      {/* 4 components w/ overlay flow */}
      <Box
        className="card-content"
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxHeight: 475,
          overflow: "auto",
        }}
      >
        <RecentActivityCards
          title="Deal Closed"
          description="Successfully closed $50K software license deal"
          timeCompleted="30 minutes ago"
        />
        <RecentActivityCards
          title="Meeting Scheduled"
          description="Product demo scheduled with ABC Corp"
          timeCompleted="1 hour ago"
        />
        <RecentActivityCards
          title="Proposal Sent"
          description="Quarterly service proposal delivered to client"
          timeCompleted="3 hours ago"
        />
        <RecentActivityCards
          title="Call Completed"
          description="Discovery call with potential enterprise client"
          timeCompleted="4 hours ago"
        />
        <RecentActivityCards
          title="Contract Signed"
          description="Annual maintenance contract renewed"
          timeCompleted="6 hours ago"
        />
        <RecentActivityCards
          title="Lead Generated"
          description="New qualified lead from marketing campaign"
          timeCompleted="8 hours ago"
        />
      </Box>
    </Card>
  );
}

export default RecentActivity;
