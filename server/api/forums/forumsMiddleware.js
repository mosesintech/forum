const express = require('express');
const Forums = require('./forumsModel.js');

module.exports = {
    validateForumId
}

// Validate Forum ID - checks if ID is in the database or not.

function validateForumId(req, res, next) {
    const { id } = req.params;
    Forums.findById(id)
        .then(forum => {
            if(forum){
                req.forum = forum;
                next();
            } else {
                res.status(404).json({message: `Forum ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single forum: ${error}`});
        })
}

// Validate Forum - checks if req contains all required values for post/put.