// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

const content = document.getElementById('content')

for (i = 0; i < newspapers.length; i++) {
   content.innerHTML += `<a href="${newspapers[i]}">${newspapers[i]}</a>`
}