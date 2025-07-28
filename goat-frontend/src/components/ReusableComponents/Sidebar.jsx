import { AttachMoney, SpaceDashboardOutlined } from "@mui/icons-material";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ForumOutlined } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { useEffect, useState } from "react";
import React from "react";

const SideBar = () => {
  // navigation
  const navigate = useNavigate();
  const location = useLocation(); // get the current url location

  // function to get active item from current URL path, returns the active item
  const getActiveItemFromPath = (pathname) => {
    switch (pathname) {
      case "/dashboard":
        return "Overview";
      case "/sandbox":
        return "Sandbox";
      case "/transcripts":
        return "Transcripts";
      case "/settings":
        return "Settings";
      default:
        return "Overview"; // default fallback
    }
  };

  // use state hooks, click will set active item to the clicked item
  console.log("Current location:", location.pathname);
  const [activeItem, setActiveItem] = useState(() => {
    // Get initial active item from current location path
    return getActiveItemFromPath(location.pathname);
  });

  const [open, setOpen] = useState(() => {
    //  using localstorage to hold the state of if the sidebar is open
    const localState = localStorage.getItem("sidebarOpen");
    return localState ? JSON.parse(localState) : false;
  }); // open state for drawer

  // toggleDrawerOpen function to toggle the open state of the drawer
  const toggleDrawerOpen = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  // Update active item when location changes
  useEffect(() => {
    const currentActiveItem = getActiveItemFromPath(location.pathname);
    setActiveItem(currentActiveItem);
  }, [location.pathname]);

  return (
    <>
      <Box
        open
        className="sidebar-container"
        sx={{
          width: open ? 300 : 80,
          backgroundColor: "#121621",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)", // add shadow to the right border
          borderRadius: "5px",
          transition: "width 0.3s ease",
          overflow: "hidden",
          flexShrink: 0,
          flexGrow: 0,
          minHeight: "100vh", // full height of the viewport
          maxHeight: "100%", // full height of the viewport
        }}
      >
        {/* Top Logo of SideBar */}
        <Box
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: open ? "space-between" : "center",
          }}
        >
          <IconButton
            sx={{
              borderRadius: "8px",
              width: "40px",
              height: "40px",
              "&:hover": {
                backgroundColor: "rgba(71, 159, 246, 0.3)",
              },
            }}
            onClick={toggleDrawerOpen} // toggle drawer open state
          >
            <Menu />
          </IconButton>
        </Box>

        {/* Create Deal Button */}
        {open && (
          <Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
            <Button
              sx={{ width: "85%" }}
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => navigate("/create")}
            >
              Create Deal
            </Button>
          </Box>
        )}
        {open && (
          <Divider
            variant="middle"
            sx={{ mt: 1, mb: 1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          />
        )}

        {/* Main Navigation */}
        <List
          sx={{
            flexGrow: 1,
            padding: 1,
            paddingLeft: open ? 3 : 1,
            paddingRight: open ? 3 : 1,
          }}
        >
          {/* Section Header */}
          {open && (
            <Typography
              variant="h6"
              sx={{
                color: "rgba(221, 212, 212, 0.83)",
                mb: 1,
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Main Navigation
            </Typography>
          )}
          <ListItem disablePadding sx={{ mb: 0.7 }}>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2 : 0,
                "&:hover": {
                  backgroundColor: "primary.dark", // change background color on hover of the button
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color on hover
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color on hover
                  },
                },
                // spread operator to apply styles if true, after && excecutes if activeItem is "Overview"
                ...(activeItem === "Overview" && {
                  backgroundColor: "primary.dark", // change background color if active
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color if active
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color if active
                  },
                }),
              }}
              onClick={() => {
                setActiveItem("Overview");
                navigate("/dashboard"); // navigate to the overview page
              }}
            >
              {" "}
              <ListItemIcon
                sx={{
                  color: "#A6ACB9",
                  minWidth: open ? "33px" : "auto",
                  mr: open ? 2 : 0,
                }}
              >
                <SpaceDashboardOutlined fontSize="small" />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Overview" sx={{ color: "#A6ACB9" }} />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.7 }}>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2 : 0,
                "&:hover": {
                  backgroundColor: "primary.dark", // change background color on hover of the button
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color on hover
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color on hover
                  },
                },
                ...(activeItem === "Sandbox" && {
                  backgroundColor: "primary.dark", // change background color if active
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color if active
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color if active
                  },
                }),
              }}
              onClick={() => {
                setActiveItem("Sandbox");
                navigate("/sandbox"); // navigate to the sandbox page
              }}
            >
              {" "}
              <ListItemIcon
                sx={{
                  color: "#A6ACB9",
                  minWidth: open ? "33px" : "auto",
                  mr: open ? 2 : 0,
                }}
              >
                <AnalyticsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Sandbox" sx={{ color: "#A6ACB9" }} />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.7 }}>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2 : 0,
                "&:hover": {
                  backgroundColor: "primary.dark", // change background color on hover of the button
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color on hover
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color on hover
                  },
                },
                ...(activeItem === "Transcripts" && {
                  backgroundColor: "primary.dark", // change background color if active
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color if active
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color if active
                  },
                }),
              }}
              onClick={() => {
                setActiveItem("Transcripts");
                navigate("/transcripts"); // navigate to the transcripts page
              }}
            >
              {" "}
              <ListItemIcon
                sx={{
                  color: "#A6ACB9",
                  minWidth: open ? "33px" : "auto",
                  mr: open ? 2 : 0,
                }}
              >
                <ForumOutlined fontSize="small" />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Transcripts" sx={{ color: "#A6ACB9" }} />
              )}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 0.7 }}>
            <ListItemButton
              sx={{
                borderRadius: "7px",
                justifyContent: open ? "flex-start" : "center",
                px: open ? 2 : 0,
                "&:hover": {
                  backgroundColor: "primary.dark", // change background color on hover of the button
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color on hover
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color on hover
                  },
                },
                ...(activeItem === "Settings" && {
                  backgroundColor: "primary.dark", // change background color if active
                  "& .MuiListItemIcon-root": {
                    color: "white", // change icon color if active
                  },
                  "& .MuiListItemText-primary": {
                    color: "white", // change text color if active
                  },
                }),
              }}
              onClick={() => {
                setActiveItem("Settings");
              }}
            >
              {" "}
              <ListItemIcon
                sx={{
                  color: "#A6ACB9",
                  minWidth: open ? "33px" : "auto",
                  mr: open ? 2 : 0,
                }}
              >
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
              {open && (
                <ListItemText primary="Settings" sx={{ color: "#A6ACB9" }} />
              )}
            </ListItemButton>
          </ListItem>
        </List>

        {/* Footer List */}
      </Box>
    </>
  );
};

export default SideBar;
