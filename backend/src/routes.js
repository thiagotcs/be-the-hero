const express = require('express');


const OngController = require('./controllers/OngController');
const inicidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',inicidentController.index);
routes.post('/incidents',inicidentController.create);
routes.delete('/incidents/:id',inicidentController.delete);

module.exports = routes;


