import express from "express";
const UserRouter = express.Router();
import UserController from "../Controllers/UserController";

UserRouter.post('/addUser', UserController.createUser);
export default UserRouter;