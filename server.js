// Your server.js file should require the basic npm packages we've used in class: express and path.

// Dependencies 
var express = require("express");

// Express app instance
var app = express();


// Port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080; 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {

// If the main route is hit, then we initiate a SQL query to grab all records.
// All of the resulting records are stored in the variables "results."
connection.query("SELECT * FROM placeholder", function(err, result) {

// We then use the retrieved records from the database to populate our HTML file.
for (var i = 0; i < result.length; i++) {
    html += 
    html +=
}
}
})

// ROUTER
// Points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs 
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// LISTENER
app.listten(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});