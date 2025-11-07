// type vishesh = string | number;
// let name : vishesh = "Vishesh"
// console.log(name);
// name = 22
// console.log(name);

// Type aliases are used to give semantic names and reduce complexity.
type CarYear = number
type CarName = string
type CarModel = string

const year: CarYear = 2013
const name: CarName = "BMW"
const model: CarModel = "s5"
console.log(year+" "+name+" "+model)

//{ Union and intersection: These only can be possible by type aliases:
type User = {
    name: string,
    email: string,
}

// This is intersection:
type Admin = User & {
    getDetails(user: string) : void
}

function details(obj: Admin): void {

}

details({name: "Vishesh", email:"visheshrajput47@gmail.com",getDetails(User){
    console.log("User details had fetched")
}})