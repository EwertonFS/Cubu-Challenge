"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./controller/app");
const ShareHolderController_1 = __importDefault(require("./controller/ShareHolderController"));
const shareHolderController = new ShareHolderController_1.default;
app_1.app.get("/shareholders", shareHolderController.getAllShareHolders);
app_1.app.put("/shareholders", shareHolderController.addShareHolderController);
app_1.app.delete("/shareholders/:id", shareHolderController.DeleteUser);
