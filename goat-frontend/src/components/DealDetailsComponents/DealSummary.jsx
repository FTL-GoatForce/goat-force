import React from "react";
import {
  AutoAwesome,
  Business,
  Person,
  Analytics,
  AttachMoney,
} from "@mui/icons-material";
import {
  Box,
  Card,
  Typography,
  Grid,
  Divider,
  Chip,
  CardHeader,
} from "@mui/material";
import { green } from "@mui/material/colors";

function DealSummary({
  dealSummary,
  value,
  stage,
  closeDate,
  daysLeft,
  company,
  primaryContact,
}) {
  return (
    <>
      <Card
        sx={{
          padding: 1,
          boxShadow: 5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* card header */}
        <CardHeader
          avatar={<AttachMoney color="primary" />}
          title="Deal Summary"
          subheader={
            dealSummary ? dealSummary : "No summary available for this deal."
          }
          subheaderTypographyProps={{
            variant: "body2",
            color: "text.secondary",
            fontSize: 17,
            marginTop: 0.5,
            marginBottom: 0.5,
          }}
          sx={{
            "& .MuiCardHeader-title": {
              fontSize: 19,
              fontWeight: "bold",
            },
          }}
        />

        {/* card content */}
        <Box
          className="card-content"
          sx={{ marginLeft: 3, marginBottom: 1.3, flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            {/* Top row - 4 equal columns */}
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Value
              </Typography>
              {/* if deal value > 100k, color is green, if from 50k to 100k, color is yellow, else color is red */}
              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    value > 100000
                      ? "success.main"
                      : value > 50000
                      ? "warning.main"
                      : "error.main",
                }}
              >
                {value}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Stage
              </Typography>
              {/* if deal stage is "closed_lost" => error.main, if "closed_won" => success.main if "start" warning.main, if "proposal", warning.main */}
              <Chip
                label={
                  stage === "closed_lost"
                    ? "Closed Lost"
                    : stage === "closed_won"
                    ? "Closed Won"
                    : stage.charAt(0).toUpperCase() + stage.slice(1)
                }
                size="small"
                sx={{
                  backgroundColor:
                    stage === "closed_lost"
                      ? "error.main"
                      : stage === "closed_won"
                      ? "success.main"
                      : "info.main",
                  fontWeight: "bold",
                }}
              />
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Close Date
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {closeDate}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Days Left
              </Typography>
              {/* if days left < 10 days => red, less than 30 < yellow, over 30, green */}
              <Typography
                variant="subtitle1"
                sx={
                  daysLeft < 10
                    ? { color: "error.main" }
                    : daysLeft < 30
                    ? { color: "warning.main" }
                    : { color: "success.main" }
                }
              >
                {daysLeft}
              </Typography>
            </Grid>

            {/* Divider - full width (12) */}
            <Grid size={12} sx={{ my: 1 }}>
              <Divider variant="" />
            </Grid>

            {/* Bottom row - 2 equal columns */}
            <Grid size={6}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Company
              </Typography>
              <Typography
                fontSize={15}
                variant="subtitle1"
                color="text.secondary"
              >
                {company}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                variant="h6"
                fontSize={14}
                color="text.primary"
                mb={0.3}
                fontWeight={"bold"}
              >
                Primary Contact
              </Typography>
              <Typography
                fontSize={15}
                variant="subtitle 1"
                color="text.secondary"
              >
                {primaryContact}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
}

export default DealSummary;
