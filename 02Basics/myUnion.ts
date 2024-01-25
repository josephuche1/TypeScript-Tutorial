let score: number | string = 33;

score = 44;
score = "44";

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let joseph: User | Admin = {name: "Joseph", id: 1};

joseph = {username: "joseph", id: 2};

getDbId(1);
getDbId("1");

function getDbId(id: number | string) {
    // console.log(id)
    if (typeof id === "string") {
        return id.toUpperCase();
    } else{
        id++;
    }
}

const data : (number | string)[] = [] // union type for array

let pi: 3.14 = 3.14; // literal type

let seatAllocation: "aisle" | "middle" | "window"; // literal type

// seatAllocation = "aile"; // error