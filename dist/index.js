"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importStar(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const registerAllModules_1 = require("./IoC/registerAllModules");
const tsyringe_1 = require("tsyringe");
const ConfigModuleIocTokens_1 = require("./Config/ConfigModuleIocTokens");
const EnvironmentEnum_1 = require("./Config/EnvironmentEnum");
const UserRouter_1 = require("./User/UserRouter");
dotenv_1.default.config();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, registerAllModules_1.registerAllModules)(tsyringe_1.container);
        const app = (0, express_1.default)();
        app.use((0, express_1.json)());
        const config = tsyringe_1.container.resolve(ConfigModuleIocTokens_1.ConfigModuleIoCTokens.EnvironmentConfig);
        const port = config.getWithDefault(EnvironmentEnum_1.EnvironmentEnum.Port, "3760");
        app.use("/user", UserRouter_1.userRouter);
        app.listen(port, () => {
            console.log(`Service listening on http://localhost:${port}`);
        });
    });
}
start().then(_ => { });
