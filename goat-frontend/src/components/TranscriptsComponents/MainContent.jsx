import React, { useEffect } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Chip,
  Tooltip,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { BiLogoGmail } from "react-icons/bi";

import { FaSlack } from "react-icons/fa";

import { useState } from "react";

const MainContent = ({ deals, selectedDeal }) => {
  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const [channel, setChannel] = useState("Gmail");
  const [slackHistory, setSlackHistory] = useState(
    selectedDeal.conversationHistory[0].slack.messages
  );
  const [gmailHistory, setGmailHistory] = useState(
    selectedDeal.conversationHistory[0].email.messages
  );
  console.log(slackHistory);
  function handleChannelChange(e) {
    setChannel(e.target.value);
  }

  useEffect(() => {
    setSlackHistory(selectedDeal.conversationHistory[0].slack.messages);
    setGmailHistory(selectedDeal.conversationHistory[0].email.messages);
  }, [selectedDeal]);
  return (
    <Box
      sx={{ borderRadius: 4 }}
      maxWidth={"100%"}
      height={"100%"}
      backgroundColor="background.default"
      display={"flex"}
      flexDirection="column"
    >
      {/* Message Box*/}
      <Box border={1} height={"100%"} borderColor="divider" maxWidth={"100%"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          padding={2}
          gap={1}
          height={"1050px"}
          overflow={"hidden"}
        >
          {/* Chat Header start */}
          <Box
            display={"flex"}
            alignItems="center"
            marginBottom={2}
            bgcolor={"background.default"}
            sx={{
              p: 2,
              borderRadius: "8px",
              boxShadow: 1,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            {/* Mode Selection Dropdown */}
            <FormControl size="small" sx={{ minWidth: 20 }}>
              <InputLabel color="text.primary" id="communication-mode-label">
                Channel
              </InputLabel>
              <Select
                labelId="communication-mode-label"
                id="communication-mode-select"
                value={channel}
                label="Mode"
                onChange={handleChannelChange}
                sx={{
                  backgroundColor: "background.paper",
                }}
              >
                <MenuItem value="Gmail">
                  Gmail <BiLogoGmail />
                </MenuItem>
                <MenuItem value="Slack">
                  Slack <FaSlack />
                </MenuItem>
              </Select>
            </FormControl>
            <Typography
              variant="h2"
              sx={{
                m: "0 auto",
                fontWeight: "bold",
                color: "text.primary",
                textAlign: "center",
                fontSize: "1.2rem",
              }}
            >
              Currently looking at {channel} transcripts of{" "}
              {selectedDeal.deal.deal_name}
            </Typography>
          </Box>
          {/* End of header on top of me */}

          {/* Start Dynamically rendering cards  */}
          {channel == "Gmail" ? (
            <Box
              sx={{
                overflowY: "auto",
                height: "85%",
                "::-webkit-scrollbar": { width: 0 },
              }}
            >
              {gmailHistory.map((currentMessage) => {
                return (
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Card
                      key={currentMessage.timestamp}
                      sx={{
                        padding: 2,
                        boxShadow: 5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        minHeight: 140,
                        maxHeight: "fit-content",
                      }}
                    >
                      <CardContent>
                        <Stack spacing={1}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                          >
                            <Typography>{currentMessage.from}</Typography>
                            <Stack direction="row" gap={1}>
                              <Tooltip title="Sentiment">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(0, 54, 91, 0.77)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.sentiment}
                                />
                              </Tooltip>
                              <Tooltip title="Tone">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(0, 53, 88, 0.77)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.tone}
                                />
                              </Tooltip>
                              <Tooltip title="Objections">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(249, 2, 2, 0.64)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.objections.length}
                                />
                              </Tooltip>
                            </Stack>
                          </Stack>
                        </Stack>

                        <Typography
                          sx={{
                            color: "text.secondary",
                            fontSize: ".8rem",
                            mb: 2,
                          }}
                        >
                          {currentMessage.subject}
                        </Typography>

                        <Typography>{currentMessage.text}</Typography>
                      </CardContent>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box />
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Person
                            sx={{ fontSize: 12, color: "text.secondary" }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            To: {currentMessage.to?.join(", ")}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          ) : (
            <Box
              sx={{
                overflowY: "auto",
                height: "80%",
                "::-webkit-scrollbar": { width: 0 },
              }}
            >
              {slackHistory.length == 0 && (
                <Typography sx={{ color: "text.primary", textAlign: "center" }}>
                  No Messages Available
                </Typography>
              )}
              {slackHistory.map((currentMessage) => {
                return (
                  <Box sx={{ mt: 2, mb: 2 }}>
                    <Card
                      key={currentMessage.timestamp}
                      sx={{
                        padding: 2,
                        boxShadow: 5,
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "divider",
                        minHeight: 150,
                        maxHeight: "fit-content",
                      }}
                    >
                      <CardContent>
                        <Stack spacing={1}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                          >
                            <Typography>{currentMessage.from}</Typography>
                            <Stack direction="row" gap={1}>
                              <Tooltip title="Sentiment">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(0, 54, 91, 0.77)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.sentiment}
                                />
                              </Tooltip>
                              <Tooltip title="Tone">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(0, 53, 88, 0.77)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.tone}
                                />
                              </Tooltip>
                              <Tooltip title="Objections">
                                <Chip
                                  size="small"
                                  sx={{
                                    backgroundColor: "rgba(249, 2, 2, 0.64)",
                                    color: "#ffffffff",
                                  }}
                                  label={currentMessage.objections.length}
                                />
                              </Tooltip>
                            </Stack>
                          </Stack>
                        </Stack>
                        <Typography sx={{ mt: 1.5 }}>
                          {currentMessage.text}
                        </Typography>
                      </CardContent>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box />
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Person
                            sx={{ fontSize: 12, color: "text.secondary" }}
                          />
                          <Typography variant="caption" color="text.secondary">
                            To: {currentMessage.to?.join(", ")}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
