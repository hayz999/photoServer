
exports.seed = function(knex, Promise) {
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        { id: 1, description: 'Wedding photo', imageURL: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/22406245_10156920248469199_9107278640152762335_n.jpg?_nc_cat=0&oh=8f648adfe9e4b67a729cbcfc95c4f303&oe=5BFDD471'}
      ])
    }).then(() => {
      return knex.raw('ALTER SEQUENCE photos_id_seq RESTART WITH 2;')
    })
}
