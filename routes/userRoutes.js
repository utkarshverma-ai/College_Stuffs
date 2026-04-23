const express = require('express');
const userController = require('../controllers/userController');
const {
    validateUserCreate,
    validateUserUpdate,
    validateObjectId,
} = require('../middleware/userMiddleware');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:id', validateObjectId, userController.getUserById);
router.post('/users', validateUserCreate, userController.addUser);
router.put('/users/:id', validateObjectId, validateUserUpdate, userController.updateUser);
router.delete('/users/:id', validateObjectId, userController.deleteUser);

module.exports = router;
