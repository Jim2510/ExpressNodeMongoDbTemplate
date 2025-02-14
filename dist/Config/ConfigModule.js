"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModule = void 0;
const EnvironmentConfig_1 = require("./EnvironmentConfig");
const EnvironmentEnum_1 = require("./EnvironmentEnum");
const ConfigModuleIocTokens_1 = require("./ConfigModuleIocTokens");
class ConfigModule {
    register(container) {
        const config = new EnvironmentConfig_1.EnvironmentConfig(Object.values(EnvironmentEnum_1.EnvironmentEnum), [
            EnvironmentEnum_1.EnvironmentEnum.Port,
        ]);
        container.register(ConfigModuleIocTokens_1.ConfigModuleIoCTokens.EnvironmentConfig, {
            useValue: config,
        });
    }
}
exports.ConfigModule = ConfigModule;
