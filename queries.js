const database = require('./connection')

module.exports = {
  list() {
    return database('photos')
      .select()
  },
  read(id) {
    return database('photos')
      .select()
      .where('id', id)
      .first()
  },
  create(photo) {
    return database('photos')
      .insert(photo)
      .returning('*')
      .then(record => record[0])
  },
  update(id, photo) {
    return database('photos')
      .where('id', id)
      .update(photo)
      .returning('*')
      .then(record => record[0])
  },
  delete(id) {
    return database('photos')
      .where('id', id)
      .del()
      .returning('*')
  }
}