import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routers/auth.routers.js';
import urlRouter from './routers/url.routers.js';
import userRouter from './routers/user.routers.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(urlRouter);
app.use(userRouter);

// Route for testing app
app.get('/status', (req, res) => {
    res.send('ok');
    return;
}); 

app.listen(process.env.PORT, () => console.log(`Listening to PORT ${process.env.PORT}`));