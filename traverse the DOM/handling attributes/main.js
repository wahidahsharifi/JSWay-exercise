const links = document.querySelectorAll('li a')

function linkInfo() {
   console.log(links.length);
   console.log(links[0].href)
   for(let i = links.length - 1; i < links.length; i++) {
      console.log(links[i].href)
   }
};

linkInfo()