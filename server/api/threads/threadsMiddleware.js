const express = require('express');
const Threads = require('./threadsModel.js');

module.exports = {
    validateThreadId,
    validateThread
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

function validateThread(req, res, next) {
    const { is_pinned, is_closed, name, forum_id, user_id, body } = req.body;
    if(!req.body){
        res.status(400).json({message: `Missing thread information`});
    } else if(!is_pinned || !is_closed || !name || !forum_id || !user_id || !body) {
        res.status(400).json({message: `Please include thread information: Name, Body, Forum ID, User ID, Important Status, and Closed Status.`})
    } else {
        next();
    }
}