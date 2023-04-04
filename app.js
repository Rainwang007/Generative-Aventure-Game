const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate-monster-dialogue', async (req, res) => {
  const monsterName = req.body.monsterName;
  const maxTokens = req.body.maxTokens;

  try {
    const response = await openai.generate(`A monster named ${monsterName} says something`, maxTokens);
    res.send({ generated_text: response.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
