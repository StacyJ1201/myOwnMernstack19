// Class - has been added in ES6 as a special and upgraded function to give us features similar to
// other class based programming languages

//class keyword is used to create class and we can create assoicated methods as we did in constuctor function without using this

class Area { //scope of the class

    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    AreaOfCircle = function(radius){
        return 3.14*Math.pow(radius, 2) //pie * r-squared
    }

    Square = () => this.length * this.length;

    Rectangle = () => this.length * this.width;

}

let areaObj  = new Area(6, 9)

console.log("Circle:",areaObj.AreaOfCircle(12))
console.log("Square:", areaObj.Square());
console.log("Rectangle:",areaObj.Rectangle());

//Task create a class names as account accepting three params like name, accType, password
//account class should have three methods to show balance, user detailsm and account offers