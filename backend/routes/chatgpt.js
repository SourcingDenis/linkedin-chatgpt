const express = require("express");
const router = express.Router();
const openai = require("openai");

// Load OpenAI API key from environment variables
openai.apiKey = process.env.OPENAI_API_KEY;

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.Completion.create({
      engine: "gpt-3.5-turbo",
      prompt: prompt,
      max_tokens: 300,
      n: 1,
      stop: null,
      temperature: 0,
    });

    const message = response.choices[0].text.trim();
    res.status(200).json({ message: message });
  } catch (error) {
    console.error("Error in OpenAI API request:", error);
    res.status(500).json({ error: "Failed to generate a response from ChatGPT." });
  }
});

module.exports = router;
