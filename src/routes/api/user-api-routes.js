const router = require('express').Router();
const db = require('../../models');

// Gets all users
router.get('/', (req, res) => {
  res.json({message: 'Gets all users'});
});

// Get a specific user
router.get('/:userId', (req, res) => {
  res.json({message: 'Get a specific user'});
});

// Logs a user in
router.post('/', (req, res) => {
  res.json({message: 'Logs a user in'});
});

// Creates a new user
router.post('/', (req, res) => {
  res.json({message: 'Creates a new user'});
});

// Deletes a user
router.delete('/:userId', (req, res) => {
  res.json({message: 'Deletes a user'});
});



module.exports = router;
