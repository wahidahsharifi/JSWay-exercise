const links = document.querySelectorAll('nav a');
links.forEach((link) => {
   link.addEventListener('click', (e) => {
      e.preventDefault();
      fetch(`https://swapi.dev/api/planets/${link.textContent}`)
      .then((response) => response.json())
      .then((data) => {
         const container = document.getElementById('information');
         container.innerHTML = `<h2>${data.name}</h2>
         <p><strong>Climate:</strong> ${data.climate}</p>
         <p><strong>Terrain:</strong> ${data.terrain}</p>
         <p><strong>Population:</strong> ${data.population}</p>`
      })
   })
})