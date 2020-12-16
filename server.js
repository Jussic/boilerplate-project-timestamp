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

const getTimestamp = date => ({
  unix: date.getTime(),
  utc: date.toUTCString()
});

// functions - {"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}
// If Null -{ error : "Invalid Date" }
//valid date should return a JSON object in milliseconds
// If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }
//An empty date parameter should return the current time in a JSON object with a unix key
//An empty date parameter should return the current time in a JSON object with a utc key

app.get("/api/timestamp/", (req,res) => {
  const {date} = req.url.splice('/api/timestamp/'));
  var dateReq = new Date(date);


// Request to /api/timestamp/1451001600000
  if(isNaN(dateReq))
  {
    return res.json({
    error: "Invalid Date"
  })
  }
  else 
  {
    return res.json({
      unix: dateReq.getTime(),
      utc: dateReq.toUTCString()
   })
  }
  
app.get("/api/timestamp/",  (req, res) =>  {

    const {date} = req.url.split("/api/timestamp/")[1];
    let timestamp;

if (dateString === undefined || dateString.trim() === "") {
     timestamp = getTimestamp(new Date());
    } else {
      const date = !isNaN(dateString)
        ? new Date(parseInt(dateString))
        : new Date(dateString);

      if (!isNaN(date.getTime())) {
        timestamp = getTimestamp(date);
      } else {
        timestamp = {
          error: "invalid date"
        };
}
{

    var dateReq = new Date(date);
    return res.json({
      unix: dateReq.getTime(),
      utc: dateReq.toUTCString()
    })
})


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
