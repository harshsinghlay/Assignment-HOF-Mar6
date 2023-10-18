
let USD = {
    Item1 : 1,
    Item2 : 2,
    Item3 : 6,
    Item4 : 7,
    Item5 : 4
}

console.log("Price in dollars");
console.log(USD);

let arr = Object.entries(USD);
let INR = new Map(arr);
for (const [key,value] of INR) {
    INR.set(key,value*80);
}


let newList = Object.fromEntries(INR);
console.log("Price in Rupees");
console.log(newList);
