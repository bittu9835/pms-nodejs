import express from 'express';
import cors from 'cors';
import { ENV } from './dotenv';
import API from './API';
import mongoose from 'mongoose';


const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use('/api', API);

import('./DB/DBconnection');

app.get('/ping', async (req, res) => {
    try {
        if (mongoose.connection.readyState === 1) {
            res.status(200).send('Server is running and connected to MongoDB');
        } else {
            res.status(500).send('Server is running but not connected to MongoDB');
        }
    } catch (error) {
        res.status(500).send('Error checking MongoDB connection');
    }
});

app.listen(ENV.APP_PORT, () => {
    console.log(`Server is running on port ${ENV.APP_PORT}`);
});