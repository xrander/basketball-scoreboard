let homeScore = document.getElementById("homescore")
let awayScore = document.getElementById("awayscore")

let homeScoreValue = 0
let awayScoreValue = 0

function homeadd1() {
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}

function homeadd2() {
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}

function homeadd3() {
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}

function guestadd1() {
    awayScoreValue += 1
    awayScore.textContent = awayScoreValue
}

function guestadd2() {
    awayScoreValue += 2
    awayScore.textContent = awayScoreValue
}

function guestadd3() {
    awayScoreValue += 3
    awayScore.textContent = awayScoreValue
}

let newGame = document.getElementById("start-new")

function newgame() {
    homeScoreValue = 0
    homeScore.textContent = homeScoreValue
    
    awayScoreValue = 0
    awayScore.textContent = awayScoreValue
}

let timer = document.getElementById("timer")
let countdownInterval
let isPaused = false
let totalTime = 12 * 60 

function startgame() {
    clearInterval(countdownInterval)
    totalTime = 12 * 60 // Reset to 12 minutes in seconds

    countdownInterval = setInterval(updateTimer, 1000)
}

function updateTimer() {
    let minutes = Math.floor(totalTime / 60)
    let seconds = totalTime % 60

    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    if (totalTime <= 0) {
        clearInterval(countdownInterval)
    } else {
        totalTime -= 1
    }
}

function pauseplay() {
    if (isPaused) {
        countdownInterval = setInterval(updateTimer, 1000)
    } else {
        clearInterval(countdownInterval)
    }
    isPaused = !isPaused
}
