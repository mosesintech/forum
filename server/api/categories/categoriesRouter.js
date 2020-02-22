const express = require('express');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new category.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all categories.
router.get('/', (req, res) => {

});

// To retrieve a single category by the Category ID.
router.get('/:id', (req, res) => {

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