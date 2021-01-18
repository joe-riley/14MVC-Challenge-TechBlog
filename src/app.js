const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// views dir
app.set('views', __dirname + '/views');

app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
}));

// public dir
app.use(express.static(__dirname + '/public'));


// get partials
// hbs.getPartials().then((partials) => {
//   console.log(partials);
// });

// Routes
app.use(require('./routes'));

app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
})