
exports.up = function(knex) {
  return knex.schema.createTable('forums', forum => {
      forum.increments();
      forum.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      forum.boolean('is_private').notNullable().defaultTo(false);
      forum.boolean('is_closed').notNullable().defaultTo(false);
      forum.text('name', 30).notNullable().unique();
      forum.text('description', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('forums');
};
