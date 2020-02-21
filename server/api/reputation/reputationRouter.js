const express = require('express');
const router = express();

// CRUD operations:


// Create - POST

// To create a new reputation.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a single reputation comment by the Reputation ID.
router.get('/:id', (req, res) => {

});

// Delete - DELETE

// To delete a single reputation
// Admin & Mod action only
router.delete('/:id', (req, res) => {

});

module.exports = router;