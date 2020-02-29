const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    insert,
    remove
}

function find() {
    return db('messages');
}

function findById(id) {
    return db('messages')
        .where({ id })
        .first();
}

function insert(newMessage) {
    return db('messages')
        .returning(['id', 'from_id', 'to_id', 'title', 'body'])
        .insert(newMessage);
}

function remove(id) {
    return db('messages')
        .where({ id })
        .del();
}