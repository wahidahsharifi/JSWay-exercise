fetch(`https://api.openbrewerydb.org/v1/breweries/random?timestamp=${new Date().getTime()}`)
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    const brewery = data[0]; // The data returns an array with one brewery
    console.log(`Brewery Name: ${brewery.name}`);
    console.log(`City: ${brewery.city}`);
    console.log(`State: ${brewery.state}`);
    console.log(`Type: ${brewery.brewery_type}`);
    console.log(`Website: ${brewery.website_url}`);
    
    // Example: Injecting it into HTML
    document.getElementById('breweryInfo').innerHTML = `
      <h2>${brewery.name}</h2>
      <p><strong>City:</strong> ${brewery.city}</p>
      <p><strong>State:</strong> ${brewery.state}</p>
      <p><strong>Type:</strong> ${brewery.brewery_type}</p>
      <p><a href="${brewery.website_url}" target="_blank">Website</a></p>
    `;
  })
  .catch(error => console.error('Error fetching the brewery:', error));
