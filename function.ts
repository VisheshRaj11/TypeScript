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
   

