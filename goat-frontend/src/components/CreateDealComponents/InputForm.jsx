import { AutoAwesome, Business, Person } from "@mui/icons-material";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  Input,
  Paper,
  Typography,
  Chip,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Alert,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ArrowBack, Save } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputForm = () => {
  const navigate = useNavigate();
  const [deal, setDeal] = useState({
    company_name: null,
    deal_name: null,
    deal_value: null,
    deal_description: null,
    service_category: null,
    contract_term_length: null,
    expected_close_date: null,
    prospect_name: null,
    email: null,
    slack_id: null,
    phone_number: null, // <-- in this format 831-512-2453
  });
  const [isEditing, setIsEditing] = useState(true);
  const [showError, setShowError] = useState(false);
  const baseServer = import.meta.env.VITE_BACKEND_SERVER;

  const requiredFields = [
    "company_name",
    "deal_name",
    "deal_value",
    "deal_description",
    "service_category",
    "prospect_name",
    "email",
    "slack_id",
    "phone_number",
  ];

  const isFormValid = () => {
    return requiredFields.every(
      (field) => deal[field] !== null && deal[field] !== "" && deal[field] !== undefined
    );
  };

  async function handleSave() {
    if (!isFormValid()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    await axios.post(`${baseServer}create`, deal);
    console.log("deal created", deal);
  }
  // routering
  const handleDateChange = (date, e) => {
    setDeal((prev) => ({
      ...prev,
      expected_close_date: date.toJSON().substring(0, 10),
    }));
    setShowError(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeal((prev) => ({
      ...prev,
      [name]: value,
    }));
    setShowError(false);
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setDeal((prev) => ({
      ...prev,
      [name]: parseFloat(value) || null,
    }));
    setShowError(false);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        minHeight: "fit-content",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {/*  Header Component */}
      <Paper
        sx={{
          borderRadius: 0,
          backgroundColor: "#020617",
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
              onClick={() => navigate("/dashboard")}
            >
              Back to Deals
            </Button>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Create New Deal
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Add a new deal to your pipeline
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={() => {
                handleSave();
                if (isFormValid()) {
                  navigate("/dashboard");
                }
              }}
              disabled={!isEditing}
            >
              Save Deal
            </Button>
          </Box>
        </Box>
      </Paper>
      {/* END OF HEADER */}

      {showError && (
        <Box sx={{ mx: 6, mt: 3 }}>
          <Alert severity="error">Please fill in all required fields</Alert>
        </Box>
      )}

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Box
          sx={{
            ml: 6,
            display: "flex",
            flexDirection: "column",
            width: "60%",
            mt: 3,
          }}
        >
          {/* START OF FIRST CARD */}
          <Card
            sx={{
              m: 3,

              mr: 4,
              width: "95%",
              overflowY: "scroll",
              scrollbarColor: "primary",
              scrollbarWidth: "none",
            }}
          >
            <CardHeader
              avatar={<Business color="primary" />}
              title="Deal Information"
              subheader="Basic details about the deal opportunity"
            />
            <CardContent sx={{ ml: 1 }}>
              <Grid container spacing={2} height={300}>
                <Grid>
                  <TextField
                    name="company_name"
                    label="Company Name"
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    name="deal_name"
                    label="Deal Name"
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    name="deal_value"
                    label="Deal Value"
                    onChange={handleNumberChange}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    name="service_category"
                    label="Service"
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <TextField
                  name="deal_description"
                  label="Description"
                  fullWidth={true}
                  multiline
                  rows={5}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </CardContent>
          </Card>
          <Card
            sx={{
              m: 3,

              mr: 4,
              maxWidth: "100%",
              minWidth: 300,
            }}
          >
            <CardHeader
              avatar={<CreateIcon color="primary" />}
              title="Additional Information"
              subheader="Reccomended optional details "
            />
            <CardContent sx={{ ml: 1 }}>
              <Grid container spacing={5}>
                <Grid sx={{ width: "20%" }}>
                  <TextField
                    fullWidth={true}
                    name="contract_term_length"
                    onChange={handleInputChange}
                    label="Contract Term Length"
                  />
                </Grid>
                <Grid sx={{ width: "20%" }}>
                  <TextField fullWidth={true} label="Tag(s)" />
                </Grid>
                <Grid>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={handleDateChange}
                      label="EST Close Date"
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
        {/* END FIRST CARD  */}

        {/* Right-Side Card START */}
        <Card
          sx={{ maxWidth: "30%", minWidth: 200, height: 630, mt: 6, ml: 4 }}
        >
          <CardHeader
            avatar={<Person color="primary" />}
            title="Contact Information"
            subheader="Enter information on the main point of contact"
          />
          <CardContent sx={{ mt: 7 }}>
            <Grid sx={{ width: "100%" }}>
              <TextField
                sx={{ mb: 4 }}
                fullWidth={true}
                label="Contact Name"
                name="prospect_name"
                onChange={handleInputChange}
                required
              />
              <TextField
                sx={{ mb: 4 }}
                fullWidth={true}
                name="email"
                label="Contact Email"
                onChange={handleInputChange}
                required
              />
              <TextField
                sx={{ mb: 4 }}
                fullWidth={true}
                onChange={handleInputChange}
                name="slack_id"
                label="Contact Slack ID"
                required
              />

              <TextField
                sx={{ mb: 4 }}
                fullWidth={true}
                onChange={handleInputChange}
                name="phone_number"
                label="Contact Number"
                required
              />
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Right Side Card END */}
    </Box>
  );
};

export default InputForm;