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
const ShareHolderBusiness_1 = require("./../business/ShareHolderBusiness");
const shareHolderBusiness = new ShareHolderBusiness_1.ShareHolderBusiness;
class ShareHolderController {
    constructor() {
        this.getAllShareHolders = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield shareHolderBusiness.getAllShareHoldersBusinees();
                res.status(200).send(result);
            }
            catch (error) {
                res.status(500).send("Erro");
                console.log(error);
            }
        });
        this.addShareHolderController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, lastName, participation } = req.body;
                const result = yield shareHolderBusiness.addShareHolderBusiness(name, lastName, participation);
                res.status(201).end(result);
            }
            catch (error) {
                res.status(500).send("Erro");
            }
        });
        this.DeleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield shareHolderBusiness.deleteShareholder(id);
                res.status(200).send(result);
            }
            catch (error) {
            }
        });
    }
}
exports.default = ShareHolderController;
