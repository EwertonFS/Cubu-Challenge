// import { Request, Response } from "express"
// import connection from "../connection"
// // import { shareholders } from "../data"


// export default async function deleteShareholder (
//     req: Request,
//     res: Response
// ):Promise<void>{

        
//     try {
//         const {id} = req.params
//     //ou const id = req.params.id

//     // const index:number = shareholders.findIndex(
//     //     shareholders =>shareholders.id === Number(id)
//     // )

//     // if(index > -1) shareholders.splice(index, 1)
//     await connection("SHAREHOLDERS")
//     .delete()
//     .where({id})
//     //poderia ser .where({id})

//     res.status(200).end()

//     } catch (error) {
//     res.status(500).send("Unexpected server error")
//     }
// }