const express = require('express');
const Threads = require('./threadsModel.js');
const { validateThreadId, validateThread } = require('./threadsMiddleware.js');
const { userOnly, adminOnly, modOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new thread.
router.post('/', banned, userOnly, validateThread, (req, res) => {
    Threads.insert(req.body)
        .then(thread => {
            res.status(201).json(thread);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new thread: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a list of all threads & filter through them using sortby, sortdir, date, and limit.
router.get('/', banned, (req, res) => {
    Threads.find()
        .then(threads => {
            res.status(200).json(threads);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all threads: ${error}`});
        })
});

// To retrieve a single thread by the Thread ID.
router.get('/:id', banned, validateThreadId, (req, res) => {
    res.status(200).json(req.thread);
});

// To retrieve all posts posted in this thread using Thread ID.
router.get('/:id/posts', banned, (req, res) => {
    const { id } = req.params;
    Threads.findThreadPosts(id)
        .then(posts => {
            if(posts.length){
                res.status(200).json(posts);
            } else {
                res.status(404).json({message: `Thread does not have a reply yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving thread posts: ${error}`});
        })
});

// Update - PUT

// To update a single thread
router.put('/:id', banned, userOnly, validateThread, validateThreadId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Threads.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({message: `Error updating thread: ${error}`});
        })
});

// Delete - DELETE

// To delete a single thread
router.delete('/:id', banned, modOnly, validateThreadId, (req, res) => {
    const { id } = req.params;
    Threads.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error deleting thread from database: ${error}`});
        })
});

module.exports = router;