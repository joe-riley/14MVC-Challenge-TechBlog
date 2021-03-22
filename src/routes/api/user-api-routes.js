const router = require('express').Router();
const db = require('../../models');

// Gets all users
router.get('/', async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: { 
        exclude: ['password']
      }
    });
    // res.json({message: 'Gets all users'});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a specific user
router.get('/:userId', (req, res) => {
  res.json({message: 'Get a specific user'});
});

// Logs a user in
router.post('/login', (req, res) => {
  res.json({message: 'Logs a user in'});
});

// Creates a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    await req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
    });

    res.json(newUser);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  res.json({message: 'Creates a new user'});
});

// Deletes a user
router.delete('/:userId', (req, res) => {
  res.json({message: 'Deletes a user'});
});


module.exports = router;
