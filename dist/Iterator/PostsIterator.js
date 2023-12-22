"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostsIterator = /** @class */ (function () {
    function PostsIterator(posts, conditions) {
        this.conditions = conditions;
        this.index = 0;
        this.posts = posts;
    }
    PostsIterator.prototype.hasNext = function () {
        return this.index < this.posts.length;
    };
    PostsIterator.prototype.next = function () {
        var conditionSatisfied = false;
        var _loop_1 = function () {
            var post = this_1.posts[this_1.index];
            if (this_1.conditions.every(function (condition) { return condition(post); })) {
                conditionSatisfied = true;
                return { value: post };
            }
            this_1.getNext();
        };
        var this_1 = this;
        while (conditionSatisfied) {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        }
        ;
        if (!conditionSatisfied) {
            return null;
        }
        return this.posts[this.index];
    };
    PostsIterator.prototype.getNext = function () {
        return this.index = this.index + 1;
    };
    return PostsIterator;
}());
exports.default = PostsIterator;
