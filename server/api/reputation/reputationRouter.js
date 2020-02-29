const express = require('express');
const Reputation = require('./reputationModel.js');
const { validateReputationId, validateReputation } = require('./reputationMiddleware.js');
const { userOnly, adminOnly, modOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new reputation.
router.post('/', banned, validateReputation, (req, res) => {
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
router.get('/:id', banned, validateReputationId, (req, res) => {
    res.status(200).json(req.rep);
});

// Delete - DELETE

// To delete a single reputation
router.delete('/:id', banned, modOnly, validateReputationId, (req, res) => {
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