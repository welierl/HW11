const route = require('express').Router()
const controller = require('../controllers/todo')

route.get('/health-check', controller.healthCheck)
route.get('/', controller.index)
route.get('/:id', controller.detail)
route.post('/add', controller.add)

module.exports = route