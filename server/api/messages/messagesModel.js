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
        .insert(newMessage)
            .then(id => {
                return findById(id[0]);
            });
}

function remove(id) {
    return db('messages')
        .where({ id })
        .del();
}