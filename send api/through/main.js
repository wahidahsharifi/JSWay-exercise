fetch('https://api.openbrewerydb.org/v1/breweries/random')
  .then(response => response.json())
  .then(data => {
    const brewery = data[0]; // Since it returns an array with one brewery
    console.log(`Brewery Name: ${brewery.name}`);
    console.log(`City: ${brewery.city}`);
    console.log(`State: ${brewery.state}`);
    console.log(`Type: ${brewery.brewery_type}`);
    // This is focused on the brewery, so you may want to find a specific beer API.
  })
  .catch(error => console.error('Error fetching brewery:', error));
