import { ArrowBack, Save } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputHeader = () => {
  const [deal, setDeal] = useState({});
  const [isEditing, setIsEditing] = useState(true);
  function handleSave() {}
  // routering
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Paper
        sx={{
          borderRadius: 0,
          backgroundColor: "primary",
          borderBottom: "1px solid",
          borderColor: "divider",
          px: 3,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="text"
              startIcon={<ArrowBack />}
              sx={{ color: "text.secondary" }}
              onClick={() => navigate("/")}
            >
              Back to Deals
            </Button>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                {deal.id ? "Edit Deal" : "Create New Deal"}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {deal.id
                  ? "Update deal information and track progress"
                  : "Add a new deal to your pipeline"}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {deal.id && (
              <Button
                variant="outlined"
                startIcon={<Edit />}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            )}
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={handleSave}
              disabled={!isEditing}
            >
              Save Deal
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default InputHeader;
