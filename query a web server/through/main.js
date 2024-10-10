fetch(
   "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json"
 )
   .then(response => response.json()) // Access and return response's JSON content
   .then(movies => {
     // Iterate on the movie array
     movies.forEach(movie => {
       // Display title of each movie
       console.log(movie.title);
     });
   })
   .catch(err => {
     console.error(err.message);
   });