import express from 'express';
const TaskRouter = express.Router();
import TaskController from '../Controllers/TaskController';


TaskRouter.post('/addTask', TaskController.createTask);
TaskRouter.put('/updateTaskProgress/:id', TaskController.updateTaskProgress);
TaskRouter.get('/getTasks', TaskController.getTasks);
TaskRouter.get('/deleteAll', TaskController.deleteAllTasks);

export default TaskRouter;