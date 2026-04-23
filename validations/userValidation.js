const Joi = require('joi');

const addressSchema = Joi.object({
    city: Joi.string().trim().min(1).max(100).required(),
    pincode: Joi.number().integer().min(100000).max(999999).required(),
});

const marksSchema = Joi.object({
    subject: Joi.string().trim().min(1).max(100).required(),
    score: Joi.number().min(0).max(100).required(),
});

const baseUserSchema = {
    name: Joi.string().trim().min(1).max(100),
    age: Joi.number().integer().min(1).max(120),
    course: Joi.string().trim().min(1).max(100),
    skills: Joi.array().items(Joi.string().trim().min(1).max(100)),
    address: addressSchema,
    isActive: Joi.boolean(),
    marks: Joi.array().items(marksSchema),
};

const createUserSchema = Joi.object(baseUserSchema).min(1);
const updateUserSchema = Joi.object(baseUserSchema).min(1);

const validationOptions = {
    abortEarly: false,
    allowUnknown: false,
};

const validateCreateUser = (data) => createUserSchema.validate(data, validationOptions);
const validateUpdateUser = (data) => updateUserSchema.validate(data, validationOptions);

module.exports = {
    createUserSchema,
    updateUserSchema,
    validateCreateUser,
    validateUpdateUser,
};
