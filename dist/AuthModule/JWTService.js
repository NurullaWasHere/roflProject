"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWTService = /** @class */ (function () {
    function JWTService() {
    }
    JWTService.generateToken = function (payload) {
        return jsonwebtoken_1.default.sign(payload, 'secret123', { expiresIn: '1000h' });
    };
    JWTService.verifyToken = function (token) {
        return jsonwebtoken_1.default.verify(token, 'secret123');
    };
    JWTService.decodeToken = function (token) {
        return jsonwebtoken_1.default.decode(token);
    };
    return JWTService;
}());
exports.default = JWTService;
