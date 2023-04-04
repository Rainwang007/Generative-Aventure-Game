require("axios")
require("form-data")
require("typescript")
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT||3000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/openai", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const maxTokens = req.body.max_tokens;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt
    });

    res.send({ generated_text: response.data.choices[0].text.trim() });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
});
