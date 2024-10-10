// TODO: write the countElements() function here
const countElements = (element) => {
   const me = document.querySelectorAll(element)
};
console.log(countElements("p")); // Should show 4
console.log(countElements(".adjective")); // Should show 3
console.log(countElements("p .adjective")); // Should show 3
console.log(countElements("p > .adjective")); // Should show 2
