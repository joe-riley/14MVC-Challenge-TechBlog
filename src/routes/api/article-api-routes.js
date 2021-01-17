const router = require('express').Router();
const db = require('../../models');

// Gets all articles
router.get('/', (req, res) => {
  res.json({message: 'Gets all articles'});
});

// Gets all articles for a specific user
router.get('/:userId', (req, res) => {
  res.json({message: 'Gets all articles for a specific user'});
});

// Posts an article for the user
router.post('/', (req, res) => {
  res.json({message: 'Posts an article for the user'});
});

// Updates an article for the user
router.put('/', (req, res) => {
  res.json({message: 'Updates an article for the user'});
});

// Deletes an article for the user
router.delete('/:articleId', (req, res) => {
  res.json({message: 'Deletes an article for the user'});
});

module.exports = router;
