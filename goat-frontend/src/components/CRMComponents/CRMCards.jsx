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
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          width: 250,
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Pipeline
        </Typography>
        <Typography variant="h5" color="text.primary" fontWeight={"bold"}>$455K</Typography>
      </Box>
      {/* Total Pipeline card END */}

      {/* Open Deals card START */}
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          width: 250,
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Deals At Risk
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "error.main" }}>
          2 Deals
        </Typography>
      </Box>
      {/* Open Deals card END */}

      {/* Close Rate card START */}
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          width: 250,
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Close Rate
        </Typography>
        <Typography variant="h5" fontWeight="bold"sx={{ color: "success.main" }}>
          73%
        </Typography>
      </Box>
      {/* Close Rate card END */}

      {/* Growth card START */}
      <Box
        sx={{
          padding: "24px",
          display: "flex",
          width: 250,
          flexDirection: "column",
          alignItems: "flex-start",
          borderRadius: "5px",
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Growth
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} sx={{ color: "primary.main" }}>
          +15%
        </Typography>
      </Box>
      {/* Growth card END */}
    </Box>
  );
};

export default CRMCard;
