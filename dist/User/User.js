"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Email_1 = require("../Email/Email");
class User {
    constructor(dto) {
        this.dto = dto;
    }
    get id() {
        return this.dto.id;
    }
    getEmail() {
        return new Email_1.Email(this.dto.email).toString();
    }
    getGivenName() {
        var _a;
        return (_a = this.dto.givenName) !== null && _a !== void 0 ? _a : "";
    }
    getFamilyName() {
        var _a;
        return (_a = this.dto.familyName) !== null && _a !== void 0 ? _a : "";
    }
    getDeletedAt() {
        if (!this.dto.deleted)
            throw new Error("User is not deleted");
        return this.dto.deleted.deletedAt;
    }
    hasLoggedAtLeastOnce() {
        return !!this.dto.lastLogIn;
    }
}
exports.User = User;
