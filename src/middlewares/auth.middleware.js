import connection from "../db/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {signInSchema, signUpSchema} from '../schemas/sign.schema.js';

async function validSignUp (req, res, next) {
    const { email } = req.body;
    const validation = signUpSchema.validate(req.body, { abortEarly: false });

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

async function validSignIn (req, res, next) {
    const { email, password } = req.body;
    const validation = signInSchema.validate(req.body);

    if (validation.error) {
        const errors = validation.error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    try{
        const existUser = await connection.query('SELECT * FROM users WHERE email = $1;', [email]);

        if (!existUser.rows[0]) {
            return res.status(401).send('Email ou senha inválidos');
        }

        const validPass = bcrypt.compareSync(password, existUser.rows[0].password);

        if(!validPass) {
            return res.status(401).send('Email ou senha inválidos');
        }

        res.locals.userId = existUser.rows[0].id;

        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function validToken (req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    try {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET);
        const session = await connection.query('SELECT * FROM sessions WHERE token = $1;', [token]); 

        if (!session.rows[0]) {
            return res.status(401).send();
        }

        const user = await connection.query('SELECT * FROM users WHERE id = $1;', [decode.userId]); 

        if (!user.rows[0]) {
            return res.status(401).send();
        }

        res.locals.userId = decode.userId;

        next();
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export { validSignUp, validSignIn, validToken };