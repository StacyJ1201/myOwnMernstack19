// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

// Constuctor and using Object.Create to override an object and create a child
var Person = {
    name : "Stacy",
    age : 22,
    SSN : 12345,
    getInfo : function(){
        return `
        ${this.name}
        ${this.age}
        ${this.SSN}
        `
    }
}

var Student1 = Object.create(Person);

Student1.age = 18;
console.log(Student1.getInfo());

var Student2 = new Object(Person);
Student2.SSN = 67890;
console.log(Student2.getInfo());


// Merging three properties
var table = {
    id : 1,
    height : "12in",
    width : "24in",
}

var tableDelivery = {
    id : 1,
    address : "here",
    zip : 12345

}

var Person3 = {
    name : "Haley",
    Occupation : "teacher"
}

var mixed = Object.assign(Person3, table, tableDelivery)

console.log(mixed);

//Creating an example of Closure
function Television(brand, size){
    var brandName = brand;
    var TvSize = size;
    var on = "TV is on"
    var off = "Tv is off"
    var TvDetails = function(done){
        switch(done){
            case "on":
                return on;
            case "off":
                return off;
            case "details":
                return {
                    brandName,
                    TvSize
                }
            default:
                return "Give me something"
                
        }
    }
    return TvDetails;
}

var newTv = Television("Sony", "32in");
console.log(newTv("off"))

//Sharing objects from one file to another
module.exports = Person3
