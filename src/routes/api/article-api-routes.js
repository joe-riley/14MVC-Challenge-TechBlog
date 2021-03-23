const router = require('express').Router();
const db = require('../../models');

// Gets all articles
router.get('/', async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      attribute: [
        'id',
        'title',
        'content',
        'created_at',
      ],
      include: [
        {
          model: db.User,
          attribute: ['username'],
        },
      ],
    })

    res.json(posts)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

// Gets all articles for a specific user
router.get('/:userId', (req, res) => {
  res.json({message: 'Gets all articles for a specific user'});
});

// Posts an article for the user
router.post('/', async (req, res) => {
  try {
    const article = await db.Article.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });
    res.json(article);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
