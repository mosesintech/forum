const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    findById,
    insert,
    remove
}

function findById(id) {
    return db('reputation')
        .where({ id })
        .first();
}

function insert(newRep) {
    return db('reputation')
        .insert(newRep)
            .then(id => {
                return findById(id[0]);
            });
}

function remove(id) {
    return db('reputation')
        .where({ id })
        .del();
}