"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const ShareHolderBusiness_1 = require("../business/ShareHolderBusiness");
const ShareHolderController_1 = __importDefault(require("../controller/ShareHolderController"));
const ShareHolderDatabase_1 = require("../data/ShareHolderDatabase");
exports.userRouter = express_1.default.Router();
const shareHolderController = new ShareHolderController_1.default(new ShareHolderBusiness_1.ShareHolderBusiness(new ShareHolderDatabase_1.ShareHolderDatabase()));
exports.userRouter.get("/shareholders", shareHolderController.getAllShareHolders);
exports.userRouter.put("/shareholders", shareHolderController.addShareHolderController);
exports.userRouter.delete("/shareholders/:id", shareHolderController.DeleteUser);
//# sourceMappingURL=UserRouter.js.map