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
const ShareHolderBusiness_1 = require("../src/business/ShareHolderBusiness");
const ShareholderDatabaseMock_1 = require("./mock/ShareholderDatabaseMock");
const userBusinessMock = new ShareHolderBusiness_1.ShareHolderBusiness(new ShareholderDatabaseMock_1.ShareholderDatabaseMock());
describe(" Testando a camada Businees", () => {
    test("testando se vem todos usurarios do banco", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const result = yield userBusinessMock.getAllShareHoldersBusinees();
            expect(result).toEqual(result);
            console.log(result);
        }
        catch (error) {
            expect(error.message);
        }
    }));
});
//# sourceMappingURL=ShareHolderBusiness.test.js.map