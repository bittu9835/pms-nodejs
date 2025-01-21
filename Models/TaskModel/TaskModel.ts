
import mongoose from 'mongoose';
export default (connection: any) => {
    const schema = new connection.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        progress: {
            type: String,
            enum: ['Not Started', 'In Progress', 'Completed'],
            default: 'Not Started',
            required: true
        },
        priority: {
            type: String,
            enum: ['Urgent', 'Important', 'Medium', 'Low'],
            default: 'Medium',
            required: true
        },
        dueDate: {
            type: Date,
            required: false
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            require: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        createsAt: {
            type: Date,
            required: false 
        },
        modifiedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        modifiedAt: {
            type: Date,
            required: false
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project',
            required: false
        }
    });
    const TaskModel = connection.model('Task', schema);
    return TaskModel;
}