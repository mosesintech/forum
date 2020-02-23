
exports.seed = function(knex) {
  return knex('reputation').del()
    .then(function () {
      return knex('reputation').insert([
        {from_id: 1, to_id: 2, is_positive: true, reason: 'Thank you for helping me mod this place.'},
        {from_id: 3, to_id: 4, is_positive: false, reason: 'Can\'t wait until they ban you.'},
        {from_id: 1, to_id: 4, is_positive: false, reason: 'Do not make me ban you.'},
        {from_id: 2, to_id: 3, is_positive: true, reason: 'Thank you for being a good member of the board.'},
      ]);
    });
};
