
exports.up = function(knex) {
  return knex.schema.createTable('posts', post => {
      post.increments();
      post.text('body', 4000).notNullable();
      post.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      post.integer('thread_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('threads')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      post.timestamp('posted_date').defaultTo(knex.fn.now()).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts');
};
