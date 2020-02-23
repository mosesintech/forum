const express = require('express');
const cors = require('cors');
const server = express();

// Middleware
server.use(express.json());
server.use(cors());

// Routers
const usersRouter = require('./users/usersRouter');
const categoriesRouter = require('./categories/categoriesRouter');
const forumsRouter = require('./forums/forumsRouter');
const threadsRouter = require('./threads/threadsRouter');
const postsRouter = require('./posts/postsRouter');
const messagesRouter = require('./messages/messagesRouter');
const reputationRouter = require('./reputation/reputationRouter');

// Routes
server.use('/api/users', usersRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/forums', forumsRouter);
server.use('/api/threads', threadsRouter);
server.use('/api/posts', postsRouter);
server.use('/api/messages', messagesRouter);
server.use('/api/reputation', reputationRouter);

module.exports = server;