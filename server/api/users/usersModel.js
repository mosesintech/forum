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
    return db('users');
}

function findById(id) {
     return db('users')
         .where({ id })
         .first();
}

function insert(newUser) {
    return db('users')
        .insert(newUser)
            .then(id => {
                return findById(id[0]);
            });
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where({ id })
        .del();
}