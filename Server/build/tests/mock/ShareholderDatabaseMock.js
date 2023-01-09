"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareholderDatabaseMock = void 0;
const ShareholderUserMock_1 = require("./ShareholderUserMock");
class ShareholderDatabaseMock {
    getAllShareHoldersDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            return [ShareholderUserMock_1.shareHolderUserMock1, ShareholderUserMock_1.shareHolderUserMock2];
        });
    }
    createShareholderDataBase(ShareholderMock) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    deleteShareHolderDatabase(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let bank = [ShareholderUserMock_1.shareHolderUserMock1, ShareholderUserMock_1.shareHolderUserMock2];
            if (id === "1") {
                bank.splice(0, 1);
            }
            if (id === "2") {
                bank.splice(1, 1);
            }
            else {
                undefined;
            }
        });
    }
}
exports.ShareholderDatabaseMock = ShareholderDatabaseMock;
//# sourceMappingURL=ShareholderDatabaseMock.js.map