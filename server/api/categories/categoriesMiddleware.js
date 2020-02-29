const express = require('express');
const Categories = require('./categoriesModel.js');

module.exports = {
    validateCategoryId,
    validateCategory
}

// Validate Category ID - checks if ID is in the database or not.

function validateCategoryId(req, res, next) {
    const { id } = req.params;
    Categories.findById(id)
        .then(cat => {
            if(cat){
                req.cat = cat;
                next();
            } else {
                res.status(404).json({message: `Category ID does not exist.`})
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving single category: ${error}`});
        })
}

// Validate Category - checks if req contains all required values for post/put.

function validateCategory(req, res, next) {
    const { is_private, is_closed, name, description } = req.body;
    if(!req.body){
        res.status(400).json({message: `Missing Category Information.`});
    } else if(!is_private || !is_closed || !name || !description){
        res.status(400).json({message: `Please include category information: Name, Description, Private Status, and Closed Status.`});
    } else {
        next();
    }
}