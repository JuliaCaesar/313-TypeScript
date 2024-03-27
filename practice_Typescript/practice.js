// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(10, "hello"));
// let x = (num1: number, num2: number) => num1 + num2
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (newX) {
        if (newX < 0)
            throw new Error("X can't be negative"); //but it is good practice to put semi colons
        this.x = newX; //semi-colons are used to mark the end of a statemnt, it is not picky about semi-colons
    };
    return Point;
}());
var pointA = new Point(10, 20);
console.log(pointA.getX());
pointA.setX(20);
