import express from "express";
const Api = express();


import UserRouter from './Routes/UserRoute';


Api.use('/user', UserRouter);

export default Api;
