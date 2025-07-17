import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RecentActivityCards from "./RecentActivityCards";
import { Box, Card, CardHeader } from "@mui/material";

function RecentActivity({ timelineData, loading }) {
  const [activities, setActivities] = useState([]);

useEffect(() => {
  if (!loading && timelineData && timelineData.length > 0) {
    const allEvents = []; // events will be stored here
    
    // iterate through each timeline entry
    timelineData.forEach((timelineEntry) => {
      if (timelineEntry.event?.event && Array.isArray(timelineEntry.event.event)) {
        timelineEntry.event.event.forEach((eventItem) => {
          if (eventItem.event_type && eventItem.event_description) {
            const eventText = eventItem.event_type.replace(/_/g, " ");
            allEvents.push({
              date: (eventItem.event_date),
              event: eventText.charAt(0).toUpperCase() + eventText.slice(1), // Capitalize first letter
              event_summary: eventItem.event_description,
              event_date: eventItem.event_date
            });
          }
        });
      }
    });

    // sort by date (most recent first)
    const sortedEvents = allEvents.sort(
      (a, b) => new Date(b.event_date) - new Date(a.event_date)
    );
    setActivities(sortedEvents); // store in state
  }
}, [timelineData, loading]);


  // Show loading state when parent is loading
  if (loading) {
    return (
      <Card sx={{ padding: 1, boxShadow: 5, borderRadius: 2, border: "1px solid", borderColor: "divider" }}>
        <Box sx={{ p: 2, textAlign: "center" }}>Loading activities...</Box>
      </Card>
    );
  }

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
      <Box className="card-header" sx={{ display: "flex" }}>
        <CardHeader
          avatar={<AccessTimeIcon color="primary" />}
          title="Recent Activity"
          subheader="Latest updates and interactions with this deal"
        />
      </Box>
      
      <Box
        className="card-content"
        sx={{
          "&::-webkit-scrollbar": { width: 2 },
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxHeight: 475,
          overflow: "auto",
        }}
      >
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <RecentActivityCards
              key={index}
              title={activity.event}
              description={activity.event_summary}
              timeCompleted={activity.date}
            />
          ))
        ) : (
          <Box sx={{ p: 2, textAlign: "center", color: "text.secondary" }}>
            No recent activities found
          </Box>
        )}
      </Box>
    </Card>
  );
}

export default RecentActivity;