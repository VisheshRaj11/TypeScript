// let message: string = "Vishesh";
// console.log(message);

// //Primitive Data-types:Directly Copied
// let name: string = "Vishesh";
// let age: number = 12;
// let isDev: boolean = true;
// let salary: number = 500000.75;
// let phone: bigint = 44456556161321n;
// let uniqId : symbol = Symbol("id");
// console.log(name, age, isDev, salary, phone, uniqId);

// // If not know what will hold:
// let data: any = "Hellow";
// let data1: unknown = "Hellow1";
// if(typeof data1 === "string") console.log(data1.toUpperCase());


// Explicit-Type and Types inference:
//Ex:
let name: string = "Vishes";
//Inference:
let name1 = "vishsh";


// Reference [],{},():Not Directly Copied
// Array:
let arr: number[] = [10, 20, 30];
let fruits: string[] = ["apple","banana","mango"];
let marks: Array<number> = [10,20,30,40];
let digits: readonly number[] = [2,5];
// console.log(arr+" "+fruits+" "+marks);

//Operations on Array:
arr.push(27);
arr.pop();
arr.unshift(23);
arr.shift();
console.log(arr);

for(let i of arr) console.log(i+" ");
arr.forEach((i, index) => {
    console.log(i+" ");
})

console.log(arr.includes(20));
console.log(arr.indexOf(20));

let part = arr.slice(1,2);
console.log(part);

console.log(arr.splice(2,1,99));

arr.sort((a,b) => a-b);
arr.reverse();
console.log(arr);


// Tuples:
let tuple : [number, number, string, boolean] = [1,1,"Vishesh",true];
let tuple1: readonly [number, number, string, boolean] = [1,1,"Vishesh",true];
console.log(tuple1[0])

// Named Tuples:
const graph : [x:number, y: number] = [55.12,12.43];
const [x,y] = graph;

console.log(x+" "+y)


// Enums:
enum Days{
    x,y
}

console.log(Days.x) // Output is 0;
