import express, { response } from "express";
import {AddressInfo} from "net";
import { userRouter } from "./src/router/UserRouter";
import cors from "cors"


const app = express();

//remove credential cors


/* app.use(cors({
  origin: 'https://www.section.io'
})); */

app.use(cors({
  origin: '*'
}));

/* response.setHeader("Access-Control-Allow-Origin",  "*") */
app.use(express.json());
app.use(cors())

app.use("/users", userRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});