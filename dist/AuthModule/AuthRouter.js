"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserService_1 = __importDefault(require("./UserService"));
var AuthController_1 = __importDefault(require("./AuthController"));
var AuthRouter = /** @class */ (function () {
    function AuthRouter() {
        this.path = "/auth";
        this.router = (0, express_1.Router)();
        this.controller = new AuthController_1.default(new UserService_1.default());
        this.init();
    }
    AuthRouter.prototype.init = function () {
        this.router.post("/register", this.controller.registerUser);
        this.router.post("/login", this.controller.loginUser);
    };
    return AuthRouter;
}());
exports.default = AuthRouter;
