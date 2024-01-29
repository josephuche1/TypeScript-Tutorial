"use strict";
const score = []; // Array<number> is a generic type
const names = []; // Array<string> is a generic type
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    // Remember, any is the same as no type checking
    return val;
}
function identityThree(val) {
    // Type is a generic type
    return val;
}
// identityThree(false); // Type is a boolean
function identityFour(val) {
    // T is a generic type
    return val;
}
identityFour({ brand: 'Nestle', type: 1 });
function getSearchProducts(products) {
    // do some dqta processing
    return products[0];
}
// Another way to write the above function
const getSearchProductsTwo = (products) => {
    // do some dqta processing
    return products[0];
};
