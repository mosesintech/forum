const express = require('express');
const db = require('../../data/dbConfig.js');
const { findById:forums } = require('../forums/forumsModel.js');

module.exports = {
    find,
    findById,
    findCategoryForums,
    insert,
    update,
    remove
}

function find() {
    return db('categories')
        .join('forums', 'categories.id', 'forums.category_id')
        .select(['categories.*', db.raw('ARRAY_AGG(forums.id) as forums')])
        .groupBy('categories.id', 'categories.name');
}

function findById(id) {
    return db('categories')
        .where({ id })
        .first();
}

function findCategoryForums(id) {
    return db('forums as f')
        .join('categories as c', 'c.id', 'f.category_id')
        .select('f.id', 'f.name', 'c.name as forumCategory')
        .where('f.category_id', id);
}

function getUserPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'p.text', 'u.name as postedBy')
    .where('p.user_id', userId);
}

function insert(newCat) {
    return db('categories')
        .returning(['id', 'name', 'description'])
        .insert(newCat);
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