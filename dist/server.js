"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var AuthRouter_1 = __importDefault(require("./AuthModule/AuthRouter"));
var PostRouter_1 = __importDefault(require("./PostModule/PostRouter"));
var BlogRouter_1 = __importDefault(require("./BlogModule/BlogRouter"));
var path = __importStar(require("path"));
var Server = /** @class */ (function () {
    function Server() {
        // create expressjs application
        this.app = (0, express_1.default)();
        // configure application
        this.config();
        // add routes
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(express_1.default.static(path.join(__dirname, 'public')));
        this.app.use(body_parser_1.default.json({ limit: '50mb' }));
        this.app.use(body_parser_1.default.urlencoded({
            extended: true,
        }));
        this.app.use((0, cors_1.default)());
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
    };
    Server.prototype.routes = function () {
        var authRouter = new AuthRouter_1.default();
        var postRouter = new PostRouter_1.default();
        var blogRouter = new BlogRouter_1.default();
        this.app.use(authRouter.path, authRouter.router);
        this.app.use(postRouter.path, postRouter.router);
        this.app.use(blogRouter.path, blogRouter.router);
    };
    return Server;
}());
exports.Server = Server;
