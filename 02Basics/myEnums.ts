const enum SeatChoice { // use const enum to avoid creating a new object in memory
    Window = "window", // you are assigning a value to the enum. default is 0
    Aisle = 3, // you can assign a number to the enum
    Middle, 
    Fourth
}

const hcSeat: SeatChoice = SeatChoice.Window;

export {};