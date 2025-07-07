import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const CRMCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "32px",
      }}
    >
      {/* Total Pipeline card START */}
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          width: 250,
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Pipeline
        </Typography>
        <Typography variant="h5">$455K</Typography>
      </Paper>
      {/* Total Pipeline card END */}

      {/* Open Deals card START */}
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 250,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Deals At Risk
        </Typography>
        <Typography variant="h5" sx={{ color: "error.main" }}>
          2 Deals
        </Typography>
      </Paper>
      {/* Open Deals card END */}

      {/* Close Rate card START */}
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 250,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Close Rate
        </Typography>
        <Typography variant="h5" sx={{ color: "success.main" }}>
          73%
        </Typography>
      </Paper>
      {/* Close Rate card END */}

      {/* Growth card START */}
      <Paper
        sx={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: 250,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Growth
        </Typography>
        <Typography variant="h5" sx={{ color: "primary.main" }}>
          +15%
        </Typography>
      </Paper>
      {/* Growth card END */}
    </Box>
  );
};

export default CRMCard;
