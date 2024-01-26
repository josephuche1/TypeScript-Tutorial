interface User {
    readonly dbId:number, // readonly means you can't change the value of the property
    email: string,
    userId: string | number,
    googleId?: string | number, // ? means optional
    // startTrial: () => string,
    startTrial(): string, // this is the same as the above line
    getCoupon: (couponname : string) => number, // can also be written as getCoupon(couponname : string) : number
}

const joseph : User = {
    dbId: 1,
    email: "example @gmail.com",
    userId: 1,
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (couponname) => {
        return 100;
    }
}

export {};