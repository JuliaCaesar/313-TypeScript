"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = exports.greeting = exports.foo = void 0;
exports.foo = 10;
function greeting() {
    console.log('hello');
}
exports.greeting = greeting;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
