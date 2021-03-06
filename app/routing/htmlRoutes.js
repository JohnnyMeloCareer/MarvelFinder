// Dependencies [A state in which one object uses a function of another object.]
// Include the path package to get the correct file path for our html
var path = require("path");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Code below handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // Asterik is the wild card
  // Default call to bring you home, as long you're in the server.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
