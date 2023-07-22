// backend/routes/userRoutes.js
const express = require('express');
const userController = require('../controller/usercontroller');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
