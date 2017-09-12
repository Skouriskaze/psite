var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/product', function(req, res) {
    res.render('pages/product');
});

app.get('/template', function(req, res) {
    res.render('pages/index');
});


app.listen(3000, function() {
    console.log('Leggo port 3000');
});
