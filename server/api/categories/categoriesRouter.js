const express = require('express');
const Categories = require('./categoriesModel.js');
const { validateCategoryId, validateCategory } = require('./categoriesMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new category.
router.post('/', (req, res) => {
    Categories.insert(req.body)
        .then(cat => {
            res.status(201).json(cat);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new category: ${error}`});
        })
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
router.get('/:id/forums', validateCategoryId, (req, res) => {
    const { id } = req.params;
    Categories.findCategoryForums(id)
        .then(forums => {
            if(forums.length){
                res.status(200).json(forums);
            } else {
                res.status(404).json({message: `This category has no forums.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving this Category's Forums: ${error}`});
        })
});

// Update - PUT

// To update a single category
router.put('/:id', validateCategory, validateCategoryId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Categories.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({message: `Error updating category: ${error}`});
        })
});

// Delete - DELETE

// To delete a single category
router.delete('/:id', validateCategoryId, (req, res) => {
    const { id } = req.params;
    Categories.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error deleting category from database: ${error}`});
        })
});

module.exports = router;