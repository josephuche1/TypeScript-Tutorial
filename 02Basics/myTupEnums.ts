// const user: (string | number)[] = ['Rahul', 'Raj', 'Rohan', 1, 2, 3];

let user: [string, number, boolean]; // tuple type - the order of the types matter

user = ["Rahul", 1, true];

let rgb: [number, number, number] = [255, 0, 0];

type User2 = [number, string];
let user1: User2 = [1, "Rahul"];

// user1[0] = 1;