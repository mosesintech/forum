exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
  users.increments();
  users.boolean('is_admin').notNullable().defaultTo(false);
  users.boolean('is_mod').notNullable().defaultTo(false);
  users.boolean('is_banned').notNullable().defaultTo(false);
  users.timestamp('joined_date').defaultTo(knex.fn.now()).notNullable();
  users.text('username', 30).notNullable().unique();
  users.text('avatar').notNullable().defaultTo('https://avatarfiles.alphacoders.com/219/219973.jpg');
  users.text('user_title', 30).defaultTo('New User');
  users.text('email', 30).notNullable().unique();
  users.text('password', 30).notNullable();
  users.date('birthday');
  users.text('website', 30);
  users.text('sex', 10);
  users.text('location', 30);
  users.text('bio', 128);
  users.text('signature', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};