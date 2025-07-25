import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useNavigate } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function Settings() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex", // Arrange children (SideBar and main content) in a row
        flexDirection: "row",
        backgroundColor: "background.default",
        width: "100%", // Ensure it takes full width
      }}
    >
      <SideBar /> {/* The sidebar component */}
      {/* Main content area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          borderColor: "divider",
          flexGrow: 1,
          padding: 2,
        }}
      >
        {/* Page header */}
        <Box
          marginLeft={3}
          marginTop={3}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
        >
          <Typography
            color="text.primary"
            variant="h4"
            fontWeight={"bold"}
            fontSize={"25px"}
          >
            Settings
          </Typography>
          <Typography color="text.secondary" variant="h4" fontSize={"20px"}>
            Manage your account settings and preferences
          </Typography>
        </Box>
        {/* Profile */}
        <Box
          padding={4}
          border={1}
          borderColor="divider"
          borderRadius={2}
          marginTop={8}
          width="75%"
          marginLeft={"auto"}
          marginRight={"auto"}
          backgroundColor="background.paper"
        >
          {/* profile card header */}
          <Typography
            color="text.primary"
            variant="h4"
            fontWeight={"bold"}
            fontSize={"20px"}
            marginBottom={0.5}
          >
            Profile
          </Typography>
          <Typography fontSize={"16px"} color="text.secondary" variant="h4">
            Update your profile information
          </Typography>
          {/* profile card content  */}
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            marginTop={3}
            alignContent={"space-between"}
            marginBottom={2}
          >
            <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
              <Typography
                marginLeft={0.2}
                fontSize={"15px"}
                color="text.primary"
                variant="h6"
                fontWeight={"bold"}
              >
                First Name
              </Typography>
              <TextField
                size="small"
                placeholder="John"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
              <Typography
                marginLeft={0.2}
                fontSize={"15px"}
                color="text.primary"
                variant="h6"
                fontWeight={"bold"}
              >
                Last Name
              </Typography>
              <TextField
                size="small"
                placeholder="Doe"
                variant="outlined"
                fullWidth
              />
            </Box>
          </Box>
          <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Typography
              marginLeft={0.2}
              fontSize={"15px"}
              color="text.primary"
              variant="h6"
              fontWeight={"bold"}
            >
              Email
            </Typography>
            <TextField
              size="small"
              placeholder="john.doe@example.com"
              variant="outlined"
              fullWidth
            />
          </Box>

          {/* Button container */}
          <Box marginLeft={0.2} display={"flex"} marginTop={1}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>

        {/* security card */}
        <Box
          padding={4}
          border={1}
          borderColor="divider"
          borderRadius={2}
          marginTop={3.5}
          width="75%"
          marginLeft={"auto"}
          marginRight={"auto"}
          backgroundColor="background.paper"
        >
          {/* security card header */}
          <Typography
            color="text.primary"
            variant="h4"
            fontWeight={"bold"}
            fontSize={"20px"}
            marginBottom={0.5}
          >
            {" "}
            Security
          </Typography>
          <Typography fontSize={"16px"} color="text.secondary" variant="h4">
            Manage your account security settings
          </Typography>

          {/* security card content  */}
          <Box display={"flex"} flexDirection={"column"} gap={2} marginTop={3}>
           <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Typography
              marginLeft={0.2}
              fontSize={"15px"}
              color="text.primary"
              variant="h6"
              fontWeight={"bold"}
            >
            Current Password
            </Typography>
            <TextField
              size="small"
              placeholder="Enter Current Password"
              variant="outlined"
              fullWidth
            />

             <Box marginTop={1} flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Typography
              marginLeft={0.2}
              fontSize={"15px"}
              color="text.primary"
              variant="h6"
              fontWeight={"bold"}
            >
              New Password
            </Typography>
            <TextField
              size="small"
              placeholder="Enter New Password"
              variant="outlined"
              fullWidth
            />
             <Box marginTop={1} flexGrow={1} display={"flex"} flexDirection={"column"}>
            <Typography
              marginLeft={0.2}
              fontSize={"15px"}
              color="text.primary"
              variant="h6"
              fontWeight={"bold"}
            >
              Confirm New Password
            </Typography>
            <TextField
              size="small"
              placeholder="Enter Confirm New Password"
              variant="outlined"
              fullWidth
            />

          </Box>
          </Box>
          </Box>
          
          </Box>


        </Box>
      </Box>
    </Box>
  );
}

export default Settings;
