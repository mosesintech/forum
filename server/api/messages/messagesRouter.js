const express = require('express');
const Messages = require('./messagesModel.js');
const { validateMessageId } = require('./messagesMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new message.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all messages.
router.get('/', (req, res) => {
    Messages.find()
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all messages: ${error}`});
        })
});

// To retrieve a single message by the Message ID.
router.get('/:id', validateMessageId, (req, res) => {
    res.status(200).json(req.message);
});

// Delete - DELETE

// To delete a single message
router.delete('/:id', (req, res) => {

});

module.exports = router;