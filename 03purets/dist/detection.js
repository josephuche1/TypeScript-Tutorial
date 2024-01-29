"use strict";
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 3;
}
function provideId(id) {
    if (id === null) {
        console.log('No id was provided');
    }
    return id === null || id === void 0 ? void 0 : id.toLowerCase();
}
function isAdmin(account) {
    if ("isAdmin" in account) { // in operator to check if a property exists in an object
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) { // instanceof operator to check if an object is an instance of a class
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Type predicat used to narrow down the type of an object within a conditional block
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
