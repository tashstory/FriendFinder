
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;
//depends ^^

// express setup to parse body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());app.use(bodyParser.json( ));


require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);
//routes

//tells the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});