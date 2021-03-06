const express = require('express');
const Users = require('./usersModel.js');

// Validate User ID - checks if ID is in the database or not.

module.exports = {
    validateUserId,
    validateUser
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

function validateUser(req, res, next) {
    const { is_admin, is_mod, is_banned, username, avatar, user_title, email, password } = req.body;

    if(!req.body){
        res.status(400).json({message: `Missing user information`});
    } else if(!is_admin || !is_mod || !is_banned | !username || !avatar || !user_title || !email || !password){
        res.status(400).json({message: `Please include user information: Username, Avatar, User Title, Email, Password, Administrator Status, Moderator Status, and Banned Status.`})
    } else {
        next();
    }
}