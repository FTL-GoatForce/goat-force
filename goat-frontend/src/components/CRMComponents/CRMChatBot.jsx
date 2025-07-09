import { Box, Button, Typography } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import React from "react";

const CRMChatBot = ({ handleExit }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: 5,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        bottom: 0,
        right: 0,
        position: "fixed",
        height: "90vh",
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",

          borderBottom: 1,
          borderColor: "#b8b8b8",
          height: "58px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "secondary.main",
            m: 2,
          }}
        >
          Goat Force
        </Typography>

        <Button
          variant="contained"
          onClick={handleExit}
          sx={{ position: "absolute", right: 0, m: 1 }}
          color="secondary"
          endIcon={<ExitToApp />}
        >
          Exit
        </Button>
      </Box>
    </Box>
  );
};

export default CRMChatBot;
