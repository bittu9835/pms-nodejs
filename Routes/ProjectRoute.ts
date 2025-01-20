import express from 'express';

const ProjectRouter = express.Router();
import ProjectController from '../Controllers/ProjectController';

ProjectRouter.post('/addProject', ProjectController.createProject);
ProjectRouter.get('/getProject', ProjectController.getProject);

export default ProjectRouter;