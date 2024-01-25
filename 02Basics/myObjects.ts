const User = {
    name: 'John',
    email: "example@gmail.com",
    age: 30,
    occupation: 'Software Engineer',
    isActive: true,
}

let createUser = ({name: string, isPaid:boolean}) => {};

let newUser = {name: 'John', isPaid: true, email: "example2gmail.com"};

createUser(newUser);

let createCourse = (): {name:string, price: number} => {
    return{
        name: 'React',
        price: 100
    }
}


type User = {
    name: string,
    email: string,
    age: number,
    occupation: string,
    isActive: boolean,
}

let createUser2 = (user: User) : User => {
    return user;
}

type bool = boolean; // type alias - can be used to rename types

createUser2({name: 'John', email: "example@gmail.com", age: 30, occupation: 'Software Engineer', isActive: true})

export {};