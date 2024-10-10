fetch('https://thejsway-server.herokuapp.com/articles', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     title: title,
     content: content
   })
 })
 .then(response => {
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }
   return response.json(); // Attempt to parse JSON
 })
 .then(data => {
   document.getElementById('confirmation').innerHTML = `<p>${data.message}</p>`;
 })
 .catch(error => {
   console.error('Error:', error);
   document.getElementById('confirmation').innerHTML = `<p>There was an error: ${error.message}</p>`;
 });
 