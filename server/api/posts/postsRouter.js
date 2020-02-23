const express = require('express');
const Posts = require('./postsModel.js');
const { validatePostId } = require('./postsMiddleware.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new thread.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all threads & filter through them using sortby, sortdir, date, and limit.
router.get('/', (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all posts: ${error}`});
        })
});

// To retrieve a single thread by the Thread ID.
router.get('/:id', validatePostId, (req, res) => {
    res.status(200).json(req.post);
});

// Update - PUT

// To update a single thread
router.put('/:id', (req, res) => {

});

// Delete - DELETE

// To delete a single thread
router.delete('/:id', (req, res) => {

});

module.exports = router;