class User {
    email: string;
    name: string;
    readonly city: string = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
    constructor(email:string , name: string) {
        this.email = email;
        this.name = name;
    }
}


const joseph = new User("example@gmail.com", "Joseph");