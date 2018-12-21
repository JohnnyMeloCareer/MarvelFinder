// Your server.js file should require the basic npm packages we've used in class: express and path.

// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");

// Express app instance
var app = express();


// Port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080; 

// Parse application/ urlencoded
// Set extended to true to parse nested objects
app.use(bodyParser.urlencoded({ extended: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))

// This allows us to parse some custom's thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// We then use the retrieved records from the database to populate our HTML file.
app.use(bodyParser.text({ type: 'text/html' }))

// This make my public folder the route of the folder directory.
app.use(express.static("public"));
// ROUTER
// Points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listten(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});