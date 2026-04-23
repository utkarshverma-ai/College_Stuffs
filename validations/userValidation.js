const Joi = require('joi');

// Schema for address object
const addressSchema = Joi.object({
    city: Joi.string().min(1).max(100).required(),
    pincode: Joi.number().integer().min(100000).max(999999).required()
});

// Schema for marks object in array
const marksSchema = Joi.object({
    subject: Joi.string().min(1).max(100).required(),
    score: Joi.number().min(0).max(100).required()
});

// Schema for creating a new user (POST)
const createUserSchema = Joi.object({
    name: Joi.string().min(1).max(100).optional(),
    age: Joi.number().integer().min(1).max(120).optional(),
    course: Joi.string().min(1).max(100).optional(),
    skills: Joi.array().items(Joi.string().min(1).max(100)).optional(),
    address: addressSchema.optional(),
    isActive: Joi.boolean().optional(),
    marks: Joi.array().items(marksSchema).optional()
}).min(1);

// Schema for updating a user (PUT)
const updateUserSchema = Joi.object({
    name: Joi.string().min(1).max(100).optional(),
    age: Joi.number().integer().min(1).max(120).optional(),
    course: Joi.string().min(1).max(100).optional(),
    skills: Joi.array().items(Joi.string().min(1).max(100)).optional(),
    address: addressSchema.optional(),
    isActive: Joi.boolean().optional(),
    marks: Joi.array().items(marksSchema).optional()
}).min(1);

// Validation functions
const validateCreateUser = (data) => {
    return createUserSchema.validate(data);
};

const validateUpdateUser = (data) => {
    return updateUserSchema.validate(data);
};

module.exports = {
    createUserSchema,
    updateUserSchema,
    validateCreateUser,
    validateUpdateUser
};
