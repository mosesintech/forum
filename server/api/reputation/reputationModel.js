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
        .returning(['id', 'from_id', 'to_id', 'is_positive', 'reason'])
        .insert(newRep);
}

function remove(id) {
    return db('reputation')
        .where({ id })
        .del();
}