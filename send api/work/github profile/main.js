document.querySelector("#button").addEventListener("click", () => {
   const input = document.querySelector("#input").value;
   fetch(`https://api.github.com/users/${input}`)
      .then(response => response.json())
      .then(data => {
         const container = document.getElementById('information')
         container.innerHTML = `<img src="${data.avatar_url}"> <h2>${data.name}</h2> <p>${data.bio}</p>`
      })
})