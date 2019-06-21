import express from "express";
export const userRouter = express.Router();

function handleRouterUserHome(req,res){
  res.send("user home");
}
function handleRouterUserEdit(req,res){
  res.send("user edit");
}
function handleRouterUserPassword(req,res){
  res.send("user psasword");
}
userRouter.get("/",handleRouterUserHome);
userRouter.get("/edit",handleRouterUserEdit);
userRouter.get("/password",handleRouterUserPassword);
