import connection from "../db/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, 12);

  try {
    await connection.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3);',
        [name, email, passwordHash]
    );

    return res.status(201).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const signIn = async (req, res) => {
  const userId = res.locals.userId;

  try {
    const token = jwt.sign({
        userId,
    }, process.env.TOKEN_SECRET,
    {
        expiresIn: "4h"
    });

    await connection.query(
      'INSERT INTO sessions (token, "userId") VALUES ($1, $2);',
      [token, userId]
    );

    return res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { signUp, signIn };