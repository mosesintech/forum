const express = require('express');
const Posts = require('./postsModel.js');
const { validatePostId, validatePost } = require('./postsMiddleware.js');
const { userOnly, adminOnly, modOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new post.
router.post('/', banned, userOnly, validatePost, (req, res) => {
    Posts.insert(req.body)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new post: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a list of all posts & filter through them using sortby, sortdir, date, and limit.
router.get('/', banned, (req, res) => {
    Posts.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all posts: ${error}`});
        })
});

// To retrieve a single post by the Thread ID.
router.get('/:id', banned, validatePostId, (req, res) => {
    res.status(200).json(req.post);
});

// Update - PUT

// To update a single post
router.put('/:id', banned, userOnly, validatePost, validatePostId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Posts.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({message: `Error updating post: ${error}`});
        })
});

// Delete - DELETE

// To delete a single post
router.delete('/:id', banned, modOnly, validatePostId, (req, res) => {
    const { id } = req.params;
    Posts.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error removing post from database: ${error}`});
        })
});

module.exports = router;