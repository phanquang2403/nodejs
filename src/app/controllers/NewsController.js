class NewsController {
  // [GET] / news
  index(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.render('news');
  }

  // [GET] / news/:slug
  show(req, res) {
    res.send('news');
  }
}

module.exports = new NewsController();
