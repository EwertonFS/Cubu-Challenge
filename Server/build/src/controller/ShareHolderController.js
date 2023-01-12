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
class ShareHolderController {
    constructor(shareHolderBusiness) {
        this.shareHolderBusiness = shareHolderBusiness;
        this.getAllShareHolders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.shareHolderBusiness.getAllShareHoldersBusinees();
                res.status(200).send(result);
            }
            catch (error) {
                res.status(500).send("Erro");
                console.log(error);
            }
        });
        this.addShareHolderController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, lastName, participation } = req.body;
            const input = {
                name,
                lastName,
                participation,
            };
            try {
                const result = yield this.shareHolderBusiness.addShareHolderBusiness(input);
                console.log(result);
                res.status(201).end(result);
            }
            catch (error) {
                res.status(500).send("Erro");
            }
        });
        this.DeleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.shareHolderBusiness.deleteShareholder(id);
                res.status(200).send(result);
            }
            catch (error) {
                throw new Error(error.message(" 400 - Bad Request"));
            }
        });
    }
}
exports.default = ShareHolderController;
//# sourceMappingURL=ShareHolderController.js.map