import React, { useState } from "react";
import { Box, Typography, TextField, Button, Card, CardContent } from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useNavigate } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

function Settings() {
  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  // Security form state
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Handle profile form changes
  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle security form changes
  const handleSecurityChange = (field, value) => {
    setSecurityData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle profile form submission
  const handleProfileSave = () => {
    console.log("Saving profile data:", profileData);
    // Add your API call here
  };

  // Handle security form submission
  const handlePasswordUpdate = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log("Updating password:", securityData);
    // TODO: add API call here
    // clear form after successful update
    setSecurityData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex", 
        flexDirection: "row",
        backgroundColor: "background.default",
        width: "100%", // ensure it takes full width
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
                value={profileData.firstName}
                onChange={(e) => handleProfileChange('firstName', e.target.value)}
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
                value={profileData.lastName}
                onChange={(e) => handleProfileChange('lastName', e.target.value)}
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
              value={profileData.email}
              onChange={(e) => handleProfileChange('email', e.target.value)}
            />
          </Box>

          {/* Button container */}
          <Box marginLeft={0.2} display={"flex"} marginTop={1}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handleProfileSave}
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
                type="password"
                value={securityData.currentPassword}
                onChange={(e) => handleSecurityChange('currentPassword', e.target.value)}
              />

              <Box
                marginTop={1}
                flexGrow={1}
                display={"flex"}
                flexDirection={"column"}
              >
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
                  type="password"
                  value={securityData.newPassword}
                  onChange={(e) => handleSecurityChange('newPassword', e.target.value)}
                />
                <Box
                  marginTop={1}
                  flexGrow={1}
                  display={"flex"}
                  flexDirection={"column"}
                >
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
                    type="password"
                    value={securityData.confirmPassword}
                    onChange={(e) => handleSecurityChange('confirmPassword', e.target.value)}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Update Password Button */}
          <Box marginLeft={0.2} display={"flex"} marginTop={1}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              onClick={handlePasswordUpdate}
            >
              Update Password
            </Button>
          </Box>
        </Box>

        {/* Integrations card */}
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
          {/* integrations card header */}
          <Typography
            color="text.primary"
            variant="h4"
            fontWeight={"bold"}
            fontSize={"20px"}
            marginBottom={0.5}
          >
            Integrations
          </Typography>
          <Typography fontSize={"16px"} color="text.secondary" variant="h4">
            Connect your favorite tools and services
          </Typography>

          {/* integrations card content  */}
          <Box display={"flex"} flexDirection={"column"} gap={2} marginTop={3}>
            {/* Slack Integration */}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              padding={2}
              border={1}
              borderColor="divider"
              borderRadius={2}
              backgroundColor="background.default"
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={48}
                height={48}
                marginRight={2}
                backgroundColor="white"
                borderRadius={1}
                border={1}
                borderColor="divider"
              >
                {/* Slack Logo SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
                </svg>
              </Box>
              <Box flexGrow={1}>
                <Typography
                  fontSize={"16px"}
                  color="text.primary"
                  variant="h6"
                  fontWeight={"bold"}
                >
                  Slack
                </Typography>
                <Typography fontSize={"14px"} color="text.secondary">
                  Get context from slack messages / data
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                sx={{ 
                  minWidth: "80px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white"
                  }
                }}
              >
                Connect
              </Button>
            </Box>

            {/* Gmail Integration */}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              padding={2}
              border={1}
              borderColor="divider"
              borderRadius={2}
              backgroundColor="background.default"
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={48}
                height={48}
                marginRight={2}
                backgroundColor="white"
                borderRadius={1}
                border={1}
                borderColor="divider"
              >
                {/* Gmail Logo SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                </svg>
              </Box>
              <Box flexGrow={1}>
                <Typography
                  fontSize={"16px"}
                  color="text.primary"
                  variant="h6"
                  fontWeight={"bold"}
                >
                  Gmail
                </Typography>
                <Typography fontSize={"14px"} color="text.secondary">
                  Get context from gmail messages / data
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                sx={{ 
                  minWidth: "80px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white"
                  }
                }}
              >
                Connect
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Account Actions card */}
        <Box
          padding={4}
          border={1}
          borderColor="divider"
          borderRadius={2}
          marginTop={3.5}
          marginBottom={15}
          width="75%"
          marginLeft={"auto"}
          marginRight={"auto"}
          backgroundColor="background.paper"

        >
          {/* account actions card header */}
          <Typography
            color="text.primary"
            variant="h4"
            fontWeight={"bold"}
            fontSize={"20px"}
            marginBottom={0.5}
          >
            Account Actions
          </Typography>
          <Typography fontSize={"16px"} color="text.secondary" variant="h4">
            Manage your account settings and data
          </Typography>

          {/* account actions card content  */}
          <Box display={"flex"} flexDirection={"column"} gap={2} marginTop={3}>
            {/* Sign Out Action */}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={2}
              border={1}
              borderColor="divider"
              borderRadius={2}
              backgroundColor="background.default"
            >
              <Box>
                <Typography
                  fontSize={"16px"}
                  color="text.primary"
                  variant="h6"
                  fontWeight={"bold"}
                >
                  Sign Out
                </Typography>
                <Typography fontSize={"14px"} color="text.secondary">
                  Sign out of your account on this device
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                sx={{ 
                  minWidth: "90px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white"
                  }
                }}
              >
                Sign Out
              </Button>
            </Box>

            {/* Delete Account Action */}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              padding={2}
              border={1}
              borderColor="error.main"
              borderRadius={2}
              backgroundColor="background.default"
              sx={{
                borderColor: "error.light",
                "&:hover": {
                  backgroundColor: "rgba(211, 47, 47, 0.04)"
                }
              }}
            >
              <Box>
                <Typography
                  fontSize={"16px"}
                  color="error.main"
                  variant="h6"
                  fontWeight={"bold"}
                >
                  Delete Account
                </Typography>
                <Typography fontSize={"14px"} color="text.secondary">
                  Permanently delete your account and all data
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                color="error"
                sx={{ 
                  minWidth: "90px",
                  borderColor: "error.main",
                  color: "error.main",
                  "&:hover": {
                    backgroundColor: "error.main",
                    color: "white"
                  }
                }}
              >
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Settings;