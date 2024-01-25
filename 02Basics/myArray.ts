const heroes: string[] = [];
// const heroPower: number[] = [];

const heroPower: Array<number> = []; // another way to declare an array

type User = {
    name: string,
    isActive: boolean,
}

const allUsers: User[] = [];

const MLModels: number[][] = [
    [255,255,255], [1,2,3], [4,5,6]
]; // Array of arrays


heroes.push("Ironman");
heroPower.push(100);

allUsers.push({name: 'John', isActive: true});