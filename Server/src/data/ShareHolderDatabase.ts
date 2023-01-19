import { BaseDatabase } from "./BaseDatabase";
import { shareHolder } from "../types/types";
import { ShareHolder } from "../model/ShareHolder";

export class ShareHolderDatabase extends BaseDatabase {
  private static tableName = "SHAREHOLDERS";

  getAllShareHoldersDatabase = async () => {
    const result: shareHolder = await BaseDatabase.connection(
      ShareHolderDatabase.tableName
    );

    // const result :shareHolder[] = await ShareHolderDatabase.connection.raw(`SELECT * FROM SHAREHOLDERS`)

    return result;
  };

  createShareholderDataBase = async (user: ShareHolder): Promise<any> => {
    try {
      const result: shareHolder []= await BaseDatabase.connection(
        ShareHolderDatabase.tableName
      ).insert(
        // user
        
          user
        
      );
      //ou método Row
       /*   const result :shareHolder = await ShareHolderDatabase.connection.raw(`INSERT INTO SHAREHOLDERS(name,lastName,participation)
        VALUES(
        "${name}",
        "${lastName}",
      "${participation}"
      );
      `) */

      return result;
      
    } catch (error) {
      throw new Error("Error do banco!");
    }

    // const result :shareHolder[] = await ShareHolderDatabase.connection.raw(`INSERT INTO SHAREHOLDERS(${user}) `)
  };

  deleteShareHolderDatabase = async (id: string) => {
    try {
      await BaseDatabase.connection(
        ShareHolderDatabase.tableName

        //   const result = await ShareHolderDatabase.connection.raw(`
        //  delete * FROM Actor WHERE id = '${id}'
        //   `)
      )
        .delete()
        .where({ id: id });
      
      
    } catch (error) {
      throw new Error("Error do banco !");
    }
  };
}
