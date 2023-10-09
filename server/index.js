import express from 'express';
import config from 'config';
import userRouter from "./routes/userRouter.js"


const PORT = config.get('Index.ServerPort');
// const DB_URL = config.get('Index.DB_URL');

const app = express();

app.use(express.json())
app.use('/api', userRouter);

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