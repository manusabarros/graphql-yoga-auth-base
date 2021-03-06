import { UserController } from "../controllers/user-controller";
import { security } from "../controllers/permission-controller";
import { IUser } from "../models/user";

export const UserMutation = {
    signup: {
        resolve: async (parent: any, { input }: any, { user }: any): Promise<IUser> => {
            await security(user, "USER_CREATE");
            return await UserController.signup(input);
        },
    },
    updateUserById: {
        resolve: async (parent: any, { id, input }: any, { user }: any): Promise<IUser> => {
            await security(user, "USER_UPDATE");
            return await UserController.updateUserById(id, input);
        },
    },
    deleteUserById: {
        resolve: async (parent: any, { id }: any, { user }: any): Promise<IUser> => {
            await security(user, "USER_DELETE");
            return await UserController.deleteUserById(id);
        },
    },
};
