import { ShareHolderDatabase } from "../data/ShareHolderDatabase";
import { ShareHolder } from "../model/ShareHolder";
import { AddInputDto } from "../types/addInputdto";

// const shareHolderDatabase = new ShareHolderDatabase();

export class ShareHolderBusiness {
  constructor(private shareHolderDatabase: ShareHolderDatabase) {}
  getAllShareHoldersBusinees = async () => {
    try {
      const result =
        await this.shareHolderDatabase.getAllShareHoldersDatabase();

      return result;
    } catch (error: any) {
      throw new Error(" 400 - Bad Request");
    }
  };

  addShareHolderBusiness = async (input: AddInputDto) => {
    try {
      const { name, lastName, participation } = input;

      if (!name || !lastName || !participation) {
        throw new Error("422 - Unprocessable Entity - Fill in the name , lastName and participation fields");
      }

      if (participation <= 0) {
        throw new Error("422 - Unprocessable Entity - the number has to be positive");
      }

      if(participation > 0){
      Math.ceil(participation)
      }
      
      const user = new ShareHolder(name, lastName, participation);

      await this.shareHolderDatabase.createShareholderDataBase(
        user
      );
        
      //console.log(result);
      /* result.send(result) */
    } catch (err:any) {
      throw new Error(" 400 - Bad Request");
    }
  };

  deleteShareholder = async (id: string) => {
    try {
      await this.shareHolderDatabase.deleteShareHolderDatabase(
        id
      );

     
    } catch (error: any) {
      throw new Error(" 400 - Bad Request");
    }
  };
}
