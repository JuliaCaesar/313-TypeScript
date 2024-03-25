// Classes allow us to create 'blueprints' for objects

// How to create a class

class Car {
    //properties/instance variables. 
    //TS provides three acess modifiers: public, private and protected
    // default access modifier is public so Car class is public and any instance variable declared without a access modifier is also public.
    private engineName: string;
    private gears: number;
    private speed: number;

    //constructor
    constructor(speed: number) {
        this.speed = speed || 0;
    }

    //functions
    accelerate(): void {
        this.speed++;
    }

    throttle():void {
        this.speed--;
    }

    getSpeed():void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class
let myCar = new Car(5);

myCar.accelerate();
myCar.getSpeed();

console.log(Car.numberOfWheels());//calling the static function on the class name


//Another class - Point 
class Point{
    private x: number;
    private y: number;

    //Note: a TS class can have only one constructor
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
}

let pointA = new Point(10, 20);

//TS provides a simple way to declare the instance variables in the constructor itself
//The instance variables are initilized using the values passed to the constructor.
class AnotherPoint{
    // private x: number;
    // private y: number;
    // Instead the instance variables are declared inside the parethesis of the constructor
    constructor(private x:number, private y:number){
        // WE don't need to initialize the instance variables. TS will automatically initialize them using the values passed to the constructor.
        // this.x = x;
        // this.y = y;
    }
}

let pointB = new AnotherPoint(10, 20);

