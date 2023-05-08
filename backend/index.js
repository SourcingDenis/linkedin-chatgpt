const express = require("express");
const axios = require("axios");
const openai = require("openai");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

openai.apiKey = process.env.OPENAI_API_KEY;

async function getCompletion(prompt, model = "gpt-3.5-turbo") {
  const messages = [{ role: "user", content: prompt }];
  const response = await openai.ChatCompletion.create({
    model: model,
    messages: messages,
    temperature: 0,
  });
  return response.choices[0].message["content"];
}

app.post("/chatgpt", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await getCompletion(prompt);
    res.json({ message: completion });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: "Error calling OpenAI API" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
