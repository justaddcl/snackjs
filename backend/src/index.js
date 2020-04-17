const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());
// decode any JWTs in cookies to identify logged in user on each request
server.express.use((req, res, next) => {
  const { _snackjs_session } = req.cookies;
  if (_snackjs_session) {
    const { userId } = jwt.verify(_snackjs_session, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

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
