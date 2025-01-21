import { UserModel } from "../Models/index";
import bcrypt from 'bcrypt'
import ServerResponseHandler from '../ServerResponce/ServerResponse'

const response = new ServerResponseHandler();

export default {
    createUser: async (req: any, res: any) => {
        try {
            const { name, email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (user) {
                response.badRequest(res, 'User already exists');
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await UserModel.create({ name, email, password: hashedPassword });
                response.handleSuccess(res, newUser, 'User created successfully');
            }
        } catch (error:any) {
            console.log(error);
            response.somethingWentWrong(res, error.message);
        }
    },
    getUser: async (req: any, res: any) => {
        try {
            const users = await UserModel.find();
            response.handleSuccess(res, users);
        } catch (error:any) {
            console.log(error);
            response.somethingWentWrong(res, error.message);
        }
    }
}