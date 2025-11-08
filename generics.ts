// Generic Functions:
function generic<T>(a: T){
    return `Hey this is ${a}`
}

console.log(generic<string>("vishesh"));
console.log(generic<number>(12));
// OR:Type inference:
console.log(generic(12));


// Generic Interfaces:
interface User<T> {
    name: string,
    email: string,
    age: number,
    pass: T
}

function getUserDetails(user: User<string>) {
    console.log(`${user.name} ${user.email} ${user.age} ${user.pass.toLocaleLowerCase()}`)
}

getUserDetails({name:"Vishesh", email:"visheshrajput47@gmail.com",age: 12, pass:"jvjibbrlkeanW$UHW$"})


// Generic Classes:
class Payment<T> {
    // if access modifiers is not provide then it is local parameter not the property:
    // using public / or any access modifier make it class property:

    //ShortHand:
    constructor(public a: T) {} 
    
    //Long:
    // a: T
    // constructor(a:T){
    //     this.a = a;
    // }
}

let p1 = new Payment<number>(12);
console.log(p1);
