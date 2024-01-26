interface User {
    readonly dbId:number, // readonly means you can't change the value of the property
    email: string,
    userId: string | number,
    googleId?: string | number, // ? means optional
    // startTrial: () => string,
    startTrial(): string, // this is the same as the above line
    getCoupon: (couponname : string) => number, // can also be written as getCoupon(couponname : string) : number
}

interface User{ // reopens the interface and adds more properties
    githubToken: string,
}

interface Admin extends User{ // extends the User interface
    role: "admin" | "ta" | "learner",
}

// creating an object that implements the interface
const joseph : User = {
    dbId: 1,
    email: "example @gmail.com",
    userId: 1,
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (couponname) => {
        return 100;
    }, 
    githubToken: "1234",
}


export {};