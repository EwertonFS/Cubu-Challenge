import { ShareHolderBusiness } from "../src/business/ShareHolderBusiness";
import { dtoMock } from "./mock/dtoMock";
import { ShareholderDatabaseMock } from "./mock/ShareholderDatabaseMock";
import { ShareholderMock } from "./mock/ShareholderMock";
import {
  shareHolderUserMock1,
  shareHolderUserMock2,
} from "./mock/ShareholderUserMock";

const userBusinessMock = new ShareHolderBusiness(
  new ShareholderDatabaseMock() as any
);

describe(" Testando a camada Businees", () => {
  test("testando se vem todos usurarios do banco", async () => {
    /* expect.assertions
    
     try { */

    const result = await userBusinessMock.getAllShareHoldersBusinees();
    expect(result).toEqual([shareHolderUserMock1, shareHolderUserMock2]);

    /*  } catch (error) {
      
     }
       */
  });
});

describe(" Testando a camada Businees", () => {
  test("Erro algum dos campos estão Inválidos", async () => {
    expect.assertions;

    try {
      const user = new ShareholderMock("", "Toad", "Cogumelo", 12);

      await userBusinessMock.addShareHolderBusiness(user);
    } catch (error) {
      expect(error).toEqual("Missing input");
      expect(error).toEqual("401 - Unauthorized");
      console.log(error);
    }
  });

  test("Acrescentando acionistas no banco ", async () => {
    expect.assertions(1);
    try {
      const user = new ShareholderMock("3", "Toad", "Cogumelo", 12);
      const result = await userBusinessMock.addShareHolderBusiness(user);
      // console.log(result)

      expect(result).toEqual(user);
    } catch (error: any) {
      error.message;
    }
  });
});

describe(" Testando a camada Businees", () => {
  test("Testando o Deltete ", async () => {
    expect.assertions(1);

    try {
      const input: dtoMock = {
        id: "id_Mockado1",
        name: "Mario",
        lastName: "Koppa",
        participation: 25,
      };

      const id = input.id as string;
      //console.log(id)
      const result = await userBusinessMock.deleteShareholder(id);

      //console.log(result)
      expect(result).toEqual(shareHolderUserMock1);
    } catch (error: any) {
      error.message;
    }
  });
});
