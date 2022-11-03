import { questions } from "./data.js"

// 질문 화면의 각 요소를 찾아요!
const progressBarEl = document.querySelector('.progress .bar')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const answer1El = document.querySelector('.answer1')
const answer2El = document.querySelector('.answer2')

let currentNumber = 0 // 현재 질문 번호
let mbti = '' // MBTI 결과

// 화면에 질문을 랜더링하는 함수에요!
function renderQuestion() {
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number
  answer1El.innerHTML = question.answers[0].text
  answer2El.innerHTML = question.answers[1].text
  progressBarEl.style.width = (currentNumber + 1) * 10 + '%'
}
// 다음 질문으로 넘어가는 함수에요!
function nextQuestion(answerNumber) {
  if (currentNumber === 9) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti += question.answers[answerNumber].value
  currentNumber += 1
  renderQuestion()
}
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti
}

// '답변1' 혹은 '답변2'를 클릭했을 때 동작하는 코드에요!
answer1El.addEventListener('click', () => {
  nextQuestion(0)
})
answer2El.addEventListener('click', () => {
  nextQuestion(1)
})

// 첫번째 질문을 렌더링해요!
renderQuestion()