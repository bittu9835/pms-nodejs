import { UserModel } from "../Models/index";
import bcrypt from 'bcrypt'
import { generateToken } from "../JWT";
import ServerResponseHandler from "../ServerResponce/ServerResponse";

const response = new ServerResponseHandler();



export default {
    login : async (req: any, res: any) => {
        try {
            const {email, password} = req.body;
            const user = await UserModel.findOne({email});
            if(!user) {
                return res.status(400).json({message: "User not found"});
            } else {
                const isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch) {
                    return res.status(400).json({message: "Invalid credentials"});
                } else {
                    const token = generateToken(user);
                    const userDetail = await UserModel.findOne(
                        { _id: user._id },
                        { _id: 1, name: 1, email: 1}
                    )
                    response.handleSuccess(res, {token: token, user: userDetail}, 'Login successful');
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({message: error.message});
            } else {
                res.status(500).json({message: "An unknown error occurred"});
            }
        }
    }    
}