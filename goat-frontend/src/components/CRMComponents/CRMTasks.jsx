import { Insights } from "@mui/icons-material";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Chip,
} from "@mui/material";
import AutoAwesomeTwoToneIcon from "@mui/icons-material/AutoAwesomeTwoTone";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const CRMTasks = ({ deals }) => {
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
          height={100}
          width={"100%"}
          style={{ marginBottom: 12 }}
          baseColor={"#020617"}
          highlightColor={"#06b6d4"}
        />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        marginBottom: "40px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        borderColor: "divider",
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
        backgroundColor: "background.paper",
        height: "440px", // Ensure a minimum height for the tasks section
        overflowY: "scroll", // Enable vertical scrolling if content overflows
      }}
    >
      <TableContainer
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
          overflowY: "hidden", // Enable vertical scrolling
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* Add your table rows and cells here */}
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  borderBottom: "none",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "primary.main",
                  p: 0.5,
                  pt: 1,
                  pl: 2,
                  m: 0,
                }}
              >
                Daily Tasks{" "}
                <AutoAwesomeTwoToneIcon sx={{ verticalAlign: "middle" }} />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ borderColor: "divider" }}>
            {deals.map((deal) => {
              return (
                <TableRow key={deal.id}>
                  <TableCell
                    sx={{
                      height: "30px",
                      //   borderBottom: "none",
                      borderColor: "divider",
                      color: "text.primary",
                    }}
                  >
                    <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
                      {deal.deal.deal_name}{" "}
                      <Chip
                        // if deal value > 100k, color is green, if from 50k to 100k, color is yellow, else color is red
                        label={
                          parseInt(deal.risks[0].deal_risk_score) <= 35
                            ? "Low Risk"
                            : parseInt(deal.risks[0].deal_risk_score) <= 65
                            ? "Medium Risk"
                            : "High Risk"
                        }
                        size="small"
                        sx={{
                          backgroundColor:
                            parseInt(deal.risks[0].deal_risk_score) <= 35
                              ? "rgba(76, 175, 80, 0.1)"
                              : parseInt(deal.risks[0].deal_risk_score) <= 65
                              ? "rgba(255, 152, 0, 0.1)"
                              : "rgba(211, 47, 47, 0.1)",
                          color:
                            parseInt(deal.risks[0].deal_risk_score) <= 35
                              ? "success.main"
                              : parseInt(deal.risks[0].deal_risk_score) <= 65
                              ? "warning.main"
                              : "error.main",
                          fontWeight: "medium",
                          marginRight: 2,
                          border:
                            parseInt(deal.risks[0].deal_risk_score) <= 35
                              ? "1px solid rgba(76, 175, 80, 0.2)"
                              : parseInt(deal.risks[0].deal_risk_score) <= 65
                              ? "1px solid rgba(255, 152, 0, 0.2)"
                              : "1px solid rgba(211, 47, 47, 0.2)",
                        }}
                      />
                    </Typography>
                    <Typography color="text.secondary">
                      {deal.aiRecommendation
                        ? deal.aiRecommendation[0].next_steps[0]
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
  );
};

export default CRMTasks;
