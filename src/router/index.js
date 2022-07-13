const newsRouter = require('./news');
const route = (app) => {
  app.get('/', function (req, res) {
    res.render('home');
  });

  app.use('/news', newsRouter);

  // app.get('/search', function (req, res) {
  //   res.render('search');
  // });

  // app.post('/search', function (req, res) {
  //   res.send('');
  // });
};

module.exports = route;
