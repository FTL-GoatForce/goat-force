import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import LandingPage from "./components/Pages/LandingPage";
import CRMDashboard from "./components/Pages/CRMDashboard";
import CreateDeal from "./components/Pages/CreateDeal";
import DealDetails from "./components/Pages/DealDetails";
import AuthPage from "./components/Pages/AuthPage";
import Sandbox from "./components/Pages/Sandbox";
import Onboarding from "./components/Pages/Onboarding";
import Transcripts from "./components/Pages/Transcripts";
import Settings from "./components/Pages/Settings";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#06b6d4", // cyan-500
      light: "#22d3ee", // cyan-400
      dark: "#0891b2", // cyan-600
    },
    secondary: {
      main: "#8b5cf6", // purple-500
      light: "#a78bfa", // purple-400
      dark: "#7c3aed", // purple-600
    },
    background: {
      default: "#020617", // slate-950
      paper: "#0f172a", // slate-900
    },
    surface: {
      main: "#1e293b", // slate-800
    },
    text: {
      primary: "#f8fafc", // white
      secondary: "#94a3b8", // slate-400
    },
    error: {
      main: "#f87171", // red-400
    },
    warning: {
      main: "#facc15", // yellow-400
    },
    success: {
      main: "#2DEB80", // green-400 #49DE80
    },
    info: {
      main: "#06b6d4", // cyan-500
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(15, 23, 42, 0.5)", // slate-900/50
          border: "1px solid #334155", // slate-700
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(15, 23, 42, 0.7)",
            borderColor: "#475569", // slate-600
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          fontWeight: 500,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #06b6d4, #0891b2)",
          boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
          "&:hover": {
            background: "linear-gradient(135deg, #0891b2, #0e7490)",
            boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "rgba(30, 41, 59, 0.5)", // slate-800/50
            "& fieldset": {
              borderColor: "#475569", // slate-600
            },
            "&:hover fieldset": {
              borderColor: "#64748b", // slate-500
            },
            "&.Mui-focused fieldset": {
              borderColor: "#06b6d4", // cyan-500
            },
          },
        },
      },
    },
  },
});
// * MATERIAL THEME END

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/dashboard" element={<CRMDashboard />} />
            <Route path="/create" element={<CreateDeal />} />
            <Route path="/details/:id" element={<DealDetails />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
