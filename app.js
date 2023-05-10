const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use('/', routes);
//app.use('/games', routes);

app.listen(port, function() {
  console.log('Server running on port ' + port);
});

module.exports = app;
