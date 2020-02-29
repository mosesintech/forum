const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

module.exports = sessionConfig = {
    name: 'sess',
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: 1000 * 30,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: require('../data/dbConfig.js'), 
        tablename: "sessions",
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 60
    })
};