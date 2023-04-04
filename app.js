const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.post('/api/openai', async (req, res) => {
  const { monsterName } = req.body;
  const prompt = `Generate dialogue for a monster named ${monsterName}.`;
  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-0301",
      prompt: prompt, // Replace "Hello world" with prompt
    });
    res.send(completion.data.choices[0].message.text); // Replace response with completion
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating text');
  }
});



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));