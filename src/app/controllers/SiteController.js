const Course = require('../models/Course');

class SiteController {
  // [get] /
  index(req, res) {
    // res.render('home');
    Course.find({}, function (err, courses) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: 'get data fail' });
      }
    });
  }

  // [get] /search
  search(req, res) {
    console.log(res, req);
    res.send('news');
  }
}

module.exports = new SiteController();
