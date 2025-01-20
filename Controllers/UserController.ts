import { UserModel } from "../Models/index";
import bcrypt from 'bcrypt'

export default {
    createUser: async (req: any, res: any) => {
        try {
            const { name, email, password } = req.body;
            const user = await UserModel.findOne({ email });
            if (user) {
                return res.status(400).json({ message: "User already exists" });
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = await UserModel.create({ name, email, password: hashedPassword });
                res?.status(200).json({
                    message: 'Request Successful',
                    data: newUser
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    },
    getUser: async (req: any, res: any) => {
        try {
            const users = await UserModel.find();
            res?.status(200).json({
                message: 'Request Successful',
                data: users
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Internal Server Error" });
        }
    }
}