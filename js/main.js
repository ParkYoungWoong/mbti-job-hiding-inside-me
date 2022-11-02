const questions = [
  {
    number: '01',
    question: '곧 크리스마스! 회사에서 크리스마스 파티 스텝을 모집한다는데?',
    answers: [
      { text: '파티스텝은 못하지ㅎ...<br>(그치만 파티는 재밌겠다 히히)', value: 'i' },
      { text: '재밌겠다!<br>○○한테 같이 지원하자고 해야지~', value: 'e' }
    ]
  },
  {
    number: '02',
    question: '해외 출장이 잡혔다!<br>전날 잠 들기전 나는?',
    answers: [
      { text: '짐 다 챙겼고 일찍 자야지~', value: 's' },
      { text: '다 챙겼겠지?<br>여분의 옷을 좀 더 챙길까..(뒤척뒤척)', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '친했던 동기가<br>퇴사를?',
    answers: [
      { text: '일하면서 많이 힘들었나?<br>내가 좀 더 챙겨줄껄.', value: 'f' },
      { text: '오 이직하나?<br>퇴사하고 뭐하냐고 물어봐야지.', value: 't' }
    ]
  },
  {
    number: '04',
    question: '대규모 프로젝트를 맡게되어<br>떨리는 마음에 처음 시작한 건?',
    answers: [
      { text: '큰 프로젝트인만큼 계획이 중요해!<br>목적과 목표 먼저 정리해봐야지!', value: 'j' },
      { text: '당장 미팅잡고<br>팀원이랑 이야기하면 되겠지?', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '첫 입사날!<br>나의 첫 인사말은?',
    answers: [
      { text: '안녕하세요ㅎㅎ 잘 부탁드려요~<br>(부끄러워 >///<)', value: '' },
      { text: '안녕하세요! 저는 자취하고 있고요,<br>MBTI는 ~~ (빨리 친해져야지 >0<) ', value: '' }
    ]
  },
  {
    number: '06',
    question: '날씨가 좋아~<br>유난히 일하기 싫은 날엔?',
    answers: [
      { text: '날 좋은데 일이라니.<br>그런데 어쩌겠어? 일 해야지!', value: '' },
      { text: '이럴 때 일을 할 순 없어!!<br>반차 써버릴꺼야!', value: '' }
    ]
  },
  {
    number: '07',
    question: '상사한테 한소리 들었다.<br>나는?',
    answers: [
      { text: '더 열심히해서 잘할 수 있다는<br>사람이란 걸 보여주자!', value: '' },
      { text: '나, 재능이 없나?<br>퇴사각..', value: '' }
    ]
  },
  {
    number: '08',
    question: '일을 하는 데 너무 어려워ㅠㅠ<br>어떻게 해결하지?',
    answers: [
      { text: '시간을 더 끌 순 없지.<br>팀장님한테 당장 물어봐야지!', value: '' },
      { text: '어떡하지.. 야근을 하더라도<br>방법을 더 찾아봐야겠다. ', value: '' }
    ]
  },
  {
    number: '09',
    question: '좋은 곳에서 이직 제안이 왔다!<br>나의 선택은?',
    answers: [
      { text: '인생은 도전이야!<br>좋은 기회라고 생각하고 시작해볼래!', value: '' },
      { text: '지금 회사도 좋은데..<br>위험 부담을 안고 이직하는 게 맞을까?', value: '' }
    ]
  },
  {
    number: '10',
    question: '회사에서 진급 대상이 되었다.<br>나의 마음은?',
    answers: [
      { text: '드디어 회사가 날 알아주는구나!<br>더 열심히 해야지!', value: '' },
      { text: '진급하면 월급도 오르겠지?<br>월급 오르면 ○○ 사야지~ (상상의 나래~)', value: '' }
    ]
  },
]
const results = {
  entj: 1,
  entp: 1,
  estp: 1,
  esfp: 2,
  esfj: 2,
  enfj: 2,
  infp: 3,
  isfp: 3,
  isfj: 3,
  infj: 3,
  estj: 4,
  istp: 4,
  intj: 5,
  intp: 5,
  istj: 5,
  enfp: 6
}

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
  location.href = '/result' + results[mbti] + '.html'
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