import express from 'express';
import config from 'config';
import authRouter from "./routes/authRouter.js"
import corsMiddleware from './middleware/cors.middleware.js';

const PORT = config.get('Index.ServerPort');

const app = express();

app.use(corsMiddleware)
app.use(express.json())
app.use('/api', authRouter);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("Server running on port: ", PORT);
        })
    } catch (e) {
        console.error(e)
    }
}

start();