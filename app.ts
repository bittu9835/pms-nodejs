import express from 'express';
import cors from 'cors';
import {ENV} from './dotenv';
import API from './API';


const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());
app.use('/api', API);

import('./DB/DBconnection');

app.listen(ENV.APP_PORT, () => {
    console.log(`Server is running on port ${ENV.APP_PORT}`);
});