const express = require('express')
const router = express.Router()

const queries = require('../queries')

router.get('/', (req, res, next) => {
  queries.list().then(photos => {
    res.json({ photos })
  }).catch(next)
})

router.get('/:id', (req, res, next) => {
  queries.read(req.params.id).then(photo => {
    photo ? res.json({ photo }) : res.status(404).json({ message: 'Not Found' })
  }).catch(next)
})

router.post('/', (req, res, next) => {
  queries.create(req.body).then(photo => {
    res.status(201).json({ photo: photo })
  }).catch(next)
})

router.delete('/:id', (req, res, next) => {
  queries.delete(req.params.id).then(() => {
    res.status(200).json({ deleted: true })
  }).catch(next)
})

router.put('/:id', (req, res, next) => {
  queries.update(req.params.id, req.body).then(photo => {
    res.json({ photo: photo[0] })
  }).catch(next)
})

module.exports = router