import React from "react";
import { Box, Button, Typography, Chip, TextField } from "@mui/material";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

function Recommendations(selectedDeal, deals) {
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
          <FeaturedPlayListOutlinedIcon color="primary" />
          Recommendations
        </Typography>
        <Typography
          gap={1}
          color="text.secondary"
          fontSize={14}
          marginTop={1}
          alignItems={"center"}
          display={"flex"}
        >
          <DoneOutlinedIcon color="success" fontSize="small" />
          Good: You mentioned technical specs
        </Typography>
                <Typography
          gap={1}
          color="text.secondary"
          fontSize={14}
          marginTop={1}
          alignItems={"center"}
          display={"flex"}
        >
          <DangerousOutlinedIcon color="error" fontSize="small" />
          Avoid:  Leading with discounts
        </Typography>

                        <Typography
          gap={1}
          color="text.secondary"
          fontSize={14}
          marginTop={1}
          alignItems={"center"}
          display={"flex"}
        >
          <TimelineOutlinedIcon color="primary" fontSize="small" />
          Try:  Share relevant case studies
        </Typography>
      </Box>
    </>
  );
}

export default Recommendations;
