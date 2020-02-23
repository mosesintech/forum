
exports.up = function(knex) {
  return knex.schema.createTable('threads', thread => {
      thread.increments();
      thread.boolean('is_pinned').notNullable().defaultTo(false);
      thread.boolean('is_closed').notNullable().defaultTo(false);
      thread.text('name', 30).notNullable().unique();
      thread.integer('forum_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('forums')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      thread.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      thread.text('body', 4000).notNullable();
      thread.timestamp('posted_date').defaultTo(knex.fn.now()).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('threads');
};
