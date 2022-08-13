var models = require('../models/movies.js')

var getMovies = (req, res) => {
  var queryStr = 'SELECT * FROM movies'
  models.getMovies(queryStr, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).json(results);
    }
  })
};

var postMovies = (req, res) => {
  var queryStr = `INSERT movies (title) VALUE (?)`
  var queryArgs = [req.body.title];
  models.postMovies(queryStr, queryArgs, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  })
};



module.exports.getMovies = getMovies;
module.exports.postMovies = postMovies;