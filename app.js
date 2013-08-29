var express = require('express'),
    app = express(),
    exphbs = require('express3-handlebars'),
    hbs;


// Set the rendering engine to Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Set directories
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// Index Page
app.get('/', function(request, response, next) {
    response.render('index');
});


// Start App
app.listen(3000);
console.log('App running on port 3000');