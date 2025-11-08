// import greet from "./export_import";
// function greet(name: string): void {
//     console.log(`Hellow ${name}`)
// }

// greet("Vishesh");


// function add(a: number, b:number): number{
//     return a+b;
// }

// console.log(add(10,30));


// Default Parameters:
// function greetOnce(name: string = "Vishesh"): void {
//      console.log(`Hellow ${name}`)
// }

// greetOnce();
// greetOnce("Ishika");


// Function with optional paramters"
// function display(name: string, age?:number): void{
//     process.stdout.write(name+" ");
//     if(age) console.log(age)
// }
// display("Vishesh");
// display("Vishesh",22);


// Arrow Functions:
const isPrime = (a: number): boolean => {
    if(a <= 1) return false;
    for(let i = 2; i * i <= a; i++){
        if(a % i == 0) return false;
    }
    return true;
}
console.log(isPrime(10));


// Anonymous Functions:
let greetAgain = function(): void{
    console.log("Hellow");
}
greetAgain();


// Functions return another function:
// A closure is formed when inner function remember its lexical scope even after outer function exeuted:
function outer():() => void {
    return () => {
        console.log("hello from inner function");
    };
};

const innerFunction = outer();
innerFunction();
   

// By Shreyian Knowldege:
function hnow(name: string, cb : (args: string) => void) {
    console.log(name);
    cb("jhellow")
}

hnow("vishesh", (args) => {
    console.log(args)
})

// Rest Operator:
function print(...arr: number[]){
    console.log(arr)
}

print(12,3,4,5,5);

// Type Aliases: 
// A function type alias describes the shape of a function — its parameter types and return type.
type Bhai = (name: string) => string;

 let SachinHellow: Bhai = (name) => {
    return `Hellow ${name}`
 }
 let Vishesh: Bhai = (name) => {
    return `Hellow ${name}`
 }

console.log(SachinHellow("Sachin"));
console.log(Vishesh("Sachin"));

type Maths = (x: number, y: number) => number;

let add: Maths = (x, y) => {return x+y}
let sub: Maths = (x, y) => {return x-y}
console.log(add(485,4775), sub(10, 5));


