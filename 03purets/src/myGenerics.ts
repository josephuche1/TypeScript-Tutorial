const score: Array<number> = []; // Array<number> is a generic type
const names: Array<string> = []; // Array<string> is a generic type

function identityOne(val: boolean | number) : boolean | number {
    return val;
}

function identityTwo(val: any):any{
    // Remember, any is the same as no type checking
    return val;
}

function identityThree<Type>(val: Type): Type{
    // Type is a generic type
    return val;
}

// identityThree(false); // Type is a boolean

function identityFour<T>(val: T): T{
    // T is a generic type
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: 'Nestle', type: 1});

function getSearchProducts<T>(products: Array<T>): T{
    // do some dqta processing
    return products[0];
}

// Another way to write the above function
const getSearchProductsTwo = <T,>(products: Array<T>): T =>{ // the comma is added to show that T is a generic type and not a parameter
        // do some dqta processing
        return products[0];
}