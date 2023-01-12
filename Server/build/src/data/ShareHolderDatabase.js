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
exports.ShareHolderDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ShareHolderDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.getAllShareHoldersDatabase = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDatabase_1.BaseDatabase.connection(ShareHolderDatabase.tableName);
            return result;
        });
        this.createShareholderDataBase = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection(ShareHolderDatabase.tableName).insert({
                    user
                });
                return result;
            }
            catch (error) {
                throw new Error("Erro do banco!");
            }
        });
        this.deleteShareHolderDatabase = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield BaseDatabase_1.BaseDatabase.connection(ShareHolderDatabase.tableName)
                    .delete()
                    .where({ id: id });
                return result;
            }
            catch (error) {
                throw new Error("Erro do banco !");
            }
        });
    }
}
exports.ShareHolderDatabase = ShareHolderDatabase;
ShareHolderDatabase.tableName = "SHAREHOLDERS";
//# sourceMappingURL=ShareHolderDatabase.js.map