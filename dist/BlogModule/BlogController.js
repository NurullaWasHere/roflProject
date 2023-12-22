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
var BlogController = /** @class */ (function () {
    function BlogController(blogService, reviewService) {
        this.blogService = blogService;
        this.reviewService = reviewService;
        this.createBlog = this.createBlog.bind(this);
        this.getBlogs = this.getBlogs.bind(this);
        this.getBlog = this.getBlog.bind(this);
        this.createReview = this.createReview.bind(this);
    }
    BlogController.prototype.createBlog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, blogTitle, description, image, blog;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, blogTitle = _a.blogTitle, description = _a.description, image = _a.image;
                        return [4 /*yield*/, this.blogService.createBlog({ blogTitle: blogTitle, description: description, image: image })];
                    case 1:
                        blog = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(blog, res)];
                }
            });
        });
    };
    BlogController.prototype.getBlogs = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var blogs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.getBlogs()];
                    case 1:
                        blogs = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(blogs, res)];
                }
            });
        });
    };
    BlogController.prototype.getBlog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, blog, reviews;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.blogService.getBlog(Number(id))];
                    case 1:
                        blog = _a.sent();
                        return [4 /*yield*/, this.reviewService.getReviewsForBlog(Number(id))];
                    case 2:
                        reviews = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt({ blog: blog, reviews: reviews }, res)];
                }
            });
        });
    };
    BlogController.prototype.createReview = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var review;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reviewService.createReviewForBlog(req.body.reviewText, req.body.id)];
                    case 1:
                        review = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(review, res)];
                }
            });
        });
    };
    BlogController.prototype.deleteBlog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var blog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blogService.deleteBlog(Number(req.params.id))];
                    case 1:
                        blog = _a.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(blog, res)];
                }
            });
        });
    };
    BlogController.prototype.updateBlog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, blogTitle, description, image, blog;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, blogTitle = _a.blogTitle, description = _a.description, image = _a.image;
                        return [4 /*yield*/, this.blogService.updateBlog(Number(req.params.id), { blogTitle: blogTitle, description: description, image: image })];
                    case 1:
                        blog = _b.sent();
                        return [2 /*return*/, ResponseBodyAdapter_1.default.adapt(blog, res)];
                }
            });
        });
    };
    return BlogController;
}());
exports.default = BlogController;
