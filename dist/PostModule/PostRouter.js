"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var PostService_1 = __importDefault(require("./PostService"));
var PostController_1 = __importDefault(require("./PostController"));
var ReviewService_1 = __importDefault(require("../ReviewModule/ReviewService"));
var PostRouter = /** @class */ (function () {
    function PostRouter() {
        this.path = "/posts";
        this.router = (0, express_1.Router)();
        this.controller = new PostController_1.default(PostService_1.default, ReviewService_1.default);
        this.init();
    }
    // Initialize the Post controller routes pathes.
    PostRouter.prototype.init = function () {
        this.router.post("/", this.controller.createPost);
        this.router.get("/", this.controller.getPosts);
        this.router.get("/:id", this.controller.getPost);
        this.router.post("/createReview", this.controller.createReview);
    };
    return PostRouter;
}());
exports.default = PostRouter;
