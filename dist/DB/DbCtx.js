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
exports.DbCtx = void 0;
const mongodb_1 = require("mongodb");
class DbCtx {
    constructor(uri, dbName, db, client) {
        this.uri = uri;
        this.dbName = dbName;
        this.db = db;
        this.client = client;
    }
    static connect(uri, dbName) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield mongodb_1.MongoClient.connect(uri);
            const db = client.db(dbName);
            return new DbCtx(uri, dbName, db, client);
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
        });
    }
    dropDatabaseForTest() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.uri.includes("localhost") && !this.uri.includes("127.0.0.1"))
                throw new Error("This method is only for localhost");
            if (!this.dbName.includes("-test-"))
                throw new Error("This method is only for test databases");
            yield this.db.dropDatabase();
        });
    }
    getDb() {
        return this.db;
    }
    getUri() {
        return this.uri;
    }
    getDbName() {
        return this.dbName;
    }
    ping() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.db.stats();
        });
    }
}
exports.DbCtx = DbCtx;
