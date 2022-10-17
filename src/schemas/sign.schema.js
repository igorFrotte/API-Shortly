import Joi from 'joi';

const signUpSchema = Joi.object({
    name: Joi.string().required().min(1),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(1),
    confirmPassword: Joi.string().required().valid(Joi.ref('password'))
});

const signInSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(1),
});

export {signInSchema, signUpSchema};