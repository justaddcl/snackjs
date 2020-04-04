require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: use express middleware to hand cookies (JWT)

// TODO: use express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  details => {
    console.log(
      `The yoga server is running on port http://localhost:${details.port}`
    );
  }
);
