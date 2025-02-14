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
exports.userRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const UserController_1 = require("./UserController");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.get("/user-by-email", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userController = tsyringe_1.container.resolve(UserController_1.UserController);
    yield userController.getAllUsersByEmail(req, res, next);
}));
userRouter.get("/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userController = tsyringe_1.container.resolve(UserController_1.UserController);
    yield userController.getAllUsers(req, res, next);
}));
userRouter.post("/user", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userController = tsyringe_1.container.resolve(UserController_1.UserController);
    yield userController.createUser(req, res, next);
}));
