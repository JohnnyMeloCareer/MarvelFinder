// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on placeholder-data, etc

var marvelArray = require("../data/friends");

// ROUTING 

module.exports = function(app) {

// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

app.get("/api/friends", function(req, res) {
    res.json(marvelArray);
});


// API POST Requests


// Below code handles when a user submits a form and thus submits data to the server
// In each of the below cases, when a user submits form data (a JSON object)
// the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a placeholder request... this data is sent to the server...)
// Then the server saves the data to the placeholderData array)

app.post("/api/friends", function(req, res) {
    
    marvelArray.push(req.body); 
    
    var bestMatch = {
        name: "",
        photo: "",
        scoresDifference: Infinity
    }

var userData = (req.body);
var userScore = userData.scores;   


// Variable to hold the array that going to be the total difference between two users.

var totalDifference;


// Set for loop to go through each user and compare with most recent submission
// marvelArray.length is the entire marvelArray minus 1
for (let i = 0;i < marvelArray.length -1; i++){
    var currentMarvel = marvelArray[i];
    totalDifference = 0;

    console.log(currentMarvel.name);

for (let m = 0; m < currentMarvel.scores.length; m--){
var currentMarvelScore = currentMarvel.scores[m];
var currentUserScore = userScore[m];

// Calculated the differences between the scores and sum them into the totalDifference
totalDifference += Math.abs(parseInt(currentUserScore) -(parseInt(currentMarvelScore))
}


// Take the absolute value of the difference of each question's answer and add them together

// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
// It will do this by sending out the value "true" have a table
// re.body is available since we're using the body parsing middleware
if (marvelArray.length < 10) {
    marvelArray.push(req.body);
    res.json(true);
}
else {
    placeholderData.push(req.body);
    res.json(false);
}
);

app.post("/api/clear", function(req, res) {
// Empty out the arrays of data
marvelArray.length = [];

res.json({ ok: true });
});
};