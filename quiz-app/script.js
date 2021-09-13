const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const answerEl = document.querySelectorAll(".answer")
const question = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const btn = document.getElementById("submit")

let currentQuiz = 0
let score = 0

quizApp()

function quizApp() {
  deselected()
  const currentQuizData = quizData[currentQuiz]

  question.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}


function elSelected() {
  let answer = undefined

  answerEl.forEach(answ => {
    if (answ.checked) {
      answer = answ.id
    }
  })

  return answer

}

function deselected() {
  answerEl.forEach(answ => {
    answ.checked = false
  })
}
btn.addEventListener("click", () => {

  const answer = elSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      quizApp()
    } else {
      alert("Done")
    }

  }

})