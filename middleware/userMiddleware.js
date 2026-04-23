const mongoose = require('mongoose');
const {
    validateCreateUser,
    validateUpdateUser,
} = require('../validations/userValidation');

const formatValidationError = (error) =>
    error.details.map((detail) => detail.message).join(', ');

const validateUserCreate = (req, res, next) => {
    const { error } = validateCreateUser(req.body);

    if (error) {
        return res.status(400).json({ message: formatValidationError(error) });
    }

    next();
};

const validateUserUpdate = (req, res, next) => {
    const { error } = validateUpdateUser(req.body);

    if (error) {
        return res.status(400).json({ message: formatValidationError(error) });
    }

    next();
};

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
    validateObjectId,
};
