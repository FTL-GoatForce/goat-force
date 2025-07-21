import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import React from "react";
import Loading from "../ReusableComponents/Loading";
import { AttachMoney, TrendingUp, Warning } from "@mui/icons-material";

const CRMCard = ({ dealsAtRisk, totalDeals, totalCost, avgValue }) => {
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
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Pipeline
        </Typography>
        {totalCost != 0 ? (
          <Typography variant="h5" color="text.primary" fontWeight={"bold"}>
            ${parseInt(totalCost)}{" "}
          </Typography>
        ) : (
          <Loading />
        )}
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
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Deals At Risk
        </Typography>
        {parseInt(totalCost) != 0 ? (
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "error.main" }}
          >
            {parseInt(dealsAtRisk)} at Risk{" "}
            <Warning sx={{ verticalAlign: "middle", mb: 1 }} />
          </Typography>
        ) : (
          <Loading />
        )}
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
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Total Deals
        </Typography>
        {parseInt(totalCost) != 0 ? (
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "success.main" }}
          >
            {totalDeals} Deals{" "}
            <TrendingUp sx={{ verticalAlign: "middle", mb: 0.4 }} />
          </Typography>
        ) : (
          <Loading />
        )}
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
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Average Deal Value
        </Typography>
        {totalCost != 0 ? (
          <Typography
            variant="h5"
            fontWeight={"bold"}
            sx={{ color: "primary.main" }}
          >
            ${avgValue}{" "}
          </Typography>
        ) : (
          <Loading />
        )}
      </Box>
      {/* Growth card END */}
    </Box>
  );
};

export default CRMCard;
