// Notes:
// Abstract class is base class and informations are hidden in it.
// Instance of the abstract cannot be created and constructor as well:
// Abstract class contains both abstract and non abstract members and methods
// if any class have extends the abstract class .Then that subclass have to override the abstract methods of abstract class.

// | Concept              | Explanation                                                   |
// | -------------------- | ------------------------------------------------------------- |
// | **Abstract Class**   | Can’t be instantiated; used as a base class                   |
// | **Abstract Method**  | Declared without body → must be implemented in subclass       |
// | **Method Signature** | Must exactly match (name, parameters, return type)            |
// | **Subclass**         | Can add its own logic + non-abstract members                  |
// | **Inheritance**      | `GooglePay` inherits from `Payment` and fulfills the contract |


abstract class Payment{
    abstract makePayment(amount: number , accountNumber: number): void
}

class GooglePay extends Payment {
    constructor(public accountHolder: string, public accountNumber: number,public amount: number ) {
        super()
    }
    makePayment(amount: number, accountNumber: number): void {
       if(amount > 0) console.log(`Amount ${amount} has been transacted from the account ${accountNumber}`)
       else console.log(`Amount is not sufficient to transact`);
    }
}

let payment1 = new GooglePay("Vishesh",1231456,500000);
payment1.makePayment(payment1.amount, payment1.accountNumber)