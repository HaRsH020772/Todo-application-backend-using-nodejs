//* express set-up
const express = require('express');
const app = express();
const cors = require('cors');

//* Middleware set-up
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

//* Intialise the routes
const todoSection = require('./controller/todoController');

//* Setting the outer route
app.use('/todo', todoSection);

module.exports = app;
