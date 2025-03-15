//Loop in javascript

// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// // console.log(days[0]);
// // console.log(days[1]);
// // console.log(days[2]);
// // console.log(days[3]);

// // for loop
// //while loop
// //do:while loop

// // for of loop

// for(let day of days){
//  console.log(day);
// };


// let datas = [{
//     name: "Nepal",
//     region : "Asia",
// },
// {
//     name:"Australia",
//     region:"Australia",
// }];
// for(let data of datas){
//     // console.log(data);
//     // console.log(data.name);
//     console.log(data.region);
// };

// let names = ["Biplop","Anish","Ish"]
// // output : My name is Biplop, My name is Anish, My name is Ish
// for(let name of names){
//     // console.log(`My name is ${name}`);
//     console.log("My name is " + name);
// };

// let informations = [
//     {
//         name: "Biplop",
//         age : 20,
//     },
//     {
//         name: "Anish",
//         age : 22,
//     }
// ]
// // output : Biplop is 20 years old, Anish is 22 years old
// for(let info of informations){
//     // console.log(info);
//     //console.log(`${info.name} is ${info.age} years old`);
//     console.log(info.name + " age is " + info.age);
//     };


// // // function in javascript
// console.log(1+2);

// //regular function
// // Parameters --> it means that the function will take the value from the user
// // Arguments --> it means that the function will take the value from the user
// function addTwoNumber(a,b)
// {
//     console.log(a+b);
// }

// addTwoNumber(2,3);
// addTwoNumber(3);

// function addThreeNumber(a,b,c =3){
//     console.log(a+b+c);
// }   
// addThreeNumber(2,3);


// // arrow function

// let addFourNumber = (a,b,c,d) => {
//     console.log(a+b+c+d);
// }
// addFourNumber(2,3,4,20);

// let inform = [
//     {
//     name: "Biplop",
//     age : 20,
//     },
//     {
//     name: "Anish",
//     age : 22,
//     }   
// ]
// // output : make a function name printInform that accepts an informa array in parameters, which prints : My name is Biplop and age is 20, My name is Anish and age is 22
//   function printInform(inform){
//     for(let info of inform){
//         // console.log(`My name is ${info.name} and age is ${info.age}`);
//         console.log("My name is " + info.name + " and age is " + info.age);
//     }
//   }
//     printInform(inform);


 let days = ["Sun","Mon","Tue","Wed"];
 // output : make a function name printDays that accepts an days array in parameters, which prints : Today is Sun, Today is Mon, Today is Tue, Today is Wed, Today is Thu, Today is Fri, Today is Sat   
function printDays(wow) 
{
    for(let day of wow)
        {
            // console.log(`Today is ${day}`);
            console.log("Today is " + day);
         }
};

printDays(days);


//higher order function in Javascript