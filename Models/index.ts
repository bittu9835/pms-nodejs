import connection from '../DB/DBconnection'
import User from "./UserModel/UserModel";
import Task from "./TaskModel/TaskModel";
import Project from "./ProjectModel/ProjectModel";



export const UserModel = User(connection);
export const TaskModel = Task(connection);
export const ProjectModel = Project(connection);
