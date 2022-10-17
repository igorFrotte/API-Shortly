import connection from "../db/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {signInSchema, signUpSchema} from '../schemas/sign.schema.js';

async function validSignUp (req, res, next) {
    const validation = signUpSchema.validate(req.body, { abortEarly: false });
    const { email } = req.body;

    if (validation.error) {
        const errors = validation.error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    try {
        const existUser = await connection.query('SELECT * FROM users WHERE email = $1;', [email]);

        if (existUser.rows[0]) {
            return res.status(409).send('Este email já existe!');
        }

        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { validSignUp };
