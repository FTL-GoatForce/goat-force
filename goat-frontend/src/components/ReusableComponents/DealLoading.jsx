import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import slackGif from "../../assets/slack.gif";
import gmailGif from "../../assets/gmail.gif";
import geminiGif from "../../assets/gemini.gif";
import einsteinGif from "../../assets/einstein.gif";

const loadingSequence = [
  { name: "Slack", gif: slackGif },
  { name: "Gmail", gif: gmailGif },
  { name: "Gemini", gif: geminiGif },
  { name: "Einstein", gif: einsteinGif },
];

const DealLoading = ({ dealName }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadingSequence.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGif = loadingSequence[index].gif;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
          Gathering latest insights on {dealName}...
        </Typography>
        <img
          src={currentGif}
          alt="Loading GIF"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "8px",
            transition: "opacity 0.4s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default DealLoading;
