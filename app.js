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
  const { monsterName } = req.body;
  const prompt = `Generate dialogue for a monster named ${monsterName}.`;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You play the role of hostile monster"
          },
          {
            role: "user",
            content: prompt
          }
        ],
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.send(response.data.choices[0].message.content.trim());
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Error generating text');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
