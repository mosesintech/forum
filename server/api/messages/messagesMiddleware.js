const express = require('express');
const Messages = require('./messagesModel.js');

module.exports = {
    validateMessageId,
    validateMessage
}

// Validate Message ID - checks if ID is in the database or not.

function validateMessageId(req, res, next) {
    const { id } = req.params;
    Messages.findById(id)
        .then(message => {
            if(message){
                req.message = message;
                next();
            } else {
                res.status(404).json({message: `Message ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single message: ${error}`});
        })
}

// Validate Message - checks if req contains all required values for post/put.

function validateMessage(req, res, next) {
    const { from_id, to_id, title, body } = req.body;
    if(!req.body){
        res.status(400).json({message: `Missing Message Information.`});
    } else if(!from_id || !to_id || !title || !body) {
        res.status(400).json({message: `Please include message information: From User ID, To User ID, Message Title, and Body.`});
    } else {
        next();
    }
}