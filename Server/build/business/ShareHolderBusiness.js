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
const ShareHolderDatabase_1 = require("../data/ShareHolderDatabase");
const shareHolderDatabase = new ShareHolderDatabase_1.ShareHolderDatabase();
class ShareHolderBusiness {
    constructor() {
        this.getAllShareHoldersBusinees = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield shareHolderDatabase.getAllShareHoldersDatabase();
            return result;
        });
        this.addShareHolderBusiness = (name, lastName, participation) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield shareHolderDatabase.createShareholderDataBase(name, lastName, participation);
                console.log(result);
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.deleteShareholder = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield shareHolderDatabase.deleteShareHolderDatabase(id);
        });
    }
}
exports.ShareHolderBusiness = ShareHolderBusiness;
