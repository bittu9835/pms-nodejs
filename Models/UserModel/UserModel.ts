export default (connection: any) => {
    const schema = new connection.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    });
    const UserModel = connection.model('User', schema);
    return UserModel;
};
