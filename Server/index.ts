import express from "express";
import {AddressInfo} from "net";
import { userRouter } from "./src/router/UserRouter";



const app = express();

app.use("/users", userRouter);
app.use(express.json());
//app.use(cors())

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});