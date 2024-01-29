"use strict";
// class User {
//     email: string;
//     name: string;
//     //private proprerties are not accessible outside the class. any property that is not labeled is public by default.
//     private readonly city: string = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
//     constructor(email:string , name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// A better way to write the above code is to use access modifiers in the constructor parameters.
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
    }
    deleteToken() {
        console.log("Deleting token");
    }
    get getEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error("Invalid course count");
        }
        this._courseCount = count;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 5;
    }
}
const joseph = new User("example@gmail.com", "Joseph", "1234");
// joseph.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.
