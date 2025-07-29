import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Modal,
} from "@mui/material";
import SideBar from "../ReusableComponents/Sidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { createClient } from "@supabase/supabase-js";

function Settings() {
  const [confirmModalOpen, setConfirmModalOpen] = useState(false); // for confirm modal state
  const [confirmSignOutOpen, setConfirmSignOutOpen] = useState(false); // for sign out modal state
  const [session, setSession] = useState(null); // supabase session state
  const navigate = useNavigate();
  
  // Profile form state
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Security form state
  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });


  // initialize supabase client
  const supabase = createClient(
    "https://gjigdggtkttoagacnhzw.supabase.co",
    import.meta.env.VITE_SUPABASE_KEY
  );

  // check if user is signed in on component mount
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        setSession(data.session);

        // If session exists, populate profile data
        if (data.session?.user?.user_metadata) {
          setProfileData({
            firstName: data.session.user.user_metadata.first_name || "",
            lastName: data.session.user.user_metadata.last_name || "",
            email: data.session.user.email || "",
          });
        }

      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, []);

const handlePasswordUpdate = async () => {
  
  // 1. validate new password
  if (securityData.newPassword !== securityData.confirmPassword) {
    alert("New passwords don't match!");
    return;
  }

  if (!securityData.currentPassword || !securityData.newPassword || !securityData.confirmPassword) {
    alert("Please fill in all password fields!");
    return;
  }

  try {
    // 2. check if user is signed in w/ supabase
    if (!session) {
      alert("You must be signed in to update your password.");
      return;
    }

    // 3. validate current password by re-authenticating
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: session.user.email,
      password: securityData.currentPassword,
    });

    if (signInError) {
      alert("Current password is incorrect!");
      return;
    }

    // 4. update password (supabase auth call)
    const { error: updateError } = await supabase.auth.updateUser({
      password: securityData.newPassword
    });

    if (updateError) {
      alert(`Failed to update password: ${updateError.message}`);
      return;
    }

    // 5. clear form after successful update
    setSecurityData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    alert("Password updated successfully!");

  } catch (error) {
    console.error("Error updating password:", error);
    alert("Failed to update password. Please try again.");
  }
};

  const handleProfileSave = async () => {
    try {
      // 1. validate user signed in
      if (!session) {
        alert("You must be signed in to update your profile.");
        return;
      }

      // 2. validate profile data form
      if (!profileData.firstName || !profileData.lastName || !profileData.email) {
        alert("Please fill in all profile fields!");
        return;
      }

      // 3. update user metadata in supabase
      const { error: metadataError } = await supabase.auth.updateUser({
      data: {
        first_name: profileData.firstName.trim(),
        last_name: profileData.lastName.trim(),
        full_name: `${profileData.firstName.trim()} ${profileData.lastName.trim()}`,
        display_name: `${profileData.firstName.trim()} ${profileData.lastName.trim()}`
      }
    });

    if (metadataError) {
      console.error("Error updating user metadata:", metadataError);
      alert("Failed to update profile. Please try again.");
      return;
    }

    // TODO: 4. update email if changed => not working I think it needs to be verified
    // if (profileData.email !== session.user.email) {
    //   const { error: emailError } = await supabase.auth.updateUser({
    //     email: profileData.email.trim(),
    //   });
    //   if (emailError) {
    //     console.error("Error updating email:", emailError);
    //     alert("Failed to update email. Please try again.");
    //     return;
    //   }
    // }

    // 5. refresh session to get updated user metadata
    const { data: updatedSession } = await supabase.auth.getSession();
    if (updatedSession.session) {
      setSession(updatedSession.session);
    }

    alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };
  // sign out function
  const handleSignOut = async () => {
    try {
      // 1. supabase auth call to sign out
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // 2. clear local session state and close confirm modals
      setSession(null);
      setConfirmSignOutOpen(false);
      setConfirmModalOpen(false);

      // 3. clear form data
      setProfileData({
        firstName: "",
        lastName: "",
        email: "",
      });

      setSecurityData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      //4. navigate to auth page
      navigate("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // TODO: need admin priveleges ?
  const handleDeleteAccount = () => {

  };

  // Handle profile form changes
  const handleProfileChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle security form changes
  const handleSecurityChange = (field, value) => {
    setSecurityData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Confirm action modal (for sign out and delete account)
  const toggleConfirmModalOpen = () => {
    setConfirmModalOpen(true);
  };

  const confirmModalClose = () => {
    setConfirmModalOpen(false);
  };

  // confirm sign out modal
  const openSignOutModal = () => {
    setConfirmSignOutOpen(true);
  };

  const confirmSignOutClose = () => {
    setConfirmSignOutOpen(false);
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
                onChange={(e) =>
                  handleProfileChange("firstName", e.target.value)
                }
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
                onChange={(e) =>
                  handleProfileChange("lastName", e.target.value)
                }
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
              onChange={(e) => handleProfileChange("email", e.target.value)}
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
                onChange={(e) =>
                  handleSecurityChange("currentPassword", e.target.value)
                }
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
                  onChange={(e) =>
                    handleSecurityChange("newPassword", e.target.value)
                  }
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
                    onChange={(e) =>
                      handleSecurityChange("confirmPassword", e.target.value)
                    }
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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                  alt="Slack Logo"
                  width="24"
                  height="24"
                />
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
                    color: "white",
                  },
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
                <img
                  src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg"
                  alt="Gmail Logo"
                  width="24"
                  height="24"
                />
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
                    color: "white",
                  },
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
            {/* Modal for signing out account */}
            <Modal open={confirmSignOutOpen} onClose={confirmSignOutClose}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 500,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  borderRadius: 3,
                  padding: 4,
                }}
              >
                <Typography
                  color="text.primary"
                  id="confirm-delete-description"
                  fontWeight={"bold"}
                  align="center"
                  fontSize={"18px"}
                  marginBottom={3}
                >
                  Are you sure you want to sign out?
                </Typography>
                {/* buttons holder || cancel / confirm */}
                <Box display="flex" gap={2} justifyContent="center">
                  <Button
                    variant="outlined"
                    onClick={confirmSignOutClose}
                    sx={{ minWidth: "100px" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ minWidth: "100px" }}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </Box>
              </Box>
            </Modal>
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
                onClick={openSignOutModal}
                sx={{
                  minWidth: "90px",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
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
                  backgroundColor: "rgba(211, 47, 47, 0.04)",
                },
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

              {/* Modal for confirming account deletion */}
              <Modal open={confirmModalOpen} onClose={confirmModalClose}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 500,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: 3,
                    padding: 4,
                  }}
                >
                  <Typography
                    color="text.primary"
                    id="confirm-delete-description"
                    fontWeight={"bold"}
                    align="center"
                    fontSize={"18px"}
                    marginBottom={3}
                  >
                    Are you sure you want to delete your account? This action
                    cannot be undone.
                  </Typography>
                  {/* buttons holder || cancel / confirm */}
                  <Box display="flex" gap={2} justifyContent="center">
                    <Button
                      variant="outlined"
                      onClick={confirmModalClose}
                      sx={{ minWidth: "100px" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ minWidth: "100px" }}
                      onClick={handleDeleteAccount}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={toggleConfirmModalOpen}
                sx={{
                  minWidth: "90px",
                  borderColor: "error.main",
                  color: "error.main",
                  "&:hover": {
                    backgroundColor: "error.main",
                    color: "white",
                  },
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
