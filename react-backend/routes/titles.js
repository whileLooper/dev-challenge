var express = require('express');
var router = express.Router();
var movies = require('../controllers/movie.controller.js');
/* GET users listing. */
router.get('/', movies.findAll);

module.exports = router;
