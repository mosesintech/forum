
exports.seed = function(knex) {
  return knex('messages').del()
    .then(function () {
      return knex('messages').insert([
        {from_id: 1, to_id: 4, title: 'Just want to chat.', body: 'Hey man, it looks like you\'re a bit upset about something. What\'s up?'},
        {from_id: 4, to_id: 1, title: 'Just want to chat.', body: 'I hate you.'},
        {from_id: 1, to_id: 4, title: 'Just want to chat.', body: 'Hey man, I\'m just trying to be civil here. Why are you trolling?'},
        {from_id: 4, to_id: 1, title: 'Just want to chat.', body: 'BAAAAAAAAAAAAAN MEEEEEEEE!!!'},

        {from_id: 2, to_id: 3, title: 'Hey you!', body: 'You\'re kinda cool.'},
        {from_id: 3, to_id: 2, title: 'Hey you!', body: 'Nah man, you\'re kinda cool.'},
        {from_id: 2, to_id: 3, title: 'Hey you!', body: 'lol you right'}
      ]);
    });
};
