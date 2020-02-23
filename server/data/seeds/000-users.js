
exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {is_admin: true, is_mod: true, is_banned: false, username: 'MosesIn.Tech', email: 'email@address.com', password: 'password89', sex: 'Male', website: 'http://mosesin.tech', location: 'Dallas, Tx'},
        {is_admin: false, is_mod: true, is_banned: false, username: 'Elegant Totality', email: 'emailaddress@address.com', password: 'password12', sex: 'Female', bio: 'I\'m kind of a big deal around these parts, yo.', location: 'Wouldn\'t you like to know, weather boy?'},
        {is_admin: false, is_mod: false, is_banned: false, username: 'GodSeer', email: 'address@email.com', password: 'password73', sex: 'Stop asking'},
        {is_admin: false, is_mod: false, is_banned: true, username: 'BAN ME!', email: 'troll@banned.com', password: 'bigoltroll', bio: 'if you don\'t banned me, you\'re an idiot!'}
      ]);
    });
};
