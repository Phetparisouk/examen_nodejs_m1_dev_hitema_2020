const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const v1 = express.Router();

// To be implemented!
// toujours garder bodyParser en premier dans les appels à use()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

//Liste de tout les gens, utiliser la route /peoples 
v1.get('/peoples', async (request, response) => {
    const peoples = await peopleService.getPeople();
    response.send(peoples);
});

//Modifier une personne
v1.put('/people/:id', async (request, response) => {
    const id = request.params.id;
    const people = request.body;

    const is_zero = 0;
    const isFind = people.name && people.name.length > is_zero;

    if (!isFind) return response.sendStatus(HttpStatus.BAD_REQUEST);
    const result = peopleService.updatePeople(id, people);
    response.sendStatus(result);
});



module.exports = app;
