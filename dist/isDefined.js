"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = isDefined;
function isDefined(value) {
    return value !== undefined && value !== null && !Number.isNaN(value);
}
