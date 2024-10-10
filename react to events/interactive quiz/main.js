// List of questions (statement + answer)
const questions = [
   {
      statement: "2+2?",
      answer: "2+2 = 4",
   },
   {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492",
   },
   {
      statement:
         "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter",
   },
];

// question
const content = document.getElementById('content')
function createElement(c) {
   let question = document.createElement('div')
   question.classList.add(c)
   content.appendChild(question)
}
createElement('question')
createElement('answer')
function createQuestion(name) {
   for(i = 1; i < questions.length +1; i++) {
      let p = document.createElement(name)
      p.textContent = `question ${i}: `;
      p.classList.add('p')
      document.querySelector('.question').appendChild(p)
      
      let span = document.createElement('span')
      span.textContent = questions[i-1].statement
      span.classList.add('span')
      p.appendChild(span)
      
      let answer = document.createElement('p')
      answer.textContent = `bob`
      answer.classList.add('answerp')
      document.querySelector('.question').appendChild(answer)
      answer.addEventListener('click', () => {
         // answer.textContent = questions[i].answer
      })
   }
}
createQuestion('p')

// answer

function createAnswer() {
   for(i = 1; i < questions.length +1; i++) {
      let answer = document.createElement('p')
      answer.textContent = questions[i-1].answer
      answer.classList.add('answerp')
      document.querySelector('.answer').appendChild(answer)
   }
}