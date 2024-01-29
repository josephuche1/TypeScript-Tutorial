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