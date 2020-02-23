const express = require('express');
const Threads = require('./threadsModel.js');

module.exports = {
    validateThreadId
}

// Validate Thread ID - checks if ID is in the database or not.

function validateThreadId(req, res, next) {
    const { id } = req.params;
    Threads.findById(id)
        .then(thread => {
            if(thread.length){
                req.thread = thread;
                next();
            } else {
                res.status(404).json({message: `Thread ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single thread: ${error}`});
        })
}

// Validate Thread - checks if req contains all required values for post/put.