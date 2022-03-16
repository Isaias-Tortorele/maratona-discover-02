const express = require('express')
const routes = express.Router()
const ProfileController = require('./controllers/ProfileControlle')
const JobController = require('./controllers/JobController')
const DeshboardController = require('./controllers/DeshboardController')


routes.get('/', DeshboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)


module.exports = routes;