import express from "express";
import routes from "../routes";
const userRouter = express.Router();
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";

userRouter.get(routes.home,users);
userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail,userDetail);

export default userRouter;