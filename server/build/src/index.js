"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShareHolderBusiness_1 = require("./business/ShareHolderBusiness");
const app_1 = require("./controller/app");
const ShareHolderController_1 = __importDefault(require("./controller/ShareHolderController"));
const ShareHolderDatabase_1 = require("./data/ShareHolderDatabase");
const shareHolderController = new ShareHolderController_1.default(new ShareHolderBusiness_1.ShareHolderBusiness(new ShareHolderDatabase_1.ShareHolderDatabase()));
app_1.app.get("/shareholders", shareHolderController.getAllShareHolders);
app_1.app.put("/shareholders", shareHolderController.addShareHolderController);
app_1.app.delete("/shareholders/:id", shareHolderController.DeleteUser);
//# sourceMappingURL=index.js.map