
import express from "express";
import { ShareHolderBusiness } from "../business/ShareHolderBusiness";
import ShareHolderController from "../controller/ShareHolderController";
import { ShareHolderDatabase } from "../data/ShareHolderDatabase";





export const  userRouter = express.Router();

const shareHolderController = 
     new ShareHolderController(
     new ShareHolderBusiness
    (new ShareHolderDatabase())
);

userRouter.get("/shareholders", shareHolderController.getAllShareHolders);
userRouter.put("/shareholders", shareHolderController.addShareHolderController);
userRouter.delete("/shareholders/:id", shareHolderController.DeleteUser);
