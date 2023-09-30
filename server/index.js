import express from 'express';
import config from 'config';

const PORT = config.get('Index.ServerPort');
const DB_URL = config.get('Index.DB_URL');

const app = express();

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