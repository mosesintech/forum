const express = require('express');
const Users = require('./usersModel.js');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new user.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all users & filter through them using sortby, sortdir, and limit.
router.get('/', (req, res) => {
    // Users('users')
    //     .then(users => {
    //         res.status(200).json(users);
    //     })
    //     .catch(error => {
    //         res.status(500).json({message: `Error retrieving all users: ${error}`});
    //     })
});

// To retrieve a single user by the User ID.
router.get('/:id', (req, res) => {

});

// To retrieve all threads posted by this user using User ID.
router.get('/:id/threads', (req, res) => {

});

// To retrieve all posts by this user using User ID.
router.get('/:id/posts', (req, res) => {

});

// To retrieve the messages of a single user using User ID.
router.get('/:id/messages', (req, res) => {

});

// To retrieve the reputation comments and points of a single user using User ID.
router.get('/:id/reputation', (req, res) => {

});

// Update - PUT

// To update a single user
router.put('/:id', (req, res) => {

});

// Can I update multiple users at once?
// router.put('/:id', (req, res) => {

// });

// Delete - DELETE

// To delete a single user
router.delete('/:id', (req, res) => {

});

// Can I delete multiple users at once?
// router.delete('/:id', (req, res) => {

// });

module.exports = router;