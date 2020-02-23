const express = require('express');
const Reputation = require('./reputationModel.js');

module.exports = {
    validateReputationId
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