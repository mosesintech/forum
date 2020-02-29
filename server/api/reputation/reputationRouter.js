const express = require('express');
const Reputation = require('./reputationModel.js');
const { validateReputationId, validateReputation } = require('./reputationMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new reputation.
router.post('/', validateReputation, (req, res) => {
    Reputation.insert(req.body)
        .then(rep => {
            res.status(201).json(rep);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new reputation: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a single reputation comment by the Reputation ID.
router.get('/:id', validateReputationId, (req, res) => {
    res.status(200).json(req.rep);
});

// Delete - DELETE

// To delete a single reputation
// Admin & Mod action only
router.delete('/:id', validateReputationId, (req, res) => {
    const { id } = req.params;
    Reputation.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error deleting reputation from database: ${error}`});
        })
});

module.exports = router;