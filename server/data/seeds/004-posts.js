
exports.seed = function(knex) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {body: 'Rule number 1', user_id: 1, thread_id: 1},
        {body: 'Rule number 2', user_id: 1, thread_id: 1},
        {body: 'Rule number 3', user_id: 1, thread_id: 1},
        {body: 'Rule number 4', user_id: 1, thread_id: 1},
        {body: 'Rule number 5', user_id: 1, thread_id: 1},
        {body: 'Rule number 6', user_id: 1, thread_id: 1},
        {body: 'Rule number 7', user_id: 1, thread_id: 1},
        {body: 'Rule number 8', user_id: 1, thread_id: 1},
        {body: 'Rule number 9', user_id: 1, thread_id: 1},
        {body: 'Rule number 10', user_id: 1, thread_id: 1},
        {body: 'But why would we not?', user_id: 2, thread_id: 2},
        {body: 'Because I don\'t like it!', user_id: 4, thread_id: 2},
        {body: 'What if other people do tho?', user_id: 3, thread_id: 2},
        {body: 'I don\'t care about other people!', user_id: 4, thread_id: 2},
        {body: 'I don\'t know that I like that attitude on my board', user_id: 1, thread_id: 2},
        {body: 'Bring the ban hammer down, my man.', user_id: 1, thread_id: 6}
      ]);
    });
};
