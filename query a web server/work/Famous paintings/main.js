fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
   .then(response => response.json())
   .then(paintings => {
      const paintingList = document.getElementById('paintings');
     // Iterate on the painting array
     paintings.forEach(painting => {
       // Display name, year and artist of each painting
       paintingList.innerHTML += `<tr><td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td></tr>`
     });
   })