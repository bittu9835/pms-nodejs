import { TaskModel } from "../Models";
import ServerResponseHandler from "../ServerResponce/ServerResponse";

const response = new ServerResponseHandler();


export default {
    createTask: async (req: any, res: any) => {
        try {
            req.body['createdBy'] = req.user.userId;
            req.body['createsAt'] = new Date();
            const task = await TaskModel.create(req.body);
            response.handleSuccess(res, task, 'Task created successfully');
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    },
    getTasks: async (req: any, res: any) => {
        try {
            const tasks = await TaskModel.find({createdBy: req.user.userId});
            response.handleSuccess(res, tasks);
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    },
    getTask: async (req: any, res: any) => {
        try {
            const task = await TaskModel.findById(req.params.id);
            response.handleSuccess(res, task);
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    },
    updateTask: async (req: any, res: any) => {
        try {
            req.body['modifiedBy'] = req.user.userId;
            req.body['modifiedAt'] = new Date();
            const task = await TaskModel.findByIdAndUpdate(req.params.id,);
            response.handleSuccess(res, task);
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    },
    updateTaskProgress: async (req: any, res: any) => {
        try {
            if (!req.body.progress) {
                response.badRequest(res, 'Progress field is required');
            }
            if (!req.params.id) {
                response.badRequest(res, 'Task ID is required');
            }
            req.body['modifiedBy'] = req.user.userId;
            req.body['modifiedAt'] = new Date();
            const task = await TaskModel.findByIdAndUpdate(req.params.id, { progress: req.body.progress });
            response.handleSuccess(res, task);
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    },
    deleteAllTasks: async (req: any, res: any) => {
        console.log('deleteAllTasks')
        try {
            const tasks = await TaskModel.deleteMany({});
            console.log(tasks,'tasks')
            response.handleSuccess(res, tasks, 'All tasks deleted successfully');
        } catch (error: any) {
            response.somethingWentWrong(res, error.message);
        }
    }
}