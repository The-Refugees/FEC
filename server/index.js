var express = require('express');
var sharp = require('sharp');
var axios = require('axios');
const fsPromise = require('fs/promises');

var AUTH_TOKEN = require('./config.js');

var app = express();
var port = 3000;

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

app.get('/overview/:productID', (req, res)=> {
  var style;
  var styleList;
  var rating;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${req.params.productID}/styles?product_id=${req.params.productID}`, {headers: {Authorization: AUTH_TOKEN }})
  .then( (response) => {
    for (var i of response.data.results ) {
      if(i['default?']) {
        style = i;
        i.photos.map((photoObj, k) => {
          //console.log("and the photo is ", photoObj.thumbnail_url);
          fsPromise.writeFile(`${__dirname}/imageData/${k}-small.jpg`, photoObj.thumbnail_url)
          .catch(()=>console.log('error making file'))
          .then( (result) => {
            axios({ url: photoObj.thumbnail_url, responseType: "arraybuffer" })
            .then( (res) => {
              sharp(res.data)
              .resize(100,150, {fit: 'contain'})
              .toFile(`${__dirname}/imageData/${k}-small.jpg`)
              .catch( (err)=>{console.log("No Sharp isnt working", err)});
            })
          })
          .then(()=> {
            fsPromise.readFile(`${__dirname}/imageData/${k}-small.jpg`)
            .then((result)=>{
              photoObj.thumbnail_url=result;
              console.log('what is this ', style.photos.thumbnail_url);
            })
            .catch(()=>console.log('I cant read the file I just wrote'));
          })
        })
        styleList = response.data.results;
        break;
      }
    }
  })
  .then( () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta?product_id=${req.params.productID}`, {headers: {Authorization: AUTH_TOKEN }})
    .then( (response) => {
      //console.log("what is my response data here? ", response.data);
      var total = 0;
      var avg = 0;
      for(var key in response.data.ratings) {
        total += Number(response.data.ratings[key]);
        avg += Number(key)*Number(response.data.ratings[key]);
      }
      avg=avg/total;
      rating=[total, avg];
    })
    .then( () => {
      console.log('got here', style);

      res.status(200).send({style, styleList, rating});
    })
    .catch( (err) => {
      console.log('Error getting rating information', err);
      res.status(404).send('Error getting rating information');
    });
  })
  .catch( (err) => {
    console.log('Error getting product information', err);
    res.status(404).send('Error getting product information');
  });
})

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})