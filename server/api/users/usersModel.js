const express = require('express');
const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findBy,
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
        .select('id', 'username', 'email', 'password', 'birthday', 'website', 'sex', 'location', 'bio', 'signature')
        .where(query);
        // .first();
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