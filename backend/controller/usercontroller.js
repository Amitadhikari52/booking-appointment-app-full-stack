// backend/controllers/userController.js
const pool = require('../models/db');

exports.createUser = (req, res, next) => {
  debugger;
  const { username, email, phone_number } = req.body;
  debugger;
  pool.execute('INSERT INTO users (username, email, phone_number) VALUES (?, ?, ?)', [username, email, phone_number])
    .then((result) => {
      const newUser = {
        id: result.insertId,
        username,
        email,
        phone_number,
      };
      res.status(201).json(newUser);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while saving the user' });
    });
};

exports.getAllUsers = (req, res, next) => {
  pool.execute('SELECT * FROM users')
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while fetching users' });
    });
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.id;

  pool.execute('DELETE FROM users WHERE id = ?', [userId])
    .then(() => {
      res.status(200).json({ message: 'User deleted successfully' });
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while deleting the user' });
    });
};

exports.updateUser = (req, res, next) => {
  const { username, email, phone_number } = req.body;
  const userid = req.params.id;
  console.log(username, email, phone_number, userid);
  debugger;
  pool.execute('UPDATE users SET username = ?, email = ?, phone_number = ? WHERE id = ?',
  [username, email, phone_number, userid]).then((result) => {
      res.status(200).json({ message: 'User updated successfully' });
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while updating the user' });
    });
};
