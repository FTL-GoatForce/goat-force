import React, { useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Paper,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";

const VoiceOrb = () => {
  const prompt =
    "You are a helpful assistant. Answer the user's questions based on the provided context.";
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);
  const [loading, setLoading] = useState(false);
  const recognitionRef = useRef(null);

  const speak = async (text) => {
    try {
      const res = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "tts-1",
          voice: "nova",
          input: text,
        }),
      });
      if (!res.ok) {
        throw new Error(`Speech API error: ${res.status}`);
      }

      const blob = await res.blob();
      const audio = new Audio(URL.createObjectURL(blob));
      audio.play();
    } catch (error) {
      console.error("Error speaking text:", error);
      setResponse("Sorry, I couldn't process that request.");
    }
  };

  const handleListen = () => {
    try {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        throw new Error("SpeechRecognition not supported");
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setListening(true);

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setListening(false);
        setResponse(`Speech recognition error: ${event.error}`);
      };

      recognition.onend = () => setListening(false);

      recognition.onresult = async (event) => {
        try {
          const userInput = event.results[0][0].transcript;
          setTranscript(userInput);
          setLoading(true);

          // Send transcript and prompt to backend
          const res = await axios.post(
            "http://localhost:3000/voice/voice-agent",
            {
              prompt,
              userInput,
            }
          );

          const agentReply = res.data.reply;
          setResponse(agentReply);
          await speak(agentReply);
        } catch (err) {
          console.error("Agent error:", err);
          setResponse("Sorry, I couldn't process that request.");
        } finally {
          setLoading(false);
        }
      };

      recognition.start();
      recognitionRef.current = recognition;
    } catch (error) {
      console.error("Error initializing speech recognition:", error);
      alert("Speech recognition is not supported in this browser");
      setResponse("Speech recognition is not supported in this browser");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={4}
    >
      <Button
        onClick={handleListen}
        variant="contained"
        color="primary"
        sx={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          minWidth: 0,
          boxShadow: 4,
          animation: listening ? "pulse 1.5s infinite" : "none",
        }}
      >
        {loading ? (
          <CircularProgress size={32} color="inherit" />
        ) : (
          <MicIcon sx={{ fontSize: 32, color: "white" }} />
        )}
      </Button>
      <Box>
        <Typography variant="h6" color="black">
          {listening ? "Listening..." : "Click to Speak"}
        </Typography>
        {transcript && (
          <Typography variant="body2" color="textSecondary" fontStyle="italic">
            You said: {transcript}
          </Typography>
        )}
      </Box>
      <Box bgcolor={"background.default"} p={2} borderRadius={2} mt={2}>
        <Typography variant="h6" color="White">
          Response from Agent:
        </Typography>
        {response && (
          <Paper elevation={3} sx={{ mt: 2, p: 2, maxWidth: 400 }}>
            <Typography variant="body1" color="black">
              {response}
            </Typography>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default VoiceOrb;
