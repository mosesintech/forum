const express = require('express');
const Users = require('./usersModel.js');
const { validateUserId, validateUser } = require('./usersMiddleware.js');
const { userOnly, adminOnly, modOnly, banned } = require('../authentication/restrictedMiddleware.js');
const router = express.Router();

// Create - POST

// To create a new user.
router.post('/', validateUser, (req, res) => {
    Users.insert(req.body)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(error => {
            res.status(500).json({message: `Error adding new user: ${error}`});
        })
});

// Retrieve - GET

// To retrieve a list of all users & filter through them using sortby, sortdir, and limit.
router.get('/', banned, (req, res) => {
    Users.find(req.query)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving all users: ${error}`});
        })
});

// To retrieve a single user by the User ID.
router.get('/:id', banned, validateUserId, (req, res) => {
    res.status(200).json(req.user);
});

// To retrieve all threads posted by this user using User ID.
router.get('/:id/threads', banned, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.findUserThreads(id)
        .then(threads => {
            if(threads.length){
                res.status(200).json(threads);
            } else {
                res.status(404).json({message: `User has not posted a thread yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving user threads: ${error}`});
        })
});

// To retrieve all posts by this user using User ID.
router.get('/:id/posts', banned, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.findUserPosts(id)
        .then(posts => {
            if(posts.length){
                res.status(200).json(posts);
            } else {
                res.status(404).json({message: `User has not posted a reply yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving user posts: ${error}`});
        })
});

// To retrieve the messages of a single user using User ID.
router.get('/:id/messages/to', banned, userOnly, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.findUserReceivedMessages(id)
        .then(messages => {
            if(messages.length){
                res.status(200).json(messages);
            } else {
                res.status(404).json({message: `User has not received a message yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving user messages: ${error}`});
        })
});

router.get('/:id/messages/from', banned, userOnly, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.findUserSentMessages(id)
        .then(messages => {
            if(messages.length){
                res.status(200).json(messages);
            } else {
                res.status(404).json({message: `User has not sent a message yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving user messages: ${error}`});
        })
});

// To retrieve the reputation comments and points of a single user using User ID.
router.get('/:id/reputation', banned, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.findUserReputation(id)
        .then(rep => {
            if(rep.length){
                res.status(200).json(rep);
            } else {
                res.status(404).json({message: `User has not received a reputation point yet.`});
            }
        })
        .catch(error => {
            res.status(500).json({message: `Error retrieving user reputation: ${error}`});
        })
});

// Update - PUT

// To update a single user
router.put('/:id', banned, userOnly, validateUser, validateUserId, (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    Users.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            res.status(500).json({message: `Error updating user profile: ${error}`});
        })
});

// Delete - DELETE

// To delete a single user
router.delete('/:id', banned, adminOnly, validateUserId, (req, res) => {
    const { id } = req.params;
    Users.remove(id)
        .then(removed => {
            res.status(200).json(removed);
        })
        .catch(error => {
            res.status(500).json({message: `Error removing user from database: ${error}`});
        })
});

module.exports = router;