import {UserModel} from "../Models/index";

export default{
    createUser : async (req: any, res: any) => {
        try {
            const {name, email, password} = req.body;
            const newUser = await UserModel.create({name, email, password});
            res?.status(200).json({
                message: 'Request Successful',
                data: newUser
            });
        } catch (error) {
            console.log(error);
            res.status(500).send({message: "Internal Server Error"});
        }
    }
}