// This literal field stores the predefined/static value(s) used in the application
// Modify this only if the values change, otherwise it remains constant

var name = "mark"
var age = 21
var address = "America"

var User1 = {
    name : "Stacy",
    age : 23,
    address : "America"
}

console.log(User1);

User1.name = "Duncan"

console.log(User1);

//Allows you to make field or objects accessible in another file
module.exports = User1;