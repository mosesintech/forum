const express = require('express');
const router = express.Router();

// CRUD operations:


// Create - POST

// To create a new thread.
router.post('/', (req, res) => {

});

// Retrieve - GET

// To retrieve a list of all threads & filter through them using sortby, sortdir, date, and limit.
router.get('/', (req, res) => {

});

// To retrieve a single thread by the Thread ID.
router.get('/:id', (req, res) => {

});

// To retrieve all posts posted in this thread using Thread ID.
router.get('/:id/posts', (req, res) => {

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