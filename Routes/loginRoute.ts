import express from "express";
import login from "../Controllers/login";

const loginRoute = express.Router();



loginRoute.post('/login', login.login);

export default loginRoute;