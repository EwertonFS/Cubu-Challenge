import { dtoMock } from "./dtoMock";
import { ShareholderMock } from "./ShareholderMock";
import {
  shareHolderUserMock1,
  shareHolderUserMock2,
} from "./ShareholderUserMock";

export class ShareholderDatabaseMock {
  public async getAllShareHoldersDatabase(): Promise<ShareholderMock[]> {
    return [shareHolderUserMock1, shareHolderUserMock2];
  }

  public async createShareholderDataBase(
    user: ShareholderMock
  ): Promise<ShareholderMock> {
    return user
  }

  public async deleteShareHolderDatabase(id: string): Promise<ShareholderMock | undefined > {
    
    if (id === "id_Mockado1") {
        return shareHolderUserMock1
    } else if (id ==="id_Mockado2") {
        return shareHolderUserMock2
    } else {
        undefined
    }
    
  }
}
