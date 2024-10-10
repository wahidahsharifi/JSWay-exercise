let start = document.getElementById('start')
let stop = document.getElementById('stop')
let ball = document.getElementById('ball')

start.addEventListener('click', () => {
   ball.style.animation = 'ball 2s linear infinite alternate'
})

stop.addEventListener('click', () => {
   ball.style.animationPlayState = 'paused'
})