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
exports.ShareHolderBusiness = void 0;
const ShareHolder_1 = require("../model/ShareHolder");
class ShareHolderBusiness {
    constructor(shareHolderDatabase) {
        this.shareHolderDatabase = shareHolderDatabase;
        this.getAllShareHoldersBusinees = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.shareHolderDatabase.getAllShareHoldersDatabase();
                return result;
            }
            catch (error) {
                throw new Error(" 400 - Bad Request");
            }
        });
        this.addShareHolderBusiness = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastName, participation } = input;
                if (!name || !lastName || !participation) {
                    throw new Error("Preencha os campos name,lastName,participation");
                }
                const user = new ShareHolder_1.ShareHolder(name, lastName, participation);
                yield this.shareHolderDatabase.createShareholderDataBase(user);
            }
            catch (err) {
                throw new Error(" 400 - Bad Request");
            }
        });
        this.deleteShareholder = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.shareHolderDatabase.deleteShareHolderDatabase(id);
            }
            catch (error) {
                throw new Error(" 400 - Bad Request");
            }
        });
    }
}
exports.ShareHolderBusiness = ShareHolderBusiness;
//# sourceMappingURL=ShareHolderBusiness.js.map