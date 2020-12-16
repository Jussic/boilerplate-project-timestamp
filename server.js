// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
// some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// require statements

const getTimestamp = dateString => ({
  unix: date.getTime(),
  utc: date.toUTCString()
});

// functions - {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
// If Null -{ error : "Invalid Date" }
//valid date should return a JSON object in milliseconds
// If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
//An empty date parameter should return the current time in a JSON object with a unix key
//An empty date parameter should return the current time in a JSON object with a utc key

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Request to /api/timestamp/ - empty param
app.get("/api/timestamp/", (req,res) => {
    let timestamp = new Date();
    return res.json({
      unix: timestamp.getTime(),
      utc: timestamp.toUTCString()
    });
});

app.get("/api/timestamp/:dateString",  (req, res) =>  {
    const { dateString } = req.params;
    let timestamp = new Date(dateString);

  if (timestamp.toString() === "Invalid Date") {
    timestamp = new Date(parseInt(dateString));
    console.log('The', timestamp);
  };
  if (timestamp.toString() === "Invalid Date") {
  return res.json({
      error: "Invalid Date"
    })
  }
  else {
      return res.json({
      unix: timestamp.getTime(),
      utc: timestamp.toUTCString()
    })
  }
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
