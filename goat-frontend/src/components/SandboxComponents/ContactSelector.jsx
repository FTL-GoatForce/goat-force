import React from "react";
import { Box, Button, Typography, Chip, TextField, CardHeader } from "@mui/material";
import AttachMoney from "@mui/icons-material/AttachMoney";
import { color } from "motion/react";

function ContactSelector({ deals, onDealClick, selectedDeal }) {
  return (
    <>
      {/* Card Container */}
      <Box
        border={1}
        borderColor="divider"
        borderRadius={2}
        padding={2}
        backgroundColor="background.paper"
        display={"flex"}
        flexDirection="column"
      >
        {/* card header */}
        <Box className="card-header" sx={{ display: "flex", color: "text.primary" }}>
          <CardHeader
            avatar={<AttachMoney color="primary" />}
            title="Contact Selector"
            subheader="Select a contact to practice with"
            titleTypographyProps={{ variant: "h6", fontWeight: "bold", fontSize: 16 }}
          />
        </Box>
        <TextField
          variant="outlined"
          placeholder="Search for deals..."
          size="small"
          sx={{ backgroundColor: "#334155", marginTop: 1, marginBottom: 2 }}
        />
        {/* Deals container */}
        <Box sx={{
            overflow: "auto",
            maxHeight: "400px",
        }}>

        {/* Map through deals array to create cards */}
        {deals.map((deal) => (
          <Box
            key={deal.deal_id}
            marginTop={1}
            display="flex"
            flexDirection="column"
            gap={0.5}
            padding={1.2}
            border={1}
            borderColor={
              selectedDeal.deal_id === deal.deal_id
                ? "primary.light"
                : "transparent"
            }
            borderRadius={1}
            backgroundColor="background.paper"
          >
            <Typography
              variant="body2"
              color="text.primary"
              fontWeight={"bold"}
            >
              {deal.deal_name}
            </Typography>
            <Typography
              fontSize={12}
              variant="subtitle1"
              color="text.secondary"
            >
              {deal.participants[0].name}
            </Typography>
            <Typography fontSize={13} color="primary.light" fontWeight={"bold"}>
              ${deal.deal_value_usd}
            </Typography>
            <Button
              variant="contained"
              sx={{ color: "white", fontWeight: "bold" }}
              color="primary"
              size="small"
              onClick={() => onDealClick(deal.deal_id)}
            >
              Practice with {deal.participants[0].name}
            </Button>
          </Box>
        ))}
                </Box>

      </Box>
    </>
  );
}

export default ContactSelector;
