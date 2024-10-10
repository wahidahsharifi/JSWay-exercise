// Handle form data submission to the "/animals" route
app.post("index.html", upload.array(), (request, response) => {
   const name = request.body.name;
   const vote = request.body.strongest;
   response.send(`Hello ${name}, you voted: ${vote}`);
 });