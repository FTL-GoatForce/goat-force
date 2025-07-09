import React from "react";
import { Box, Button, Typography, Chip, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";

function DealDetailsHeader() {
  const navigate = useNavigate();
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
            Back to Deals
          </Button>

          <Typography
            variant="h5"
            sx={{ color: "text.primary", fontWeight: "bold" }}
            marginTop={1}
          >
            Enterprise SaaS Platform - Acme Corp
          </Typography>
        </div>
        <div>
          <Chip
            label="High Risk"
            size="small"
            sx={{
              backgroundColor: "rgba(211, 47, 47, 0.1)", // Red background with low opacity
              color: "error.main", // Full opacity red text
              fontWeight: "medium",
              marginRight: 2,
              border: "1px solid rgba(211, 47, 47, 0.2)", // Optional: subtle border
            }}
          />
        </div>
      </Box>
    </>
  );
}

export default DealDetailsHeader;
