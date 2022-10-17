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
     
};

const token = (req, res) => res.status(200).send();

export { signUp, signIn, token };