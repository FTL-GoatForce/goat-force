"use client";

import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";

const VoiceChat = ({ selectedDeal }) => {
  const prompt = `
# Personality and Tone

## Identity
You are ${selectedDeal.participants[0].prospect_name}, a decision-maker at ${
    selectedDeal.deal.company_name
  }. You are currently evaluating a ${selectedDeal.deal.service_category.toLowerCase()} solution called "${
    selectedDeal.deal.deal_name
  }" as part of a ${
    selectedDeal.deal.contract_term_length
  } contract valued at $${selectedDeal.deal.deal_value}. The deal is in the "${
    selectedDeal.deal.stage
  }" stage and is expected to close by ${
    selectedDeal.deal.expected_close_date
  }. You never break character and always respond as the real prospect.

## Task
You are participating in a simulated sales call where a representative will try to close this deal with you. Use the deal context, objections, and behavioral signals provided to respond realistically. Stay in character and do not acknowledge that this is a simulation.

## Demeanor
${
  selectedDeal.personality[0].personality_traits.demeanor ??
  "Professional, direct, and confident."
}

## Tone
${
  selectedDeal.personality[0].personality_traits.tone ??
  "Measured and assertive, but open to discussion when value is demonstrated."
}

## Level of Enthusiasm
${
  selectedDeal.dealInsights[0].urgency_level === "high"
    ? "Moderate to high—there is interest, but it depends on alignment."
    : "Cautious or neutral."
}

## Level of Formality
Business professional. Use clear and respectful language, appropriate for B2B settings.

## Level of Emotion
${
  selectedDeal.riskExplanation[0].timeline_risk_explanation.includes("low")
    ? "Composed and focused."
    : "Express concern when timelines are at risk."
}

## Filler Words
None.

## Pacing
Moderate. Be efficient and deliberate in how you speak.

## Other details

DEAL SNAPSHOT:
- Deal Name: ${selectedDeal.deal.deal_name}
- Value: $${selectedDeal.deal.deal_value}
- Contract Term: ${selectedDeal.deal.contract_term_length}
- Service Category: ${selectedDeal.deal.service_category}
- Stage: ${selectedDeal.deal.stage}
- Expected Close: ${selectedDeal.deal.expected_close_date}
- Engagement Trend: ${selectedDeal.activityMetrics[0].engagement_trend}
- Avg Response Time: ${
    selectedDeal.activityMetrics[0].prospect_response_time
  } hours
- Messages Exchanged: ${selectedDeal.activityMetrics[0].message_count}

OBJECTIONS & INSIGHTS:
- Key Objections: ${selectedDeal.dealInsights[0].key_objections.join(", ")}
- Decision-Maker Status: ${selectedDeal.dealInsights[0].decision_maker_status}
- Urgency Level: ${selectedDeal.dealInsights[0].urgency_level}
- Timeline Risk: ${selectedDeal.riskExplanation[0].timeline_risk_explanation}
- Budget Risk: ${selectedDeal.riskExplanation[0].budget_risk_explanation}
- Churn Risk: ${selectedDeal.riskExplanation[0].churn_risk_explanation}

AI RECOMMENDATIONS:
- Next Steps: ${selectedDeal.aiRecommendation[0].next_steps.join(", ")}
- Escalation Trigger: ${selectedDeal.aiRecommendation[0].escalation_triggers}
- Acceleration Tactic: ${
    selectedDeal.aiRecommendation[0].deal_acceleration_tactics
  }

HISTORY:
- Conversation Summary: ${selectedDeal.conversationHistory[0].deal_summary}
- Tags: ${selectedDeal.tags[0].tag.join(", ")}
- Follow-Ups Sent: ${selectedDeal.followUps.length}
- Timeline Events: ${selectedDeal.timeline.length}

# Instructions
- Keep every response under 75 tokens.
`;

  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  // Audio visualizer refs and state
  const canvasRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationRef = useRef(null);
  const dataArrayRef = useRef(null);
  const streamRef = useRef(null);

  const handleListen = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = (event) => {
      setResponse(`Speech recognition error: ${event.error}`);
      setListening(false);
    };

    recognition.onresult = async (event) => {
      const userInput = event.results[0][0].transcript; // this is how you grab the transcript
      setTranscript(userInput);
      setLoading(true);

      //  After a voice respose we call backend agent, generating a response
      try {
        const res = await axios.post(
          "http://localhost:3000/voice/voice-agent",
          {
            prompt,
            userInput,
          }
        );

        const agentReply = res.data.reply;
        setResponse(agentReply);

        // Calling Openai/Speech model turns our agent text response into Speech
        await speak(agentReply);
      } catch (err) {
        setResponse("Sorry, I couldn't process that request.");
      } finally {
        setLoading(false);
      }
    };

    recognition.start();
  };
  // * Turns our agent text into speech
  const speak = async (text) => {
    try {
      setLoading(true);
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "tts-1",
          voice: "alloy",
          input: text,
        }),
      });
      const blob = await res.blob();
      const audio = new Audio(URL.createObjectURL(blob)); // turns the binary data (blob) into a temporary URL, Loads the audio from that url,
      audio.play(); // plays the audio from that url
      setLoading(false);
    } catch (error) {
      setResponse("Sorry, I couldn't process that request.");
    } finally {
      setLoading(false);
    }
  };

  // Initialize audio visualizer
  const initializeAudioVisualizer = async () => {
    try {
      if (!streamRef.current) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        streamRef.current = stream;
      }

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;

      sourceRef.current = audioContextRef.current.createMediaStreamSource(
        streamRef.current
      );
      sourceRef.current.connect(analyserRef.current);

      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);

      drawCosmicCircle();
    } catch (error) {
      console.error("Error initializing audio visualizer:", error);
    }
  };

  // Cosmic circle visualization
  const drawCosmicCircle = () => {
    if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current)
      return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = 250;
    canvas.height = 250;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    analyserRef.current.getByteFrequencyData(dataArrayRef.current);

    // Purple background gradient
    const gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      width / 2
    );
    gradient.addColorStop(0, "rgba(128, 90, 213, 0.08)"); // light purple
    gradient.addColorStop(0.5, "rgba(77, 29, 149, 0.25)"); // medium purple
    gradient.addColorStop(1, "rgba(59, 38, 165, 0.82)"); // dark background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Purple cosmic particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const freqIndex = Math.floor(
        (i / particleCount) * dataArrayRef.current.length
      );
      const amplitude = dataArrayRef.current[freqIndex] / 255;

      const baseRadius = 30;
      const radius = baseRadius + amplitude * 40;

      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      ctx.beginPath();
      ctx.arc(x, y, 1 + amplitude * 3, 0, Math.PI * 2);

      // Static purple particle
      ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + amplitude * 0.7})`; // purple with alpha
      ctx.fill();
    }

    // Outer audio bars (purple)
    const radius = 80;
    const barCount = 300;
    const angleStep = (2 * Math.PI) / barCount;

    for (let i = 0; i < barCount; i++) {
      const sampleIndex = Math.floor(
        (i * dataArrayRef.current.length) / barCount
      );
      const value = dataArrayRef.current[sampleIndex];
      const barHeight = (value / 256) * 40;

      const angle = i * angleStep;
      const x1 = centerX + Math.cos(angle) * radius;
      const y1 = centerY + Math.sin(angle) * radius;
      const x2 = centerX + Math.cos(angle) * (radius + barHeight);
      const y2 = centerY + Math.sin(angle) * (radius + barHeight);

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);

      // Solid purple stroke
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.6 + (value / 256) * 0.4})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Inner purple core
    const coreGradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      30
    );
    coreGradient.addColorStop(0, "rgba(168, 85, 247, 0.8)");

    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
    ctx.fillStyle = coreGradient;
    ctx.fill();

    // Pulsing core ring
    let sum = 0;
    for (let i = 0; i < dataArrayRef.current.length; i++) {
      sum += dataArrayRef.current[i];
    }
    const avgFrequency = sum / dataArrayRef.current.length;
    const pulseRadius = 15 + (avgFrequency / 255) * 35;

    ctx.beginPath();
    ctx.arc(centerX, centerY, pulseRadius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(139, 92, 246, 0.6)`; // softer purple pulse
    ctx.fill();

    animationRef.current = requestAnimationFrame(drawCosmicCircle);
  };

  // Stop audio visualizer
  const stopAudioVisualizer = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    initializeAudioVisualizer();

    return () => {
      stopAudioVisualizer();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  // Clear chat for new deal
  useEffect(() => {
    setResponse("");
  }, [selectedDeal]);

  return (
    <Box
      mt={2}
      width="100%"
      backgroundColor="background.default"
      display="flex"
      flexDirection="column"
    >
      <Box
        border={1}
        height="100%"
        borderColor="divider"
        maxWidth="100%"
        p={3}
        position="relative"
      >
        {/* Audio Visualizer - Always visible */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={4}
        >
          <Box
            sx={{
              position: "relative",
              width: 240,
              height: 240,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 10,
            }}
          >
            <canvas
              ref={canvasRef}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography variant="h6" mt={2} color="text.secondary">
            {listening
              ? "Listening for speech..."
              : "Always listening - Click mic to speak"}
          </Typography>
        </Box>

        {/* Mic Button */}
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            onClick={handleListen}
            variant="contained"
            color="secondary"
            sx={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              minWidth: 0,
              boxShadow: 4,
            }}
          >
            {loading ? (
              <CircularProgress size={32} color="inherit" />
            ) : (
              <MicIcon sx={{ fontSize: 32, color: "white" }} />
            )}
          </Button>
        </Box>

        {/* Transcript & Response Display */}
        <Box mt={4} maxWidth={600} mx="auto">
          <Typography
            variant="body2"
            color="textSecondary"
            fontStyle="italic"
            mb={2}
          >
            You said: {transcript && transcript}
          </Typography>

          <Paper
            elevation={3}
            sx={{
              mt: 2,
              p: 2,
              height: "150px",
              overflowY: "auto",
              borderRadius: "20px",
            }}
          >
            <Typography variant="subtitle1" color="text.primary">
              {selectedDeal.participants[0].prospect_name}'s says:
            </Typography>
            {loading ? (
              <Box mt={4} display="flex" justifyContent="center">
                <CircularProgress size={32} color="inherit" />
              </Box>
            ) : (
              <Typography variant="body1" mt={1}>
                {response && response}
              </Typography>
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default VoiceChat;
