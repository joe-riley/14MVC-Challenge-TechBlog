const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('../config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine('hbs', exphbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

// views dir
app.set('views', __dirname + '/views');

// Routes
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
})