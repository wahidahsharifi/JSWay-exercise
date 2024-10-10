document.addEventListener("DOMContentLoaded", () => {
   const ul = document.getElementById("desserts");
   document.getElementById("addButton").addEventListener("click", () => {
      const value = prompt("what the value you want to be");
      let li = document.createElement("li");
      li.textContent = value;
      li.addEventListener('click', () => {
         let newValue = prompt("Enter the new name of the dessert:", li.textContent)
         if(newValue) {
            li.textContent = newValue;
         }
      })
      ul.appendChild(li);
   });
});