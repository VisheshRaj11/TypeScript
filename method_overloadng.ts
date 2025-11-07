function showname(name: string): void;
function showname(name: string, age: number): void;

function showname(name: unknown , age?:unknown) {
    if(typeof name === "string" && age === undefined) {
        console.log(name);
    }else if(typeof name === "string" && typeof age === "number") {
        console.log(age);
    }
}

showname("vishesh",12);