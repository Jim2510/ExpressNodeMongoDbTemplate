"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const isDefined_js_1 = require("../isDefined.js");
const email_validator_1 = __importDefault(require("email-validator"));
class Email {
    constructor(email) {
        this.email = email;
        if (!Email.isValid(email))
            throw new Error(`Invalid email: ${email}`);
    }
    toString() {
        return this.email.toLowerCase().trim();
    }
    getDomain() {
        var _a;
        if (!((_a = this.email) === null || _a === void 0 ? void 0 : _a.includes("@")))
            return "";
        const [, domain] = this.email.split("@");
        return domain;
    }
    includes(string) {
        var _a;
        return !!((_a = this.email) === null || _a === void 0 ? void 0 : _a.includes(string));
    }
    static isValid(email) {
        return (0, isDefined_js_1.isDefined)(email) && email_validator_1.default.validate(email);
    }
}
exports.Email = Email;
