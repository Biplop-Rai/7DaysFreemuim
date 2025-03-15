// higher order function  -- it means function that accepts another function as a parameter or returns a function

// example of higher order function

function operate(a, b, operation) {
    return operation(a, b); 
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(operate(5, 3, add)); // Output: 8
console.log(operate(5, 3, multiply)); // Output: 15

// Function Returning Another Function

function greet(message) {
    return function(name) {
        console.log(`${message}, ${name}!`);
    };
}

let sayHello = greet("Hello");
sayHello("Biplop"); 
let sayWelcome = greet("Welcome");
sayWelcome("Bip"); 

// map() – Transforms an Array

let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); 

// filter() – Filters an Array

let numbeers = [1, 2, 3, 4, 5, 6];
let evenNumbeers = numbeers.filter(num => num % 2 === 0);
console.log(evenNumbeers); // Output: [2, 4, 6]

// reduce() – Reduces an Array to a Single Value

let numbeeers = [1, 2, 3, 4];
let sum = numbeeers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10


// forEach() – Iterates Over an Array

let names = ["Biplop", "hulu"];
names.forEach(name => console.log(`Hello, ${name}`));


// Using Callbacks with setTimeout()

function callbackFunction() {
    console.log("Callback function called");
}

setTimeout(callbackFunction, 2000); 


// Higher-Order Functions in Event Listeners

// document.getElementById("btn").addEventListener("click", () => {
//     console.log("Button clicked!");
// });

//Practical Example – Custom map() Implementation

function myMap(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

let nums = [1, 2, 3, 4];
let doubled = myMap(nums, num => num * 2);
console.log(doubled); 
