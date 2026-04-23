const mongoose = require('mongoose');
const { validateCreateUser, validateUpdateUser } = require('../validations/userValidation');

// Middleware to validate user data for POST
const validateUserCreate = (req, res, next) => {
    const { error } = validateCreateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

// Middleware to validate user data for PUT
const validateUserUpdate = (req, res, next) => {
    const { error } = validateUpdateUser(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

// Middleware to validate ObjectId for routes with :id
const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }
    next();
};

module.exports = {
    validateUserCreate,
    validateUserUpdate,
    validateObjectId
};