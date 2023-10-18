

let input = document.getElementById("input");
let output = document.getElementById("output");
const reverseString = (str)=>{
       const arr = [...str];
       arr.reverse();
       const str2 = arr.join("");
       return str2;
}
btn.addEventListener("click",(e)=>{
       e.preventDefault();
       const str = input.value;
       console.log(str);
       output.innerHTML = "Reversed String = " + reverseString(str);
       output.style.color = "red"
})