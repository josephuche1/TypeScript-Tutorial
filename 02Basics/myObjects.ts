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

export {};