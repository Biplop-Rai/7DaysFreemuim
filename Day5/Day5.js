// let name ="Biplop";
// let age = 20;
// let address = "Kathmandu";

// let me =  {
//     name : "Biplop",
//     age : 20,
//     address : "Kathmandu"
// };

// me.College = "ISMT College";

// console.log(me.age);
// console.log(me["age"]);
// console.log(me);


//freeze method -- it will not allow to change the object

// let me = Object.freeze( {
//     name : "Biplop",
//     age : 20,
//     address : "Kathmandu"
// });

// console.log(Object.keys(me));;
// console.log(Object.values(me));

// let myinfo = {
//     name : "Biplop",
//     age : 20,
//     address : "Kathmandu"
// };

// let name = myinfo.name;
// let age = myinfo.age;
// let address = myinfo.address;

//drestructuring -- it means that we can assign the value of the object to the variable directly

// let {name,age,address} = myinfo;
// console.log(age, address,name);

//conditional statement -- it means that if the condition is true then it will execute the first statement otherwise it will execute the second statement

// let isRaining = true;

// if(Raining){
//     console.log("Take umbrella");
// }else{
//     console.log("No need of umbrella");
// };


//ternary operator -- it means that if the condition is true then it will execute the first statement otherwise it will execute the second statement

// condition ? console.log ("if true") : console.log ("if false");
// isRaining ? console.log("Take umbrella") : console.log("No need of umbrella");


// short-circuiting -- it means that if the condition is true then it will execute the first statement otherwise it won't execute any statement

// isRaining && console.log("Take umbrella");


// age > 21 , you can vote, else you can't vote.

// let isAge = 19;
//  if(Age == 21){
//     console.log("You can vote");
//  }else{
//     console.log("You can't vote");
//  };

//  isAge ? console.log("You can vote") : console.log("You can't vote");


 let temperature = 40;
 if(temperature > 30){
    console.log("It's hot outside");
 }else if(temperature > 20){
    console.log("It's moderate outside");
 }
 else{
    console.log("It's cold outside");
 };     


 let myInfo =  {
    name : "Biplop",
    age : 20,
    address : "Kathmandu"   
 }
//  if(myInfo.age >= 20 || myInfo.address === "Kathmandu")
// if(myInfo.age >= 20 && myInfo.address === "Kathmandu" || myInfo.name === "Biplop")
 
 if(myInfo.age >= 20 && myInfo.address === "Kathmandu" && myInfo.name === "Biplop"){
    
    console.log("You can vote");
    }
 else{
    console.log("You can't vote");
 };


 myInfo.age === 22 || myInfo.address === "Kathmandu" || myInfo.name === "Biplop" ? console.log("You can vote") : console.log("You can't vote");

 
