// Handle form submission
document.querySelector("form").addEventListener("submit", (e) => {
   // Cancel default behavior of sending a synchronous POST request
   e.preventDefault();
   // Create a FormData object, passing the form as a parameter
   const formData = new FormData(e.target);
   // Send form data to the server with an asynchronous POST request
   fetch("server.js", {
      method: "POST",
      body: formData,
   })
      .then((response) => response.text())
      .then((result) => {
         document.getElementById("result").textContent = result;
      })
      .catch((err) => {
         console.error(err.message);
      });
});
