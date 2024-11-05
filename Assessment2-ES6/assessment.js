// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

// const heroes = [
//   { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
//   { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
//   { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
//   { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
//   { name: 'Batman',         family: 'DC Comics', isEvil: false },
//   { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
//   { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
//   { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
//   { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
// ]

// const goodOnes = heroes.filter(hero => !hero.isEvil).map(hero => hero.name);
// console.log(goodOnes);

// const uniqueFamilies = [...new Set(
//     heroes.map(hero => hero.family)
// )]

// console.log(uniqueFamilies);

// const sirName = heroes.map(hero => ({
//     ...hero,
//     name: `Sir ${hero.name}`
// }));

// console.log(sirName)

// const isGroupEvil = heroes.some(hero => hero.isEvil);

// console.log(isGroupEvil);

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)
//   using apply keyword we need to implement this one

// const mulNums = (...args) => {
//     return args.reduce((acc, curr)=> acc * curr, 1);
// }

// const multiplyUpTo = (n) => {
//     const numbers = Array.from({ length: n }, (_, i) => i + 1);

//     return mulNums.apply(null, numbers)
// }

// const result = multiplyUpTo(5);
// console.log(result);

//3. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
//     userDetails :{
//         first: "FirstName",
//         last: "LastName"
//     }
// }

// const { userDetails: {last}} = person;

// person.number = 9119119110

// console.log(`Last Name: ${last}`)
// console.log(`Phones Number: ${person.number}`)



//4. Give me an example of const data manipulation

// const student = {
//     id: 1234, 
//     name: "Stacy"
// }

// student.id = 5678;

// console.log(student);

//5. What is the difference between for-of and for-in show with examples

// for in is used to iterate over objects while for of is used to iterate over iterables

// const person = {
//     name : "Stacy",
//     age : 25,
//     loc : "Florida"
// }

// for (const key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// const numbers = [10, 20, 30];

// for(const number of numbers){
//     console.log(number)
// }

//6. Give me an example of bind and write its usage, comparison with arrow function
// const person = {
//     name : "Stacy",
//     greet: function(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// const greetStacy = person.greet.bind(person);

// greetStacy();

// const person2 = (name) =>{
//     console.log(`my name is ${name}`)
// }

// const personInstance = person2("Stacy2");

// console.log(personInstance);

//bind is used when you create a specific context based on a certain object by using the this keyword where as an arrow does usen't use this
// it simply cannot change its this


//7. Create an example showing usage of event loop in concurrent execution cycle

// console.log("Start")

// setTimeout(()=>{
// console.log(`Timeout 1`)
// }, 0);

// setTimeout(()=>{
//     console.log(`Timeout 2`)
//     }, 0);

// console.log("end");

//8. create an example showing usage of short hand and default param.

// const createGreeting = ({name, age = 25}, greeting = "hello") => {
//     return `${greeting}, my name is ${name} and my age is ${age}`
// }

// const firstPerson = {
//     name : "Stacy"
// }

// const secondPerson = {
//     name : "Stacy2",
//     age : 30
// }

// console.log(createGreeting(firstPerson))
// console.log(createGreeting(secondPerson))
//9. Create two objects with some properties and merge them using Object method and ES6 way

// const obj1 = {
//     name : "first object",
//     value : 1
// }

// const obj2 = {
//     name : "second object",
//     value : 2
// }

// const mergedES6 = {...obj1, ...obj2}

// const mergedObject = Object.assign({}, obj1, obj2)

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// const myMap = new Map();

// myMap.set('name', 'Stacy')
// myMap.set('name1', 'Benjamin')
// myMap.set('name2', 'Duncan')

// console.log(myMap);

// myMap.delete('name2');
// console.log(myMap);

// console.log(myMap.get('name'));

// myMap.clear();
// console.log(myMap);



// const mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet);

// mySet.delete(3);

// console.log(mySet);

// console.log(mySet.has(3));

// mySet.clear();

// console.log(mySet);

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

const promiseExample = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            'Arrow Functions',
            'Template Literals',
            'Destructuring Assignment',
            'Promises',
            'Default Parameters'
        ]);
    }, 2000);

    setTimeout(() => {
        reject('The promise was rejected after 3 seconds')
    }, 3000)
})

promiseExample.then(features => {
    console.log('Resolved with features', );
    console.log(features);
})
.catch(error => {
    console.error('Rejected with error',error)
})

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

// const mulNums = (...args) => {
//     return args.reduce((acc, curr)=> acc * curr, 1);
// }

// const multiplyUpTo = (n) => {
//     const numbers = [...Array(n).keys()].map(i => i + 1)
//     return mulNums(...numbers)
// }

// const result = multiplyUpTo(5);
// console.log(result);

//13. Use the question #11 to build promises using async and await - with multithread

const handlePromise = async () => {
    try {
        const features = await promiseExample;
        console.log("Resolved with features", features);
    } catch (error) {
        console.error('Rejected with error', error)
    }
};

handlePromise();

//14. Create an example of generator function of your choice

//15. Explain your knowledge of - statelessness, http, REST, spa and classical applications

//statelessness is when the server does not maintain any data from the client and every time you send a request you send a Token as well with all information needed
//http is the protocol used to transmit information over the web
//REST is representational state transfer and that is when a statelss request from a client to the server is made everytime you want to access or create data 
//a spa application is a single page application that has data dynamically loaded on one page and 
//while classical applications sends request to the server and loads new web pages for each interaction