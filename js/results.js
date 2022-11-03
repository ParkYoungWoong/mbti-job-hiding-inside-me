import { results, mbtis } from "./data.js"

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