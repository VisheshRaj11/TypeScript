// Need of interfaces: we can similar kind of things with type aliases, BUT when the two type aliases have same typescript will give error 
// So thats why we are using interface to merge and extend them:
// Interface are the blueprint or properties or structure of an object:
// Interfaces are similar to type aliases, except they only apply to object types.
// Not used for union and intersection:
interface User {
    name: string,
    email: string,  
    password: string,
    age?:number
}


const user = {
    name: "vishesh",
    email: "visheshrajput47@gmail.com",
    password: "Hawrr$$n@@iwwqqee"
}

// You have to defined the type which comes from the interface:
function showDetails(object: User): void {
    console.log(object.name+" "+object.email+" "+object.password);
}

showDetails(user);


// Merging of interfaces: Interface of same name declared in same scope having diff properties can be merged:
interface Men {
    name: string
}
interface Men {
    age: number
}

const person : Men = {
    name: "Vishesh",
    age: 21
}

console.log(person.name+" "+person.age)

// Extending Interfaces:
interface animal {
    name : string,
    age: number
}

interface dog extends animal {
    speak: string
}

function detailsDog(dog: dog): void {
    console.log(dog.name+" "+dog.age+" "+dog.speak)
}

detailsDog({name:"Bruno",age:21,speak:"barks"})