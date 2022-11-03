const results = [
  {
    title: '출근 시간은<br>내가 정해!',
    image: './images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요! 소속이 없어도,<br>벌이가 불안정해도 저는 지금이 좋아요!',
      '일에 대한 욕심이 많아요.<br>행복한 야근이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘해요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['프리랜서', '창업가'],
    ad: 'https://fastcampus.co.kr/search?keyword=%EC%B0%BD%EC%97%85'
  },
  {
    title: '프로직진러!<br>진행력갑',
    image: './images/result_character2.png',
    results: [
      '나는야 회사사람들 멘탈 지킴이!<br>언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸',
      '여러 사람들과 협업이 필요한 직무에 찰떡!',
      '진행력갑! 추진력갑!<br>빠른 속도로 동시에 여러 업무를 해결할 수 있어요.',
      '회사 행사나 크리스마스 이벤트,<br>회사사람들 생일까지 우리가 다 챙길게요'
    ],
    jobs: ['마케터', '기획자'],
    ad: 'https://fastcampus.co.kr/mktg_online_digitmktg'
  },
  {
    title: '우리 무기는<br>상상력!',
    image: './images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.',
      '가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)',
      '업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!'
    ],
    jobs: ['디자이너', '예술가'],
    ad: 'https://fastcampus.co.kr/dgn_online_designature'
  },
  {
    title: '인생은<br>한방!',
    image: './images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 경제와 사회 이슈에 관심이 매우매우 많아요.',
      '꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼거예요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['부동산<br>투자자', '주식<br>투자자'],
    ad: 'https://fastcampus.co.kr/category_online_finance'
  },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    image: './images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자서 더 잘해요.<br>솔로워커 최고!',
      '관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<<<< (현실)<br>가끔 이성에게 상처줄 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['개발자', '데이터분석가'],
    ad: 'https://fastcampus.co.kr/dev_online_fesignature'
  },
  {
    title: '인생 욜로지~<br>일단 놀자 ><',
    image: './images/result_character6.png',
    results: [
      '취미가 100개!<br>이것저것 다재다능해요~',
      '한가하냐구요?<br>원래 백수가 젤 바쁜거에요!',
      '결혼사진에 친구들이 다 들어갈 수 있을까요?',
      '가끔이지만, 갓생살기도 도전해요!'
    ],
    jobs: ['돈 많은 백수', '유튜버'],
    ad: 'https://fastcampus.co.kr/category_online_entrepreneurship'
  }
]

const mbtis = {
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

// 주소 쿼리스트링에서 mbti 값을 가져오기!
const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti] - 1]

const titleEl = document.querySelector('h1')
const imageEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.results .box')
const jobEls = document.querySelectorAll('.job')
const adEl = document.querySelector('.ad')

titleEl.innerHTML = result.title
imageEl.src = result.image
boxEls.forEach((boxEl, index) => {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach((jobEl, index) => {
  jobEl.innerHTML = result.jobs[index]
})
adEl.href = result.ad