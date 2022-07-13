const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const route = require('./router');
const app = express();
const port = 3000;
const db = require('./config/db');

db.connect();

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, '/public')));

app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

route(app);

app.listen(port, () => console.log(`server run http://localhost:${port}`));
