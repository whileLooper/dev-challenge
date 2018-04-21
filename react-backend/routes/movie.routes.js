module.exports = (app) => {
  const movies = require('../controllers/movie.controller.js');

  // Get all movies
  app.get('/movies', movies.findAll);

  // Get a one movie with title
  app.get('/movies/:title', movies.findOne);
}
