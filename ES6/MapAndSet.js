// Map : is the data structure created to store data in the form of key value pair
// Strong Map - when our keys are of string type of alphanumeric type
// Weak Map - This allows us to create keys such as numbers, functions, objects etc
//There are several methods, properties attached to map to validate and access the values present against key

//[{key : value}]
// let myMap = new Map();

// myMap.set("Username", "Anthony")

// console.log(myMap.size)
// console.log(myMap.entries())

// let keyString = 'a String', keyObj = {}, keyFunc = function() {}, keyNum = 2000;

// myMap.set(keyString, "String is a key for this!!")
// myMap.set(keyObj, "Object is a key for this!!")
// myMap.set(keyFunc, "Function is a key for this!!")
// myMap.set(keyNum, "Number is a key for this!!")

// console.log(myMap.size);

// console.log(myMap.get(2000)) //Number is key for this
// console.log(myMap.get({})) //undefined : object is referred by reference variable not a value type , for each object a 

// console.log(myMap.get(keyObj)) // can only access via some referencee

// myMap.delete(keyNum)
// console.log(myMap.entries())

// console.log(myMap.has(keyString)) // either true or false
// console.log(myMap.keys());

// myMap.clear();
// console.log(myMap.entries());



//Set : is the data structure which helps us create unique data without many comparisons

// let TraineeList = []
// TraineeList.push("Duncan")

//before adding - sameUser we need to check for each time if its alreeady present or not

let TraineeList = new Set(["Silvia", "Yao", "ben", "Duncan"])
console.log(TraineeList.entries());


TraineeList.add("Yao")
console.log(TraineeList.entries());


TraineeList.add("Sierra")
console.log(TraineeList.entries());

TraineeList.add("Nilay")

console.log(TraineeList.entries());
