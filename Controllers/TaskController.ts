import { TaskModel } from "../Models";


export default {
    createTask: async (req:any, res:any)=>{
        try {
            const task = await TaskModel.create(req.body);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    },
    getTasks: async (req:any, res:any)=>{
        try {
            const tasks = await TaskModel.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    },
    getTask: async (req:any, res:any)=>{
        try {
            const task = await TaskModel.findById(req.params.id);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    },
    updateTask: async (req:any, res:any)=>{
        try {
            const task = await TaskModel.findByIdAndUpdate(req.params.id,);
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    },
    updateTaskProgress: async (req:any, res:any)=>{
        try {
            const task = await TaskModel.findByIdAndUpdate(req.params.id, {progress: req.body.progress});
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({message: (error as any).message});
        }
    }
}