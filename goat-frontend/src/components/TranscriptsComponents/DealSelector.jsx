import React from "react";
import {
  Box,
  Button,
  Typography,
  Chip,
  TextField,
  CardHeader,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { useState, useEffect } from "react";

function DealSelector({ deals, onDealClick, selectedDeal }) {
  const [filteredDeals, setFilteredDeals] = useState(deals); // state to hold filtered deals, will be updated on search
  const [searchTerm, setSearchTerm] = useState(""); // state to hold search input
  const [isSearching, setIsSearching] = useState(false); // state to track if searching is active

  // Update filteredDeals when deals prop changes (identical when deals are fetched)
  useEffect(() => {
    setFilteredDeals(deals);
  }, [deals]);

  // function to search through deals (filter)
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setIsSearching(term.length > 0); // set searching state based on input length

    // filter deals based on search term
    if (term === "") {
      setFilteredDeals(deals); // show all deals when search is cleared
    } else {
      const filtered = deals.filter(
        (deal) =>
          deal.deal.deal_name.toLowerCase().includes(term) ||
          deal.participants[0].prospect_name.toLowerCase().includes(term) // also search by prospect name
      );
      setFilteredDeals(filtered); // update the filtered deals state
    }
  };

  return (
    <>
      {/* Card Container */}
      <Box
        border={1}
        borderColor="divider"
        borderRadius={2}
        padding={2}
        height={"100%"}
        backgroundColor="background.paper"
        display={"flex"}
        flexDirection="column"
      >
        {/* card header */}
        <Box
          className="card-header"
          sx={{ display: "flex", color: "text.primary" }}
        >
          <CardHeader
            avatar={<Person color="primary" />}
            title="Deal Selector"
            subheader="Select a deal to view its transcripts"
            titleTypographyProps={{
              variant: "h6",
              fontWeight: "bold",
              fontSize: 16,
            }}
          />
        </Box>

        {/* Search Input */}
        <TextField
          variant="outlined"
          placeholder="Search for deals or prospects..."
          value={searchTerm} // bind the searchTerm state
          size="small"
          sx={{ backgroundColor: "#334155", marginTop: 1, marginBottom: 2 }}
          onChange={handleSearch} // handle search input change
        />

        {/* Search Results Summary */}
        {isSearching && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 1, fontSize: 12 }}
          >
            Found {filteredDeals.length} deal
            {filteredDeals.length !== 1 ? "s" : ""}
            {searchTerm && ` matching "${searchTerm}"`}
          </Typography>
        )}

        {/* Deals container */}
        <Box
          sx={{
            overflow: "auto",
            height: "100%",
          }}
        >
          {/* Check if there are filtered deals to show */}
          {filteredDeals.length > 0 ? (
            /* Map through FILTERED deals array to create cards */
            filteredDeals.map((deal) => (
              <Box
                key={deal.deal.id}
                marginTop={1}
                display="flex"
                flexDirection="column"
                gap={0.5}
                padding={1.2}
                border={1}
                borderColor={
                  selectedDeal?.deal?.id === deal.deal.id
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
                  {deal.deal.deal_name}
                </Typography>
                <Typography
                  fontSize={12}
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {deal.participants[0].prospect_name}
                </Typography>
                <Typography
                  fontSize={13}
                  color="primary.light"
                  fontWeight={"bold"}
                >
                  ${deal.deal.deal_value}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ color: "white", fontWeight: "bold" }}
                  color="primary"
                  size="small"
                  // when clicked, specific deal use state is changed passing the current deal's id
                  onClick={() => onDealClick(deal.deal.id)}
                >
                  View chats with {deal.participants[0].prospect_name}
                </Button>
              </Box>
            ))
          ) : (
            /* Show empty state when no deals match search */
            <Box
              sx={{
                textAlign: "center",
                py: 4,
                color: "text.secondary",
              }}
            >
              <Typography variant="body2" sx={{ mb: 1 }}>
                {isSearching ? "No deals found" : "No deals available"}
              </Typography>
              {isSearching && (
                <Typography variant="caption">
                  Try a different search term
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default DealSelector;
