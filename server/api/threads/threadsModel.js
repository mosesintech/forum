const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove
}

function find() {
    return db('threads');
}

function findById(id) {
    return db('threads')
        .where({ id })
}

function insert(newThread) {
    return db('threads')
        .insert(newThread)
            .then(id => {
                return findById(id[0]);
            });
}

function update(id, changes) {
    return db('threads')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('threads')
        .where({ id })
        .del();
}