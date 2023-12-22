"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BlogController_1 = __importDefault(require("./BlogController"));
var BlogService_1 = __importDefault(require("./BlogService"));
var ReviewService_1 = __importDefault(require("../ReviewModule/ReviewService"));
var BlogRouter = /** @class */ (function () {
    function BlogRouter() {
        this.path = "/blogs";
        this.router = (0, express_1.Router)();
        this.controller = new BlogController_1.default(BlogService_1.default, ReviewService_1.default);
        this.init();
    }
    // Initialize the Blog controller routes pathes.
    BlogRouter.prototype.init = function () {
        this.router.post("/", this.controller.createBlog);
        this.router.get("/", this.controller.getBlogs);
        this.router.get("/:id", this.controller.getBlog);
        this.router.post("/:id/createReview", this.controller.createReview);
    };
    return BlogRouter;
}());
exports.default = BlogRouter;
