const Movie = require('../models/movie.model');

/**
 * Find all movie from the table
 * response json format of all movies
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * find one movie detail by input id
 * response json format of movie detail
 * @param {*} req 
 * @param {*} res 
 */
exports.findOne = (req, res) => {
  Movie.findById(req.params.id)
    .then(detail => {
      res.json(detail);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving movies.'
      });
    });
};
