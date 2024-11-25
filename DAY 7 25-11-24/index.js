// push 
// let arr = [8,4,"d",7,5,"z"]
// let pushed = arr.push(1,2,3)
// console.log(pushed,arr)

// pop
// let arr = [8,4,"d",7,5,"z",]
// let poped = arr.pop()
// console.log(poped,arr)


// //map 
// let arr = [8,4,"d",7,5,"z"]
// let maped = arr.map(elem =>  {
//     if(typeof elem === "number")
//     return elem
// } )
// console.log(maped,arr)

// // forEach
// let arr = [8,4,"d",7,5,"z"]
// let maped = arr.forEach(elem =>  {
//     if(typeof elem === "number")
//     console.log(elem)
// } )
// console.log(maped,arr)


// filter
// let arr = [8,4,"d",7,5,"z"]
// let filtered = arr.filter(elem =>  typeof elem === "number")
// console.log(filtered,arr)

//find 
// let arr = ["a","b",8,4,"d",7,5,"z"]
// let finded = arr.find(elem =>  typeof elem === "number")
// console.log(finded,arr)

//slice
// let arr = ["a","b",8,4,"d",7,5,"z"]
// let sliced = arr.slice(0,3)
// console.log(sliced,arr)

// //splice
// let arr = ["a","b",8,4,"d",7,5,"z"]
// let spliced = arr.splice(2,3,"harman")
// console.log(spliced,arr)

//shift
// let arr = ["a","b",8,4,"d",7,5,"z"]
// let shifted = arr.shift()
// console.log(shifted,arr)

// unshift
// let arr = ["a","b",8,4,"d",7,5,"z"]
// let unshifted = arr.unshift(6)
// console.log(unshifted,arr)

// split = not made for array. it works on string
// let text = "hello world foo bar";
// let result = text.split(" ");
// console.log(result); 

// join
// let arr = ["i","am","harman"];
// let result = arr.join("")
// console.log(result); 

// includes
// let arr = ["i","am","harman"];
// let result = arr.includes("harman")
// console.log(result); 

// //reduce
// let arr = ["a","b",8,4,"d",2,2,"z"]
// let str = ""
// let reduced = arr.reduce((accum,curr)=>{
//     if(typeof curr === "number")  {
//         accum +=curr 
//     }
//     return accum 
// },0)
// console.log(reduced,str,arr)

// some 
// let arr = [1,2,3,4,5]
// let somed = arr.some(num=> num>3)
// console.log(somed)

// every
// let arr = [1,2,3,4,5]
// let every = arr.every(num=> num>4)
// console.log(every)

// keys()
// let arr = [1,2,3,4,5]
// let k = arr.keys()
// for(let key of k){
//     console.log(key)
// }

// flat
// let arr = [[1,2,3],[7,6,7],[4,5,6,[1,2,4,[4,5]]],[3,2,0,8,[1,2,3,[3,3,[4,5]]]]]
// let f = arr.flat()
// console.log(f)