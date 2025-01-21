import ServerResponseHandler from '../ServerResponce/ServerResponse'
import {ProjectModel} from '../Models/index'

const response = new ServerResponseHandler();

export default {
    createProject: async (req: any, res: any) => {
        try {
            const { name } = req.body;
            const project = await ProjectModel
                .findOne({ name });
            if (project) {
                response.badRequest(res, 'Project already exists');
            }
            const newProject = await ProjectModel.create(req.body);
            response.handleSuccess(res, newProject, 'Project created successfully');
        } catch (error:any) {
            console.log(error);
            response.somethingWentWrong(res, error.message);
        }
    },
    getProject: async (req: any, res: any) => {
        try {
            const projects = await ProjectModel.find();
            res?.status(200).json({
                message: 'Request Successful',
                data: projects
            });
        } catch (error:any) {
            console.log(error);
            response.somethingWentWrong(res, error.message);
        }
    }
}