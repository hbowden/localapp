var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname, './public/html/index.html'));
})

app.set('port', 5000);

app.listen(process.env.PORT || app.get('port'), function () {
  console.log('Listening on port: ', app.get('port'));
});