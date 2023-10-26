import express from 'express';
import config from 'config';
import authRouter from "./routes/authRouter.js"
import postRouter from "./routes/postRouter.js"
import corsMiddleware from './middleware/cors.middleware.js';

const PORT = config.get('Index.ServerPort');

const app = express();

app.use(corsMiddleware)
app.use(express.json())
app.use('/api', authRouter, postRouter);

const start = () => {
    try {
        app.listen(5000, () => {
            console.log("Server running on port: ", PORT);
        })
    } catch (e) {
        console.error(e)
    }
}

start();