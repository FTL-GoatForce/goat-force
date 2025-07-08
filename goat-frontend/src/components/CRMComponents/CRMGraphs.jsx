import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

function CRMGraphs() {
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
        {/* 1. Sales Overview Pie Chart */}
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
          {/* Container for content */}
          <Box display="flex" flexDirection="row" height="100%">
            {/* Card Header */}
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: 18, color: "text.primary", fontWeight: "bold" }}
              >
                Total Sales
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontSize: "12px" }}
              >
                Accumulated Earnings
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "text.primary", marginTop: 2, fontWeight: "bold" }}
              >
                $125,000
              </Typography>
            </Box>
            {/* Pie Chart */}
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Product A" },
                    { id: 1, value: 15, label: "Product B" },
                    { id: 2, value: 40, label: "Product C" },
                  ],
                  innerRadius: 45,
                  outerRadius: 85,
                  paddingAngle: 3,
                  cornerRadius: 8,
                },
              ]}
              width={300}
              height={300}
              hideLegend={true}
            />
          </Box>
        </Box>

        {/* 2. Sales Trend Line Chart */}
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
            {/* Chart Header */}
            <Box mb={1}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: 18,
                  color: "text.primary",
                  fontWeight: "bold",
                }}
              >
                Sales Trend
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", fontSize: "12px" }}
              >
                Monthly Performance
              </Typography>
            </Box>

            {/* Line Chart */}
            <Box flex={1} display="flex" alignItems="center">
              <LineChart
                xAxis={[
                  {
                    data: ["January", "Feburary", "March", "April", "", 6],
                    scaleType: "point",
                  },
                ]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                    backgroundColor: "#text.primary",
                  },
                ]}
                width={500}
                height={220}
                margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CRMGraphs;
