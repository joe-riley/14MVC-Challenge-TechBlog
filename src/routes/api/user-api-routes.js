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
router.get('/:userId', async (req, res) => {
  try {
    const user = await db.User.findOne({
      attributes: {
        exclude: ['password']
      },
      where: {
        id: req.params.userId
      },
    });

    if (!user) {
      res.status(404).json({message: 'User not found'});
      return;
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logs a user in
router.post('/login', async (req, res) => {
  try {
    const user = await db.User.findOne({
      attributes: {
        exclude: ['password']
      },
      where: {
        username: req.body.username,
      },
    })

    if(!user) {
      res.status(400).json({message: 'User not found'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
    });

    res.json({ user: user, message: 'User is not logged in.'});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
});

// Deletes a user
router.delete('/:userId', (req, res) => {
  res.json({message: 'Deletes a user'});
});


module.exports = router;
