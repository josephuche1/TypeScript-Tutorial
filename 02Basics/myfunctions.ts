function addTwo(num: number): number{
    // set return type to number
    return num + 2;
    // return "hello";
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name:string, email:string, isPaid:boolean){
   console.log(name, email, isPaid);
}

let loginUser = (email:String, password:String, isPaid: boolean = false) => {
    // set deafult value for isPaid
}

// set return type for arrow function
const getHello = (s:string): string => {
    return s;
}

const heroes = ['superman', 'batman', 'flash'];

heroes.map((hero):string =>{
    return "hero name is " + hero;
});

function consoleError(errorMessage: string): void{
    console.log(errorMessage);
}

function handleError(errorMessage: string): never{
    throw new Error(errorMessage);
}

addTwo(5);
getUpper('hello');
signUpUser("Joseph", "example@gmail.com", false);
loginUser("example@gmail.com", "123456");

export {};