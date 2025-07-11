import React from "react";
import { Paper, Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditDeal from "../Pages/EditDeal"; // Importing the EditDeal modal component
const CRMData = () => {
  const navigate = useNavigate();
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
            {/* Refresh insights button -- will call our gemini to repopulate our DB qwith new insights */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "grey",
                "&:hover": { bgcolor: "white", color: "black" },
              }}
            >
              Refresh my insights
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
        {[
          {
            deal: "Cloud Sync Expansion",
            company: "Nike",
            stage: "Negotiation",
            value: "$120,000",
            risk: "Low",
            activity: "2 days ago",
          },
          {
            deal: "Global CRM Overhaul",
            company: "Fedex",
            stage: "Proposal",
            value: "$85,000",
            risk: "Medium",
            activity: "1 day ago",
          },
          {
            deal: "Marketing Cloud Lite",
            company: "Spotify",
            stage: "Discovery",
            value: "$200,000",
            risk: "High",
            activity: "Today",
          },
          {
            deal: "Sales Suite Upgrade",
            company: "Airbnb",
            stage: "Qualified",
            value: "$40,000",
            risk: "Medium",
            activity: "2 days ago",
          },
          {
            deal: "Data360 Integration",
            company: "Bank of America",
            stage: "Qualified",
            value: "$40,000",
            risk: "Medium",
            activity: "2 days ago",
          },
        ].map((row, index) => (
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
              {row.deal}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {row.company}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {row.stage}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                // if value is greater than 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                color: parseInt(row.value.replace(/[$,]/g, "")) > 100000
                  ? "success.main"
                  : parseInt(row.value.replace(/[$,]/g, "")) >= 50000
                  ? "warning.main"
                  : "error.main",
              }}
            >
              {row.value}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color:
                  row.risk === "Medium"
                    ? "warning.main"
                    : row.risk === "High"
                    ? "error.main"
                    : "success.main",
              }}
            >
              {row.risk}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {row.activity}
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => navigate("/details")}
              >
                View
              </Button>
              {/* TODO: pass in deal_id once data setup*/}
              <EditDeal/>
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
