// dependencies:

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initialize express app:

var app = express();
var port = 3000;

// var allFriends = [];

// var friend = {};

// tell express to handle data parsing:

// app.use(express.static('app/public', {index: "home.html"}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// routes in htmlRoutes.js:

require("./app/routing/htmlRoutes")(app);

var friends = require("./app/routing/apiRoutes");
var friendsJson = friends.friendsJson(app);
var friendsPopulate = friends.friendsPopulate(app);


// tell the server to start listening:

app.listen(port, function(){
    console.log("Server listening on port: " + port);
}); 