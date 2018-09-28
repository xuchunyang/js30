document.addEventListener('keypress', (event) => {
  const keyName = event.key
  console.log(`keypress event.  key: ${keyName}`)
})

document.addEventListener('keypress', playSound)

function playSound (event) {
  // 'a' -> 'A' -> 65
  const keyCode = event.key.toUpperCase().charCodeAt(0)
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  if (!audio) {
    return undefined
  } else {
    // 确保从头播放，否则快速点击同一个键会出现问题
    audio.currentTime = 0
    audio.play()
  }
  const div = document.querySelector(`div[data-key="${keyCode}"]`)
  div.classList.add('playing')
}

for (const div of document.querySelectorAll('div.key')) {
  div.addEventListener('transitionend', (event) => {
    div.classList.remove('playing')
  })
}
