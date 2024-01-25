// const User = {
//     name: 'John',
//     email: "example@gmail.com",
//     age: 30,
//     occupation: 'Software Engineer',
//     isActive: true,
// }

// let createUser = ({name: string, isPaid:boolean}) => {};

// let newUser = {name: 'John', isPaid: true, email: "example2gmail.com"};

// createUser(newUser);

// let createCourse = (): {name:string, price: number} => {
//     return{
//         name: 'React',
//         price: 100
//     }
// }


// type User = {
//     name: string,
//     email: string,
//     age: number,
//     occupation: string,
//     isActive: boolean,
// }

// let createUser2 = (user: User) : User => {
//     return user;
// }

// type bool = boolean; // type alias - can be used to rename types

// createUser2({name: 'John', email: "example@gmail.com", age: 30, occupation: 'Software Engineer', isActive: true})

type User = {
    readonly _id: string, // readonly property
    name: string,
    email: string,
    isActive: boolean,
    creditCard?: number, // optional property
}
let user: User = {_id: '123', name: 'John', email: "h@h.com", isActive: true};

user.email  = "example2gmail.com"; 
// user._id = "1234"; // error

type cardNumber = {
    cardNumber: number,
}

type cardDate = {
    cardDate: string,
}

type cardCVC = {
    cardCVC: number,
}

type cardDetails = cardNumber & cardDate & cardCVC; // intersection type

export {};