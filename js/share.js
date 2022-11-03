const shareBtn = document.querySelector('.share')

shareBtn.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: '내 안에 숨어있는 직업캐 찾기!',
      text: '누구나 찰떡인 직업이 있어요! 내 안에 숨어있는 직업캐를 찾아보세요!',
      url: location.href,
    })
  } else {
    navigator.clipboard.writeText(location.href)
  }
})