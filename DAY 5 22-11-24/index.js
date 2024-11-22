//Write functions for various tasks

function calculate(input) {
  let num1 = Math.floor(Math.random() * (10, 50));
  let num2 = Math.floor(Math.random() * (10, 40));

  if (input == "add") console.log(`${num1} + ${num2} : `, num1 + num2);
  else if (input == "sub") console.log(`${num1} - ${num2} : `, num1 - num2);
  else if (input == "mul") console.log(`${num1} * ${num2} : `, num1 * num2);
  else if (input == "div") console.log(`${num1} / ${num2} : `, num1 / num2);
}
calculate("add");
calculate("sub");
calculate("mul");
calculate("div");

// functions

// function keyword
// function func(){
//   console.log("created using function keyword!")
// }
// func()

//arrow function!
// const func = ()=>{
//   console.log("arrow function!")
// }
// func()

// function expression
// const func = function(){
//   console.log("expression function")
// }
// func()

// Anonymous Function
// setTimeout(function () {
//   console.log("Anonymous Function");
// }, 2000);

// IIFE Function
// (function(){
//   console.log("IIFE Function!")
// })()

// rest operator
// function number(a,...rest){
//   console.log(a,...rest)
// }
// number(1,2,3,4,5)

//argument list
// function number(){
//   console.log(arguments)
// }
// number(1,2,3,4,5)

// closures
// function outer(){
//   let name = "Harman Saini";
//   function inner(){
//     console.log(name)
//   }
//   inner()
// }
// console.log(outer())

// function outer(){
//   let name = "Harman Saini";
//   return function inner(){
//     console.log(name)
//   }

// }
// const inner = outer()
// console.log(inner())

// function outer(){
//   let name = "Harman Saini";
//    function inner(){
//     return name
//   }
//   return inner()
// }
// console.log(outer())

// This keyword
// function func(){
//   console.log(this)
// }
// func()

//this keyword in arrow function!
// const func = ()=>{
//   console.log(this)
// }
// func()
