// property (length)

let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.length);
// methods -- nums.pop()   --- nums.length  --nums.push()  --

// slice() -- it means cut the array from the index [] to [] and return it as a new array

let sliceNums = nums.slice(2, 5);
console.log(sliceNums);

//indexOf() -- it means find the index of the element in the array and return it

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let sliceDays = days.slice(days.indexOf("Tuesday"),days.indexOf("Friday"));
console.log(sliceDays);


let evenNums = [2, 4, 6, 8, 10];
let sliceEvenNums = evenNums.slice(3,5);
console.log(sliceEvenNums);
console.log(evenNums);


// splice() -- it means cut the array from the index [] to [] and replace it with the new array

let data = [1,2,3,4];
data.splice(1,1,"Biplop");
console.log(data);


let data1 = [1,2,3,4,5,6];
//output -- [1, "hello", "bye", "world", 5, 6]
data1.splice(1,3,"hello","bye","world");
console.log(data1);

let characters = ["B", "i", "p", "l", "o", "p"]; 
// output = [2,9,16,12,15,16] 
characters.splice(0,6,2,9,16,12,15,16);
characters.splice(0,characters.length,2,9,16,12,15,16);
console.log(characters);


// split() -- it means split the string into array and return it
let message = "I am from Nayabasti";
let splittedMessage = message.split(" ");
console.log(splittedMessage);


let text = "I,am,from,Nepal";
let splittedText = text.split(",");
console.log(splittedText);
