// TODAY TASK 

let today = new Date();
let day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today);

switch (day) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
    console.log("Saturday");
    break;
}



// loop programs 

// for(let i=0;i<5;i++){
//     let pattern = ""
//     for(let j=0;j<=i;j++){
//         pattern+=" *"
//     }
//     console.log(pattern)
// }

// let i = 0;
// j = 0;
// while (i < 5) {
//   let pattern = "";
//   j = 0;
//   while (j <= i) {
//     pattern += " *";
//     j++;
//   }
//   console.log(pattern);
//   i++;
// }

// let obj = {id:1, name:"Harman",age:"20"}
// for(let x in obj){
//     console.log(x, " : ", obj[x])
// }

// let arr = [1,2,3,4,5,6]
// for(let x of arr){
//     console.log(x)
// }

// let arr = [1,2,3,4,5,6]
// let i =0;
// do{
//     console.log(arr[i])
//     i++;
// }while(i<arr.length);

// let obj = [
//     { id: 1, name: "Harman", age: "20" },
//     { id: 2, name: "arif", age: "21" },
//     { id:31, name: "manish", age: "22" },
//   ];
//   for (let x of obj) {
//     console.log( x);
//   }
  


// control structures programs

// 1
// let num1 = 23;
// let num2 = 20;

// console.log(num1>num2 ? `num1 is greater : ${num1}` : num2>num1 ? `num2 is greater : ${num2}`:`both numbers equal : ${num1},${num2}`)

// 2
// let num1 = 23;
// let num2 = 20;

// if (num1 > num2) console.log(`num1 is greater : ${num1}`);
// else if (num2 > num1) console.log(`num2 is greater : ${num2}`);
// else console.log(`both numbers equal : ${num1},${num2}`);

// 3
// let num1 = 23;
// let num2 = 20;

// switch (true) {
//   case num1 > num2:
//     console.log(`num1 is greater : ${num1}` );
//     break;
//   case num1 < num2:
//     console.log(`num2 is greater : ${num2}` );
//     break;
//     case num1==num2:
//         console.log(`both numbers equal : ${num1},${num2}`)
//         break;
//     default :
//         console.log("Not a Number")
// }

// 4

// let num1 = 21;
// let num2 = 20;

// try {
//   if (num1 > num2) throw `num1 is greater : ${num1}`;
//   else if (num2 > num1) throw `num2 is greater : ${num2}`;
//   else console.log(`both numbers equal : ${num1},${num2}`);
// } catch (error) {
//   console.log(error);
// }
