
exports.up = function(knex) {
    return knex.schema.createTable('messages', tbl => {
        tbl.increments();
        tbl.integer('from_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('to_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.text('title', 30).notNullable();
        tbl.text('body', 4000).notNullable();
        tbl.timestamp('sent_date').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('messages');
};
