var db = require('../db')

var getMovies = (query, cb) => {
  db.query(query, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results)
    }
  })
};

var postMovies = (query, args, cb) => {
  db.query(query, args, (err) => {
    if (err) {
      console.log(err)
      cb(err);
    } else {
      cb();
    }
  })
};

module.exports.getMovies = getMovies;
module.exports.postMovies = postMovies;