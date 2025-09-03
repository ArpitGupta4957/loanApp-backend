// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { StreamChat } = require('stream-chat');

const apiKey = 'pc75euj8pznv'; // Your Stream API key
const apiSecret = 'krxm3tvrra5naqeefeg65uyzvry4ujd6pht6yq3jux33k53xr9p4gbd4qrpt274c'; // Replace with your Stream secret

const app = express();
app.use(bodyParser.json());

app.post('/get-stream-token', (req, res) => {
  const userId = req.body.userId;
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }
  const serverClient = StreamChat.getInstance(apiKey, apiSecret);
  const token = serverClient.createToken(userId);
  res.json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Stream token server running on port ${PORT}`);
});