const express = require('express');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new message.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all messages.
router.get('/', (req, res) => {

});

// To retrieve a single message by the Message ID.
router.get('/:id', (req, res) => {

});

// Delete - DELETE

// To delete a single message
router.delete('/:id', (req, res) => {

});

module.exports = router;