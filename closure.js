//OOPS
//Polymorphism - Overloading(No such thing as overloading, just hoisting which means newest function is used aka over-writing)
// Overriding(by inheriting in constructor function we can oveeride )
//Inheritance - is possible, prototype{ an object that links the child object to base function} : __proto__
//Abstractions - Abstract function or class are not present but function can do abstract implementation
//Encapsulation - We limit the access of properties abd fields via access modifiers, there are no keywords for this
                    //we can manipulate the funtion to restrict the access of function variables via closures
//Closures - A paradigm when a function contains another function and has some fields kept as private and some public
            //and return them through child functions

function Accounts(name, age, balance, type){
    var accName = name;
    var accHolderAge = age;
    var accBalance = balance;
    var accType = type;
    var password = "xyz" // private
    var accPin = "9876" //private

    var details = function(name, pwd){
        //Things returned from this are public
        if(pwd == password){
            return {
                accName,
                accHolderAge,
                accBalance,
                accType
            }
        } else{
            return "Password is incorrect";
        }
    }
    //the entities returned via function
    return details;
}

var acctObj = Accounts("mark", 21, "$10_000", "Debit");

// console.log(acctObj("mark", "xyz"));
// console.log(acctObj("mark", "Hello"));

//My own parent and child function

function Car(make, model, year){
    var carMake = make;
    var carModel = model;
    var carYear = year;
    var accelerate = "Car is going";
    var decelerate = "Car is stopping";

    var useCar = function(action){
        if(action == "details"){
            return {
                carMake,
                carModel,
                carYear,
            } 
        } else if(action == "go"){
            return accelerate
        }else if(action == "stop"){
            return decelerate;
        }
        else {
            return "Give me something";
        }
    } 
    return useCar;
}

var shonda = Car("Honda", "Civic", 2016);
console.log(shonda(""));