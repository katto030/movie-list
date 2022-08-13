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

module.exports.getAll = getAll;