var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    var students = ['Sean', 'Drew', 'Daniel', 'Kyle', 'Rishi', 'Liz', 'Anna',
                    'Ryan', 'Casey', 'Connie', 'Sarah', 'Andy', 'Michael',
                    'Paul', 'Mason'];
  res.render('index', { studentArray: students });
});



router.get('/movies', function(req, res, next) {
    var baseUrl = 'https://api.themoviedb.org/3';
    var encoding = 'language=en-US&page=1&include_adult=false';
    var imageBase = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2';
    var imageFUll = 'https://image.tmdb.org/t/p/w800';
    var append = `append_to_response=credits,release_dates`;
    var apiKey = 'api_key=1f809315a3a8c0a1456dd83615b4d783';
    var movieUrl = `${baseUrl}/movie/now_playing?${apiKey}&page=1`;
    var movies = [];
    request.get(movieUrl, function(error, response, data) {
        movies = data.results
        console.log(movies);
        res.render('movies', { movieArray: movies });
    });
})

module.exports = router;
