const newsRouter = require('./news');
const siteRouter = require('./site');
const route = (app) => {
  app.use('/news', newsRouter);
  app.use('/site', siteRouter);
};

module.exports = route;
