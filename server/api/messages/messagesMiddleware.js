const express = require('express');
const Messages = require('./messagesModel.js');

module.exports = {
    validateMessageId
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