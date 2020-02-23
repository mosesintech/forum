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
    return db('categories');
}

function findById(id) {
    return db('categories')
        .where({ id })
        .first();
}

function insert(newCat) {
    return db('categories')
        .insert(newCat)
            .then(id => {
                return findById(id[0]);
            });
}

function update(id, changes) {
    return db('categories')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('categories')
        .where({ id })
        .del();
}