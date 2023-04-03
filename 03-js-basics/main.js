// var x = "Hello World";

// console.log(typeof x)

// x = 123;

// console.log(typeof x)

// x = true;

// console.log(typeof x)

// x = {
//     name: "John Doe"
// }


// console.log(typeof x)


// x = ["john", "jenny"]

// console.log(typeof x)

// x = new Date("Dec 21, 2022")

// console.log(typeof x)


// var y = "20";

// var z = 20;

// console.log(y === z);        // ?


// var objOne = {
//     name: "John Doe"
// }

// console.log(objOne)

// var objTwo = objOne;

// objTwo.name = "Jenny Doe"


// console.log(objOne)     // ?






// var friends = ["monica", "joe", "chandler"];

// var moreFriends = friends;

// moreFriends.push("Ross");

// console.log(friends.length);            // ?


// var numOne = 123;
// var numTwo = numOne;
// numTwo = 202;

// console.log(numOne);            // ?


// // Function Syntax
// function sum(n1, n2) {
//     return n1 + n2;
// }

// console.log(sum(4, 5));


// // Function Expression
// var add = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(add(1, 2));       // ?

// var arr = [];
// console.log(arr);       // ?






// function demo(arr) {
//     if (arr.length > 2) {
//         let LOAD = "LOADING"
//         console.log(FLASH)
//     } else {
//         let FLASH = "FLASHING"
//     }
// }

// demo([2, 3, 4, 5])


// const LUCKY_NUMBER = 199;

// LUCKY_NUMBER = 202;


// const userOne = {
//     email: "test@test"
// }

// userOne.email = "john@test"

// console.log(userOne);

// userOne = {
//     name: "jenny@test"
// }


// const fruits = ["apple", "guava"];

// fruits.push("kiwi")

// console.log(fruits)


// JavaScript engine executes code in two phases -
// - Creational Phase : memory is allocated to all variables and function
// - Executional Phase: executes our code









// Back Tick operator (` `)
// - Multiline string
// - embed variable withing string

// let username = "John Doe";
// let age = 32;

// let greet = `
// Hello ${username},
// I'm ${age} years old!

// `

// console.log(greet);


// Type Conversion vs Coersion

// let x = "123";

// let y = Number(x);          // type conversion

// console.log(typeof y);

// let z = 100;

// let result = x - z;         // type coersion

// console.log(result);        // ?




// Conditional / loops

// let todos = [
//     {
//         label: "pot the plants",
//         status: "pending"
//     },
//     {
//         label: "renew car insurance",
//         status: "completed"
//     },
//     {
//         label: "buy T-Shirts",
//         status: "completed"
//     }
// ]

// for (let item of todos) {
//     console.log(item["status"])
// }

// for(let i =0; i< todos.length ; i++){

// }




// let users = ["John Doe", 32, true, [], {}, function(){}]


// ARRAY METHODS:

let numbers = [101, 103, 105, 109, 301, 205, 99];
let names = ["john", "jenny", "james", "jack", "jill"]

// numbers.push(199)
// numbers.unshift(199)

// numbers.pop()
// numbers.shift()

// console.log(numbers.splice(3, 3))

// numbers.reverse()

// numbers.sort(function (a, b) {
//     if (a > b) {
//         return -1
//     } else if (b > a) {
//         return 1
//     } else {
//         return 0
//     }
// })
// names.sort()


// numbers.fill(100, 1)


// const newArray = numbers.map(function (value) {
//     return value * 2
// })

// console.log(newArray)

// const newArray = numbers.filter(function (value) {
//     return value > 200
// })

// console.log(numbers.slice(1, 4))


// console.log(numbers.concat([201, 201, 201]))

// console.log(numbers.indexOf(103))

// const position = numbers.findIndex(function (value) {
//     return value === 1099
// })
// console.log(position);
// console.log(newArray);

// let item = numbers.find(function (value) { return value === 301 })
// console.log(item);

// console.log(numbers.includes(205))

// const result = numbers.reduce(function (prev, curr) {
//     return prev += curr;
// }, 0)
// console.log(result);
// console.log(numbers);
















// let employees = [
//     {
//         name: "John",
//         age: 34,
//         salary: 10000
//     },
//     {
//         name: "Jenny",
//         age: 35,
//         salary: 12000
//     },
//     {
//         name: "James",
//         age: 33,
//         salary: 9000
//     },
//     {
//         name: "Jack",
//         age: 38,
//         salary: 15000
//     },
// ]

// // - employees who are having age > 35
// const empWithAge = employees.filter(function (employee) { return employee.age > 35 })
// console.log(empWithAge);

// // - employee name with highest salary
// const highestSalariedEmp = employees.reduce(function (prev, curr) {
//     let highestSalaryEmp = prev;
//     if (prev.salary < curr.salary) {
//         highestSalaryEmp = curr
//     }
//     return highestSalaryEmp
// })
// console.log(highestSalariedEmp)

// // - average salary
// const totalSalary = employees.reduce(function (prev, curr) {
//     return prev + curr.salary;
// }, 0)

// const avgSalary = totalSalary / employees.length;

// console.log("Avergae Salary : ", avgSalary);
// // - add "Doe" as last name to the employee having name as "James"

