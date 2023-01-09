import { ShareHolderBusiness } from "./business/ShareHolderBusiness";
import { app } from "./controller/app";
import ShareHolderController from "./controller/ShareHolderController";
import { ShareHolderDatabase } from "./data/ShareHolderDatabase";

const shareHolderController = 
     new ShareHolderController(
     new ShareHolderBusiness
    (new ShareHolderDatabase())
);

app.get("/shareholders", shareHolderController.getAllShareHolders);
app.put("/shareholders", shareHolderController.addShareHolderController);
app.delete("/shareholders/:id", shareHolderController.DeleteUser);
