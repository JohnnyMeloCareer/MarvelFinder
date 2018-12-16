// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on placeholder-data, etc

var placeholder = require("../data/placeholderData");
var placeholder = require("../data/placeholderData");

// ROUTING 
module.exports = function(app) {
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

app.get("/api/placeholder", function(req, res) {
    res.json(placeholderData);
});

app.get("api/placeholder", function(req, res) {
    res.json(placeholderData);
});

// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server
// In each of the below cases, when a user submits form data (a JSON object)
// the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a placeholder request... this data is sent to the server...)
// Then the server saves the data to the placeholderData array)

app.post("/api/placeholder", function(req, res) {
// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
// re.body is available since we're using the body parsing middleware
if (placeholderData.length < 10) {
    placeholderData.push(req.body);
    res.json(true);
}
else {
    placeholderData.push(req.body);
    res.json(false);
}
});

app.post("/api/clear", function(req, res) {
// Empty out the arrays of data
placeholderData.length = [];
placeholderData.length = [];

res.json({ ok: true });
});
};