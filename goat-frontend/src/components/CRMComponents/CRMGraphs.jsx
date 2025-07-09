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
            <Box ml={1}>
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
                sx={{ color: "success.main", marginTop: 2, fontWeight: "bold" }}
              >
                $125,000
              </Typography>
            </Box>
            {/* Pie Chart */}
            <Box flex={1} display="flex" justifyContent="center">
              <PieChart
                colors={["#f87171", "#576CFF", "#06b6d4"]} // Use palette
                series={[
                  {
                    // TODO: Will dynamically generate pie chart data from our database
                    // data: salesData.map((item, index) => ({ id: index, value: item.value, label: item.label })),
                    data: [
                      { id: 0, value: 100000, label: "Apple" },
                      { id: 1, value: 15000, label: "Nike" },
                      { id: 2, value: 20000, label: "Fedex" },
                    ],
                    innerRadius: 50,
                    outerRadius: 110,
                    paddingAngle: 3,
                    cornerRadius: 8,
                    arcLabel: (item) => `$${(item.value / 1000).toFixed(0)}k`, // Format as money
                  },
                ]}
                width={300}
                height={300}
              />
            </Box>
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
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Box mb={1} display={"flex"} flexDirection="column">
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
              {/* Monthly % (sales curr month / prev month * 100) */}
              <Typography
                fontSize={17}
                fontWeight={"bold"}
                color="success.main"
              >
                {" "}
                +15%{" "}
              </Typography>
            </Box>

            {/* Line Chart */}
            <Box flex={1} display="flex" alignItems="center">
              <LineChart
                xAxis={[
                  {
                    data: [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                    ],
                    scaleType: "point",
                  },
                ]}
                yAxis={[
                  {
                    valueFormatter: (value) => `$${value / 1000}k`,
                  },
                ]}
                series={[
                  {
                    data: [
                      100000, 170000, 150000, 130000, 170000, 150000, 220000,
                      250000,
                    ],
                    area: true,
                    color: "#08A4C3",
                    showMark: false,
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
