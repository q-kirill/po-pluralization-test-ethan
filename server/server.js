var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');

var app = express()

app.use(express.static(path.join(__dirname, '..','app','public')))

app.use(bodyParser.json())


const rootUrl = 'http://netflixroulette.net/api/api.php?';

app.post('/search', (req,res) => {

  const queryTerm = req.body.searchedTerm.split(' ').join('%20');

  const url = `${rootUrl}${req.body.searchType}=${queryTerm}`;

  axios.get(url)
  .then((netflixResponse) => {
    res.send(netflixResponse.data)
  })
  .catch((netflixError) => {
    res.status(200).send('No results found')
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})