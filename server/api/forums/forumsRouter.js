const express = require('express');
const Forums = require('./forumsModel.js');
const { validateForumId } = require('./forumsMiddleware.js');
const router = express.Router();


// CRUD operations:


// Create - POST

// To create a new forum.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all forums & filter through them using sortby, sortdir, and limit.
router.get('/', (req, res) => {
    Forums.find()
        .then(forums => {
            res.status(200).json(forums);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all forums: ${error}`});
        })
});

// To retrieve a single forum by the Forum ID.
router.get('/:id', validateForumId, (req, res) => {
    res.status(200).json(req.forum);
});

// To retrieve all threads posted in this forum using Forum ID.
router.get('/:id/threads', (req, res) => {

});

// To retrieve all posts posted in this forum using Forum ID.
router.get('/:id/posts', (req, res) => {

});

// Update - PUT

// To update a single forum
router.put('/:id', (req, res) => {

});

// Delete - DELETE

// To delete a single forum
router.delete('/:id', (req, res) => {

});

module.exports = router;