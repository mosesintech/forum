const express = require('express');
const Messages = require('./messagesModel.js');
const { validateMessageId, validateMessage } = require('./messagesMiddleware.js');
const { userOnly, adminOnly, modOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new message.
router.post('/', banned, userOnly, validateMessage, (req, res) => {
    Messages.insert(req.body)
        .then(message => {
            res.status(201).json(message);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new message: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a list of all messages.
router.get('/', adminOnly, (req, res) => {
    Messages.find()
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all messages: ${error}`});
        })
});

// To retrieve a single message by the Message ID.
router.get('/:id', banned, userOnly, validateMessageId, (req, res) => {
    res.status(200).json(req.message);
});

// Delete - DELETE

// To delete a single message
router.delete('/:id', banned, adminOnly, validateMessageId, (req, res) => {
    const { id } = req.params;
    Messages.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error deleting message from database: ${error}`});
        })
});

module.exports = router;