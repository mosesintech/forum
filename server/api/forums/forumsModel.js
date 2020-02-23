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
    return db('forums');
}

function findById(id) {
    return db('forums')
        .where({ id })
        .first();
}

function insert(newForum) {
    return db('forums')
        .insert(newForum)
            .then(id => {
                return findById(id[0]);
            });
}

function update(id, changes) {
    return db('forums')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('forums')
        .where({ id })
        .del();
}