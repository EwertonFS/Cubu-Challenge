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
const ShareholderMock_1 = require("./mock/ShareholderMock");
const ShareholderUserMock_1 = require("./mock/ShareholderUserMock");
const userBusinessMock = new ShareHolderBusiness_1.ShareHolderBusiness(new ShareholderDatabaseMock_1.ShareholderDatabaseMock());
describe(" Testando a camada Businees", () => {
    test("testando se vem todos usurarios do banco", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userBusinessMock.getAllShareHoldersBusinees();
        expect(result).toEqual([ShareholderUserMock_1.shareHolderUserMock1, ShareholderUserMock_1.shareHolderUserMock2]);
    }));
});
describe(" Testando a camada Businees", () => {
    test("Erro algum dos campos estão Inválidos", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions;
        try {
            const user = new ShareholderMock_1.ShareholderMock("", "Toad", "Cogumelo", 12);
            yield userBusinessMock.addShareHolderBusiness(user);
        }
        catch (error) {
            expect(error).toEqual("Missing input");
            expect(error).toEqual("401 - Unauthorized");
            console.log(error);
        }
    }));
    test("Acrescentando acionistas no banco ", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const user = new ShareholderMock_1.ShareholderMock("3", "Toad", "Cogumelo", 12);
            const result = yield userBusinessMock.addShareHolderBusiness(user);
            expect(result).toEqual(user);
        }
        catch (error) {
            error.message;
        }
    }));
});
describe(" Testando a camada Businees", () => {
    test("Testando o Deltete ", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const input = {
                id: "id_Mockado1",
                name: "Mario",
                lastName: "Koppa",
                participation: 25,
            };
            const id = input.id;
            const result = yield userBusinessMock.deleteShareholder(id);
            expect(result).toEqual(ShareholderUserMock_1.shareHolderUserMock1);
        }
        catch (error) {
            error.message;
        }
    }));
});
//# sourceMappingURL=ShareHolderBusiness.test.js.map