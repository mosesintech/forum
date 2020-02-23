const express = require('express');
const Users = require('./usersModel.js');

// Validate User ID - checks if ID is in the database or not.

module.exports = {
    validateUserId
}

function validateUserId(req, res, next) {
    const { id } = req.params;
    Users.findById(id)
        .then(user => {
            if(user){
                req.user = user;
                next();
            } else {
                res.status(404).json({message: `User ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single user: ${error}`});
        })
}

// Validate User - checks if req contains all required values for post/put.