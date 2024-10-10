const links = document.querySelectorAll('li a')

function linkInfo() {
   console.log(links.length);
   console.log(links[0].href)
   for(let i = links.length - 1; i < links.length; i++) {
      console.log(links[i].href)
   }
};

linkInfo()

// Show if an element has a class
const list = document.querySelectorAll('ul li')
const has = (id, someClass) => {
   for (const item of list) {
      if (item.hasAttribute('id') && item.hasAttribute('class')) {
         const elementId = item.getAttribute('id')
         const elementClass = item.getAttribute('class')

         if (elementId === id && elementClass.split(' ').includes(someClass)) {
            console.log(true)
            return true
         }
      } else {
         console.log(false)
      }
   }
};
 
 has("saxophone", "woodwind");     // Should show true
 has("saxophone", "brass");        // Should show false
 has("trumpet", "brass");          // Should show true
 has("contrabass", "chordophone"); // Should show an error message