const express = require('express');
const Reputation = require('./reputationModel.js');
const { validateReputationId } = require('./reputationMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new reputation.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a single reputation comment by the Reputation ID.
router.get('/:id', validateReputationId, (req, res) => {
    res.status(200).json(req.rep);
});

// Delete - DELETE

// To delete a single reputation
// Admin & Mod action only
router.delete('/:id', (req, res) => {

});

module.exports = router;