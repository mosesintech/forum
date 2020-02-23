
exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {is_private: false, is_closed: false, name: 'Our Community', description: 'For news, feedback, and other community concerns'},
        {is_private: false, is_closed: false, name: 'The Developer\'s Corner', description: 'The one stop shop for mom and pop\'s dev needs!'},
        {is_private: false, is_closed: true, name: 'The Lounge', description: 'For chatter without a home.'},
        {is_private: true, is_closed: false, name: 'Moderation'},
        {is_private: true, is_closed: true, name: 'The Archive', description: 'For \"deleted\" threads without deleting them.'}
      ]);
    });
};
