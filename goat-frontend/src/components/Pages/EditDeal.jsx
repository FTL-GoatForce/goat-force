import React from "react";
import { useState } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Card,
  CardHeader,
  TextField,
  IconButton,
  Tooltip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import {
  AttachMoney,
  EditDocument,
  LocalOfferOutlined,
} from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const baseServer = `${API_URL}/deal/`;

// style for modal pop-up component
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 840,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  padding: 4,
};

// selected deal passed in already
function EditDeal({ deal }) {

  // Store the original values to reset to when canceling
  const [originalFormData, setOriginalFormData] = useState({
    company_name: deal.deal.company_name || "",
    deal_name: deal.deal.deal_name || "",
    deal_value: deal.deal.deal_value || "",
    deal_description: deal.deal.deal_description || "",
    stage: deal.deal.stage || "",
    service_category: deal.deal.service_category || "",
    contract_term_length: deal.deal.contract_term_length || "",
    expected_close_date: deal.deal.expected_close_date || "",
    prospect_name: deal.participants[0].prospect_name || "",
    email: deal.participants[0].email || "",
    slack_id: deal.participants[0].slack_id || "",
    phone_number: deal.participants[0].phone_number || "", // <-- in this format 831-512-2453
  });

  // single state to hold all form data - initialize with original values
  // this form data will be synced w/ form fields + sent to PUT request
  const [formData, setFormData] = useState(originalFormData);

  // generic handler for all form fields
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // open modal logic
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpen = () => {
    // reset form to original values when opening modal, when put request handled 
    // original form data will be updated when PUT request is successful
    setFormData(originalFormData);
    setOpenModal(true);
  };

  const handleClose = () => {
    // Reset form to original values when closing without updating
    setFormData(originalFormData);
    setOpenModal(false);
  };

  // update deal logic
  const handleUpdateDeal = async () => {
    try {
      console.log("Updating deal with ID:", deal.deal.id);
      console.log("Form data to update:", formData);
      // 1. Axios PUT request to update deal details (selected deal's id)
      const response = await axios.put(
        `${baseServer}updateDetails/${deal.deal.id}`, 
        formData
      );
      
      // 2. Update was successful, close modal and change original form data
      console.log("Update response:", response.data);
      setOpenModal(false);
      setOriginalFormData(formData); // Update original form data with new values
      
    } catch (error) {
      console.error("Error updating deal:", error);
      // Handle error - maybe show a notification
      // Don't close modal on error so user can try again
    }
  };

  return (
    <>
      <Tooltip title="Edit Deal">
        <IconButton
          size="small"
          onClick={handleOpen}
          sx={{
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: 500,
            background: "linear-gradient(135deg, #06b6d4, #0891b2)",
            boxShadow: "0 4px 14px 0 rgba(6, 182, 212, 0.25)",
            "&:hover": {
              background: "linear-gradient(135deg, #0891b2, #0e7490)",
              boxShadow: "0 6px 20px 0 rgba(6, 182, 212, 0.4)",
              color: "black",
            },
            color: "white",
          }}
        >
          <EditDocument
            sx={{
              color: "inherit",
            }}
          />
        </IconButton>
      </Tooltip>
      
      {/* Modal component to edit deal */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* Modal Component */}
        <Box sx={style}>
          <Typography fontWeight={"bold"} color="text.primary" variant="h6">
            Edit Deal
          </Typography>
          {/* Modal Content -> Column */}
          <Box display={"flex"} flexDirection="column" gap={2} mt={2}>
            {/* Top 2 Cards */}
            <Box display={"flex"} flexDirection="row" gap={2}>
              {/* Deal Information  */}
              <Card
                sx={{
                  flex: 1, // Flex 1 to take equal space
                  padding: 2,
                  boxShadow: 5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {/* Deal Information Card HEADER */}
                <Box className="card-header" sx={{ display: "flex" }}>
                  <CardHeader
                    avatar={<LocalOfferOutlined color="primary" />}
                    title="Deal Information"
                    titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                    subheader="Edit the details of the deal"
                  />
                </Box>
                {/* Deal Information Card CONTENT */}
                <Box
                  sx={{
                    gap: 2,
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                  }}
                >
                  {/* Top text-field container */}
                  <Box display={"flex"} flexDirection="row" gap={2}>
                    {/* Company Name Text Field */}
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        fontWeight={"bold"}
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Company Name
                      </Typography>
                      <TextField
                        value={formData.company_name}
                        onChange={(e) =>
                          handleInputChange("company_name", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        fontWeight={"bold"}
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Deal Name
                      </Typography>
                      <TextField
                        value={formData.deal_name}
                        onChange={(e) =>
                          handleInputChange("deal_name", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                  </Box>
                  {/* Middle text-field container */}
                  <Box display={"flex"} flexDirection="row" gap={2}>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        fontWeight={"bold"}
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Value
                      </Typography>
                      <TextField
                        value={formData.deal_value}
                        onChange={(e) =>
                          handleInputChange("deal_value", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        fontWeight={"bold"}
                        variant="subtitle1"
                        color="text.primary"
                      >
                        Stage
                      </Typography>
                      {/* TODO: no deal stage */}
                      <FormControl sx={{ minWidth: 223 }} size="small">
                        <InputLabel id="demo-simple-select-label">
                          Stage
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={formData.stage || ""}
                          onChange={(e) =>
                            handleInputChange("stage", e.target.value) // value in menu item?
                          }
                        >
                          <MenuItem value={"prospecting"}>Prospecting</MenuItem>
                          <MenuItem value={"qualification"}>Qualification</MenuItem>
                          <MenuItem value={"proposal"}>Proposal</MenuItem>
                          <MenuItem value={"negotiation"}>
                            Negotiation
                          </MenuItem>
                          <MenuItem value={"closed_won"}>Closed Won</MenuItem>
                          <MenuItem value={"closed_lost"}>Closed Lost</MenuItem>
                          <MenuItem value={"active"}>Active</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  {/* Last text-field container */}
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Description
                    </Typography>
                    <TextField
                      value={formData.deal_description}
                      onChange={(e) =>
                        handleInputChange("deal_description", e.target.value)
                      }
                      multiline
                      fullWidth
                      rows={4}
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
              </Card>
              {/* Contact Information */}
              <Card
                sx={{
                  flex: 1, // Flex 1 to take equal space
                  padding: 2,
                  boxShadow: 5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <CardHeader
                  avatar={<PeopleOutlinedIcon color="primary" />}
                  title="Contact Information"
                  titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                  subheader="Edit the details of the contact"
                />
                {/* Contact Information Card CONTENT */}
                <Box
                  sx={{
                    gap: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: 2,
                  }}
                >
                  {/* Text-fields */}
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Contact Name
                    </Typography>
                    <TextField
                      value={formData.prospect_name}
                      onChange={(e) =>
                        handleInputChange("prospect_name", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Contact Email
                    </Typography>
                    <TextField
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Contact Slack
                    </Typography>
                    <TextField
                      value={formData.slack_id}
                      onChange={(e) =>
                        handleInputChange("slack_id", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>

                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Contact Number
                    </Typography>
                    <TextField
                      value={formData.phone_number}
                      onChange={(e) =>
                        handleInputChange("phone_number", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
              </Card>
            </Box>

            {/* Bottom Card */}
            <Box display={"flex"}>
              {/* Additional Information */}
              <Card
                sx={{
                  flex: 1,
                  padding: 2,
                  boxShadow: 5,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {/* Additional Information Card HEADER */}
                <CardHeader
                  avatar={<HelpOutlineOutlinedIcon color="primary" />}
                  title="Additional Information"
                  titleTypographyProps={{ fontWeight: "bold", variant: "h6" }}
                  subheader="Any additional information about the deal"
                />
                {/* Additional Information Card CONTENT */}
                <Box
                  display={"flex"}
                  flexDirection="row"
                  gap={1}
                  padding={2}
                  mb={1}
                >
                  {/* Individual text-fields */}
                  <Box display={"flex"} flexDirection={"column"} flex={1}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Product/Service
                    </Typography>
                    <TextField
                      // TODO: no product/service
                      value={""}
                      // onChange={(e) =>
                      //   handleInputChange("product", e.target.value)
                      // }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} flex={1}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Contract Term
                    </Typography>
                    <TextField
                      value={formData.contract_term_length}
                      onChange={(e) =>
                        handleInputChange(
                          "contract_term_length",
                          e.target.value
                        )
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} flex={1}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      Tag(s)
                    </Typography>
                    <TextField
                      // TODO: no tags
                      value={""}
                      // onChange={(e) =>
                      //   handleInputChange("tags", e.target.value)
                      // }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} flex={1}>
                    <Typography
                      fontWeight={"bold"}
                      variant="subtitle1"
                      color="text.primary"
                    >
                      EST Closed Date
                    </Typography>
                    <TextField
                      value={formData.expected_close_date}
                      onChange={(e) =>
                        handleInputChange("expected_close_date", e.target.value)
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
              {/* Cancel Button */}
              <Button
                size="small"
                variant="outlined"
                onClick={handleClose}
              >
                Cancel
              </Button>
              {/* Update Deal Button */}
              <Button
                size="small"
                variant="contained"
                onClick={handleUpdateDeal}
              >
                Update Deal
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default EditDeal;