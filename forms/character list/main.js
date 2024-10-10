// Character list. Each house has a name and a code
const houses = [
   {
      code: "ST",
      name: "Stark",
   },
   {
      code: "LA",
      name: "Lannister",
   },
   {
      code: "BA",
      name: "Baratheon",
   },
   {
      code: "TA",
      name: "Targaryen",
   },
];

// Return an array of characters belonging to a house
const getCharacters = (houseCode) => {
   switch (houseCode) {
      case "ST":
         return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
         return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
         return ["Robert", "Stannis", "Renly"];
      case "TA":
         return ["Aerys", "Daenerys", "Viserys"];
      default:
         return []; // Empty array
   }
};

// my data
const dropDown = document.getElementById("house");

for (let i = 0; i < 3; i++) {
   const option = document.createElement("option");
   option.textContent = houses[i].name;
   option.setAttribute("value", houses[i].code);
   option.classList.add("option");
   dropDown.appendChild(option);
}

dropDown.addEventListener("change", (e) => {
   console.log(getCharacters(e.target.value));
   const li = document.createElement("li");
   li.textContent = getCharacters(e.target.value)
   document.getElementById("characters").appendChild(li)
});
