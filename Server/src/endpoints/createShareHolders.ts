// import { Request, Response } from "express";
// import connection from "../connection";
// import { shareHolders } from "../types/types";



// export default async function createShareHolders (
//     req: Request,
//     res:Response
// ):Promise<void>
// {


//    try {
//     const {name , lastName,participation} = req.body

//     // console.log(req.headers["content-type"])

//     // shareholders.push({
//     //     id:Date.now(), 
//     //     name,
//     //     lastName, 
//     //     participation

//     // })
//     const result : shareHolders = await connection("SHAREHOLDERS")
//     .insert({name , lastName,participation})
    
//     res.status(201).end()
//     //poderia ser res.end porque não devolve body na requisição se nao seria send
//    } catch (error) {
//     res.status(500).send("Unexpected server error")
//    }
// }

