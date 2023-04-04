const express = require('express');
const openai = require('openai');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
openai.apiKey = process.env.OPENAI_API_KEY;
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/openai', async (req, res) => {
  const prompt = req.body.prompt;
  const maxTokens = req.body.maxTokens;

  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-003",
      prompt: prompt,
      max_tokens: maxTokens,
      n: 1,
      stop: null,
      temperature: 1,
    });
    res.send({ generated_text: response.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
