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
exports.registerAllModules = registerAllModules;
const DBModule_1 = require("../DB/DBModule");
const ConfigModule_1 = require("../Config/ConfigModule");
function registerAllModules(container) {
    return __awaiter(this, void 0, void 0, function* () {
        const modules = [
            new ConfigModule_1.ConfigModule(),
            new DBModule_1.DbModule(),
        ];
        for (const m of modules)
            yield m.register(container);
    });
}
