const router = require('express').Router();
const path = require('path');

// index route loads view.html
router.get('/', (req, res) => {
  res.render('index', {layout: 'main'});
});

module.exports = router;
