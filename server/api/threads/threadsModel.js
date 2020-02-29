const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findThreadPosts,
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

function findThreadPosts(id) {
    return db('posts as p')
        .join('threads as t', 't.id', 'p.thread_id')
        .join('users as u', 'u.id', 'p.user_id')
        .select('t.name as thread_name', 'p.id as post_id', 'p.body', 'u.username as postedBy')
        .where('p.thread_id', id);
}

function insert(newThread) {
    return db('threads')
        .returning(['id', 'name', 'body'])
        .insert(newThread);
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