fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
  .then(response => response.text()) // Access and return the text content
  .then(languages => {
    const languageList = document.getElementById('languageList'); // Get the <ul> element
    
    // Split the languages by semicolon, then loop through each language
    languages.split(';').forEach(language => {
      // Create a new <li> element
      const li = document.createElement('li');
      li.textContent = language; // Set the text content of the <li> to the language name
      languageList.appendChild(li); // Add the <li> to the <ul>
    });
  })
  .catch(error => console.error('Error fetching languages:', error)); // Error handling
