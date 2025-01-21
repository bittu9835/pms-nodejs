import express from "express";
import {verifyToken} from "./JWT";
const Api = express();


import UserRouter from './Routes/UserRoute';
import TaskRouter from './Routes/TaskRoute';
import loginRoute from "./Routes/loginRoute";
import projectRoute from "./Routes/ProjectRoute";


Api.use('/auth', loginRoute);
Api.use('/user', UserRouter);
Api.use(verifyToken);
Api.use('/task', TaskRouter);
Api.use('/project', projectRoute);

export default Api;
