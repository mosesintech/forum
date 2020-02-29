const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findBy,
    findUserThreads,
    findUserPosts,
    findUserReceivedMessages,
    findUserSentMessages,
    findUserReputation,
    insert,
    update,
    remove
}

function find(query) {
    const { sortby, limit, sortdir, username } = query;
    if(!sortby && (limit || sortdir || username)){
        return db('users').limit(limit).orderBy('id', sortdir);
    } else if(sortby || limit || sortdir || username){
        return db('users').limit(limit).orderBy(sortby, sortdir);
    } else {
        return db('users');
    }    
}

function findById(id) {
     return db('users')
         .where({ id })
         .first();
}

function findBy(query){
    return db('users')
        .select('id')
        .where(query)
        .first();
}

function findUserThreads(id) {
    return db('threads as t')
        .join('users as u', 'u.id', 't.user_id')
        .select('t.id', 't.name', 'u.username as postedBy')
        .where('t.user_id', id);
}

function findUserPosts(id) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'p.body', 'u.username as postedBy')
        .where('p.user_id', id);
}

function findUserReceivedMessages(id) {
    return db('messages as m')
        .join('users as u1', 'u1.id', 'm.to_id')
        .join('users as u2', 'u2.id', 'm.from_id')
        .select('m.id', 'u2.username as from','u1.username as sentTo', 'm.title', 'm.body')
        .where('m.to_id', id);
}

function findUserSentMessages(id) {
    return db('messages as m')
        .join('users as u1', 'u1.id', 'm.from_id')
        .join('users as u2', 'u2.id', 'm.to_id')
        .select('m.id', 'u1.username as from','u2.username as sentTo', 'm.title', 'm.body')
        .where('m.from_id', id);
}

function findUserReputation(id) {
    return db('reputation as r')
        .join('users as u1', 'u1.id', 'r.to_id')
        .join('users as u2', 'u2.id', 'r.from_id')
        .select('r.id', 'u2.username as from','u1.username as givenTo', 'r.is_positive', 'r.reason')
        .where('r.to_id', id);
}

function insert(newUser) {
    return db('users')
        .returning(['id', 'username', 'email'])
        .insert(newUser)
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