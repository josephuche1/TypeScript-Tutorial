"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John',
    email: "example@gmail.com",
    age: 30,
    occupation: 'Software Engineer',
    isActive: true,
};
var createUser = function (_a) {
    var string = _a.name, boolean = _a.isPaid;
};
var newUser = { name: 'John', isPaid: true, email: "example2gmail.com" };
createUser(newUser);
var createCourse = function () {
    return {
        name: 'React',
        price: 100
    };
};
var createUser2 = function (user) {
    return user;
};
createUser2({ name: 'John', email: "example@gmail.com", age: 30, occupation: 'Software Engineer', isActive: true });
