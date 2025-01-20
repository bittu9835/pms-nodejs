
import {ProjectModel} from '../Models/index'

export default {
    createProject: async (req: any, res: any) => {
        try {
            const { name } = req.body;
            const project = await ProjectModel
                .findOne({ name });
            if (project) {
                return res.status(400).json({ message: "Project already exists" });
            }
            const newProject = await ProjectModel.create(req.body);
            res?.status(200).json({
                message: 'Request Successful',
                data: newProject
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    },
    getProject: async (req: any, res: any) => {
        try {
            const projects = await ProjectModel.find();
            res?.status(200).json({
                message: 'Request Successful',
                data: projects
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    }
}