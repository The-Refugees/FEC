var express = require('express');
var app = express();
var port = 3001;

app.use(express.json());
console.log(__dirname + '/../dist')
app.use(express.static(__dirname + '/../dist'));


app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})