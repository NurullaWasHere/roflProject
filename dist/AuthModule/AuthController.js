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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseBodyAdapter_1 = __importDefault(require("../Adapter/ResponseBodyAdapter"));
var AuthController = /** @class */ (function () {
    function AuthController(service) {
        this.service = service;
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    AuthController.prototype.registerUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, password, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.service.createUser({ name: name, email: email, password: password })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(user, res)];
                }
            });
        });
    };
    AuthController.prototype.loginUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        if (!email || !password)
                            return [2 /*return*/, res.status(400).json({ error: 'Email and password are required' })];
                        return [4 /*yield*/, this.service.loginUser(email, password)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    AuthController.prototype.logoutUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, token, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, token = _a.token;
                        if (!email)
                            return [2 /*return*/, res.status(400).json({ error: 'Email is required' })];
                        return [4 /*yield*/, this.service.logoutUser(email, token)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    AuthController.prototype.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.body.email;
                        if (!email)
                            return [2 /*return*/, res.status(400).json({ error: 'Email is required' })];
                        return [4 /*yield*/, this.service.getUser(email)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    AuthController.prototype.getUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getUsers()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    AuthController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name, email, password, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, id = _a.id, name = _a.name, email = _a.email, password = _a.password;
                        return [4 /*yield*/, this.service.updateUser(id, { name: name, email: email, password: password })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    AuthController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.body.email;
                        return [4 /*yield*/, this.service.deleteUser(email)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(response, res)];
                }
            });
        });
    };
    return AuthController;
}());
exports.default = AuthController;
