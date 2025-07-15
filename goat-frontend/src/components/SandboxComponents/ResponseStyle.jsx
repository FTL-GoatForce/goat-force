import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function ResponseStyle({ selectedDeal, deals }) {
  return (
    <>
          <Box
        sx={{
          height: "20%",
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          padding: 2,
          backgroundColor: "#334155",
        }}
      >
        <Typography
          fontWeight={"bold"}
          color="text.primary"
          display={"flex"}
          gap={1}
          fontSize={14}
          alignItems={"center"}
        >
          <CallOutlinedIcon color="primary" />
          {selectedDeal.participants[0].name} 's Response Style
        </Typography>
        <Typography
          gap={1}
          color="text.primary"
          fontSize={14}
          marginTop={1.5}
          alignItems={"center"}
          display={"flex"}
        >
          • Ignores price incentives
        </Typography>
                <Typography
          gap={1}
          color="text.primary"
          fontSize={14}
          marginTop={0.3}
          alignItems={"center"}
          display={"flex"}
        >
          • Prefers formal tone
        </Typography>

                        <Typography
          gap={1}
          color="text.primary"
          fontSize={14}
          marginTop={0.3}
          alignItems={"center"}
          display={"flex"}
        >
          • Asks for technical details
        </Typography>
      </Box>
    
    
    </>
  )
}

export default ResponseStyle