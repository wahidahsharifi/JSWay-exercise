document.getElementById('infos').innerHTML = `<ul id="ul"></ul>`
const ul = document.getElementById('ul')
const content = getComputedStyle(document.getElementById('content'))
const height = content.height
const width = content.width
ul.innerHTML += `<li>height: ${height}</li>`
ul.innerHTML += `<li>width: ${width}</li>`