"use strict";
class User {
    constructor(email, name) {
        this.city = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
        this.email = email;
        this.name = name;
    }
}
const joseph = new User("example@gmail.com", "Joseph");
