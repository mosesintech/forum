const express = require('express');
const Reputation = require('./reputationModel.js');

module.exports = {
    validateReputationId,
    validateReputation
}

// Validate Reputation ID - checks if ID is in the database or not.

function validateReputationId(req, res, next) {
    const { id } = req.params;
    Reputation.findById(id)
        .then(rep => {
            if(rep){
                req.rep = rep;
                next();
            } else {
                res.status(404).json({message: `Reputation ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single reputation: ${error}`});
        })
}

// Validate Reputation - checks if req contains all required values for post/put.

function validateReputation(req, res, next) {
    const { from_id, to_id, is_positive, reason } = req.body;
    if(!req.body){
        res.status(400).json({message: `Missing reputation information.`});
    } else if(!from_id || !to_id || !is_positive || !reason){
        res.status(400).json({message: `Please include reputation information: From User ID, To User, Value, and Reason.`});
    } else {
        next();
    }
}