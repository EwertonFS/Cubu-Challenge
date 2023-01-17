import { AddInputDto } from "./../types/addInputdto";
import { ShareHolderBusiness } from "./../business/ShareHolderBusiness";
import { Request, Response } from "express";

// const shareHolderBusiness = new ShareHolderBusiness(); sempre deixar dentro da classe
export default class ShareHolderController {
  // injeção de depencia no constructor
  // chamamos no constructor x:x 

  constructor(
    private shareHolderBusiness: ShareHolderBusiness // private shareHolderBusiness : ShareHolderBusiness
  ) {}

  //criar metodo de requisição
  getAllShareHolders = async (req: Request, res: Response): Promise<void> => {
    try {
    // levar a informação para outra camanda o melhor é atravez da dto ou no parametro
      const result =
        await this.shareHolderBusiness.getAllShareHoldersBusinees();
        res.setHeader("Access-Control-Allow-Origin",  "*")
        res.status(200).send(result);
    } catch (error) {
      res.status(500).send("Erro");
      console.log(error);
    }
  };

  addShareHolderController = async (
    req: Request,
    res: Response
  ): Promise<any> => {
    
      const { name, lastName, participation } = req.body;
      // seria interessante inserir um dto
      const input: AddInputDto = {
        name,
        lastName,
        participation,
      };

    try {
      const result = await this.shareHolderBusiness.addShareHolderBusiness(
        input
      );
        console.log(result)
      res.status(201).end(result);
    } catch (error: any) {
      res.status(500).send("Erro");
    }
  };

  DeleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const result = await this.shareHolderBusiness.deleteShareholder(id);

      res.status(200).send(result);
    } catch (error:any) {
      throw new Error(" 400 - Bad Request")
    }
  };
}
