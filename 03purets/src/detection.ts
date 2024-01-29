function detectTypes(val: number |string){
    if (typeof val === "string"){
        return val.toUpperCase();
    }
    return val + 3;
}

function provideId(id: string | null){
    if(id === null){
        console.log('No id was provided');
    }
    return id?.toLowerCase();
}

interface User {
    name: string,
    email:string
}

interface Admin {
    name: string, 
    email: string,
    isAdmin:boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){ // in operator to check if a property exists in an object
        return account.isAdmin;
    }
    return false;
}

function logValue(x: Date | string){
    if(x instanceof Date){ // instanceof operator to check if an object is an instance of a class
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Type predicat used to narrow down the type of an object within a conditional block
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}


function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food";
    }else{
        pet
        return "bird food";
    }
}


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    sideLength: number
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    height: number
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    // return shape.sideLength ** 2;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck: never = shape; // never type to ensure that all cases are handled
            return _exhaustiveCheck;
    }

}