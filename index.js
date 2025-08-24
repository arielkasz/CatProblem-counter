let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let score = 0

function victoryHome() {
    score += 1
    scoreHome.textContent = score
}

function defeatHome() {
    score -= 1
    scoreHome.textContent = score
}

function divaHome() {
    score += 2
    scoreHome.textContent = score
}
function victoryAway() {
    score += 1
    scoreGuest.textContent = score
}

function defeatAway() {
    score -= 1
    scoreGuest.textContent = score
}

function divaAway() {
    score += 2
    scoreGuest.textContent = score
}