let button = document.getElementById("button");
let p = document.getElementById("p");
let number = Number(document.getElementById("number").textContent);

button.addEventListener("click", () => {
   const decreaseCounter = () => {
      const counter = Number(counterElement.textContent);
      button.textContent = "stop";
      counterElement.textContent = counter + 1;
   };
   
   const counterElement = document.getElementById("number");
   const intervalId = setInterval(decreaseCounter, 1000);
});
