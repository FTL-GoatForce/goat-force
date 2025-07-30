// backend/routes/voice-agent.js
import express from "express";
import { Agent, run } from "@openai/agents";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/voice-agent", async (req, res) => {
  const { prompt, userInput } = req.body;
  // creating a new AI Agent with openAi
  const agent = new Agent({
    name: "Point Of Contact Assistant",
    instructions: prompt,
    openAI: openai,
    modelSettings: { maxTokens: 75 }, // setting a low max tokens to not fry through this
  });

  try {
    // Running causes the agent to think and talk
    const result = await run(agent, userInput);
    res.json({ reply: result.finalOutput });
  } catch (err) {
    console.error("Agent backend error:", err);
    res.status(500).json({ error: "Agent failed to respond." });
  }
});

export default router;
