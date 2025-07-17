import React from "react";
import { Box, Button, Typography, Chip, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function DealDetailsHeader({ deal_name, risk_score }) {
  const navigate = useNavigate();
  console.log(risk_score);

  return (
    <>
      <Box
        className="deal-details-header"
        sx={{
          display: "flex",
          padding: 0.5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button
            variant="text"
            startIcon={<ArrowBack />}
            sx={{ color: "text.secondary" }}
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </Button>

          <Typography
            variant="h5"
            sx={{ color: "text.primary", fontWeight: "bold" }}
            marginTop={1}
          >
            {deal_name}
          </Typography>
        </div>
        <div>
          <Chip
            // if deal value > 100k, color is green, if from 50k to 100k, color is yellow, else color is red
            label={
              parseInt(risk_score) <= 35
                ? "Low Risk"
                : parseInt(risk_score) <= 65
                ? "Medium Risk"
                : "High Risk"
            }
            size="small"
            sx={{
              backgroundColor:
                parseInt(risk_score) <= 35
                  ? "rgba(76, 175, 80, 0.1)" 
                  : parseInt(risk_score) <= 65
                  ? "rgba(255, 152, 0, 0.1)" 
                  : "rgba(211, 47, 47, 0.1)", 
              color:
                parseInt(risk_score) <= 35
                  ? "success.main"
                  : parseInt(risk_score) <= 65
                  ? "warning.main"
                  : "error.main",
              fontWeight: "medium",
              marginRight: 2,
              border:
                parseInt(risk_score) <= 35
                  ? "1px solid rgba(76, 175, 80, 0.2)" 
                  : parseInt(risk_score) <= 65
                  ? "1px solid rgba(255, 152, 0, 0.2)" 
                  : "1px solid rgba(211, 47, 47, 0.2)", 
            }}
          />
        </div>
      </Box>
    </>
  );
}

export default DealDetailsHeader;
