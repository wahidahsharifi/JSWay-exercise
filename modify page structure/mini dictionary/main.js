const words = [
   {
      term: "Procrastination",
      definition: "Avoidance of doing a task that needs to be accomplished",
   },
   {
      term: "Tautology",
      definition:
         "logical argument constructed in such a way that it is logically irrefutable",
   },
   {
      term: "Oxymoron",
      definition:
         "figure of speech that juxtaposes elements that appear to be contradictory",
   },
];

document.getElementById('content').innerHTML = "<dl id=\"descriptionList\"></dl>"
for (i = 0; i < words.length; i++) {
   document.getElementById('descriptionList').innerHTML += `<dt>${words[i].term}</dt><dd>${words[i].definition}</dd>`
}