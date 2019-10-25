const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.get('/', (req, res) => {
  res.send('Get all users contacts');
});

// @route  POST api/users
// @desc   Add a contact
// @access Private
router.post('/', (req, res) => {
  res.send('Add new contact');
});

// @route  PUT api/users
// @desc   Update a contact
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route  DELETE api/users
// @desc   Delete a user
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a contact');
});

module.exports = router;
