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
exports.DbModule = void 0;
const DbCtx_js_1 = require("./DbCtx.js");
const EnvironmentEnum_1 = require("../Config/EnvironmentEnum");
const DbModuleIoCToken_1 = require("./DbModuleIoCToken");
const ConfigModuleIocTokens_1 = require("../Config/ConfigModuleIocTokens");
class DbModule {
    register(container) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = container.resolve(ConfigModuleIocTokens_1.ConfigModuleIoCTokens.EnvironmentConfig);
            const dbCtx = yield DbCtx_js_1.DbCtx.connect(config.get(EnvironmentEnum_1.EnvironmentEnum.DbUri), config.get(EnvironmentEnum_1.EnvironmentEnum.DbName));
            container.register(DbModuleIoCToken_1.DbModuleIoCTokens.DbCtx, {
                useValue: dbCtx,
            });
        });
    }
}
exports.DbModule = DbModule;
