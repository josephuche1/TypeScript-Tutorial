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
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.sideLength ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck = shape; // never type to ensure that all cases are handled
            return _exhaustiveCheck;
    }
}
