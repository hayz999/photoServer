
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments()
    table.text('description')
    table.text('imageURL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('photos')
};
