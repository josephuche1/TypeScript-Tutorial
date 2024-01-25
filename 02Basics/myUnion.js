var score = 33;
score = 44;
score = "44";
var joseph = { name: "Joseph", id: 1 };
joseph = { username: "joseph", id: 2 };
getDbId(1);
getDbId("1");
function getDbId(id) {
    // console.log(id)
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    else {
        id++;
    }
}
var data = []; // union type for array
var pi = 3.14; // literal type
var seatAllocation; // literal type
// seatAllocation = "aile"; // error
