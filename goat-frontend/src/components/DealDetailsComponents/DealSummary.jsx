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
              dealSummary ? dealSummary : "No summary available for this deal."}
            subheaderTypographyProps={{ variant: "body2", color: "text.secondary", fontSize: 13, marginTop: 0.5, marginBottom: 0.5 }}
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
              <Typography variant="subtitle1" sx={{ color: "#49DE80" }}>
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
              <Chip
                label={stage}
                size="small"
                sx={{
                  backgroundColor: "primary",
                  fontWeight: "medium",
                }}
              />{" "}
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
              <Typography variant="subtitle1" color="orange">
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
