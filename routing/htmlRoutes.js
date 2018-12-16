// Dependencies 
// Include the path package to get the correct file path for our html
var path = require("path");

// ROUTING

module.exports = function(app) {
// HTML GET Requests
// Code below handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

// Default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};