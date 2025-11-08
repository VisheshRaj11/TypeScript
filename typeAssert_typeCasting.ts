// Type casting:
let a : unknown = "12";
console.log(typeof (a as number));

// Type casting with <>:
console.log((<string>a).length);