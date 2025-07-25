import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import { BiLogoGmail } from "react-icons/bi";

import { FaSlack } from "react-icons/fa";

import { useState } from "react";

const MainContent = () => {
  const [channel, setChannel] = useState("Gmail");
  function handleChannelChange(e) {
    setChannel(e.target.value);
  }
  return (
    <Box
      sx={{ borderRadius: 4 }}
      maxWidth={"100%"}
      height={"100%"}
      backgroundColor="background.default"
      display={"flex"}
      flexDirection="column"
    >
      {/* Message Box*/}
      <Box border={1} height={"100%"} borderColor="divider" maxWidth={"100%"}>
        {/* Chat Header */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          gap={1}
          height={"100%"}
          overflow={"auto"}
          maxHeight={"900px"}
        >
          {/* Toolbar */}
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
            bgcolor={"background.paper"}
            sx={{
              p: 2,
              borderRadius: "8px",
              boxShadow: 1,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            {/* Mode Selection Dropdown */}
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel color="text.primary" id="communication-mode-label">
                Channel
              </InputLabel>
              <Select
                labelId="communication-mode-label"
                id="communication-mode-select"
                value={channel}
                label="Mode"
                onChange={handleChannelChange}
                sx={{
                  backgroundColor: "background.paper",
                }}
              >
                <MenuItem value="Gmail">
                  {" "}
                  Gmail <BiLogoGmail />
                </MenuItem>
                <MenuItem value="Slack">
                  {" "}
                  Slack <FaSlack />{" "}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
