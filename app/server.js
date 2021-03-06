

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = require("./data/friends.js");

// create server with express
var app = express();

// set up port
var PORT = process.env.PORT || 3000;

// set up middleware (bodyParser)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// set up routes
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

// turn on server
app.listen(PORT, function() {
  console.log("you are now listening on port: " + PORT);
});
console.log("--------------------------------");


console.log(friendsArray);