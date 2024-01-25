"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    // set deafult value for isPaid
};
addTwo(5);
getUpper('hello');
signUpUser("Joseph", "example@gmail.com", false);
loginUser("example@gmail.com", "123456");
