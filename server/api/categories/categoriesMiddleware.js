const express = require('express');
const Categories = require('./categoriesModel.js');

module.exports = {
    validateCategoryId
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