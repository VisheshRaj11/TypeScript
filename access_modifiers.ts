// Public: This can be access anyhwere in the code
// Private: This can be access only inside the class , not even in inherit classs
// Protected: This can be access inside the class and in inheerit class aswell
// readonly is used to prevent any field by changing.
// static: It belongs to the class , not to the individual object. It means there is no such need to created the object to access the static, You can access it directly.

class User{
    static hellow : string = "Vishsesh";
    constructor(private _name: string, public age: number) {

    }
    
    // Getter:
    name() {
        return this._name;
    }

    // Setter:
    setName(name: string) {
        this._name = name;
    }
}

class Admin extends User{
    constructor(name: string,age: number, public mobile: number){
        super(name, age);
    }
}

const user1 = new User("Vishesh",12);
// console.log(user1.name); //this will give me error . If i want to access it we have to use getter and setter.

// Use setter:
user1.setName("VISHESH");

// Use getter:
console.log(user1.name());
const admin = new Admin("Vishesh",22,8389598);
console.log(admin.age+" "+admin.mobile+" "+admin.name());

// Static Use;
console.log(User.hellow)