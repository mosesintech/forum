const express = require('express');
const Categories = require('./categoriesModel.js');
const { validateCategoryId } = require('./categoriesMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new category.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all categories.
router.get('/', (req, res) => {
    Categories.find()
        .then(cats => {
            res.status(200).json(cats);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all categories: ${error}`});
        })
});

// To retrieve a single category by the Category ID.
router.get('/:id', validateCategoryId, (req, res) => {
    res.status(200).json(req.cat);
});

// To retrieve all forums in this category using Category ID.
router.get('/:id/forums', (req, res) => {

});

// Update - PUT

// To update a single category
router.put('/:id', (req, res) => {

});

// Delete - DELETE

// To delete a single category
router.delete('/:id', (req, res) => {

});

module.exports = router;