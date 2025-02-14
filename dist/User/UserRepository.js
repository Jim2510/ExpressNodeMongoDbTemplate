"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var UserRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
exports.found = found;
exports.notFound = notFound;
require("reflect-metadata");
const tsyringe_1 = require("tsyringe");
const User_1 = require("./User");
const DbCtx_1 = require("../DB/DbCtx");
const DbModuleIoCToken_1 = require("../DB/DbModuleIoCToken");
const NotFoundException_1 = require("../Error/NotFoundException");
function found(v) {
    return {
        found: true,
        value: v,
    };
}
function notFound() {
    return {
        found: false,
    };
}
let UserRepository = UserRepository_1 = class UserRepository {
    constructor(dbCtx) {
        this.collection = dbCtx.getDb().collection(UserRepository_1.collectionName);
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = yield this.collection.findOne({
                id,
            });
            if (!dto)
                throw new NotFoundException_1.NotFoundException(`User with id ${id} not found`);
            return new User_1.User(dto);
        });
    }
    safelyGetByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = yield this.collection.findOne({
                email: email.toString(),
            });
            if (!dto)
                return notFound();
            return found(new User_1.User(dto));
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const dtos = yield this.collection.find({}).toArray();
            return dtos.map(dto => new User_1.User(dto));
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdAt = new Date();
            yield this.collection.insertOne(Object.assign(Object.assign({}, user), { email: user.email.toString(), createdAt: createdAt }));
            return { user: yield this.getById(user.id), createdAt };
        });
    }
};
exports.UserRepository = UserRepository;
UserRepository.collectionName = "users";
exports.UserRepository = UserRepository = UserRepository_1 = __decorate([
    (0, tsyringe_1.singleton)(),
    __param(0, (0, tsyringe_1.inject)(DbModuleIoCToken_1.DbModuleIoCTokens.DbCtx)),
    __metadata("design:paramtypes", [DbCtx_1.DbCtx])
], UserRepository);
