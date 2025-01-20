import express from 'express';
const TaskRouter = express.Router();
import TaskController from '../Controllers/TaskController';


TaskRouter.post('/addTask', TaskController.createTask);

export default TaskRouter;