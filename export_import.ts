// If only one function or class per file need to export then use default:
// Otherwise use const:  with {}
export default function greet(name : string): void{
    console.log(`Hello ${name}`);
}
