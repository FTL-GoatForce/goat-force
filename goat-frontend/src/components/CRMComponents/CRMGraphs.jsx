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
} from "@mui/material";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";

function CRMGraphs({ deals }) {
  const [insightNumber, setInsightNumber] = useState(0);
  function handleRefresh() {
    setInsightNumber((prev) => (prev + 1) % 3);
  }
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
              overflowY: "scroll", // Enable vertical scrolling
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
                    }}
                  >
                    Daily Tasks{" "}
                    <AutoAwesomeTwoToneIcon
                      sx={{ verticalAlign: "middle", color: "gradient.main" }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      align: "right",
                      width: "100px",
                      p: 0.5,
                      pt: 1.5,
                    }}
                  >
                    <Button
                      sx={{ position: "relative" }}
                      onClick={handleRefresh}
                      variant="contained"
                    >
                      Refresh
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ borderColor: "divider" }}>
                {deals.map((deal) => {
                  return (
                    <TableRow key={deal.deal.id}>
                      <TableCell
                        sx={{
                          height: "30px",
                          //   borderBottom: "none",
                          borderColor: "divider",
                          color: "text.primary",
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          <Typography
                            sx={{ fontSize: ".9rem", fontWeight: "bold" }}
                          >
                            {deal.deal.deal_name}{" "}
                          </Typography>
                          {deal.risks && deal.risks.length > 0 ? (
                            <Chip
                              label={
                                parseInt(deal.risks[0].deal_risk_score) <= 35
                                  ? "Low Risk"
                                  : parseInt(deal.risks[0].deal_risk_score) <=
                                    65
                                  ? "Medium Risk"
                                  : "High Risk"
                              }
                              size="small"
                              sx={{
                                ml: 1,
                                backgroundColor:
                                  parseInt(deal.risks[0].deal_risk_score) <= 35
                                    ? "rgba(76, 175, 80, 0.1)"
                                    : parseInt(deal.risks[0].deal_risk_score) <=
                                      65
                                    ? "rgba(255, 152, 0, 0.1)"
                                    : "rgba(211, 47, 47, 0.1)",
                                color:
                                  parseInt(deal.risks[0].deal_risk_score) <= 35
                                    ? "success.main"
                                    : parseInt(deal.risks[0].deal_risk_score) <=
                                      65
                                    ? "warning.main"
                                    : "error.main",
                                fontWeight: "medium",
                                marginRight: 2,
                                border:
                                  parseInt(deal.risks[0].deal_risk_score) <= 35
                                    ? "1px solid rgba(76, 175, 80, 0.2)"
                                    : parseInt(deal.risks[0].deal_risk_score) <=
                                      65
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
                        <Typography color="text.secondary">
                          {deal.aiRecommendation &&
                          deal.aiRecommendation.length > 0 &&
                          deal.aiRecommendation[0].next_steps &&
                          deal.aiRecommendation[0].next_steps.length >
                            insightNumber
                            ? deal.aiRecommendation[0].next_steps[insightNumber]
                            : "No Recommendation"}
                        </Typography>
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
