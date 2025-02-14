"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentConfig = void 0;
const isDefined_1 = require("../isDefined");
class EnvironmentConfig {
    constructor(envs = [], optionalEnvs = []) {
        this.envs = envs;
        this.optionalEnvs = optionalEnvs;
        envs.forEach((env) => {
            if (!(0, isDefined_1.isDefined)(process.env[env]) && !this.isOptional(env))
                throw new Error(`Environment variable ${env} is not set`);
        });
    }
    isOptional(v) {
        return this.optionalEnvs.includes(v);
    }
    get(v) {
        const env = process.env[v];
        if (this.isOptional(v))
            throw new Error(`Trying to get optional env ${v} with get method. You should use getWithDefault instead`);
        if (!(0, isDefined_1.isDefined)(env))
            throw new Error(`Environment variable ${v} is not set`);
        return env;
    }
    getWithDefault(v, defaultValue) {
        const env = process.env[v];
        if (!(0, isDefined_1.isDefined)(env))
            return defaultValue;
        return env;
    }
}
exports.EnvironmentConfig = EnvironmentConfig;
