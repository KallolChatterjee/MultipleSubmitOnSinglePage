var express = require('express'),
    jade = require('jade'),
    ejs = require('ejs');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', jade.__express);
app.engine('html', ejs.renderFile);
app.listen(8081);
app.get('/', function (req, res) {
  res.render('Landing');
});
app.get('/html', function(req, res){
  app.render('view.html', function(err, renderedData){
    res.send(renderedData);
  });
});
app.post('/next1', function(req, res){
  console.log("Next button clicked");
  res.send();
});
app.post('/previous1', function(req, res){
  console.log("Previous button clicked");
  res.send();
});
