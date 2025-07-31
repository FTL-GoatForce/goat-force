import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Paper,
  IconButton,
  Card,
  CardHeader,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LinearBar from "../ReusableComponents/LinearBar";
import EmergencyIcon from "@mui/icons-material/Emergency";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Risk({
  deal_risk_score,
  churn_risk_score,
  timeline_risk_score,
  budget_risk_score,
  deal_risk_description,
  churn_risk_description,
  timeline_risk_description,
  budget_risk_description,
}) {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleExpand = (risk) => {
    setExpandedSection(expandedSection === risk ? null : risk);
  };

  // Create risk data array and sort by score (highest first)
  const riskData = [
    {
      key: "deal",
      title: "Deal Risk",
      score: deal_risk_score,
      description: deal_risk_description,
      icon: WarningAmberIcon,
      iconColor: "error.main",
    },
    {
      key: "churn",
      title: "Churn Risk",
      score: churn_risk_score,
      description: churn_risk_description,
      icon: TrendingDownIcon,
      iconColor: "warning.main",
    },
    {
      key: "timeline",
      title: "Timeline Risk",
      score: timeline_risk_score,
      description: timeline_risk_description,
      icon: AccessTimeIcon,
      iconColor: "info.main",
    },
    {
      key: "budget",
      title: "Budget Risk",
      score: budget_risk_score,
      description: budget_risk_description,
      icon: AttachMoneyIcon,
      iconColor: "success.main",
    },
  ].sort((a, b) => b.score - a.score);

  const getRiskLevel = (score) => {
    if (score > 65) return { label: "High", color: "error" };
    if (score > 35) return { label: "Medium", color: "warning" };
    return { label: "Low", color: "success" };
  };

  return (
    <Card
      sx={{
        backgroundColor: "background.paper",
        padding: 2,
        borderRadius: 4,
        width: "100%",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box className="card-header" sx={{ display: "flex" }}>
        <CardHeader
          avatar={<EmergencyIcon color="primary" />}
          title="Risk Assessment"
          subheader="View risk assessment for this deal"
        />
      </Box>
      {/* Content */}

      {/* Main Box */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {riskData.map((risk) => {
          const IconComponent = risk.icon;
          const riskLevel = getRiskLevel(risk.score);

          return (
            <Paper
              key={risk.key}
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                backgroundColor: "background.paper",
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {/* Risk Title */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <IconComponent sx={{ color: risk.iconColor, fontSize: 24 }} />
                  <Typography
                    variant="body1"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    {risk.title}
                  </Typography>
                  <Chip
                    label={riskLevel.label}
                    color={riskLevel.color}
                    sx={{ marginLeft: "auto" }}
                  />
                  <IconButton onClick={() => handleExpand(risk.key)}>
                    <ArrowDropDownIcon
                      sx={{
                        color: "text.secondary",
                        fontSize: 24,
                        transform:
                          expandedSection === risk.key
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.2s ease-in-out",
                      }}
                    />
                  </IconButton>
                </Box>

                {/* Risk Description */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                  }}
                >
                  <LinearBar value={risk.score} />
                </Box>
                {expandedSection === risk.key && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      maxWidth: "480px",
                    }}
                  >
                    <Typography variant="body1" sx={{ color: "text.primary" }}>
                      {risk.description}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Card>
  );
}

export default Risk;
