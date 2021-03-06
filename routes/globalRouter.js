import express from "express";
import routes from "../routes";
const globalRouter = express.Router();
/* GET home page. */

import { home, search, getJoin, postJoin, getLogin,postLogin, logout } from "../controllers/globalController";

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;
