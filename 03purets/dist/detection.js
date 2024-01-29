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
