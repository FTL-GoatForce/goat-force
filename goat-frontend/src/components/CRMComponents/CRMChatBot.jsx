import { Box, Button } from "@mui/material";
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
      }}
    >
      <Button
        variant="contained"
        onClick={handleExit}
        sx={{ position: "absolute", right: 0, m: 2 }}
        color="secondary"
      >
        Exit
      </Button>
    </Box>
  );
};

export default CRMChatBot;
