import {
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditDeal from "../Pages/EditDeal"; // Importing the EditDeal modal component
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Info, Refresh } from "@mui/icons-material";
import axios from "axios";
import socket from "../../web_socket/socket";
import DealLoading from "../ReusableComponents/DealLoading";

const CRMData = ({
  deals,
  globalStats,
  setGlobalStats,
  handleFilterChange,
  handleInputChange,
}) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  useEffect(() => {
    // Fetch initial job status data
    axios
      .get("http://localhost:3000/deal/stats")
      .then((response) => {
        const stats = Object.fromEntries(
          response.data.map((d) => [d.id, d.job_status])
        );
        setGlobalStats(stats);
      })
      .catch((error) => {
        console.error("Failed to fetch initial stats:", error);
      });

    // Connect WebSocket if not already connected
    if (!socket.connected) {
      socket.connect();
    }

    // Handle a JobStatusUpdate emit from websocket
    const handleJobStatusUpdate = (data) => {
      console.log("JobStatusUpdate received:", data);
      setGlobalStats((prev) => ({
        ...prev,
        [data.dealId]: data.status,
      }));
    };
    // event listener waiting for socket to be live
    socket.on("connect", () => {
      console.log("WebSocket connected");
    });

    // event listener waiting for socket to emit JobStatusUpdate
    socket.on("JobStatusUpdate", handleJobStatusUpdate);

    //  When we naviagte off we're removing socket event listeners
    return () => {
      socket.off("connect");
      socket.off("JobStatusUpdate", handleJobStatusUpdate);
    };
  }, []);

  function setClosedDeals() {
    // Logic to filter and set closed deals
    handleFilterChange("closed");
  }
  function setOpenDeals() {
    // Logic to filter and set open deals
    handleFilterChange("open");
  }
  function setAllDeals() {
    // Logic to reset filter
    handleFilterChange(null);
  }
  function handleChange(e) {
    setText(e.target.value);
    handleInputChange(e.target.value);
  }

  async function refreshInsights(deal_id, slack_id, email) {
    try {
      console.log(deal_id, slack_id, email);
      const response = await axios.put(`http://localhost:3000/deal/update`, {
        dealId: deal_id,
        slack_id: slack_id,
        email: email,
      });
      console.log("Insights update response:", response);
    } catch (error) {
      console.error("Error refreshing insights:", error);
    }
  }

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
            value={text}
            onInput={(e) => handleChange(e)}
          />
          {/* Box holding buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
            }}
          >
            <Button variant="outlined" color="primary" onClick={setAllDeals}>
              All Deals
            </Button>
            <Button variant="outlined" color="primary" onClick={setOpenDeals}>
              Open
            </Button>
            <Button variant="outlined" color="primary" onClick={setClosedDeals}>
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
        {deals.map((currentDeal, index) =>
          (globalStats[currentDeal.deal.id] ?? "idle") !== "idle" ? (
            <DealLoading dealName={currentDeal.deal.deal_name} />
          ) : (
            // Normal row when not loading
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
                {currentDeal.deal.stage
                  ? currentDeal.deal.stage.charAt(0).toUpperCase() +
                    currentDeal.deal.stage.slice(1).replace("_", " ")
                  : "Start"}
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
              {currentDeal.risks?.length > 0 ? (
                <Typography
                  variant="body1"
                  sx={{
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
                  {parseInt(
                    currentDeal.risks[currentDeal.risks.length - 1]
                      .deal_risk_score
                  ) <= 35
                    ? "Low"
                    : parseInt(
                        currentDeal.risks[currentDeal.risks.length - 1]
                          .deal_risk_score
                      ) <= 65
                    ? "Medium"
                    : "High"}
                </Typography>
              ) : (
                <Typography variant="body1" sx={{ color: "success.main" }}>
                  Low
                </Typography>
              )}

              <Typography
                variant="body1"
                color="text.primary"
                sx={{ color: "white" }}
              >
                {currentDeal.timeline?.length > 0
                  ? currentDeal.timeline[
                      currentDeal.timeline.length - 1
                    ].updated_at.slice(0, 10)
                  : "No update"}
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
                    onClick={() => {
                      refreshInsights(
                        currentDeal.deal.id,
                        currentDeal.participants[0].slack_id,
                        currentDeal.participants[0].email
                      );
                    }}
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
          )
        )}
      </Box>
      {/* Container for all data END */}
    </>
  );
};

export default CRMData;
