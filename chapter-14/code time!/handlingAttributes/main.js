// const me = Array.from(document.querySelectorAll('a'))
// console.log(me.length)
// console.log(me[0].getAttribute('href'))
// console.log(me.getAttribute('href'))

// Show if an element has a class
const has = (id, someClass) => {
   // TODO: write the function code
   if (document.getElementById(id).classList.contains(someClass)) {
      console.log(true)
   }else{
      console.log(false)
   }
};

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass")  //Should show false
has("trumpet", "brass"); // Should show true
// has("contrabass", "chordophone"); // Should show an error message
