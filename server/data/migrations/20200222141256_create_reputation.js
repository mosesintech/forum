
exports.up = function(knex) {
    return knex.schema.createTable('reputation', rep => {
        rep.increments();
        rep.integer('from_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        rep.integer('to_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        rep.boolean('is_positive').notNullable().defaultTo(true);
        rep.text('reason', 30).notNullable();
        rep.timestamp('given_date').notNullable().defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('reputation');
};
