import React, { useState, useEffect } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HygeineCardSuggestion from "./HygeineCardSuggestion";
import RecentActivityCards from "./RecentActivityCards";
import axios from "axios";
import { Box, Card, CardHeader } from "@mui/material";

function RecentActivity({ deal_id }) {
  const [activities, setActivities] = useState([]); // array of activity objects fetched from DB
  const [loading, setLoading] = useState(true);
  const [containsActivity, setContainsActivity] = useState(false);

  const fetchActivities = async () => {
    try {
      if (deal_id) {
        const response = await axios.get(
          `http://localhost:3000/deal/${deal_id}`
        );
        const dealData = response.data;
        const allEvents = [];

        // extract events from the timeline array (correct path based on your JSON)
        dealData.timeline?.forEach((timelineEntry) => {
          if (timelineEntry.event?.event) {
            timelineEntry.event.event.forEach((eventItem) => {
              const eventText = eventItem.event_type.replace(/_/g, " ");
              allEvents.push({
                date: eventItem.event_date,
                event: eventText.charAt(0).toUpperCase() + eventText.slice(1), // capitalize the first letter
                event_summary: eventItem.event_description,
              });
            });
          }
        });

        // sort by date (most recent first)
        const sortedEvents = allEvents.sort(
          (a, b) => new Date(b.event_date) - new Date(a.event_date)
        );
        setActivities(sortedEvents);
        console.log("Fetched activities:", sortedEvents);
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch timeline data:", error);
      setLoading(false);
    }
  };

  // useEffect to call fetchActivities
  useEffect(() => {
    fetchActivities();
  }, [deal_id]);

  // LOADING STATE
  if (loading) {
    return <div>Loading activities...</div>;
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
          "&::-webkit-scrollbar": {
            width: 2,
          },
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxHeight: 475,
          overflow: "auto",
        }}
      >
        {/* If no activities, do not map through */}
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
