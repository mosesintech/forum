
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {is_admin: true, is_mod: true, is_banned: false, username: 'MosesIn.Tech', email: 'email@address.com', password: 'password89', sex: 'Male', website: 'http://mosesin.tech', location: 'Dallas, Tx'}
      ]);
    });
};
