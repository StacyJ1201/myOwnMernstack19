// Instead of creating/initializing many variables if we assign into another object mainly array and json object
// this kind of mapping is termed as destructuring

//1. Array Destructuring - when we read the data from array and assign them to another variables

//a. Direct assignment in array to array
//let sessionsList = ["AWS", "MERNStack", "JAVA"]

// let Session1 = sessionsList[0]
// let Session2 = sessionsList[1]
// let Session3 = sessionsList[2]

// let [Session1, Session2, Session3, Session4, Session5, Session6, Session7] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session7) //undefined - if nothing present at array index

//b. we can use rest param to assign remaing array
// ... - represents rest operator and holds rest of the values in a separate array

// let [Session1, Session2, Session3, ...Session] = ["AWS", "MERNStack", "JAVA", "DSA", "Data Analytics", "AI-ML"] //sessionsList

// console.log(Session1)
// console.log(Session2)
// console.log(Session3)
// console.log(Session) //holds last three elements in an array

//c. Data swapping can be done easily - values are swapped with variables

let a = "New A", b = "New b";

[a, b] = [b, a]

console.log(a)
console.log(b)

//2. Object desructuring allows us to read data from objects without multiple initialization

//a. Single object destructuring

let Assessment = {
    Name : "Jugue",
    Standard : "Professional",
    Marks : {
        Java : 10,
        Mernstack : 8,
        ES6 : 9
    }
}

//let Name = Assessment.Name;
//let MERNStack = Assessment.Marks.Mernstack

// let {Name, Standard } = Assessment

// console.log(Name)
// console.log(Standard)

//b. Nested Destructuring - we read the data from the nested object

// e.g. - Reading marks from nested Marks object

let {Name, Marks : {Java, Mernstack, DSA = 9.5 }} = Assessment

console.log(Name)
console.log(Mernstack)
console.log(DSA)




//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}
//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
const { FirstName, TotalMarks} = Student;
const {Subject: {Physics, Chemistry, Language}} = Student;
const { lastName = "Jones", Subject: {Ecology = 95}} = Student;
console.log(lastName);

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let [aspiration2024, aspiration2025, aspiration2026, ...aspirations] = ["Become Programmer", "Make Money", "Buy House", "Start a family", "Do something else"]

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

var multiply = function(a=0, b=0, c=0){
    return a * b * c
}

console.log("Multiply:",multiply(1,2))

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let numArr = [1, 2, 3, 4, 5]
numArr.newval = 6
for(let index in numArr){
    console.log(numArr[index]);
}
//create an example of const where we can update on property of the object, where it says const is mutable
const person = {
    FirstName : "John",
    lastName : "Doe"
}

person.FirstName = "Jane"

console.log(person);

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

var names = ["Mine", "Yours", "His", "Hers"]

for(var i = 0; i < names.length; i++){
    setTimeout(function() {
        console.log("var:", i, names[i])
    },2000);
}

for(let i = 0; i < names.length; i++){
    setTimeout(function() {
        console.log("let:", i, names[i])
    },2000);
}