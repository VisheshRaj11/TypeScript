// Type Guards is a runtime check that helps typescript to figure out the variable type.

// For functions:
function showArgs(a: number | string): void {
    // Typing Narrowing:
    if(typeof a === "number") console.log(a);
    else if(typeof a === "string") console.log(a);
}

showArgs(12);
showArgs("Vishesh");


// For Class:
class Remote{
    // constructor(){}
    switchOff(){
        console.log("Switch off the tv")
    }
}

class Car{
    // constructor(){}
    switchCar(){
        console.log("Lock the car")
    }
}

// let remote = new Remote();
function switchDevice(remote: Remote | Car ) {
    if(remote instanceof Remote) remote.switchOff();
    else if(remote instanceof Car) remote.switchCar();
}

switchDevice(new Remote());
switchDevice(new Car());