import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";

function RecentActivityCards({ title, description, timeCompleted }) {
  return (
    <>
      {/* individual cards (suggested deals) */}
      <Paper
        className="missing-info-card"
        sx={{
          padding: 2.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
              {description}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize={12}>
              {" "}
              {timeCompleted}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default RecentActivityCards;
