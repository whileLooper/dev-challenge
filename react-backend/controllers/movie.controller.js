const Movie = require('../models/movie.model');

// Retrieve and return all movies from the database.
exports.findAll = (req, res) => {
  Movie.find({}, 'TitleName')
    .lean()
    .then(movies => {
      // map movies title name as new array
      res.json(movies);
      
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving movies.'
      });
    });
};

// Find a one movie with a title
exports.findOne = (req, res) => {
};
