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
var UserModel_1 = __importDefault(require("./UserModel"));
var JWTService_1 = __importDefault(require("./JWTService"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (userDTO) {
        return __awaiter(this, void 0, void 0, function () {
            var name, email, password, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = userDTO.name, email = userDTO.email, password = userDTO.password;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, UserModel_1.default.create({ name: name, email: email, password: password })];
                    case 2:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 3:
                        error_1 = _a.sent();
                        console.log('Can not create user', error_1);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.loginUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserModel_1.default.findOne({ where: { email: email, password: password } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            console.log('User not found');
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, { user: user, token: JWTService_1.default.generateToken({ id: user.id }) }];
                    case 2:
                        error_2 = _a.sent();
                        console.log('Can not login user', error_2);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserModel_1.default.findOne({ where: { id: id } })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        error_3 = _a.sent();
                        console.log('Can not get user', error_3);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserModel_1.default.findAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                    case 2:
                        error_4 = _a.sent();
                        console.log('Can not get users', error_4);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.updateUser = function (id, userDTO) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, email, password, user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        name_1 = userDTO.name, email = userDTO.email, password = userDTO.password;
                        return [4 /*yield*/, UserModel_1.default.findOne({ where: { id: id } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            console.log('User not found');
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, user.update({ name: name_1, email: email, password: password })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, user];
                    case 3:
                        error_5 = _a.sent();
                        console.log('Can not update user', error_5);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, UserModel_1.default.findOne({ where: { id: id } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            console.log('User not found');
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, user.destroy()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, user];
                    case 3:
                        error_6 = _a.sent();
                        console.log('Can not delete user', error_6);
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.logoutUser = function (email, token) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserModel_1.default.findOne({ where: { email: email } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            console.log('User not found');
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, JWTService_1.default.decodeToken(token)];
                    case 2:
                        error_7 = _a.sent();
                        console.log('Can not logout user', error_7);
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
