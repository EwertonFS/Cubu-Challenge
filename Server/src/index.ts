import express from "express";
import {AddressInfo} from "net";
import { userRouter } from "./router/UserRouter";


/*  const expre = require('express');

const serverless = require('serverless-http')  */

const app = express();

/* module.exports.handler = serverless(app) */

app.use(express.json());
//app.use(cors())
app.use("/users", userRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});