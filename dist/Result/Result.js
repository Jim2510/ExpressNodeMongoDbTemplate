"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    constructor(isOk, errors, data = null) {
        this.isOk = isOk;
        this.errors = errors;
        this.data = data;
    }
    static success(data) {
        return new Result(true, [], data);
    }
    static fail(errors) {
        return new Result(false, errors);
    }
    static failFromResult(result) {
        return new Result(false, result.getErrors());
    }
    getErrorsAsString() {
        if (this.isOk)
            throw new Error("Cannot get errors from successfull result");
        return this.errors.map((e) => e.message).join(" / ");
    }
    getDataOrThrow() {
        if (!this.isOk)
            throw new Error(this.getErrorsAsString());
        return this.data;
    }
    getErrors() {
        if (!this.isOk)
            throw new Error("Cannot get errors from successfull result");
        return this.errors;
    }
}
exports.Result = Result;
