"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PostsIterator_1 = __importDefault(require("./PostsIterator"));
var ExtendedPost = /** @class */ (function () {
    function ExtendedPost(title, content, author, createdAt, updatedAt, name, description, category, id) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.name = name;
        this.description = description;
        this.category = category;
        this.id = id;
    }
    ExtendedPost.prototype.getPostByName = function (posts, name) {
        var iterator = this.createIterator(posts, [function (post) { return post.name === name; }]);
    };
    ExtendedPost.prototype.createIterator = function (posts, conditions) {
        return new PostsIterator_1.default(posts, conditions);
    };
    return ExtendedPost;
}());
exports.default = ExtendedPost;
