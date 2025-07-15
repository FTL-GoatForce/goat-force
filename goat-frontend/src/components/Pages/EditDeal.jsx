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
} from "@mui/material";
import { AttachMoney, LocalOfferOutlined } from "@mui/icons-material";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

// maybe in different files? => deal info, contact info, additional info
const mockData = {
  deal: {
    deal_id: 12,
    deal_name: "Big Deal",
    client_company: "Tech Corp",
    deal_stage: "Negotiation",
    deal_value_usd: "$100,000",
    deal_description: "Negotiating terms for a large software contract",
    expected_close_date: "2024-12-31",
  },

  primary_contact: {
    name: "John Doe",
    email: "test@gmail.com",
    slack: "@johndoe",
    phone: "+1234567890",
  },
  additional_info: {
    product: "Software License",
    contract_term: "1 year",
    tags: "high-value",
  },
};

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

// edit deal page modal pop-up when edit button is clicked
function EditDeal({ deal_id }) {
  // TODO: could fetch deal data using deal_id, or pass it down from parent component once 'edit' is clicked
  // the modal should already be pre-populated with the deal data

  // single state to hold all form data
  const [formData, setFormData] = useState({
    companyName: mockData.deal.client_company,
    dealName: mockData.deal.deal_name,
    dealValue: mockData.deal.deal_value_usd,
    dealStage: mockData.deal.deal_stage,
    dealDescription: mockData.deal.deal_description,
    contactName: mockData.primary_contact.name,
    contactEmail: mockData.primary_contact.email,
    contactSlack: mockData.primary_contact.slack,
    contactPhone: mockData.primary_contact.phone,
    product: mockData.additional_info.product,
    contractTerm: mockData.additional_info.contract_term,
    tags: mockData.additional_info.tags,
    closedDate: mockData.deal.expected_close_date,
  });

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
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button size="small" onClick={handleOpen} variant="contained">
        {" "}
        Edit Deal{" "}
      </Button>{" "}
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
                        value={formData.companyName}
                        onChange={(e) =>
                          handleInputChange("companyName", e.target.value)
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
                        value={formData.dealName}
                        onChange={(e) =>
                          handleInputChange("dealName", e.target.value)
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
                        value={formData.dealValue}
                        onChange={(e) =>
                          handleInputChange("dealValue", e.target.value)
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
                      <TextField
                        value={formData.dealStage}
                        onChange={(e) =>
                          handleInputChange("dealStage", e.target.value)
                        }
                        variant="outlined"
                        size="small"
                      />
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
                      value={formData.dealDescription}
                      onChange={(e) =>
                        handleInputChange("dealDescription", e.target.value)
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
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange("contactName", e.target.value)
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
                      value={formData.contactEmail}
                      onChange={(e) =>
                        handleInputChange("contactEmail", e.target.value)
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
                      value={formData.contactSlack}
                      onChange={(e) =>
                        handleInputChange("contactSlack", e.target.value)
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
                      value={formData.contactPhone}
                      onChange={(e) =>
                        handleInputChange("contactPhone", e.target.value)
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
                      value={formData.product}
                      onChange={(e) => handleInputChange("product", e.target.value)}
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
                      value={formData.contractTerm}
                      onChange={(e) =>
                        handleInputChange("contractTerm", e.target.value)
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
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
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
                      value={formData.closedDate}
                      onChange={(e) =>
                        handleInputChange("closedDate", e.target.value)
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
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              {/* TODO: actually update deal once complete */}
              <Button size="small" variant="contained">
                {" "}
                Update Deal{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default EditDeal;
