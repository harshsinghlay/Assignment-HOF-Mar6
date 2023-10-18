
const randomNumber = document.getElementById("randomNumber");
const counter = document.getElementById("counter");
let count = 3;
setInterval(() => {
    if (count > 0) {
        counter.innerHTML = "Random Number Generating in " + count + "seconds";
        count--;
    }
       else{
        randomNumber.innerHTML = "Random Number: "+ Math.floor(Math.random()*10000000);
        count = 3;
       }
     } , 1000);