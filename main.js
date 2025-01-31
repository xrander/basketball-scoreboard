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