// Backend: generate_stream_token.js
// Usage: node generate_stream_token.js <phone-number>

const StreamChat = require('stream-chat').StreamChat;

const apiKey = 'pc75euj8pznv'; // Your Stream API key
const apiSecret = 'krxm3tvrra5naqeefeg65uyzvry4ujd6pht6yq3jux33k53xr9p4gbd4qrpt274c'; // Replace with your Stream secret

// Use phone number as userId
const userId = process.argv[2] || '1420011'; // Pass phone number as argument

const serverClient = StreamChat.getInstance(apiKey, apiSecret);
// Generate Stream token using phone number
const token = serverClient.createToken(userId);

console.log(`User token for ${userId}: ${token}`);