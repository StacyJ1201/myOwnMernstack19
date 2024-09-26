
//Using two curly braces
var Employee = {
    Name : "Ben Ma",
    Id : 1234,
    GroupCode : "DSA",
    GetEmployeeInfo : function() { //`` - template literal easy eay of writing string and it's concatenation
        return `
                    ${this.Name},
                    ${this.Id},
                    ${this.GroupCode},
                    ${this.Salary}
                `
    }
}

Employee.Salary = "$1"
// var empObj = new Employee(); //will not work

// console.log(Employee.GetEmployeeInfo());

//use constructor method to create the class - using the new keyword
//This methood is not an expected way of inheritance as it keeps the same object and no new copy or clone

//2. Software Engineer inherits from employee

// var SoftwareEngineer = new Object(Employee) //We are setting/Injecting employee to create a new class using constructor method

// console.log(SoftwareEngineer.GetEmployeeInfo());

//The new and more suitable way of implementing inheritance is by using Object.create method where we will have 
//seperate copy for child class and a prototype chain to link with parent class

//overriding of the base class methods

SoftwareEngineer = Object(Employee);
// console.log(SoftwareEngineer.GetEmployeeInfo());

//4. When object is empty
var emptyObj = {}

//5, Null Prototype Object
var nullObj = Object.create(null);

//Merging of fifferent objects

var User = {
    name : "Robin",
    accType : "Credit",
    userType : "Paid"
}

var Address = {
    ID : "1234",
    Current : "Somewhere on earth"
}

var Address2 = {
    ID : "1234",
    Delivery : "Somewhere in Colorado"
}

// var DispatchItem = {User, Address, Address2};

// console.log(DispatchItem); //This will reflect the changed value even after merge

//We ned to have immutability so that changed value doesn't reflect and data gets merged avoiding redundancy

var DispatchItem;
Address2.MobileNumber = 1234567890;
DispatchItem = Object.assign(User, Address, Address2)

console.log(DispatchItem);