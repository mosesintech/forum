const express = require('express');
const cors = require('cors');
const server = express();

// Routers
// const categoriesRouter = require('./api/categories/categoriesRouter');
// const forumsRouter = require('./api/forums/forumsRouter');
// const threadsRouter = require('./api/threads/threadsRouter');
// const postsRouter = require('./api/posts/postsRouter');
// const usersRouter = require('./api/users/usersRouter');
// const messagesRouter = require('./api/messages/messagesRouter');

// Middleware
server.use(express.json());
server.use(cors());

// Routes
// server.use('/api/categories', categoriesRouter);
// server.use('/api/forums', forumsRouter);
// server.use('/api/threads', threadsRouter);
// server.use('/api/posts', postsRouter);
// server.use('/api/users', usersRouter);
// server.use('/api/messages', messagesRouter);

module.exports = server;