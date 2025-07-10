import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HygeineCardSuggestion from "./HygeineCardSuggestion";
import RecentActivityCards from "./RecentActivityCards";

import { Box, Card, CardHeader } from "@mui/material";

// TODO: Mock data - replace with API call to TIMELINE array from deal object
  const mockTimelineData = [
    {
      date: "30 minutes ago", 
      event: "Deal Closed",
      event_summary: "Successfully closed $50K software license deal"
    },
    {
      date: "1 hour ago", 
      event: "Meeting Scheduled",
      event_summary: "Product demo scheduled with ABC Corp"
    },
    {
      date: "3 hours ago", 
      event: "Proposal Sent",
      event_summary: "Quarterly service proposal deliveokred to client"
    },
    {
      date: "4 hours ago", 
      event: "Call Completed",
      event_summary: "Discovery call with potential enterprise client"
    },
    {
      date: "6 hours ago", 
      event: "Contract Signed",
      event_summary: "Annual maintenance contract renewed"
    },
    {
      date: "8 hours ago", 
      event: "Lead Generated",
      event_summary: "New qualified lead from marketing campaign"
    }
  ];

function RecentActivity({deal_id}) {   

  const [activities, setActivities] = useState([]) // state to hold sorted fetched activities
  
  useEffect(() => {
    // TODO:  when backend ready fetch data from Timeline Model: (event_date, event_type, event_details)
    // we are fetching data from the specific DEALID (passed in from dashboard) + sorts it once fetched by date
    // const recentActivities = await prisma.timeline.findMany({ where: { dealId: dealId }, orderBy: { event_date: "desc" } }); 
    // setActivities(recentActivities);

    // For now, we will use mock data
    setActivities(mockTimelineData);
  }, [deal_id]);
  
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
        {/* TODO: change this to map through actual data*/}
        {activities.map((activity, index) => (
          <RecentActivityCards
            title={activity.event}
            description={activity.event_summary}
            timeCompleted={activity.date}
          />
        ))}
      </Box>
    </Card>
  );
}

export default RecentActivity;
