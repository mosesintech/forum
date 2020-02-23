
exports.seed = function(knex) {
  return knex('forums').del()
    .then(function () {
      return knex('forums').insert([
        {category_id: 1, is_private: false, is_closed: false, name: 'News & Announcements', description: 'For the latest skuttlebut.'},
        {category_id: 1, is_private: false, is_closed: false, name: 'Feedback & Suggestions', description: 'Have some ideas for the development team? Share \'em here!'},
        {category_id: 2, is_private: false, is_closed: false, name: 'Design', description: 'HTML, CSS, Compilers, Libraries, Color Theory, and all that here!'},
        {category_id: 2, is_private: false, is_closed: false, name: 'Development', description: 'Whether it\'s MERN, MEAN, or LAMP, you\'re stack is welcome here.'},
        {category_id: 3, is_private: false, is_closed: false, name: 'Chit Chat', description: 'Literally anything. Just don\'t break the rules, ok?'},
        {category_id: 4, is_private: true, is_closed: false, name: 'Moderator Chat'},
        {category_id: 5, is_private: true, is_closed: true, name: 'Archived Threads'}
      ]);
    });
};

// 1, 1, 2, 2, 3, 4, 5