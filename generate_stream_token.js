// Backend: generate_stream_token.js
// Usage: node generate_stream_token.js <user-id>

const StreamChat = require('stream-chat').StreamChat;

const apiKey = 'pc75euj8pznv'; // Your Stream API key
const apiSecret = 'krxm3tvrra5naqeefeg65uyzvry4ujd6pht6yq3jux33k53xr9p4gbd4qrpt274c'; // Replace with your Stream secret

const userId = process.argv[2] || '1420011'; // Pass user-id as argument

const serverClient = StreamChat.getInstance(apiKey, apiSecret);
const token = serverClient.createToken(userId);

console.log(`User token for ${userId}: ${token}`);