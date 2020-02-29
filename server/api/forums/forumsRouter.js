const express = require('express');
const Forums = require('./forumsModel.js');
const { validateForumId, validateForum } = require('./forumsMiddleware.js');
const { userOnly, adminOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new forum.
router.post('/', banned, adminOnly, validateForum, (req, res) => {
    Forums.insert(req.body)
        .then(forum => {
            res.status(201).json(forum);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new forum: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a list of all forums & filter through them using sortby, sortdir, and limit.
router.get('/', banned, (req, res) => {
    Forums.find()
        .then(forums => {
            res.status(200).json(forums);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all forums: ${error}`});
        })
});

// To retrieve a single forum by the Forum ID.
router.get('/:id', banned, validateForumId, (req, res) => {
    res.status(200).json(req.forum);
});

// To retrieve all threads posted in this forum using Forum ID.
router.get('/:id/threads', banned, validateForumId, (req, res) => {
    const { id } = req.params;
    Forums.findForumThreads(id)
        .then(threads => {
            if(threads.length){
                res.status(200).json(threads);
            } else {
                res.status(404).json({message: `This forum contains no threads.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving forum threads: ${error}`});
        })
});

// Update - PUT

// To update a single forum
router.put('/:id', banned, adminOnly, validateForum, validateForumId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Forums.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({message: `Error updating forum: ${error}`});
        })
});

// Delete - DELETE

// To delete a single forum
router.delete('/:id', banned, adminOnly, validateForumId, (req, res) => {
    const { id } = req.params;
    Forums.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error deleting forum from database: ${error}`});
        })
});

module.exports = router;