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
      throw new Error(error.message(" 400 - Bad Request"));
    }
  };

  addShareHolderBusiness = async (input: AddInputDto) => {
    try {
      const { name, lastName, participation } = input;

      if (!name || !lastName || !participation) {
        throw new Error("Preencha os campos name,lastName,participation");
      }

      const user = new ShareHolder(name, lastName, participation);

      const result = await this.shareHolderDatabase.createShareholderDataBase(
        user
      );

      //console.log(result);
      /* result.send(result) */
    } catch (error: any) {
      
    }
  };

  deleteShareholder = async (id: string) => {
    try {
      const result = await this.shareHolderDatabase.deleteShareHolderDatabase(
        id
      );

      return result;
    } catch (error: any) {
      throw new Error(error.message(" 400 - Bad Request"));
    }
  };
}