// const pos = employees.findIndex(function (emp) {
//     return emp.name === "James"
// })

// console.log(employees[pos].name.concat(" Doe"))


// // - remove employee having name as "Jenny"
// const position = employees.findIndex(function (emp) {
//     return emp.name === "Jenny"
// })

// const deletedItems = employees.splice(position, 1)
// console.log(deletedItems)













// FUNCTION

// function greet(err, arr) {
//     if (err) {
//         return console.error(err)
//     }
//     arr.forEach(function (val) {
//         console.log(val)
//     })
// }

// function speak(arr, cb) {
//     if (arr.length > 2) {
//         cb(null, arr);
//     } else {
//         cb(new Error("Too low values"))
//     }
// }

// speak([1, 3], greet)



// function test() {
//     let x = 4;
//     return function () {
//         return ++x;
//     }
// }


// const nestedFn = test()

// console.log(nestedFn())         // ?
// console.log(nestedFn())         // ?


// function buildTicket(transport) {
//     let numOfPassengers = 0
//     return function (name) {
//         return `Hello ${name}, You are going via ${transport}
//         Your Ticket ID is # ${++numOfPassengers}`;
//     }
// }

// const shipFn = buildTicket("Ship")

// console.log(shipFn("John Doe"))
// console.log(shipFn("Jenny Doe"))

// const carFn = buildTicket("Car")

// console.log(carFn("Jack"));         // ?








// let x = 201;

// Lexical Scoping defines the outer scope of the function.
// - The outer scope of the function is determined by the physical location of that function.

// Scope chaining


// function a() {

//     // let x = 101;


//     function b() {
//         // let x = 99;
//         console.log(x)      // ?
//     }

//     b();
// }

// a();























// ARROW FUNCTION

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let foo = new Person("Foo", 32)


// function demo() {

//     const numbers = [10, 20, 30, 20, 10];
//     const newArray = numbers.map(value => value * 2)
//     console.log(newArray);
// }

// demo();




// REST/SPREAD

// function demo(email, ...args) {
//     console.log(args[0])            // ?
// }

// demo("test@test")
// demo("test@test", 23)
// demo("test@test", 23, true)



// let friends = ["Joe", "Monica"];

// let moreFriends = ["Ross", "Rachel", ...friends];

// console.log(moreFriends);

// // ["Ross", "Rachel", ["Joe", "Monica"]]


let userOne = {
    email: "foo@test",
    age: 32
}

let userTwo = {
    ...userOne,
    salary: 20000,
    age: 38
}
console.log(userTwo);           // {email : "foo@test", salary: 20000, age : 38}






// DESTRUCTURING

// let fruits = ["Kiwi", "apple", "oranges"];

// let [f1, f2, f3, f4, f5] = fruits;

// console.log(f2, f4);        // "apple"


// let user = {
//     name: "john",
//     age: 32,
//     address: {
//         city: "Chennai",
//         street: "201 Main Road, OMR"
//     },
//     friends: ["Foo", "Bar", "Bam"]
// }


// let { name: myName, age, address: { city, street }, friends: [fr1, fr2, fr3] } = user;

// console.log(myName, city, street, fr1, fr2, fr3);


// let users = [
//     {
//         email: "test1@test",
//         age: 32
//     },
//     {
//         email: "test2@test",
//         age: 34
//     },
//     {
//         email: "test3@test",
//         age: 36
//     },
// ]


// let [{ email: e1, age: a1 }, { email: e2, age: a2 }, { email: e3, age: a3 }] = users;

// console.log(e1, e2, e3, a1, a2, a3);


// Sync Code
// console.log("START")

// alert("Who's this?")

// console.log("END")



// Async Code

// console.log("START");

// setTimeout(() => {
//     alert("Hello World!")
// }, 0)

// console.log("END");



// Creating Promise

// function createPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ message: "Nested Promise Resolve" })
//         }, 1500)
//     })
// }
// function buildPromise() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             createPromise()
//                 .then(response => {
//                     resolve(response)
//                 })
//                 .catch(console.error)
//         }, 1000)
//     })
//     return promise;
// }


// // Consume Promise
// // - .then().catch()
// // - Async...await Code


// async function consumePromise() {
//     try {
//         const response = await buildPromise();
//         console.log(response)
//     } catch (err) {
//         console.log(err)
//     }
// }


// function consumePromise() {
//     buildPromise()
//         .then(response => console.log("RESPONSE : ", response))
//         .catch(err => console.log(err))
// }

// consumePromise();



// FETCH API
// - we can make AJAX Calls / Remote Server Calls
// - GET, POST, PATCH, DELETE, PUT etc
// - return promise

// https://jsonplaceholder.typicode.com/todos 


async function getTitle() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const result = await response.json();
        result.forEach(element => {
            const li = document.createElement("li")
            li.innerHTML = element.title;
            document.body.appendChild(li)
        });
    } catch (err) {
        console.error(err)
    }
}



// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//         .then(response => response.json())
//         .then(result => {
//             result.forEach(item => {
//                 const imgEl = document.createElement("img")
//                 imgEl.src = item["thumbnailUrl"]
//                 document.body.appendChild(imgEl)
//             })
//         })
//         .catch(console.error)
// }

// getData()