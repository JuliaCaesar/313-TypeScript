/** In class 3-25-2024  */ 
// function add(num1, num2){
//     return num1 + num2;
// }

// console.log(add(10, "hello"));

// let x = (num1: number, num2: number) => num1 + num2


/** In class 3-27-2024 */
class Point{
    // private x: number;
    // private y: number;

    // constructor(x:number, y: number){
    //     this.x = x;
    //     this.y = y;
    // }

    constructor(private _x: number, private _y: number){} //this line is equivalent to lines 10-16

    get x(){
        return this._x;
    }

    set x(newX: number){
        if (newX < 0)
            throw new Error("X can't be negative"); //but it is good practice to put semi colons
        this._x = newX; //semi-colons are used to mark the end of a statemnt, it is not picky about semi-colons
    }
}

let pointA = new Point(10, 20);
console.log(pointA.x);
// pointA.setX(20);
pointA.x = 20