var express = require('express');
var axios = require('axios');
//var AUTH_TOKEN = require('./config.js');

var app = express();
var port = 3001;

app.use(express.json());
console.log(__dirname + '/../dist')
app.use(express.static(__dirname + '/../dist'));

app.get('/products', (req, res)=> {

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/`, {headers: {Authorization: AUTH_TOKEN }})
    .then( (response) => {
      res.status(200).send(response.data);
    })
    .catch( (err) => {
      console.log('am I getting this error? ', err);
      res.status(404).send('Cannot get initial Product Data');
    });
})

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})