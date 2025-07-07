import React from "react";
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

// Status dot component on the left of cards
const StatusDot = ({ color }) => (
  <Box
    sx={{
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: color,
      flexShrink: 0,
    }}
  />
);

function HygeineCardSuggestion({
  color, // status dot color
  title, // title of the suggestion
  suggestion, // suggestion text
  onButtonClick, // function to handle button click
}) {
  return (
    <>
      {/* individual cards (suggested deals) */}
      <Paper
        className="missing-info-card"
        sx={{
          padding: 2.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left-side content with dot */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <StatusDot color={color} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              fontSize={12}
            >
              {suggestion}
            </Typography>
          </Box>
        </Box>
        {/* Right-side content */}
        <Button variant="contained" size="small">
          Autofill
        </Button>
      </Paper>
    </>
  );
}

export default HygeineCardSuggestion;
