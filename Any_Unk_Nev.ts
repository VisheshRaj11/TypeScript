// Any is used to avoid the type-checking of a variable and avoid typescript errors:
let ans : any;
ans  = "Vishesh";
console.log(ans);
ans = 32;
console.log(ans);

// Unknown is used when we dont knnow what value should be store in this:
// It will modify or can say access based on conditoinals:
let check: unknown;
check = "Vishesh"
if(typeof check === "string"){
    console.log(check.toUpperCase())
}

// Never is never returned:
function greet(): never {
    while(true) {}
}

greet();
console.log("Hellow0") //See this log is dull in color because never returned functioned is called.