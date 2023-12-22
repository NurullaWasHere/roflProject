"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseBodyAdapter = /** @class */ (function () {
    function ResponseBodyAdapter() {
    }
    ResponseBodyAdapter.adapt = function (data, res) {
        if (data !== null) {
            var httpResponseCode = 200;
            var httpResponseMessage = "Http request successful";
            return res.json({
                data: data,
                httpResponseCode: httpResponseCode,
                httpResponseMessage: httpResponseMessage
            });
        }
        else {
            var httpResponseCode = 400;
            var httpResponseMessage = "Http request failed";
            return res.json({
                data: data,
                httpResponseCode: httpResponseCode,
                httpResponseMessage: httpResponseMessage
            });
        }
    };
    return ResponseBodyAdapter;
}());
exports.default = ResponseBodyAdapter;
