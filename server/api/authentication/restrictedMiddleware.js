const express = require('express');
const bcrypt = require('bcryptjs');

function restricted(req, res, next){
    if(req.session && req.session.user){
        next()
    } else {
        res.status(401).json({message: `No user credentials or cookies provided.`});
    }
}

module.exports = restricted;