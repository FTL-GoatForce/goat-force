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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % loadingSequence.length);
        setIsTransitioning(false);
      }, 300); // Wait for spin out animation
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGif = loadingSequence[index].gif;
  const currentName = loadingSequence[index].name;

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
        <Box
          sx={{
            position: "relative",
            width: "60px",
            height: "60px",
            borderRadius: "8px",
            transition: "all 0.3s ease-in-out",
            transform: isTransitioning ? "rotate(360deg) scale(0.8)" : "rotate(0deg) scale(1)",
            opacity: isTransitioning ? 0.3 : 1,
          }}
        >
          <img
            src={currentGif}
            alt={`${currentName} Loading`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "scale(0.9)" : "scale(1)",
              transition:
                "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DealLoading;
