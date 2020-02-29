const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findForumThreads,
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

function findForumThreads(id) {
    return db('threads as t')
        .join('forums as f', 'f.id', 't.forum_id')
        .select('t.id as thread_id', 'f.name as forum', 't.name', 't.is_closed as closed_status', 't.posted_date')
        .where('t.forum_id', id);
}

function insert(newForum) {
    return db('forums')
        .returning(['id', 'category_id', 'name', 'description'])
        .insert(newForum);
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