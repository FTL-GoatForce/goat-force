import React from "react";
import {
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditDeal from "../Pages/EditDeal"; // Importing the EditDeal modal component
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Info, Refresh } from "@mui/icons-material";
const CRMData = ({ deals }) => {
  const navigate = useNavigate();
  if (!deals) {
    return (
      <Box
        sx={{
          padding: "24px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        <Skeleton
          height={40}
          width={"30%"}
          style={{ marginBottom: 12 }}
          baseColor={"#020617"}
          highlightColor={"#06b6d4"}
        />
        {[...Array(3)].map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
              gap: "16px",
              paddingY: "12px",
            }}
          >
            {Array(7)
              .fill(0)
              .map((_, j) => (
                <Skeleton
                  key={j}
                  height={30}
                  baseColor={"#020617"}
                  highlightColor={"#06b6d4"}
                />
              ))}
          </Box>
        ))}
      </Box>
    );
  }
  return (
    <>
      {/* Container for all data START */}
      <Box
        sx={{
          padding: "24px",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          boxShadow: 5,
          borderRadius: 2,
        }}
      >
        {/* Box holding search field and filter buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          {/* Input box to search */}
          <TextField
            variant="outlined"
            placeholder="Search deals..."
            size="small"
            sx={{ width: "33.333%" }}
          />
          {/* Box holding buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button variant="outlined" color="primary">
              All Deals
            </Button>
            <Button variant="outlined" color="primary">
              Open
            </Button>
            <Button variant="outlined" color="primary">
              Closed
            </Button>
          </Box>
        </Box>
        {/* Box holding search field and filter buttons END */}

        {/* Table Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
            gap: "16px", // Converted from gap-4
            paddingY: "12px", // Converted from py-3
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Deal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stage
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Value
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Risk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Last Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actions
          </Typography>
        </Box>
        {/* Table Headers END */}

        {/* Table Rows - Example Data */}
        {deals.map((currentDeal, index) => (
          //  ROW Holding specific deal details
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr 0.8fr 1.2fr 1.5fr",
              gap: "16px", // Converted from gap-4
              paddingY: "12px", // Converted from py-3
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.deal_name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.company_name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {currentDeal.deal.stage.charAt(0).toUpperCase() +
                currentDeal.deal.stage.slice(1)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // if value is greater than 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                color:
                  parseInt(currentDeal.deal.deal_value) > 100000
                    ? "success.main"
                    : parseInt(currentDeal.deal.deal_value) >= 50000
                    ? "warning.main"
                    : "error.main",
              }}
            >
              {"$" + currentDeal.deal.deal_value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // if value is greater than 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                color:
                  parseInt(
                    currentDeal.risks[currentDeal.risks.length - 1]
                      .deal_risk_score
                  ) <= 35
                    ? "success.main"
                    : parseInt(
                        currentDeal.risks[currentDeal.risks.length - 1]
                          .deal_risk_score
                      ) <= 65
                    ? "warning.main"
                    : "error.main",
              }}
            >
              {currentDeal.risks[currentDeal.risks.length - 1]
                .deal_risk_score <= 35
                ? "Low"
                : currentDeal.risks[currentDeal.risks.length - 1]
                    .deal_risk_score <= 65
                ? "Medium"
                : "High"}
            </Typography>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ color: "white" }}
            >
              {currentDeal.timeline[
                currentDeal.timeline.length - 1
              ].updated_at.slice(0, 10)}
            </Typography>
            <Box sx={{ display: "flex", gap: 1.3 }}>
              <Tooltip title="View Deal">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/details/${currentDeal.deal.id}`)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0891b2, #0e7490)",
                      boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
                      color: "black",
                    },
                    color: "white",
                  }}
                >
                  <Info />
                </IconButton>
              </Tooltip>
              <EditDeal deal={currentDeal} />
              <Tooltip title="Refresh Insights">
                <IconButton
                  size="small"
                  onClick={() => navigate(`/details/${currentDeal.deal.id}`)}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
                    boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0891b2, #0e7490)",
                      boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
                      color: "black",
                    },
                    color: "white",
                  }}
                >
                  <Refresh />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          //   ROW Holding specific deal details end
        ))}
      </Box>
      {/* Container for all data END */}
    </>
  );
};

export default CRMData;
