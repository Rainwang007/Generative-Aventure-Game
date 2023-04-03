
const path = require("path");

// ...

app.use(express.static(path.join(__dirname, "public")));


const express = require("express");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public")); // Add this line

app.post("/api/completions", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        temperature: 0,
        max_tokens: 7,
      }),
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send("Error occurred: " + error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
