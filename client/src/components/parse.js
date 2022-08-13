var axios = require('axios');

var getAll = (callback) => {
  axios.get('/classes/movies', {responseType: 'json'})
  .then((response) => {
    callback(response.data);
  })
  .catch((err) => {
    console.error(err);
  })
}

var addMovie = (data) => {
  axios.post('/classes/movies', data)
  // .then((res) => console.log(data, res))
  .catch((err) => {
    console.error(err);
  })
}

var updateStatus = (movie) => {
  axios.post('/classes/movies/update', movie)
  .catch((err) => console.error(err));
}

module.exports.getAll = getAll;
module.exports.addMovie = addMovie;
module.exports.updateStatus = updateStatus;