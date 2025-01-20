


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
            type: connection.Schema.Types.ObjectId,
            ref: 'User',
            require: false
        },
        createdBy: {
            type: connection.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        createsAt: {
            type: Date,
            default: Date.now
        },
        modifiedBy: {
            type: connection.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        modifiedAt: {
            type: Date,
            default: Date.now
        }
    });
    const ProjectModel = connection.model('Project', schema);
    return ProjectModel;
}