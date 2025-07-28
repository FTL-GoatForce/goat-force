import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card } from "@mui/material";
import Header from "../ReusableComponents/Header";

const supabase = createClient(
  "https://gjigdggtkttoagacnhzw.supabase.co",
  import.meta.env.VITE_SUPABASE_KEY
);
const customTheme = {
  dark: {
    colors: {
      brand: "#06b6d4", // cyan-500
      brandAccent: "#0891b2", // cyan-600
      brandButtonText: "#f8fafc", // white
      inputBorder: "#475569", // slate-600
      inputBorderHover: "#64748b", // slate-500
      inputBorderFocus: "#06b6d4", // cyan-500
      inputText: "#f8fafc", // white
      inputLabelText: "#94a3b8", // slate-400
      inputPlaceholder: "#64748b", // slate-500
      messageText: "#f87171", // red-400
      anchorTextColor: "#8b5cf6", // purple-500
      anchorTextHoverColor: "#a78bfa", // purple-400
      defaultButtonBackground: "#1e293b", // slate-800
      defaultButtonBackgroundHover: "#334155", // slate-700
      defaultButtonBorder: "#475569", // slate-600
      dividerBackground: "#334155", // slate-700
      success: "#2DEB80", // green-400
    },
  },
};
const AuthPage = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (session) {
        // Check if this is a new sign up
        if (event === 'SIGNED_UP') {
          // Mark this user as new in localStorage
          localStorage.setItem('newUser', session.user.id);
          navigate("/onboarding");
        } else if (event === 'SIGNED_IN') {
          // Check if this is a new user who just confirmed their email
          const isNewUser = localStorage.getItem('newUser') === session.user.id;
          if (isNewUser) {
            // Clear the flag and redirect to onboarding
            localStorage.removeItem('newUser');
            navigate("/onboarding");
          } else {
            // Existing user, go to dashboard
            navigate("/dashboard");
          }
        }
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "black",
        }}
      >
        <Header />
        <Card
          sx={{
            borderRadius: "10px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "60%",
              m: 7,
            }}
          >
            <Auth
              supabaseClient={supabase}
              theme="dark"
              providers={[]}
              redirectTo={`${window.location.origin}/onboarding`}
              appearance={{
                theme: customTheme,
                variables: {
                  default: {
                    fontSizes: {
                      baseBodySize: "16px",
                      inputFontSize: "16px",
                      buttonFontSize: "16px",
                    },
                    space: {
                      inputPadding: "12px 16px",
                      buttonPadding: "12px 16px",
                    },
                  },
                },
              }}
            />
          </Box>
        </Card>
      </Box>
    );
  }
};

export default AuthPage;
