
exports.up = function(knex) {
  return knex.schema.createTable('categories', cat => {
      cat.increments();
      cat.boolean('is_private').notNullable().defaultTo(false);
      cat.boolean('is_closed').notNullable().defaultTo(false);
      cat.text('name', 30).notNullable().unique();
      cat.text('description', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');
};
