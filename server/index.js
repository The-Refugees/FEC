var express = require('express');
var axios = require('axios');
var compression = require('compression');
var AUTH_TOKEN = require('./config.js');
var cors = require('cors');


var app = express();
var port = 3001;

app.use(compression());
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname + '/../dist'));

app.get('/products', (req, res)=> {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/`, {headers: {Authorization: AUTH_TOKEN}})
    .then( (response) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
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
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    for (var i of response.data.results ) {
      styleList = response.data.results;
      if (i['default?']) {
        style = i;
        return ;
        // return Promise.all(i.photos.map((photoObj, k) => {
        //   //console.log("and the photo is ", photoObj.thumbnail_url);
        //   if (photoObj.url === null) {
        //     return '';
        //   } else {
            // return fsPromise.writeFile(`${__dirname}/../dist/lib/img/${k}-big.png`, photoObj.url)
            // .then (() => fsPromise.writeFile(`${__dirname}/../dist/lib/img/${k}-small.png`, photoObj.thumbnail_url))
            // .catch((err)=>console.log('error making files'))
            // .then(() => {return axios({ url: photoObj.url, responseType: "arraybuffer" });})
            // .then( (res) => {
            //   return sharp(res.data).resize(400,600, {fit: 'contain'})
            //     .toFile(`${__dirname}/../dist/lib/img/${k}-big.png`).catch( (err)=>console.log("Error Writing Large URLs", err)).then(()=>{console.log('wtf man')});
            // })
            // .then( ()=>{return axios({ url: photoObj.thumbnail_url, responseType: "arraybuffer" });})
            // .then( (res) => {
            //   return sharp(res.data).resize(100,150, {fit: 'contain'})
            //     .toFile(`${__dirname}/../dist/lib/img/${k}-small.png`).catch( (err)=>{console.log("Error Writing Small URLs", err)}).then(()=>{console.log('wtf man 2')});
            // })
            // .then(()=> {
            //   photoObj.url=`./lib/img/${k}-big.png`
            //   photoObj.thumbnail_url=`./lib/img/${k}-small.png`;
            //   console.log('done the hard work');
            // })
        //   }
        // }));
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
      //console.log('got here', style);
      res.setHeader('Access-Control-Allow-Origin', '*');
      //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.status(200).send({style, styleList, rating});
    })
    .catch( (err) => {
      //console.log('Error getting rating information', err);
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