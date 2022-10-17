import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routers/auth.routers.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);

// Route for testing app
app.get('/status', (req, res) => {
    res.send('ok');
    return;
}); 

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`));