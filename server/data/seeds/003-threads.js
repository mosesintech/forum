
exports.seed = function(knex) {
  return knex('threads').del()
    .then(function () {
      return knex('threads').insert([
        {is_pinned: true, is_closed: true, name: 'Rules!', forum_id: '1', user_id: '1', body: 'Here\'s the rules, sucka fool!'},
        {is_pinned: false, is_closed: false, name: 'Have you thought about just, like, not?', forum_id: '4', user_id: '4', body: 'I don\'t like anything here. This all sucks. Dangit!!'},
        {is_pinned: false, is_closed: false, name: 'We should talk about vanilla vs compilers', forum_id: '3', user_id: '3', body: 'I actually really like using SCSS.'},
        {is_pinned: false, is_closed: false, name: 'I love React so much.', forum_id: '4', user_id: '3', body: 'Like, have you even tried to build something with it?'},
        {is_pinned: false, is_closed: false, name: 'I am actually a huge fan of Burn Notice.', forum_id: '5', user_id: '3', body: 'You probably didn\'t know this, did you?'},
        {is_pinned: false, is_closed: false, name: 'So I\'m thinking we might have to ban BAN ME.', forum_id: '6', user_id: '2', body: 'I mean, he\'s actually asking for it, right?'},
        {is_pinned: false, is_closed: true, name: 'ARCHIVE ME!', forum_id: '7', user_id: '4', body: 'Did you ban me yet, ugly?!'}
      ]);
    });
};
