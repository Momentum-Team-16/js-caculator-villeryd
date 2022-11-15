let container = document.querySelector("#main");
let button = document.querySelector("button");
let footer = document.querySelector("footer");
let display = document.querySelector(".display");
let clear = document.querySelector(".clear")
let equal = document.querySelector(".equal")

console.log(`The container node: ${container}`);




let squares = document.querySelectorAll(".square");
console.log("squares: ", squares);

for (let square of squares) {
  square.addEventListener("click", function (event) {

   
    console.log(event.target.innerText);
    display.innerText += `${event.target.innerText}`;

    equal.addEventListener('click', function (event) {

        let sum;
        console.log(eval(display.innerText));
        sum = eval(display.innerText);
        display.innerText = sum;
    });

    clear.addEventListener('click', function (event) {
        console.log(event.target.innerText);
        display.innerText = null;
    });
    
  
    
  });
}
