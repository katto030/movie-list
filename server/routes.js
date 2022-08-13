var controller = require('./controllers/movies.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.get('/movies', controller.getMovies);

router.post('/movies', controller.postMovies);

module.exports = router;