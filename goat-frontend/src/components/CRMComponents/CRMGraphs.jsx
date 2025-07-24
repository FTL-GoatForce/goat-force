import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  Paper,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Chip,
  Button,
  Tooltip,
  IconButton,
  LinearProgress,
} from "@mui/material";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

function CRMGraphs({ deals }) {
  const [insightNumber, setInsightNumber] = useState(0);
  const [hoveredDeal, setHoveredDeal] = useState(null);
  const [completedTasks, setCompletedTasks] = useState(new Set());

  function handleRefresh() {
    setInsightNumber((prev) => (prev + 1) % 3);
    setCompletedTasks(new Set()); // Reset completed tasks
  }

  function toggleTaskCompletion(dealId) {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dealId)) {
        newSet.delete(dealId);
      } else {
        newSet.add(dealId);
      }
      return newSet;
    });
  }

  // Calculate completion percentage
  const totalTasks = deals ? deals.length : 0;
  const completedTasksCount = completedTasks.size;
  const completionPercentage =
    totalTasks > 0 ? Math.round((completedTasksCount / totalTasks) * 100) : 0;
  if (!deals || deals.length === 0) {
    return (
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            padding: "24px",
            mb: 5,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 5,
            width: "50%",
            borderRadius: 2,
          }}
        >
          <Skeleton
            variant="rectangular"
            height={300}
            width="100%"
            baseColor="#020617"
            highlightColor="#06b6d4"
          />
        </Box>
        <Box
          sx={{
            padding: "24px",
            mb: 5,
            backgroundColor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: 5,
            borderRadius: 2,
            width: "50%",
          }}
        >
          <Skeleton
            variant="rectangular"
            height={300}
            width="100%"
            baseColor="#020617"
            highlightColor="#06b6d4"
          />
        </Box>
      </Box>
    );
  }
  // 💬 Objections Count Line Chart Data
  const objectionData = deals.map((deal) => ({
    label: deal.deal.deal_name,
    value: deal.dealInsights?.[0]?.key_objections?.length || 0,
  }));

  const avgObjectionCount = Math.round(
    objectionData.reduce((acc, obj) => acc + obj.value, 0) /
      objectionData.length
  );
  return (
    <>
      {/* Graphs Container, holds both graphs */}
      <Box
        sx={{
          marginBottom: "40px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "16px",
        }}
      >
        {/* Objection Bar Chart */}
        <Box
          sx={{
            padding: 2,
            boxShadow: 5,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            flex: 1,
          }}
        >
          <Box display="flex" flexDirection="column" height="100%">
            <Box ml={1}>
              <Typography
                variant="h6"
                sx={{ fontSize: 18, color: "text.primary", fontWeight: "bold" }}
              >
                Objection Trend
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontSize: "12px" }}
              >
                Number of Key Objections per Deal
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: "#44c7efcc",
                  marginTop: 2,
                  fontSize: "1.2rem",
                }}
              >
                Average Objections: {avgObjectionCount}
              </Typography>
            </Box>

            {/* Bar Chart */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: objectionData.map((d) => d.label),
                    categoryGapRatio: 0.4,
                  },
                ]}
                series={[
                  {
                    data: objectionData.map((d) => d.value),
                    label: "Objections",
                    color: "#44c7efcc",
                  },
                ]}
                width={500}
                height={290}
                grid={{ vertical: true, horizontal: true }}
              />
            </Box>
          </Box>
        </Box>

        {/* Daily Tasks*/}
        <Box
          sx={{
            boxShadow: 5,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            flex: 1,
          }}
        >
          <TableContainer
            sx={{
              // border: "1px solid",
              // borderColor: "divider",
              borderRadius: 2,
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari, Edge
              },
              overflowY: "clip", // Enable vertical scrolling
            }}
          >
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
              {/* Add your table rows and cells here */}
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      color: "text.main",
                      p: 0.5,
                      pt: 2.3,
                      pl: 2,
                      m: 0,
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          Daily Tasks{" "}
                          <AutoAwesomeTwoToneIcon
                            sx={{
                              verticalAlign: "middle",
                              color: "gradient.main",
                            }}
                          />
                        </Box>
                        <Tooltip title="Refresh the data">
                          <Button
                            sx={{
                              position: "relative",
                              background:
                                "linear-gradient(135deg, #3ae4edff, #2886d9ff)",
                              "&:hover": {
                                transform: "scale(1.05)",
                                transition: "transform 0.2s",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                // Add a hover effect
                                background:
                                  "linear-gradient(135deg, #0e3975ff, #252e7bff)",
                              },
                              minWidth: "auto",
                              px: 2,
                              py: 0.5,
                            }}
                            onClick={handleRefresh}
                            variant="contained"
                            size="small"
                          >
                            Refresh
                          </Button>
                        </Tooltip>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                        >
                          Progress: {completionPercentage}% (
                          {completedTasksCount}/{totalTasks})
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={completionPercentage}
                          sx={{
                            width: "120px",
                            height: "6px",
                            borderRadius: "3px",
                            backgroundColor: "rgba(82, 227, 246, 0.1)",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#44c7efcc",
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ borderColor: "divider", overflowY: "scroll" }}>
                {deals.map((deal, index) => {
                  return (
                    <TableRow
                      key={deal.deal.id}
                      onMouseEnter={() => setHoveredDeal(deal.deal.id)}
                      onMouseLeave={() => setHoveredDeal(null)}
                      sx={{
                        borderBottom: "1px solid rgba(82, 227, 246, 0.07)",
                        backgroundColor:
                          hoveredDeal === deal.deal.id
                            ? "rgba(92, 208, 246, 0.1)"
                            : completedTasks.has(deal.deal.id)
                            ? "rgba(128, 128, 128, 0.2)"
                            : "transparent",
                        opacity: completedTasks.has(deal.deal.id) ? 0.6 : 1,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <TableCell
                        sx={{
                          height: "30px",
                          //   borderBottom: "none",
                          borderColor: "divider",
                          color: "text.primary",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                              <Typography
                                sx={{
                                  fontSize: ".9rem",
                                  fontWeight: "bold",
                                  textDecoration: completedTasks.has(
                                    deal.deal.id
                                  )
                                    ? "line-through"
                                    : "none",
                                }}
                              >
                                {deal.deal.deal_name}{" "}
                              </Typography>
                              {deal.risks && deal.risks.length > 0 ? (
                                <Chip
                                  label={
                                    parseInt(deal.risks[0].deal_risk_score) <=
                                    35
                                      ? "Low Risk"
                                      : parseInt(
                                          deal.risks[0].deal_risk_score
                                        ) <= 65
                                      ? "Medium Risk"
                                      : "High Risk"
                                  }
                                  size="small"
                                  sx={{
                                    ml: 1,
                                    backgroundColor:
                                      parseInt(deal.risks[0].deal_risk_score) <=
                                      35
                                        ? "rgba(76, 175, 80, 0.1)"
                                        : parseInt(
                                            deal.risks[0].deal_risk_score
                                          ) <= 65
                                        ? "rgba(255, 152, 0, 0.1)"
                                        : "rgba(211, 47, 47, 0.1)",
                                    color:
                                      parseInt(deal.risks[0].deal_risk_score) <=
                                      35
                                        ? "success.main"
                                        : parseInt(
                                            deal.risks[0].deal_risk_score
                                          ) <= 65
                                        ? "warning.main"
                                        : "error.main",
                                    fontWeight: "medium",
                                    marginRight: 2,
                                    border:
                                      parseInt(deal.risks[0].deal_risk_score) <=
                                      35
                                        ? "1px solid rgba(76, 175, 80, 0.2)"
                                        : parseInt(
                                            deal.risks[0].deal_risk_score
                                          ) <= 65
                                        ? "1px solid rgba(255, 152, 0, 0.2)"
                                        : "1px solid rgba(211, 47, 47, 0.2)",
                                  }}
                                />
                              ) : (
                                <Chip
                                  label="No Risk Score"
                                  size="small"
                                  sx={{
                                    ml: 1,
                                    backgroundColor: "grey.100",
                                    color: "grey.700",
                                    fontWeight: "medium",
                                    marginRight: 2,
                                    border: "1px solid grey",
                                  }}
                                />
                              )}
                            </Box>
                            <Typography
                              color="text.secondary"
                              sx={{
                                textDecoration: completedTasks.has(deal.deal.id)
                                  ? "line-through"
                                  : "none",
                              }}
                            >
                              {deal.aiRecommendation &&
                              deal.aiRecommendation.length > 0 &&
                              deal.aiRecommendation[0].next_steps &&
                              deal.aiRecommendation[0].next_steps.length >
                                insightNumber
                                ? deal.aiRecommendation[0].next_steps[
                                    insightNumber
                                  ]
                                : "No Recommendation"}
                            </Typography>
                          </Box>
                          <Tooltip
                            title={
                              completedTasks.has(deal.deal.id)
                                ? "Mark as incomplete"
                                : "Mark as complete"
                            }
                          >
                            <IconButton
                              size="small"
                              onClick={() => toggleTaskCompletion(deal.deal.id)}
                              sx={{
                                color: completedTasks.has(deal.deal.id)
                                  ? "#44c7efcc"
                                  : "text.secondary",
                                "&:hover": {
                                  color: "#44c7efcc",
                                  transform: "scale(1.1)",
                                },
                                transition: "all 0.2s ease",
                              }}
                            >
                              {completedTasks.has(deal.deal.id) ? (
                                <CheckCircleIcon />
                              ) : (
                                <CheckCircleOutlineIcon />
                              )}
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}

export default CRMGraphs;
