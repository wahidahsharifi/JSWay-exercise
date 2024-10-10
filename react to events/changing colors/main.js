document.addEventListener("keyup", (e) => {
   const bob = document.querySelectorAll("h1 + *");
   const key = e.key.toLowerCase();
   let color;

   switch (key) {
      case "r":
         color = "red";
         break;
      case "y":
         color = "yellow";
         break;
      case "g":
         color = "green";
         break;
      case "b":
         color = "blue";
         break;
      case "d":
         color = "white";
         break;
   }

   if (color) {
      bob.forEach((one) => {
         one.style.backgroundColor = color;
      });
   }
});
