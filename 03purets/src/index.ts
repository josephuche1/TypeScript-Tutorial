// class User {
//     email: string;
//     name: string;
//     //private proprerties are not accessible outside the class. any property that is not labeled is public by default.
//     private readonly city: string = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
//     constructor(email:string , name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// A better way to write the above code is to use access modifiers in the constructor parameters.
class User {
    
    protected _courseCount = 1;
    readonly city: string = ""; // You need to initialize the property or use a constructor. You can also make the property readonly.
    constructor(
        public email:string , 
        public name: string,
        private userId: string
        ) {

    }

    private deleteToken(){
        console.log("Deleting token");
    }

    get getEmail(): string{
        return this.email;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(count: number){
        if(count <= 1){
            throw new Error("Invalid course count");
        }
        this._courseCount = count;
    }
}

class subUser extends User{
    isFamily: boolean =  true;
    
    changeCourseCount(): void{
        this._courseCount = 5;
    }

}

const joseph = new User("example@gmail.com", "Joseph", "1234");
// joseph.city = "New York"; // Error: Cannot assign to 'city' because it is a read-only property.